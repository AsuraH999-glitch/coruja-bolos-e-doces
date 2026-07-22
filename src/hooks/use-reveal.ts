import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const nodes = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!nodes) return;

    // Stagger siblings that share a parent — subtle cascade, Apple-style
    const groupIndex = new Map<Element, number>();
    nodes.forEach((n) => {
      const parent = n.parentElement;
      if (!parent) return;
      const idx = groupIndex.get(parent) ?? 0;
      groupIndex.set(parent, idx + 1);
      if (!n.style.transitionDelay) {
        n.style.transitionDelay = `${Math.min(idx * 80, 480)}ms`;
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    nodes.forEach((n) => {
      n.classList.add("reveal");
      io.observe(n);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Subtle parallax — moves decorative element by `strength` px per 1000px of scroll */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - window.innerHeight / 2) / 1000;
        el.style.transform = `translate3d(0, ${(-offset * strength).toFixed(2)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  return ref;
}

