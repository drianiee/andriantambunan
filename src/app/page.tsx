import { Hero } from "@/components/hero";
import { SelectedProjects } from "@/components/selected-projects";
import { SiteNavbar } from "@/components/site-navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNavbar />
      <Hero />
      <SelectedProjects />

      <section
        id="contact"
        className="border-t border-white/15 px-5 py-24 md:px-8"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[900px]">
            <p className="mb-4 text-[12px] uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>
            <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[0.95] tracking-[-0.06em]">
              Let&apos;s build something clean, premium, and memorable.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href="mailto:andriantambunan2752@gmail.com"
              className="text-lg text-white/80 transition hover:text-white"
            >
              andriantambunan2752@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/andriantambunan/"
              target="_blank"
              rel="noreferrer"
              className="text-lg text-white/50 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}