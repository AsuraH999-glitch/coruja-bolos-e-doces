import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const nodes = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!nodes) return;
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
