import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { artistConfig, buildWhatsAppLink } from '../data/config.js';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/70 backdrop-blur-xl border-b border-bone/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="font-display text-lg tracking-wide text-bone">
            ART BY <span className="text-bronze">{artistConfig.artistShortName.toUpperCase()}</span>
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-bone/80 transition-colors hover:text-bronze"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={artistConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-bone/70 transition-colors hover:text-bronze"
            >
              <Instagram size={19} />
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-bone/70 transition-colors hover:text-bronze"
            >
              <MessageCircle size={19} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-bronze/60 px-5 py-2 text-sm text-bone transition-colors hover:bg-bronze hover:text-ink"
            >
              Order Portrait
            </a>
          </div>

          <button
            className="text-bone lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-lg text-bone">
                ART BY <span className="text-bronze">{artistConfig.artistShortName.toUpperCase()}</span>
              </span>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-bone">
                <X size={26} />
              </button>
            </div>

            <motion.ul
              className="flex flex-1 flex-col items-start justify-center gap-6 px-8"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl text-bone hover:text-bronze"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex items-center gap-6 px-8 pb-10">
              <a href={artistConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-bone/80">
                <Instagram size={22} />
              </a>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="text-bone/80">
                <MessageCircle size={22} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
