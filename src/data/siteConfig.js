// ===== EDIT ME: single source of truth. Values marked DEMO are placeholders. =====
export const site = {
  name: 'HairVerses',
  tagline: 'Your Hair. Your Verses.',
  support: "More than a salon. It's a self-expression.",
  // DEMO: replace with the real address
  address: 'Sadar Gandhi Chowk, Nagpur, Maharashtra 440001',
  hours: [['Mon to Fri', '10:00 – 20:00 (demo)'], ['Sat to Sun', '10:00 – 21:00 (demo)']],
  phone: '',            // e.g. '+91 98765 43210'  (empty = placeholder shown)
  // International format, digits only, no "+" or spaces. Example India: '919876543210'. Empty = WhatsApp disabled.
  whatsapp: '+91 9822209911',
  social: { instagram: '', facebook: '' }, // full profile URLs; empty = hidden
  // DEMO coordinates (central Nagpur). Replace with the salon's real latitude/longitude.
  map: { lat: 21.1458, lng: 79.0882, zoom: 15 },
}

// Images are remote Unsplash photos (licence: unsplash.com/license). They depend on Unsplash staying up.
// For production, download licensed/own photos into /public and point these at `${import.meta.env.BASE_URL}img/x.jpg`.
const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`
export const images = {
  hero: u('photo-1522337360788-8b13dee7a37e', 1800),
  about: u('photo-1560066984-138dadb4c035', 1000),
  cta: u('photo-1521590832167-7bcbfaa6381f', 1600),
  u,
}
