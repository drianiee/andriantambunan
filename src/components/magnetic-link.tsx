"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

type MagneticLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function MagneticLink({
  href,
  label,
  className = "",
}: MagneticLinkProps) {
  const wrapRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!wrapRef.current || !innerRef.current) return;

    const rect = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(wrapRef.current, {
      x: x * 0.14,
      y: y * 0.14,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(innerRef.current, {
      x: x * 0.06,
      y: y * 0.06,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!wrapRef.current || !innerRef.current) return;

    gsap.to([wrapRef.current, innerRef.current], {
      x: 0,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <a
      ref={wrapRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      <span
        ref={innerRef}
        className="inline-flex items-center gap-2 whitespace-nowrap"
      >
        <span>{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
      </span>
    </a>
  );
}