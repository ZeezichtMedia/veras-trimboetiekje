// Eigen foto's van Vera (studioshoot september 2026). Ze staan in
// public/photos/ en zijn daar al op maat gesneden voor hun plek in de
// layout, dus ze hoeven in de browser niet meer geschaald te worden.
//
// De diensten waar nog geen eigen foto van is, staan bewust NIET in
// serviceImages: de Placeholder valt dan terug op het pootje met
// "foto volgt", in plaats van op een beeld dat er niet bij hoort.

export const photos = {
  hero: {
    src: '/photos/hero.jpg',
    alt: 'Vera geeft een van haar cockapoos een kus in de trimsalon',
  },
  beforeBefore: {
    src: '/photos/voor-na-voor.jpg',
    alt: 'Hond met ruige vacht, voor de trimbeurt',
  },
  beforeAfter: {
    src: '/photos/voor-na-na.jpg',
    alt: 'Hond met verzorgde vacht, na de trimbeurt',
  },
  about: {
    src: '/photos/over-mij.jpg',
    alt: "Vera, eigenaresse van Vera's Trimboetiekje, met haar honden Beer en Billy",
  },
  beerBilly: [
    { src: '/photos/beer.jpg', alt: 'Beer, de zwarte cockapoo van Vera' },
    { src: '/photos/billy.jpg', alt: 'Billy, de blonde cockapoo van Vera' },
  ],
} as const;

// Per dienst een eigen foto. Alleen invullen wat er echt is: een dienst
// die hier ontbreekt, krijgt vanzelf de "foto volgt"-placeholder.
export const serviceImages: Record<string, { src: string; alt: string }> = {
  'knippen-en-scheren': {
    src: '/photos/dienst-knippen-en-scheren.jpg',
    alt: 'Vera met haar trimschaar en kam',
  },
};
