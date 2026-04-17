"use client";

import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.15,
      }}
    >
      {children}
    </ReactLenis>
  );
}