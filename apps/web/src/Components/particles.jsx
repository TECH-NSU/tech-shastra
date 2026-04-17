import { useEffect, useRef } from "react";

export default function SkyParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 🔥 Create layered particles (depth + speed variation)
    const createParticles = () => {
      particles = [];

      // 🔹 Fast small particles (wind dust)
      for (let i = 0; i < 500; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.3,
          speedY: Math.random() * 3 + 1.5,
          speedX: Math.random() * 1 - 0.5,
          opacity: Math.random(),
        });
      }

      // 🔹 Medium particles
      for (let i = 0; i < 220; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          opacity: Math.random(),
        });
      }

      // 🔹 Slow big particles (depth)
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedY: Math.random() * 0.5 + 0.1,
          speedX: Math.random() * 0.2 - 0.1,
          opacity: Math.random(),
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ✨ Glow effect
      ctx.shadowBlur = 8;
      ctx.shadowColor = "white";

      particles.forEach((p) => {
        // Movement
        p.y += p.speedY;

        // 🌬️ Wind drift (natural motion)
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;

        // Reset particle when it leaves screen
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
