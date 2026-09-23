import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useScrollAnimation.js';

const stats = [
  { value: 100, suffix: '+', label: 'Portraits Created' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years Creating Art' },
  { value: 10, suffix: '+', label: 'Artwork Styles' },
];

function StatCard({ value, suffix, label, delay }) {
  const { ref, count } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-bone/10 bg-graphite/60 px-6 py-10 text-center"
    >
      <p className="font-display text-4xl text-bronze sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 font-body text-sm text-bone/60">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
