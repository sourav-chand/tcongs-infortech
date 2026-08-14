import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#top"
      aria-label="Tcongs Infotech — home"
      className="group flex items-center gap-3"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-violet shadow-[0_0_24px_-4px_rgba(91,124,250,0.7)]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-white"
        >
          <path
            d="M4 4h6v16H4V4Zm10 0h6v7h-6V4Zm0 11h6v5h-6v-5Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M4 4l16 16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
            Tcongs
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-ink-faint">
            Infotech
          </span>
        </span>
      )}
    </Link>
  );
}
