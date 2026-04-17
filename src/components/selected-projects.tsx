"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project-row";

export function SelectedProjects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="border-t border-white/15 px-5 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 md:mb-8">
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/40">
            Selected Work
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,4rem)] leading-[0.95] tracking-[-0.05em]">
            Selected Projects
          </h2>
        </div>

        <div className="border-t border-white/20">
          <div className="grid grid-cols-[1.8fr_1fr_1fr_70px] gap-3 border-b border-white/15 py-3 text-[10px] uppercase tracking-[0.14em] text-white/35 md:grid-cols-[1.8fr_1fr_1fr_80px] md:gap-4 md:text-[11px]">
            <p>Project</p>
            <p>Category</p>
            <p>Client</p>
            <p className="pr-2 md:pr-3 text-right">Year</p>{" "}
          </div>

          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
