import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { artistConfig, buildWhatsAppLink } from '../data/config.js';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="max-w-xs">
            <p className="font-display text-lg text-bone">
              ART BY <span className="text-bronze">{artistConfig.artistShortName.toUpperCase()}</span>
            </p>
            <p className="mt-3 font-body text-sm text-bone/50">Turning memories into timeless artwork.</p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-sm text-bone/60 hover:text-bronze">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            <a href={artistConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-bone/60 hover:text-bronze">
              <Instagram size={18} />
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="text-bone/60 hover:text-bronze">
              <MessageCircle size={18} />
            </a>
            <a href={`mailto:${artistConfig.email}`} className="text-bone/60 hover:text-bronze">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="border-t border-bone/10 pt-6 font-body text-xs text-bone/35">
          © 2026 {artistConfig.artistName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
