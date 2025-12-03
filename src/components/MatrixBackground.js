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

    // Precompute font sizes for different depths
    const fontSizes = [8, 12, 16, 20];

    const particles = Array.from({ length: maxParticles }, (_, i) => {
      const columnX = (i % numberOfColumns) * columnSpacing;
      const startY = Math.random() * -canvasHeight;
      const depth = Math.random();
      const speed =
        Math.random() < 0.5 ? 5 + Math.random() * 20 : 1 + Math.random() * 0.5;
      const character = binaryCharacters[Math.floor(Math.random() * 2)];
      const depthIndex = Math.floor(depth * fontSizes.length);
      return { x: columnX, y: startY, depth, speed, character, depthIndex };
    });

    let animationId;

    const renderMatrix = () => {
      // Semi-transparent background for trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((particle) => {
        // Determine size and alpha based on depth
        const sizeScale = 1 + 0.5 * particle.depth;
        const alpha = Math.min(1, 0.5 + 0.5 * particle.depth);
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
        ctx.font = `${fontSizes[particle.depthIndex] * sizeScale}px monospace`;

        let drawX = particle.x;
        let drawY = particle.y;

        // Mouse repulsion - only if close
        if (
          mousePosition.x !== null &&
          mousePosition.y !== null &&
          Math.abs(drawX - mousePosition.x) < 100 &&
          Math.abs(drawY - mousePosition.y) < 100
        ) {
          const dx = drawX - mousePosition.x;
          const dy = drawY - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const repulsionForce = (300 - distance) / 2;
            drawX += (dx / distance) * repulsionForce;
            drawY += (dy / distance) * repulsionForce;
          }
        }

        ctx.fillText(particle.character, drawX, drawY);

        // Move particle
        particle.y += particle.speed;

        // Reset if out of view
        if (particle.y > canvasHeight) {
          particle.y = Math.random() * -100;
          particle.depth = Math.random();
          particle.speed =
            Math.random() < 0.2
              ? 5 + Math.random() * 10
              : 0.5 + Math.random() * 2;
          particle.character = binaryCharacters[Math.floor(Math.random() * 2)];
          particle.depthIndex = Math.floor(particle.depth * fontSizes.length);
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
