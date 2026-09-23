# Art by Bujii — Portrait Artist Portfolio

A premium, animated portfolio site for a portrait/drawing artist, built with React, Tailwind CSS and Framer Motion. 3D-feeling depth (mouse-tilt cards, floating frames, parallax gradients) is done with CSS transforms rather than WebGL, so it stays fast on mid-range phones.

## 1. Install & run

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

Requires Node.js 18+.

## 2. Change the artist's info (one file)

Open **`src/data/config.js`** and edit:

```js
export const artistConfig = {
  artistName: 'Bujii Krishnan',
  artistShortName: 'Bujii',
  artistBio: '...',
  instagramUrl: 'https://instagram.com/YOUR_USERNAME',
  whatsappNumber: '91XXXXXXXXXX',   // country code + number, digits only
  email: 'hello@artbyBujii.example',
  location: 'Salem, Tamil Nadu, India',
  heroTitle: 'Turning Moments Into Timeless Art.',
  heroDescription: '...',
};
```

This single file drives the navbar, hero, footer, WhatsApp buttons and contact section — nothing else needs to change.

### WhatsApp number
Just the digits, country code first, no `+`, spaces or dashes — e.g. India: `919876543210`. Every "Order on WhatsApp" / "Enquire Now" button on the site builds its link from this value via `buildWhatsAppLink()` in the same file.

### Instagram
Update `instagramUrl` to your real profile link. The navbar icon, Instagram section, and footer all read from this one value.

## 3. Replace artwork images

Gallery pieces live in **`src/data/artworks.js`**. Each entry:

```js
{
  id: 10,
  title: 'Your Artwork Title',
  category: 'pencil',   // must match an id in `categories` at the top of the file
  image: '/images/artworks/your-file.jpg',
  year: '2026',
  description: 'A sentence or two about the piece.',
}
```

Steps:
1. Drop your image files into `public/images/artworks/`.
2. Point `image` at `/images/artworks/your-file.jpg`.
3. Add, remove or reorder entries freely — the gallery, filters and lightbox all read from this array automatically.

The site ships with placeholder images from picsum.photos so it works out of the box; replace them with real photography before going live.

Other images to swap:
- Hero artwork: `src/components/Hero.jsx` (`src="https://picsum.photos/..."`)
- Artist photo: `src/components/About.jsx`
- Category thumbnails: `src/components/Categories.jsx`
- Sketch-to-final sequence: `sketchProgression` in `src/data/artworks.js`
- Testimonial photos: `src/data/testimonials.js`
- Instagram grid: currently placeholder images in `src/components/Instagram.jsx` — replace with real post exports if you have them (this project does not call the Instagram API).

## 4. Edit services, pricing and testimonials

- **`src/data/services.js`** — service list, descriptions and "Starting from ₹X" prices.
- **`src/data/testimonials.js`** — client reviews shown in the carousel.

## 5. Contact form

The enquiry form in `src/components/Contact.jsx` validates on the client (required fields, email/phone format) and currently logs the submission to the console with a clear placeholder comment. To make it functional, wire `handleSubmit` to:
- a form service like Formspree or EmailJS, or
- your own backend API route.

No fake network calls are made until you connect one.

## 6. Project structure

```
src/
  components/     One file per section (Navbar, Hero, About, Gallery, ...)
  data/           config.js, artworks.js, services.js, testimonials.js
  hooks/          useMouseTilt.js, useScrollAnimation.js
  App.jsx, main.jsx, index.css
public/images/    artist/, artworks/, instagram/, testimonials/
```

## 7. Deploying

`npm run build` outputs a static `dist/` folder that can be deployed to Vercel, Netlify, GitHub Pages, or any static host.
