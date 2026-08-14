export interface Metric {
  value: number | null;
  suffix: string;
  prefix?: string;
  label: string;
  note: string;
  animate: boolean;
}

export const metrics: Metric[] = [
  {
    value: 8,
    suffix: "+",
    label: "Years of Expertise",
    note: "Custom web development & digital solutions",
    animate: true,
  },
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    note: "Websites, apps & digital products shipped",
    animate: true,
  },
  {
    value: 4.9,
    suffix: "/5",
    prefix: "",
    label: "Client Rating",
    note: "Client satisfaction across engagements",
    animate: true,
  },
  {
    value: null,
    suffix: "",
    label: "Global Client Reach",
    note: "India · USA · UK · Canada · UAE",
    animate: false,
  },
];

export const trustPoints = [
  {
    label: "Trusted by businesses worldwide",
    detail: "Startups, SMEs & growing brands",
  },
  {
    label: "Verified business",
    detail: "Based in Mumbai, serving globally",
  },
  {
    label: "Response within one business day",
    detail: "Clear proposals, pricing & timelines",
  },
];
