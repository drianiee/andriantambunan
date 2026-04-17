"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Minus, Plus } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectDetail } from "@/components/project-detail";

export function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const categoryRef = useRef<HTMLParagraphElement>(null);
  const clientRef = useRef<HTMLParagraphElement>(null);
  const yearRef = useRef<HTMLParagraphElement>(null);
  const iconWrapRef = useRef<HTMLDivElement>(null);

  const contentWrapRef = useRef<HTMLDivElement>(null);
  const contentInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentWrapRef.current || !contentInnerRef.current) return;

    const wrap = contentWrapRef.current;
    const inner = contentInnerRef.current;

    if (isOpen) {
      gsap.killTweensOf(wrap);
      gsap.set(wrap, { height: "auto" });
      const fullHeight = wrap.offsetHeight;

      gsap.set(wrap, { height: 0, opacity: 0 });
      gsap.to(wrap, {
        height: fullHeight,
        opacity: 1,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(wrap, { height: "auto" });
        },
      });

      gsap.fromTo(
        inner.children,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.45,
          ease: "power3.out",
          delay: 0.04,
        },
      );
    } else {
      gsap.killTweensOf(wrap);
      gsap.to(wrap, {
        height: 0,
        opacity: 0,
        duration: 0.38,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    gsap.killTweensOf([
      overlayRef.current,
      contentRef.current,
      titleRef.current,
      categoryRef.current,
      clientRef.current,
      yearRef.current,
      iconWrapRef.current,
    ]);

    gsap.to(overlayRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(contentRef.current, {
      y: -2,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(titleRef.current, {
      x: 6,
      color: "#000000",
      duration: 0.36,
      ease: "power3.out",
    });

    gsap.to([categoryRef.current, clientRef.current, yearRef.current], {
      color: "rgba(0,0,0,0.7)",
      duration: 0.32,
      ease: "power3.out",
      stagger: 0.02,
    });

    gsap.to(iconWrapRef.current, {
      rotation: 90,
      x: 3,
      color: "#000000",
      duration: 0.36,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf([
      overlayRef.current,
      contentRef.current,
      titleRef.current,
      categoryRef.current,
      clientRef.current,
      yearRef.current,
      iconWrapRef.current,
    ]);

    gsap.to(overlayRef.current, {
      opacity: 0,
      y: 6,
      duration: 0.34,
      ease: "power3.out",
    });

    gsap.to(contentRef.current, {
      y: 0,
      duration: 0.34,
      ease: "power3.out",
    });

    gsap.to(titleRef.current, {
      x: 0,
      color: "#ffffff",
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to([categoryRef.current, clientRef.current, yearRef.current], {
      color: "rgba(255,255,255,0.68)",
      duration: 0.28,
      ease: "power3.out",
      stagger: 0.015,
    });

    gsap.to(iconWrapRef.current, {
      rotation: 0,
      x: 0,
      color: isOpen ? "#ffffff" : "rgba(255,255,255,0.45)",
      duration: 0.32,
      ease: "power3.out",
    });
  };

  return (
    <div className="border-b border-white/15">
      <button
        onClick={onToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-expanded={isOpen}
        className="relative w-full overflow-hidden text-left"
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 z-0 bg-white opacity-0"
          style={{ transform: "translateY(6px)" }}
        />

        <div
          ref={contentRef}
          className="relative z-10 grid grid-cols-[1.8fr_1fr_1fr_70px] gap-3 py-3 md:grid-cols-[1.8fr_1fr_1fr_80px] md:gap-4 md:py-3.5"
        >
          <div className="flex min-w-0 items-center gap-2.5 overflow-hidden">
            <div
              ref={iconWrapRef}
              className="flex h-4 w-4 shrink-0 items-center justify-center text-white/45"
            >
              {isOpen ? (
                <Minus className="h-3.5 w-3.5" />
              ) : (
                <Plus className="h-3.5 w-3.5" />
              )}
            </div>

            <span
              ref={titleRef}
              className="block truncate text-[15px] leading-[1.15] tracking-[-0.03em] text-white md:text-[17px]"
            >
              {project.title}
            </span>
          </div>

          <p
            ref={categoryRef}
            className="truncate text-[12px] text-white/70 md:text-[13px]"
          >
            {project.category}
          </p>

          <p
            ref={clientRef}
            className="truncate text-[12px] text-white/70 md:text-[13px]"
          >
            {project.client}
          </p>

          <p
            ref={yearRef}
            className="pr-2 md:pr-3 text-right text-[12px] text-white/70 md:text-[13px]"
          >
            {project.year}
          </p>
        </div>
      </button>

      <div
        ref={contentWrapRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div ref={contentInnerRef}>
          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  );
}
