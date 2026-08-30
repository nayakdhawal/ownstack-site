export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      role="img"
      aria-label="mico. logo"
    >
      <rect x="2" y="2" width="28" height="28" rx="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" fill="currentColor" />
    </svg>
  );
}
