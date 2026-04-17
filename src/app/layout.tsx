import "./globals.css";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { LenisProvider } from "@/components/lenis-provider";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Andrian Tambunan",
  description: "Frontend Developer & Web Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}