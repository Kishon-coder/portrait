import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useScrollAnimation.js';
import { artistConfig } from '../data/config.js';

const stats = [
  { value: 100, suffix: '+', label: 'Portraits' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Experience' },
];

function StatBlock({ value, suffix, label }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref}>
      <p className="font-display text-4xl text-bronze">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-body text-sm text-bone/60">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          className="relative mx-auto max-w-md"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden rounded-2xl border border-bone/10 shadow-soft">
            <img
              src="/images/myimage.png"
              alt={`${artistConfig.artistName}, portrait artist, at her drawing desk`}
              className="h-[480px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden rounded-xl border border-bone/10 bg-ink px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-lg text-bone">{artistConfig.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl leading-tight text-bone sm:text-5xl">
            Every Portrait Has A Story.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-bone/70">
            {artistConfig.artistBioShort}
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-bone/60">
            {artistConfig.artistBio}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/10 pt-8">
            {stats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
