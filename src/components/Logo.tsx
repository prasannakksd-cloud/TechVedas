interface LogoProps {
  /** Rendered height in pixels — pass different values for desktop vs mobile navbar states. */
  height?: number;
  className?: string;
  showText?: boolean;
}

const logoFinalImage = new URL("../../logo final.jpeg", import.meta.url).href;

export default function Logo({ height = 44, className = "", showText = true }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="Tech Vedas — home"
      className={`inline-flex items-center transition-opacity duration-300 hover:opacity-90 ${className}`}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,199,107,0.18),transparent_38%),rgba(12,15,20,0.9)] shadow-[0_0_30px_rgba(212,170,98,0.12)]"
        style={{ height, width: height }}
      >
        <div className="absolute inset-[6%] rounded-full border border-[#d9b77a]/15" />
        <img
          src={logoFinalImage}
          alt="Tech Vedas logo"
          className="relative z-10 block h-full w-full scale-[1.04] object-contain select-none opacity-100 drop-shadow-[0_0_18px_rgba(245,199,107,0.10)]"
        />
      </div>

      {showText && false}
    </a>
  );
}

