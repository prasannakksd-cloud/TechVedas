import { motion, type Variants } from "framer-motion";
import HeroVisualization from "./HeroVisualization";
import Logo from "./Logo";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent text-cream">
      <HeroVisualization />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1320]/40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-edit relative z-10 flex flex-col items-center text-center pt-28 pb-16"
      >
        <motion.div variants={item} className="mb-5 flex flex-col items-center justify-center text-center">
          <div className="mb-2 flex items-center justify-center">
            <div className="rounded-full bg-[radial-gradient(circle_at_center,rgba(245,199,107,0.08),transparent_65%)] p-2 backdrop-blur-sm">
              <Logo height={68} className="drop-shadow-[0_0_18px_rgba(245,199,107,0.12)]" />
            </div>
          </div>
          <p className="mt-2 text-xs font-bold tracking-[0.25em] text-[#f1d29a] uppercase sm:text-sm">
            CSE — <span className="text-[#dfeef4]">ARTIFICIAL INTELLIGENCE &amp; DATA SCIENCE</span>
          </p>
          <p className="mt-2 text-xs tracking-wider text-[#cfe3ee]/80">
            Dayananda Sagar University Technical Club
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-[18vw] font-semibold leading-[0.82] tracking-[-0.06em] text-[#f2eae1] sm:text-[9vw] lg:text-[7.5vw]"
        >
          TECH VEDAS
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-display text-2xl italic text-beige sm:text-3xl text-center mx-auto">
          Where ideas meet intelligence.
        </motion.p>

        <motion.p variants={item} className="mt-3 max-w-md text-beige/80 text-center mx-auto text-base">
          Technical Club of CSE (Artificial Intelligence &amp; Data Science),
          Dayananda Sagar University.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#events"
            className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold tracking-wide text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30"
          >
            Explore Events
          </a>
          <a
            href="#team"
            className="rounded-full border border-beige/50 px-7 py-3 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Meet the Team
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
