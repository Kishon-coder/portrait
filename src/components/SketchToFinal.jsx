import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sketchProgression } from '../data/artworks.js';

export default function SketchToFinal() {
  return (
    <section className="bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <h2 className="font-display text-4xl text-bone sm:text-5xl">From Sketch To Soul</h2>
          <p className="mt-4 font-body text-bone/60">
            Every portrait moves through the same three stages before it leaves my desk.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between">
          {sketchProgression.map((stage, i) => (
            <div key={stage.stage} className="flex w-full items-center gap-6 lg:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="w-full max-w-xs"
              >
                <div className="overflow-hidden rounded-2xl border border-bone/10 shadow-soft">
                  <img
                    src={stage.image}
                    alt={stage.stage}
                    loading="lazy"
                    className="h-72 w-full object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-lg text-bone">{stage.stage}</p>
                <p className="mt-1 font-body text-sm text-bone/50">{stage.caption}</p>
              </motion.div>

              {i < sketchProgression.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                  className="hidden shrink-0 text-bronze lg:block"
                >
                  <ArrowRight size={28} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
