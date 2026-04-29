// Stockfoto's via Unsplash. Vervangbaar zodra Vera eigen foto's heeft.
// Alleen het photo-id stoppen we hier — de Placeholder component bouwt
// automatisch w/q/auto/fit parameters bij de URL.
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  hero: {
    src: u('1591946614720-90a587da4a36'),
    alt: 'Hond bij verzorging in een rustige trimsalon',
  },
  beforeBefore: {
    src: u('1517849845537-4d257902454a'),
    alt: 'Hond met ruige vacht — voor de trimbeurt',
  },
  beforeAfter: {
    src: u('1601758228041-f3b2795255f1'),
    alt: 'Hond met verzorgde vacht — na de trimbeurt',
  },
  about: {
    src: u('1581066120470-fb72d80fdd64'),
    alt: 'Vera — eigenaresse van de trimsalon',
  },
  beerBilly: [
    { src: u('1568572933382-74d440642117'), alt: 'Cockapoo' },
    { src: u('1605568427561-40dd23c2acea'), alt: 'Cockapoo' },
  ],
  contactBackground: {
    src: u('1530281700549-e82e7bf110d6'),
    alt: 'Hond op een rustige plek',
  },
} as const;

// Per dienst een passende stockfoto. Volgorde matcht services.ts.
export const serviceImages: Record<string, { src: string; alt: string }> = {
  'knippen-en-scheren': {
    src: u('1587300003388-59208cc962cb'),
    alt: 'Hond wordt geknipt en geschoren',
  },
  ontwollen: {
    src: u('1568572933382-74d440642117'),
    alt: 'Vachtverzorging — onderwol verwijderen',
  },
  ontklitten: {
    src: u('1518717758536-85ae29035b6d'),
    alt: 'Vacht ontklitten met aandacht',
  },
  tussenbeurt: {
    src: u('1450778869180-41d0601e046e'),
    alt: 'Hond bij een tussenbeurt',
  },
  'kortharige-honden': {
    src: u('1517849845537-4d257902454a'),
    alt: 'Kortharige hond verzorgd',
  },
  'puppy-wenbeurt': {
    src: u('1546238232-20216dec9f72'),
    alt: 'Puppy wenbeurt — eerste kennismaking met de salon',
  },
  'extra-verzorging': {
    src: u('1694372550345-9149dddc390f'),
    alt: 'Kleine verzorgingsmomenten — borstelen en aanraken',
  },
};
