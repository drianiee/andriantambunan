"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const enterInteractive = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 2.2,
        opacity: 1,
        duration: 0.28,
        ease: "power3.out",
      });
    };

    const leaveInteractive = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 0.9,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll("a, button");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive);
      el.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enterInteractive);
        el.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/10 mix-blend-difference"
    />
  );
}