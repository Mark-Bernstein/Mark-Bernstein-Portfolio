import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const handleResize = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    };
    window.addEventListener("resize", handleResize);

    const binaryCharacters = ["0", "1"];
    const columnSpacing = 20;
    const numberOfColumns = Math.floor(canvasWidth / columnSpacing);

    // Limit particle density for performance
    const maxParticles = Math.min(1000, numberOfColumns * 25);

    const mousePosition = { x: null, y: null };
    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Precompute font sizes
    const fontSizes = [8, 10, 12, 14, 16, 24];

    const particles = Array.from({ length: maxParticles }, (_, i) => {
      const columnX = (i % numberOfColumns) * columnSpacing;
      const startY = Math.random() * -canvasHeight;
      const depth = Math.random();
      const speed =
        Math.random() < 0.5 ? 5 + Math.random() * 20 : 1 + Math.random() * 0.5;

      return {
        x: columnX,
        y: startY,
        depth,
        speed,
        character: binaryCharacters[Math.floor(Math.random() * 2)],
        depthIndex: Math.floor(depth * fontSizes.length),
      };
    });

    let animationId = null;
    let energyPulse = 0;

    const renderMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // -----------------------------------------------------
      // 🔥 DRAW ENERGY ORB AROUND MOUSE
      // -----------------------------------------------------
      if (mousePosition.x !== null && mousePosition.y !== null) {
        // Pulsing effect
        energyPulse += 0.05;
        const baseRadius = 90; // main radius
        const pulseRadius = 10 * Math.sin(energyPulse);
        const orbRadius = baseRadius + pulseRadius;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          mousePosition.x,
          mousePosition.y,
          orbRadius * 0.2,
          mousePosition.x,
          mousePosition.y,
          orbRadius
        );

        gradient.addColorStop(0, "rgba(0, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(128, 0, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 255, 0, 0.7)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(mousePosition.x, mousePosition.y, orbRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 255, 255, 0.6)";
        ctx.arc(mousePosition.x, mousePosition.y, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      // -----------------------------------------------------
      // 🔢 DRAW MATRIX PARTICLES
      // -----------------------------------------------------
      particles.forEach((p) => {
        const sizeScale = 1 + 0.5 * p.depth;
        const alpha = 0.5 + 0.5 * p.depth;

        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.font = `${fontSizes[p.depthIndex] * sizeScale}px monospace`;

        let drawX = p.x;
        let drawY = p.y;

        // Repulsion from energy orb
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = drawX - mousePosition.x;
          const dy = drawY - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const force = (120 - distance) * 0.35;
            drawX += (dx / distance) * force;
            drawY += (dy / distance) * force;
          }
        }

        ctx.fillText(p.character, drawX, drawY);

        // Movement
        p.y += p.speed;

        if (p.y > canvasHeight) {
          p.y = Math.random() * -100;
          p.depth = Math.random();
          p.speed =
            Math.random() < 0.2
              ? 5 + Math.random() * 10
              : 0.5 + Math.random() * 2;
          p.character = binaryCharacters[Math.floor(Math.random() * 2)];
          p.depthIndex = Math.floor(p.depth * fontSizes.length);
        }
      });

      animationId = requestAnimationFrame(renderMatrix);
    };

    renderMatrix();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default MatrixBackground;
