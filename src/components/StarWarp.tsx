"use client";

import { useEffect, useRef } from "react";

interface StarWarpProps {
  speed?: number; // 0 to 100
  isWarping?: boolean;
}

export default function StarWarp({ speed = 2, isWarping = false }: StarWarpProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const speedRef = useRef(speed);
  const isWarpingRef = useRef(isWarping);

  // Update refs when props change
  useEffect(() => {
    speedRef.current = speed;
    isWarpingRef.current = isWarping;
  }, [speed, isWarping]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; px: number; py: number }[] = [];
    const numStars = 500;
    
    // Initialize stars
    const initStars = (width: number, height: number) => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width,
          px: 0,
          py: 0
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const render = () => {
      if (!ctx || !canvas) return;
      
      const currentSpeed = speedRef.current;
      const currentIsWarping = isWarpingRef.current;
      
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 1)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Ensure we fill the screen with stars
      const starSpeed = currentIsWarping ? currentSpeed * 5 : currentSpeed; 

      stars.forEach((star) => {
        // Update star position
        star.z -= starSpeed;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.px = 0;
          star.py = 0;
        }

        // Project star 3D position to 2D
        const k = 128.0 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / canvas.width) * (currentIsWarping ? 3 : 2);
          const brightness = (1 - star.z / canvas.width);
          
          if (currentIsWarping && star.px !== 0) {
            // Draw warp lines
            ctx.beginPath();
            ctx.moveTo(px, py);
            
            // Calculate previous frame pos approx
            const prevZ = star.z + starSpeed; 
            const kPrev = 128.0 / prevZ;
            const prevPx = star.x * kPrev + cx;
            const prevPy = star.y * kPrev + cy;
            
            ctx.lineTo(prevPx, prevPy);
            ctx.strokeStyle = `rgba(255, 255, 255, ${brightness})`;
            ctx.lineWidth = size;
            ctx.stroke();
          } else {
             // Draw dots
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
            ctx.fill();
          }
        }
        
        star.px = px;
        star.py = py;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array, only runs once on mount

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
