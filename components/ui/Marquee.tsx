import type { ReactNode } from "react";

export default function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mask-fade-x group relative overflow-hidden ${className}`}
    >
      <div className="animate-marquee flex w-max items-center gap-4 group-hover:[animation-play-state:paused]">
        <div className="flex items-center gap-4 pr-4">{children}</div>
        <div
          className="flex items-center gap-4 pr-4"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
