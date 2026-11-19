import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TARGETS = [
  "main section h2",
  "main section header",
  "main section article",
  "main section .card",
  "main section img:not([aria-hidden='true'])",
  "main section li",
].join(",");

/** Adds a fade/slide-in to content blocks as they scroll into view. */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const frame = requestAnimationFrame(() => {
      const nodes = document.querySelectorAll<HTMLElement>(TARGETS);
      nodes.forEach((node) => {
        // Skip the first section (hero) – it has its own entrance animation.
        if (node.closest("main > section:first-child, main > *:first-child > section:first-child")) return;
        if (node.parentElement?.closest(".reveal")) return;
        const siblings = node.parentElement ? Array.from(node.parentElement.children) : [];
        const index = Math.min(siblings.indexOf(node), 5);
        node.style.setProperty("--reveal-delay", `${Math.max(index, 0) * 70}ms`);
        node.classList.add("reveal");
        observer.observe(node);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
}
