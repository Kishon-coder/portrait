import { motion } from 'framer-motion';
import { Truck, ArrowRight } from 'lucide-react';
import { pricingCategories, shippingInfo } from '../data/services.js';
import { buildWhatsAppLink } from '../data/config.js';

export default function Services() {
  return (
    <section id="services" className="bg-charcoal pt-12 pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <h2 className="font-display text-4xl text-bone sm:text-5xl">Drawing Price</h2>
          <p className="mt-4 font-body text-bone/60">
            Prices by size and number of faces — message me on WhatsApp for a custom quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="flex flex-col rounded-2xl border border-bone/10 bg-graphite p-8 shadow-soft"
            >
              <h3 className="font-display text-2xl text-bone">{cat.title}</h3>
              <p className="mt-1 font-body text-sm text-bronze">{cat.subtitle}</p>

              <div className="mt-6 divide-y divide-bone/10">
                {cat.items.map((item) => (
                  <div key={item.size} className="flex items-center justify-between py-3">
                    <span className="font-body text-sm text-bone/70">{item.size}</span>
                    <span className="font-display text-base text-bone">{item.price}</span>
                  </div>
                ))}
              </div>

              
                <a href={buildWhatsAppLink(`Hi, I'd like to enquire about ${cat.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-bone py-3 font-body text-sm text-ink transition-transform hover:-translate-y-0.5"
              >
                Enquire Now <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-bone/10 bg-graphite/60 px-6 py-5 sm:flex-row sm:items-center"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze/15 text-bronze">
            <Truck size={18} />
          </span>
          <div>
            <p className="font-body text-sm text-bone/80">{shippingInfo.heading}</p>
            <p className="font-body text-xs text-bone/50">
              Tamil Nadu: {shippingInfo.tamilNadu} &nbsp;·&nbsp; Other States: {shippingInfo.otherStates}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}