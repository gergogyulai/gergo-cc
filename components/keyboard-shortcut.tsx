export function KeyboardShortcut({ shortcut }: { shortcut: string }) {
  return (
    <div className="hidden md:flex items-center gap-2">
      <span className="flex items-center justify-center rounded-sm border border-primary/35 bg-primary/8 px-1.5 py-0.5 font-mono text-[10px] leading-none tracking-[0.14em] text-primary shadow-[0_0_10px_rgba(198,160,246,0.18)]">
        {shortcut}
      </span>
    </div>
  );
}
