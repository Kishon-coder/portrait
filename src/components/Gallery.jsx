import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { artworks, categories } from '../data/artworks.js';
import ArtworkModal from './ArtworkModal.jsx';

const videoFiles = [
  'showcase-1.mp4',
  'showcase-2.mp4',
  'showcase-3.mp4',
  'showcase-4.mp4',
  'showcase-5.mp4',
  'showcase-6.mp4',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);

  const videoRefs = useRef([]);

  const handlePlay = (playingIndex) => {
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== playingIndex) {
        vid.pause();
      }
    });
  };

  const filteredArtworks = useMemo(() => {
    if (activeCategory === 'all') return artworks;

    return artworks.filter(
      (a) => a.category === activeCategory
    );
  }, [activeCategory]);

  const openModal = (index) => setActiveIndex(index);

  const closeModal = () => setActiveIndex(null);

  const showNext = () =>
    setActiveIndex(
      (i) => (i + 1) % filteredArtworks.length
    );

  const showPrev = () =>
    setActiveIndex(
      (i) =>
        (i - 1 + filteredArtworks.length) %
        filteredArtworks.length
    );

  return (
    <section
      id="gallery"
      className="bg-charcoal pt-20 pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* VIDEO SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videoFiles.map((file, i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-bone/10 shadow-soft"
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                onPlay={() => handlePlay(i)}
                controls
                preload="metadata"
                playsInline
                className="aspect-[9/16] w-full bg-ink object-cover"
              >
                <source
                  src={`/videos/${file}`}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}