import { motion } from 'framer-motion';
import { artistConfig } from '../data/config.js';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <svg width="220" height="60" viewBox="0 0 220 60" fill="none" aria-hidden="true">
        <path
  d="M5 45 C 40 5, 70 55, 105 20 S 170 5, 215 40"
  stroke="#38BDF8"
  strokeWidth="1.5"
  className="draw-line"
/>
      </svg>
      <p className="mt-4 font-display text-sm tracking-[0.3em] text-parchment uppercase">
        Art by {artistConfig.artistShortName}
      </p>
    </motion.div>
  );
}
