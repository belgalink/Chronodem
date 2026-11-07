import type { ReactNode } from "react";

export function Stars({ value = 5, size = 13 }: { value?: number; size?: number }) {
  return (
    <span className="inline-flex gap-[2px]" aria-label={`${value} / 5`}>
      {[0, 1, 2, 3, 4].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M10 1.6l2.52 5.1 5.63.82-4.07 3.97.96 5.6L10 14.45 4.96 17.1l.96-5.6L1.85 7.52l5.63-.82z"
            fill={n < Math.round(value) ? "#e8762c" : "rgba(0,0,0,.16)"}
          />
        </svg>
      ))}
    </span>
  );
}

export function GoogleG({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15.6z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8.1 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 28.5c-.5-1.4-.7-2.9-.7-4.5s.3-3.1.7-4.5l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 10z" />
      <path fill="#EA4335" d="M24 10.6c3.2 0 6 1.1 8.2 3.2l6.1-6.1C34.9 4.3 29.9 2 24 2 15.4 2 8.1 6.9 4.4 14l7.1 5.5c1.8-5.3 6.7-8.9 12.5-8.9z" />
    </svg>
  );
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${tone === "light" ? "text-blue-400" : "text-rust-600"}`}>
      <span className={`h-px w-7 ${tone === "light" ? "bg-blue-400/60" : "bg-rust-500/50"}`} />
      {children}
    </p>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M2.8 8.4l3.4 3.4 7-7.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M3 8h10M8.6 3.6L13 8l-4.4 4.4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M6.3 3h3l1.5 4-2 1.4a12.5 12.5 0 006.8 6.8l1.4-2 4 1.5v3a2 2 0 01-2.2 2A17.8 17.8 0 014.3 5.2 2 2 0 016.3 3z"
        fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"
      />
    </svg>
  );
}

/** Numbered section marker, borrowed from the look of a consignment note. */
export function SectionIndex({ n, tone = "dark" }: { n: string; tone?: "dark" | "light" }) {
  return (
    <span className={`tabnum eyebrow ${tone === "light" ? "text-white/35" : "text-navy-800/30"}`}>{n}</span>
  );
}
