import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(91,124,250,0.6)] hover:bg-accent-bright hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_40px_-8px_rgba(91,124,250,0.75)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-white/12 bg-white/[0.03] text-ink hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-ink-muted hover:text-ink hover:bg-white/[0.05]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-7 text-base",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const external = typeof props.href === "string" && /^https?:\/\//.test(props.href);
  const content = (
    <>
      {children}
      {external && (
        <svg
          aria-hidden
          className="h-3.5 w-3.5 translate-x-0 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      )}
    </>
  );

  if (props.href && external) {
    return (
      <a
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={props.href ?? "#contact"} {...props} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {content}
    </Link>
  );
}
