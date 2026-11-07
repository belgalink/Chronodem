"use client";
import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "li" | "article";

/**
 * Fades content in once it scrolls into view. Falls back to plain visible
 * content when the observer is unavailable, when the visitor asked for
 * reduced motion, or if anything stalls, so nothing can stay stuck hidden.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const calm =
      typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || calm || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    io.observe(el);

    // Safety net: never leave content invisible if the observer stays quiet.
    const bail = window.setTimeout(() => {
      setShown(true);
      io.disconnect();
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(bail);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      "data-reveal": "",
      className,
      style: shown
        ? { animation: `rise .72s cubic-bezier(.22,1,.36,1) ${delay}ms both` }
        : { opacity: 0 },
    },
    children,
  );
}
