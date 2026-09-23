import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useMouseTilt } from '../hooks/useMouseTilt.js';
import { artistConfig, buildWhatsAppLink } from '../data/config.js';

const particles = Array.from({ length: 10 });

export default function Hero() {
  const tilt = useMouseTilt(6);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-16"
    >
      {/* layered background gradients */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-bronze/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-graphite blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-5 inline-block font-body text-xs tracking-[0.35em] text-bronze">
            {artistConfig.heroLabel}
          </span>
          <h1 className="font-display text-5xl leading-[1.08] text-bone sm:text-6xl lg:text-[3.6rem]">
            {artistConfig.heroTitle}
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-bone/70">
            {artistConfig.heroDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3.5 font-body text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-7 py-3.5 font-body text-sm text-bone transition-colors hover:border-bronze hover:text-bronze"
            >
              <MessageCircle size={16} />
              Order a Portrait
            </a>
          </div>
        </motion.div>

        {/* right column — floating 3D artwork frame */}
        <motion.div
          className="relative mx-auto w-full max-w-md [perspective:1200px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          {particles.map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-bronze/60"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            animate={tilt.style}
            transition={{ type: 'tween', duration: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-bone/10 bg-graphite shadow-frame"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/images/myimage1.jpeg"
              alt="Featured hand-drawn pencil portrait"
              className="h-[560px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 rounded-xl border border-bone/10 bg-charcoal/90 px-5 py-3 shadow-soft backdrop-blur-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="font-display text-xl text-bronze">100+</p>
            <p className="font-body text-xs text-bone/60">Portraits Created</p>
          </motion.div>

          <motion.div
            className="absolute -top-5 -right-5 rounded-xl border border-bone/10 bg-charcoal/90 px-4 py-2.5 shadow-soft backdrop-blur-sm"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="font-body text-xs text-bone/80">Custom Hand-Drawn Artwork</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
