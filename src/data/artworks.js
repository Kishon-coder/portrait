// ─────────────────────────────────────────────────────────────
// Add, remove or edit gallery pieces here. Each artwork needs:
// id (unique), title, category, image path, year, description.
// Drop real files into /public/images/artworks/ and point `image`
// at them, e.g. "/images/artworks/couple-01.jpg".
// Placeholder images below are loaded from picsum.photos so the
// site works immediately — replace with your own photography.
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'pencil', label: 'Pencil ' },
  { id: 'charcoal', label: 'Charcoal Art' },
  { id: 'couple', label: 'Couple Portraits' },
  { id: 'family', label: 'Family Portraits' },
  { id: 'digital', label: 'Digital Portraits' },
  { id: 'custom', label: 'Custom Artwork' },
];

export const artworks = [
  {
    id: 1,
    title: 'Grandmother, Remembered',
    category: 'pencil',
    image: '/images/artworks/my-art-1.jpg',
    year: '2026',
    description:
      'A graphite portrait commissioned as a memorial gift, drawn from a single faded photograph and rebuilt in fine layered pencil work over eighteen hours.',
  },
  {
    id: 2,
    title: 'Two, After the Ceremony',
    category: 'couple',
    image: 'https://picsum.photos/seed/portrait-02/900/1200',
    year: '2026',
    description:
      'A charcoal couple portrait capturing a quiet moment just after a wedding ceremony, rendered with soft blending and heavy contrast in the eyes.',
  },
  {
    id: 3,
    title: 'The Whole Table',
    category: 'family',
    image: 'https://picsum.photos/seed/portrait-03/1100/900',
    year: '2025',
    description:
      'A five-person family commission combining three separate source photos into a single cohesive graphite composition.',
  },
  {
    id: 4,
    title: 'Study in Graphite No. 7',
    category: 'pencil',
    image: 'https://picsum.photos/seed/portrait-04/900/1000',
    year: '2025',
    description:
      'A close-cropped realism study focused entirely on light behaviour across skin — part of an ongoing personal series.',
  },
  {
    id: 5,
    title: 'Monsoon Light',
    category: 'digital',
    image: 'https://picsum.photos/seed/portrait-05/1000/1300',
    year: '2025',
    description:
      'A digital portrait built in layers to mimic traditional shading, painted for a client who wanted colour without losing the hand-drawn feel.',
  },
  {
    id: 6,
    title: 'Charcoal Study — Amma',
    category: 'charcoal',
    image: 'https://picsum.photos/seed/portrait-06/950/1200',
    year: '2025',
    description:
      'A heavy-charcoal portrait exploring texture and softness, drawn as a birthday gift and framed in reclaimed teak.',
  },
  {
    id: 7,
    title: 'Twin Portraits',
    category: 'family',
    image: 'https://picsum.photos/seed/portrait-07/1000/1000',
    year: '2024',
    description:
      'A matched pair of graphite portraits designed to hang side by side, drawn six months apart to mark a milestone birthday.',
  },
  {
    id: 8,
    title: 'Custom Pet Companion',
    category: 'custom',
    image: 'https://picsum.photos/seed/portrait-08/1000/1150',
    year: '2024',
    description:
      'A commissioned pencil portrait of a family dog, matched in scale and framing to an existing set of family portraits.',
  },
  {
    id: 9,
    title: 'Portrait in Motion',
    category: 'digital',
    image: 'https://picsum.photos/seed/portrait-09/950/1250',
    year: '2024',
    description:
      'A digital portrait exploring movement and blur at the edges, commissioned for a dance studio anniversary.',
  },
];

// Sketch-to-final sequence used in the "From Sketch To Soul" section.
export const sketchProgression = [
  {
    stage: 'Initial Sketch',
    image: 'https://picsum.photos/seed/sketch-stage-1/700/900',
    caption: 'Rough proportions and light placement, usually 30–45 minutes.',
  },
  {
    stage: 'Detailed Drawing',
    image: 'https://picsum.photos/seed/sketch-stage-2/700/900',
    caption: 'Layered shading builds up across several sittings.',
  },
  {
    stage: 'Final Artwork',
    image: 'https://picsum.photos/seed/sketch-stage-3/700/900',
    caption: 'Fine detailing, highlights lifted, and a final varnish seal.',
  },
];
