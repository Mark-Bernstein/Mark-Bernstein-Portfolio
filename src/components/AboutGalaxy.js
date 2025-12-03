import React, { useEffect, useRef } from "react";

const AboutGalaxy = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = document.body.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    const center = { x: width / 2, y: height / 2 };

    // Max orbit radius around mouse
    const maxOrbit = 150;

    const createStar = () => ({
      radius: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.02 + 0.002,
      angle: Math.random() * Math.PI * 2,
      orbitRadius: Math.random() * maxOrbit,
      color: `hsl(${Math.random() * 360}, 80%, 70%)`,
      z: Math.random() * 1.5 + 0.5,
    });

    const stars = Array.from({ length: 50 }, createStar);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly follow mouse
      center.x += (mouse.x - center.x) * 0.01;
      center.y += (mouse.y - center.y) * 0.01;

      // Galaxy glow
      const gradient = ctx.createRadialGradient(
        center.x,
        center.y,
        0,
        center.x,
        center.y,
        maxOrbit
      );
      gradient.addColorStop(0, "rgba(69, 0, 81, 1)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.angle += star.speed * star.z;

        const x3D = star.orbitRadius * Math.cos(star.angle) * star.z;
        const y3D = star.orbitRadius * Math.sin(star.angle) * star.z;
        const size = star.radius * star.z;

        ctx.beginPath();
        ctx.arc(center.x + x3D, center.y + y3D, size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = document.body.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
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
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default AboutGalaxy;
