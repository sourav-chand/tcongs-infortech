export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-ink-muted ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,124,250,0.9)]" />
      {children}
    </span>
  );
}
