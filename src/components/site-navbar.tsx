"use client";

export function SiteNavbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const target = document.querySelector<HTMLElement>(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-8">
        <button
          onClick={(e) => handleScroll(e, "#home")}
          className="text-sm uppercase tracking-[0.04em] text-white"
        >
          Andrian Tambunan
        </button>

        <nav className="flex items-center gap-2 md:gap-3">
          <button
            onClick={(e) => handleScroll(e, "#projects")}
            className="inline-flex rounded-full border border-white/12 px-4 py-2 text-sm uppercase tracking-[0.04em] text-white/75 transition hover:text-white"
          >
            Projects
          </button>

          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="inline-flex rounded-full border border-white/12 px-4 py-2 text-sm uppercase tracking-[0.04em] text-white/75 transition hover:text-white"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}