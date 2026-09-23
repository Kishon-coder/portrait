import { motion } from 'framer-motion';
import { Instagram as InstagramIcon } from 'lucide-react';
import { artistConfig } from '../data/config.js';

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/seed/insta-${i}/500/500`,
}));

export default function Instagram() {
  return (
    <section className="bg-charcoal py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl text-bone sm:text-5xl">Follow My Art Journey</h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-bone/60">
            More artwork, behind-the-scenes and new creations on Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={artistConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt="Artwork shared on Instagram"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/60">
                <InstagramIcon
                  size={22}
                  className="scale-75 text-bone opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={artistConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-7 py-3.5 font-body text-sm text-bone transition-colors hover:border-bronze hover:text-bronze"
          >
            <InstagramIcon size={16} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
