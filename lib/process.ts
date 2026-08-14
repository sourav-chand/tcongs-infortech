export interface ProcessStep {
  index: string;
  title: string;
  phase: string;
  what: string;
  why: string;
  deliverable: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    phase: "Business & Market Analysis",
    what: "We study your goals, audience, and competitors to define the right strategy.",
    why: "So every decision after this is grounded in real business context.",
    deliverable: "Strategy brief",
  },
  {
    index: "02",
    title: "Planning",
    phase: "Strategy & Architecture",
    what: "We map project plans, user flows, and system architecture for smooth execution.",
    why: "Clear structure removes surprises and keeps timelines honest.",
    deliverable: "Blueprint & roadmap",
  },
  {
    index: "03",
    title: "Design",
    phase: "UI/UX & Branding",
    what: "We craft modern, user-friendly interfaces that reflect your brand.",
    why: "Design is the first impression your product makes — it has to convert trust.",
    deliverable: "Design system",
  },
  {
    index: "04",
    title: "Development",
    phase: "Web & App Development",
    what: "We build fast, secure, scalable products with modern technology.",
    why: "Speed and reliability are what your customers actually experience.",
    deliverable: "Working product",
  },
  {
    index: "05",
    title: "Testing",
    phase: "Quality Assurance",
    what: "We test performance, security, and usability across every device.",
    why: "A polished launch is built on what's caught before users see it.",
    deliverable: "QA-approved build",
  },
  {
    index: "06",
    title: "Launch & Growth",
    phase: "Deployment & Marketing",
    what: "We launch, then scale with SEO, marketing, and continuous optimization.",
    why: "Going live is the start line — growth is where the real outcome lives.",
    deliverable: "Live & optimized",
  },
];
