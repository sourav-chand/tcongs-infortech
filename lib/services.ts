import type { LucideIcon } from "lucide-react";
import {
  Globe,
  CodeXml,
  ShoppingBag,
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  index: string;
  tag: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}

export const services: ServiceCategory[] = [
  {
    id: "web-app-development",
    index: "01",
    tag: "For Businesses",
    title: "Web & App Development",
    description:
      "High-performance websites and mobile apps engineered to load fast, convert visitors, and scale with your business.",
    capabilities: [
      "React & Next.js",
      "Node.js & Laravel",
      "Flutter · Android · iOS",
      "WordPress & Shopify",
    ],
    icon: Globe,
  },
  {
    id: "software-development",
    index: "02",
    tag: "Custom Solutions",
    title: "Software Development",
    description:
      "Tailor-made software — from SaaS platforms and enterprise systems to APIs, cloud apps, and AI-driven automation.",
    capabilities: [
      "SaaS & Enterprise Software",
      "CRM / ERP Systems",
      "API Development & Integration",
      "Cloud Apps · AI & Automation",
    ],
    icon: CodeXml,
  },
  {
    id: "ecommerce-solutions",
    index: "03",
    tag: "Online Sellers",
    title: "E-commerce Solutions",
    description:
      "Build high-converting stores and manage your presence across the marketplaces where your customers already shop.",
    capabilities: [
      "Shopify & Custom Stores",
      "Amazon · Flipkart · Myntra · Ajio",
      "Nykaa · Meesho · Tata CLiQ",
      "International Marketplaces",
    ],
    icon: ShoppingBag,
  },
  {
    id: "digital-marketing",
    index: "04",
    tag: "Growth Focused",
    title: "Digital Marketing",
    description:
      "Full-funnel marketing that drives traffic, converts leads, and compounds your return on every rupee and dollar spent.",
    capabilities: [
      "SEO & Generative Engine Optimization",
      "Google Ads & Social Media Ads",
      "Email & Content Marketing",
      "CRO & Online Reputation",
    ],
    icon: Megaphone,
  },
  {
    id: "branding-uiux",
    index: "05",
    tag: "Creative Design",
    title: "Branding & UI/UX",
    description:
      "Interfaces and identities that feel as good as they look — designed around your users and built to be used.",
    capabilities: [
      "Brand Identity & Logo Design",
      "UI/UX Design in Figma",
      "Website & Mobile App Design",
      "Wireframing · Prototyping",
    ],
    icon: Palette,
  },
  {
    id: "business-growth",
    index: "06",
    tag: "Scaling Business",
    title: "Business Growth",
    description:
      "Strategy, sales funnels, and analytics that turn a good digital product into a predictable growth engine.",
    capabilities: [
      "Business Strategy & Consulting",
      "Lead Generation & Funnels",
      "Performance Marketing",
      "Analytics, Retention & Reporting",
    ],
    icon: TrendingUp,
  },
];
