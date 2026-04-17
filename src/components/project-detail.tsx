"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { MagneticLink } from "@/components/magnetic-link";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="pb-10 pt-3 md:pb-12">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/35">
            Purpose
          </p>
          <p className="max-w-[920px] text-[clamp(1.2rem,3vw,3rem)] leading-[1.06] tracking-[-0.04em] text-white">
            {project.purpose}
          </p>
        </div>

        <div className="lg:pt-1">
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/35">
            My Role
          </p>

          <ul className="space-y-2.5 text-[15px] text-white/80 md:text-base">
            {project.role.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {item}
              </li>
            ))}
          </ul>

          {project.link ? (
            <div className="mt-6">
              <MagneticLink
                href={project.link}
                label="Visit website"
                className="inline-flex items-center rounded-full border border-white bg-white px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-black transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
        {project.screenshots.map((image, index) => (
          <div
            key={index}
className="group relative overflow-hidden border border-white/10 bg-white/[0.03] aspect-[4/3]"          >
<Image
  src={image}
  alt={`${project.title} screenshot ${index + 1}`}
  fill
  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
/>
          </div>
        ))}
      </div>
    </div>
  );
}
