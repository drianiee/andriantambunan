"use client";

import { useRef } from "react";
import gsap from "gsap";

export function MagneticButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const wrapRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!wrapRef.current || !textRef.current) return;

    const rect = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(wrapRef.current, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      x: x * 0.08,
      y: y * 0.08,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!wrapRef.current || !textRef.current) return;

    gsap.to([wrapRef.current, textRef.current], {
      x: 0,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  return (
    <a
      ref={wrapRef}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex rounded-full border border-white/12 px-4 py-2 text-sm uppercase tracking-[0.04em] text-white/75 transition hover:text-white"
    >
      <span ref={textRef}>{label}</span>
    </a>
  );
}