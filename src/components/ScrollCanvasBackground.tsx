import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 300;
const FOLDER_NAME = 'tech_vedas_frames_30fps (1)';

function getFramePath(index: number): string {
  const paddedIndex = String(index).padStart(6, '0');
  return `./${encodeURIComponent(FOLDER_NAME)}/frame_${paddedIndex}.jpg`;
}

export default function ScrollCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let currentFrameIndex = 0;
    let targetFrameIndex = 0;
    let animationFrameId = 0;
    let renderedFrameIndex = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getCoverDimensions = (imgWidth: number, imgHeight: number, containerWidth: number, containerHeight: number) => {
      const imgRatio = imgWidth / imgHeight;
      const containerRatio = containerWidth / containerHeight;

      let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

      if (containerRatio > imgRatio) {
        drawWidth = containerWidth;
        drawHeight = containerWidth / imgRatio;
        offsetX = 0;
        offsetY = (containerHeight - drawHeight) / 2;
      } else {
        drawWidth = containerHeight * imgRatio;
        drawHeight = containerHeight;
        offsetX = (containerWidth - drawWidth) / 2;
        offsetY = 0;
      }

      return { drawWidth, drawHeight, offsetX, offsetY };
    };

    const drawFrame = (index: number) => {
      let img = frames[index];

      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = frames[index - offset];
          const next = frames[index + offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const { drawWidth, drawHeight, offsetX, offsetY } = getCoverDimensions(
        img.naturalWidth || 1280,
        img.naturalHeight || 720,
        viewportWidth,
        viewportHeight
      );

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const updateTargetFrame = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const scrollableHeight = docHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollProgress = Math.min(1, Math.max(0, scrollTop / scrollableHeight));
      targetFrameIndex = scrollProgress * (TOTAL_FRAMES - 1);
    };

    const renderLoop = () => {
      const frameDelta = targetFrameIndex - currentFrameIndex;
      if (Math.abs(frameDelta) > 0.01) {
        currentFrameIndex += frameDelta * 0.12;
      } else {
        currentFrameIndex = targetFrameIndex;
      }

      const roundedIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(currentFrameIndex)));
      if (roundedIndex !== renderedFrameIndex) {
        renderedFrameIndex = roundedIndex;
        drawFrame(roundedIndex);
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Preload frames in background
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      frames[i - 1] = img;
    }

    resize();
    updateTargetFrame();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateTargetFrame, { passive: true });
    window.addEventListener("wheel", updateTargetFrame, { passive: true });
    window.addEventListener("touchmove", updateTargetFrame, { passive: true });

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateTargetFrame);
      window.removeEventListener("wheel", updateTargetFrame);
      window.removeEventListener("touchmove", updateTargetFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030305]">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Subtle overlay for contrast while preserving high animation visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none" />
    </div>
  );
}
