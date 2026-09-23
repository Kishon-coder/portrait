import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-ink py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-display text-4xl text-bone sm:text-5xl"
        >
          What Clients Say
        </motion.h2>

        <div className="relative rounded-2xl border border-bone/10 bg-graphite p-10 shadow-soft sm:p-14">
          <Quote className="absolute left-8 top-8 text-bronze/20" size={40} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="mb-5 flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-bronze text-bronze" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed text-bone/90 sm:text-2xl">
                “{current.review}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <img
                  src={current.photo}
                  alt={current.name}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="font-body text-sm text-bone/70">{current.name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-bone/15 p-2 text-bone/60 transition-colors hover:border-bronze hover:text-bronze"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-bronze' : 'w-1.5 bg-bone/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-bone/15 p-2 text-bone/60 transition-colors hover:border-bronze hover:text-bronze"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
