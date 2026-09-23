import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    title: 'Pencil Portraits',
    description: 'Fine graphite realism built up in delicate layers.',
    image: '/images/artworks/my-art-1.jpeg',
  },
  {
    title: 'Charcoal Art',
    description: 'Bold contrast and soft blending for dramatic pieces.',
    image:  '/images/artworks/my-art-9.jpeg',
  },
  {
    title: 'Couple Portraits',
    description: 'Two people, one composition, made for anniversaries.',
    image:  '/images/artworks/my-art-3.jpeg',
  },
  {
    title: 'Family Portraits',
    description: 'Multiple subjects combined into a single artwork.',
    image:  '/images/artworks/my-art-4.jpeg',
  },
  {
    title: 'Digital Portraits',
    description: 'Full-colour illustration with a hand-drawn texture.',
    image:  '/images/artworks/my-art-7.jpeg',
  },
  {
    title: 'Custom Artwork',
    description: 'Pets, memorials, and anything meaningful to you.',
    image:  '/images/artworks/my-art-6.jpeg',
  },
];

export default function Categories() {
  return (
    <section className="bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <h2 className="font-display text-4xl text-bone sm:text-5xl">What I Draw</h2>
          <p className="mt-4 font-body text-bone/60">
            Six ways to turn a photograph into something worth keeping.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              href="#gallery"
              key={item.title}
              className="group relative block aspect-square overflow-hidden rounded-2xl border border-bone/10 [perspective:1000px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity group-hover:from-ink/95" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="font-display text-xl text-bone">{item.title}</h3>
                  <p className="mt-1 max-w-[200px] font-body text-sm text-bone/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-bone/20 text-bone transition-all duration-300 group-hover:-rotate-0 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
