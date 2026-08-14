export interface CapabilityGroup {
  label: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Laravel", "PHP", "Python", "Microservices"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Android", "iOS", "React Native"],
  },
  {
    label: "Commerce",
    items: ["Shopify", "WordPress", "WooCommerce", "Custom Stores"],
  },
  {
    label: "Data & AI",
    items: ["AI & Automation", "Machine Learning", "Analytics & Reporting"],
  },
  {
    label: "Infrastructure",
    items: ["Cloud Applications", "APIs & Integrations", "CRM / ERP", "SaaS"],
  },
];

export const techMarquee = [
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Android",
  "iOS",
  "Laravel",
  "WordPress",
  "Shopify",
  "Custom Software",
  "SaaS",
  "APIs & Integrations",
  "CRM / ERP",
  "Cloud Applications",
  "AI & Automation",
  "SEO",
  "Performance Marketing",
  "Marketplace Management",
];
