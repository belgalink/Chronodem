export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const chrono = tone === "light" ? "#ffffff" : "#0b2e63";
  const dem = tone === "light" ? "#4aa8f2" : "#1b8ae8";
  const ring = tone === "light" ? "rgba(255,255,255,.34)" : "rgba(11,46,99,.24)";
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Chrono Dem">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <circle cx="16" cy="16" r="14" fill="none" stroke={ring} strokeWidth="1.4" />
        <ellipse cx="16" cy="16" rx="6.4" ry="14" fill="none" stroke={ring} strokeWidth="1.4" />
        <path d="M2 16h28M4.6 8.6h22.8M4.6 23.4h22.8" stroke={ring} strokeWidth="1.4" />
        <path d="M16 7.4V16l6 3.6" stroke={dem} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-[21px] leading-none font-extrabold tracking-[-0.035em]">
        <span style={{ color: chrono }}>Chrono</span>
        <span style={{ color: dem }}>Dem</span>
      </span>
    </span>
  );
}
