export type ProjectTechStack = {
  name: string;
  icon?: string;
};

export type Project = {
  title: string;
  category: string;
  client: string;
  year: string;
  purpose: string;
  role: string[];
  techStack: ProjectTechStack[];
  link?: string;
  screenshots: string[];
};

export const projects: Project[] = [
  {
    title: "Kophi",
    category: "Brand Website",
    client: "Kophi Coffee",
    year: "2026",
    purpose:
      "A premium coffee brand website focused on aesthetic layout and GSAP animation.",
    role: ["Frontend Developer", "Web Designer", "GSAP Animation"],
    techStack: [
      { name: "Next.js", icon: "/projects/logos/nextjs.svg" },
      { name: "GSAP", icon: "/projects/logos/gsap.png" },
    ],
    link: "https://kophi.vercel.app/",
    screenshots: [
      "/projects/kophi-1.png",
      "/projects/kophi-2.png",
      "/projects/kophi-3.png",
    ],
  },

  {
    title: "Harbour Eight",
    category: "Luxury Residence",
    client: "Harbour Eight",
    year: "2026",
    purpose:
      "Luxury apartment website focusing on elegant presentation and spatial layout.",
    role: ["Frontend Developer", "UI Design"],
    techStack: [
      { name: "Next.js", icon: "/projects/logos/nextjs.svg" },
      { name: "GSAP", icon: "/projects/logos/gsap.png" },
    ],
    link: "https://harbour-eight-pi.vercel.app/",
    screenshots: [
      "/projects/harbour-1.png",
      "/projects/harbour-2.png",
      "/projects/harbour-3.png",
    ],
  },

  {
    title: "Synergy Hospital System",
    category: "Healthcare System",
    client: "RSUD Syarifah Ambami Rato Ebu",
    year: "2025",
    purpose:
      "A web-based clinical information system used daily by doctors and nurses to manage patient care workflows including diagnosis, laboratory, pharmacy, and patient records.",
    role: [
      "Frontend Developer",
      "UI/UX Collaboration with Medical Staff",
      "Clinical Workflow System",
    ],
    techStack: [
      { name: "React.js", icon: "/projects/logos/react.svg" },
      { name: "Tailwind CSS", icon: "/projects/logos/tailwind.svg" },
    ],
    link: "https://synergy.syamrabu.com/",
    screenshots: [
      "/projects/hospital-1.png",
      "/projects/hospital-2.png",
      "/projects/hospital-3.png",
    ],
  },

  {
    title: "MyITS TPKA",
    category: "Education Platform",
    client: "ITS",
    year: "2025",
    purpose:
      "Academic testing platform integrated with Moodle and payment system for large-scale assessments.",
    role: ["Fullstack Developer", "UI/UX Designer", "Next.js Implementation"],
    techStack: [
      { name: "Next.js", icon: "/projects/logos/nextjs.svg" },
      { name: "Laravel", icon: "/projects/logos/laravel.svg" },
      { name: "MySQL", icon: "/projects/logos/mysql.svg" },
      { name: "Moodle", icon: "/projects/logos/moodle.svg" },
      { name: "Tailwind CSS", icon: "/projects/logos/tailwind.svg" },

    ],
    link: "https://tpka.its.ac.id/",
    screenshots: [
      "/projects/tpka-1.png",
      "/projects/tpka-2.png",
      "/projects/tpka-3.png",
    ],
  },

  {
    title: "KANŌ's Portfolio",
    category: "Brand Website",
    client: "KANŌ Creative Agency",
    year: "2026",
    purpose:
      "A CMS-powered creative agency website using headless CMS for dynamic content management.",
    role: ["Frontend Developer", "UI/UX Designer", "CMS Integration"],
    techStack: [
      { name: "Next.js", icon: "/projects/logos/nextjs.svg" },
      { name: "Sanity", icon: "/projects/logos/sanity.svg" },
      { name: "GSAP", icon: "/projects/logos/gsap.png" },
    ],
    link: "https://kanocreative.com/",
    screenshots: [
      "/projects/kano-1.png",
      "/projects/kano-2.png",
      "/projects/kano-3.png",
    ],
  },

  {
    title: "ISPO Certification System",
    category: "Government Dashboard",
    client: "ITS, Universitas Riau",
    year: "2025",
    purpose:
      "Platform to support certification process for 10,000+ palm oil farmers.",
    role: ["Frontend Developer", "System Interface"],
    techStack: [
      { name: "Next.js", icon: "/projects/logos/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/projects/logos/tailwind.svg" },
    ],
    link: "https://isporakyat.id/",
    screenshots: [
      "/projects/ispo-1.png",
      "/projects/ispo-2.png",
      "/projects/ispo-3.png",
    ],
  },
];