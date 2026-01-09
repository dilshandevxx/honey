"use client";

import { useEffect, useRef } from "react";

interface StarWarpProps {
  speed?: number; // 0 to 100
  isWarping?: boolean;
  className?: string;
}

export default function StarWarp({ speed = 2, isWarping = false, className }: StarWarpProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use a ref to track the *current* visual speed for interpolation
  const currentVisualSpeedRef = useRef(speed);
  
  // The target speed we want to reach
  const targetSpeedRef = useRef(speed);
  const isWarpingRef = useRef(isWarping);

  // Update refs when props change
  useEffect(() => {
    targetSpeedRef.current = speed;
    isWarpingRef.current = isWarping;
  }, [speed, isWarping]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; z: number; px: number; py: number }[] = [];
    const numStars = 800; // Increased star count for better warp effect
    
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
      
      // Smoothly interpolate current speed towards target speed
      // Adjust the 0.05 factor to change how "heavy" the acceleration feels
      currentVisualSpeedRef.current += (targetSpeedRef.current - currentVisualSpeedRef.current) * 0.05;
      
      const currentSpeed = currentVisualSpeedRef.current;
      const currentIsWarping = isWarpingRef.current;
      
      // Clear canvas with trail effect if warping
      ctx.fillStyle = currentIsWarping ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 1)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Base move speed + warp multiplier
      const starSpeed = currentIsWarping ? currentSpeed * 2 : currentSpeed; 

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
          // Size scales with speed and proximity
          const size = (1 - star.z / canvas.width) * (currentIsWarping ? 1 + (currentSpeed/10) : 2);
          const brightness = (1 - star.z / canvas.width);
          
          if (currentIsWarping || currentSpeed > 5) {
            // Draw warp lines (streaks)
            ctx.beginPath();
            ctx.moveTo(px, py);
            
            // Streak length based on speed
            const prevZ = star.z + (starSpeed * 2); 
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
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className || ""}`}
    />
  );
}
