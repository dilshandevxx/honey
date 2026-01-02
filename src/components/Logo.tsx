import React from "react";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric 'N' Shape */}
      <path
        d="M6 19L6 5L18 19L18 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Red Accent Node (Top Left) */}
      <rect x="4.5" y="3.5" width="3" height="3" fill="#FF3333" />
      
      {/* Red Accent Node (Bottom Right) */}
      <rect x="16.5" y="17.5" width="3" height="3" fill="#FF3333" />
    </svg>
  );
}
