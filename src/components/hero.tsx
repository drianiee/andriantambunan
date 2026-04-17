export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-5 pt-24 md:px-8"
    >
      <div className="max-w-[1200px] text-center">
        <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.07em]">
          Andrian Tambunan
        </h1>
        <h2 className="mt-2 text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em] text-white/85">
          Frontend Developer
        </h2>
        <h2 className="text-[clamp(2.6rem,6vw,6rem)] leading-[0.95] tracking-[-0.07em] text-white/45">
          & Web Designer
        </h2>

        <p className="mx-auto mt-8 max-w-[760px] text-base leading-8 text-white/55 md:text-lg">
          I build modern digital experiences with a strong eye for layout,
          interaction, and visual clarity.
        </p>
      </div>
    </section>
  );
}