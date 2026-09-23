import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/config.js';

export default function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-2xl px-6 text-center"
      >
        <h2 className="font-display text-4xl leading-tight text-bone sm:text-5xl">
          Have A Memory You Want To Turn Into Art?
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-bone/60">
          Send me your photo on WhatsApp and let's create something meaningful.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-bronze px-8 py-4 font-body text-sm text-ink transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle size={18} />
          Order Your Portrait on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
