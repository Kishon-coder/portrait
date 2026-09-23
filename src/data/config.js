// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update the artist's name, contact info, and
// hero copy across the entire site. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const artistConfig = {
  artistName: 'Bujii',
  artistShortName: 'Bujii',
  artistBio:
    "I'm a self-taught portrait artist based in Salem, Tamil Nadu, working in graphite, charcoal and digital media. For the last three years I've been drawing the faces people can't stop thinking about — grandparents, newborns, wedding days, pets who aren't here anymore. Every commission starts with a conversation about who the subject was to you, because that's what ends up in the shading.",
  artistBioShort:
    'I believe a portrait is more than a drawing. It is a way of preserving emotions, memories and the people who matter most.',

  // Contact + social — update these three lines and every button on the
  // site (navbar, hero, WhatsApp CTA, footer, contact section) updates too.
  instagramUrl: 'https://instagram.com/bujii_art_love',
  whatsappNumber: '919363684036', // country code + number, no + or spaces
  whatsappDefaultMessage: 'Hi, I would like to enquire about a custom portrait.',
  email: 'keerthi69bujii@gmail.com',
  location: 'Salem, Tamil Nadu, India',

  heroLabel: 'PORTRAIT ARTIST',
  heroTitle: 'Turning Moments Into Timeless Art.',
  heroDescription:
    'Hand-drawn portraits created with passion, patience and attention to every detail.',
};

// Builds a wa.me link with the number + prefilled message from above.
// Pass a custom message (e.g. including an artwork title) if useful.
export function buildWhatsAppLink(message = artistConfig.whatsappDefaultMessage) {
  const cleanNumber = artistConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
