import { useEffect, useRef } from "react";

/** Subtle circular cursor that expands over clickable elements. Desktop only. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest("a, button, [data-cursor-hover]");
      const isImage = !!target.closest("[data-cursor-image]");
      if (ringRef.current) {
        ringRef.current.style.width = isImage ? "64px" : isInteractive ? "48px" : "34px";
        ringRef.current.style.height = isImage ? "64px" : isInteractive ? "48px" : "34px";
        ringRef.current.style.borderColor = isInteractive ? "#A65D43" : "#B49A65";
      }
    };

    let raf = 0;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
