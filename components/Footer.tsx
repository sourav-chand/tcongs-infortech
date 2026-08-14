import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, brand } from "@/lib/site";
import { services } from "@/lib/services";
import Container from "@/components/ui/Container";
import Logo from "@/components/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

const technologies = [
  "React & Next.js",
  "Node.js",
  "Flutter",
  "Laravel",
  "WordPress",
  "Shopify",
  "Cloud Applications",
  "AI & Automation",
];

const footerServices = services.map((s) => ({
  label: s.title,
  href: `#${s.id}`,
}));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] bg-surface/60">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-6">
            <Logo />
            <p className="text-sm leading-relaxed text-ink-muted">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into
              seamless digital growth.
            </p>
            <ButtonLink href="#contact" size="sm" className="w-fit">
              Start a Project
            </ButtonLink>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tcongs Infotech on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink-muted transition-colors duration-300 hover:border-accent/50 hover:text-ink"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.calendly}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consultation"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink-muted transition-colors duration-300 hover:border-accent/50 hover:text-ink"
              >
                <CalendarCheck className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Company">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">
              Technologies
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3">
              {technologies.map((tech) => (
                <li key={tech} className="text-sm text-ink-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/[0.07] pt-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 text-accent-bright" />
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${brand.phoneHref}`}
                  className="flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  <Phone className="h-4 w-4 text-accent-bright" />
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-muted">
                <MapPin className="h-4 w-4 text-accent-bright" />
                {brand.location} — serving clients worldwide
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-end gap-4 lg:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-faint">
              <li>Launch on top marketplaces</li>
              <li>Build high-converting stores</li>
              <li>Optimize listings for sales</li>
              <li>Run profitable ad campaigns</li>
              <li>Grow globally</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            © {year} {brand.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-ink-faint">
            Web, App &amp; Software Development · Digital Marketing · E-commerce
            Growth
          </p>
        </div>
      </Container>
    </footer>
  );
}
