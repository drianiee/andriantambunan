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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:pt-1">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/35">
              My Role
            </p>

            <ul className="space-y-2.5 text-[15px] text-white/80 md:text-base">
              {project.role.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/35">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] text-white/85"
                >
                  {stack.icon ? (
                    <Image
                      src={stack.icon}
                      alt={stack.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  ) : null}
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          </div>

          {project.link ? (
            <div className="sm:col-span-2">
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
            className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.03] p-3"
          >
            <Image
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}