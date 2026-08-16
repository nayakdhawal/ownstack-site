export function ScreenshotPlaceholder({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/10 via-card to-card px-6 text-center">
        <span className="font-mono text-xs text-accent">{label}</span>
        <span className="max-w-xs text-xs text-muted">{description}</span>
      </div>
    </div>
  );
}
