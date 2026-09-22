// Eigen foto's van Vera (studioshoot september 2026). Ze staan in
// public/photos/ en zijn daar al op maat gesneden voor hun plek in de
// layout, dus ze hoeven in de browser niet meer geschaald te worden.
//
// De dienstenpagina heeft bewust geen foto per dienst: van de behandelingen
// zelf bestaat nog geen eigen beeldmateriaal, en een salon verbeelden met
// foto's die er niet gemaakt zijn is niet eerlijk. Die pagina draait op
// iconen plus het sfeerbeeld hieronder.

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
  // Homepage, blok "over mij".
  about: {
    src: '/photos/over-mij.jpg',
    alt: "Vera, eigenaresse van Vera's Trimboetiekje, met haar honden Beer en Billy",
  },
  // Groot portret bovenaan de pagina Over mij. Door de homepage en deze
  // pagina een eigen foto te geven, zie je niet twee keer hetzelfde beeld.
  aboutPage: {
    src: '/photos/over-mij-pagina.jpg',
    alt: "Vera met haar cockapoos Billy op schoot en Beer naast zich",
  },
  dogs: [
    { src: '/photos/beer.jpg', alt: 'Beer, de zwarte cockapoo van Vera', label: 'Beer' },
    { src: '/photos/beer-en-billy.jpg', alt: 'Beer en Billy samen op hun kussen', label: 'Beer en Billy' },
  ],
  // Sfeerbeeld bovenaan de dienstenpagina.
  tools: {
    src: '/photos/trimgereedschap.jpg',
    alt: 'Vera met haar trimschaar en kam',
  },
} as const;
