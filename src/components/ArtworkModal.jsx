import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArtworkModal({ artwork, categoryLabel, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (!artwork) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close artwork view"
        className="absolute right-6 top-6 text-bone/70 transition-colors hover:text-bronze"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous artwork"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-bone/15 p-2 text-bone/70 transition-colors hover:border-bronze hover:text-bronze sm:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next artwork"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-bone/15 p-2 text-bone/70 transition-colors hover:border-bronze hover:text-bronze sm:right-8"
      >
        <ChevronRight size={22} />
      </button>

      <motion.div
        key={artwork.id}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="grid max-h-[85vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-bone/10 bg-charcoal shadow-frame md:grid-cols-[1.3fr_1fr]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center p-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-bronze">{categoryLabel}</p>
          <h3 className="mt-3 font-display text-3xl text-bone">{artwork.title}</h3>
          <p className="mt-1 font-body text-sm text-bone/40">{artwork.year}</p>
          <p className="mt-5 font-body text-sm leading-relaxed text-bone/70">{artwork.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
