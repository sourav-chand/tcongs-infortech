export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[140px]" />
      <div className="animate-pulse-slow absolute right-[-10%] top-[10%] h-[360px] w-[360px] rounded-full bg-accent-violet/[0.08] blur-[120px]" />
    </div>
  );
}
