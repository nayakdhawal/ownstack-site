export function ScreenshotPlaceholder({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="glass-card flex aspect-video flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="text-xs font-semibold text-foreground">{label}</span>
        <span className="max-w-xs text-xs text-muted">{description}</span>
      </div>
    </div>
  );
}
