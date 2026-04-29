export interface PriceGroup {
  title: string;
  description: string;
  items: { label: string; price: string }[];
  note?: string;
}

export const priceGroups: PriceGroup[] = [
  {
    title: 'Complete trimbehandeling — algemene rassen',
    description:
      'Volledige verzorging: wassen, zorgvuldig drogen, ontwollen, knippen of scheren. Inclusief nagels en netjes afwerken.',
    items: [
      { label: 'Kleine hond (tot 10 kg)', price: '€65' },
      { label: 'Middelgrote hond (10 – 20 kg)', price: '€80' },
      { label: 'Grote hond (20+ kg)', price: '€100' },
    ],
  },
  {
    title: 'Doodles en poedels',
    description:
      'Doodles en poedels hebben een vacht die meer onderhoud en tijd vraagt. Daarom werk ik met aangepaste tarieven.',
    items: [
      { label: 'Miniatuur (tot 29 cm)', price: '€80' },
      { label: 'Klein (tot 35 cm)', price: '€90' },
      { label: 'Middel (tot 45 cm)', price: '€100' },
      { label: 'Groot (45+ cm)', price: '€125' },
    ],
  },
  {
    title: 'Tussenbeurt',
    description:
      'Wassen, drogen, oogjes en voetjes vrij knippen, hygiënische zones bijwerken en nagels controleren.',
    items: [
      { label: 'Kleine hond (tot 10 kg)', price: '€45' },
      { label: 'Middelgrote hond (10 – 20 kg)', price: '€55' },
      { label: 'Grote hond (20+ kg)', price: '€70' },
    ],
    note: 'Niet geschikt voor extreem geklitte of vervilte vachten.',
  },
  {
    title: 'Kortharige honden',
    description:
      'Wassen, losse haren verwijderen en indien nodig nagels knippen.',
    items: [
      { label: 'Kleine hond (tot 10 kg)', price: '€45' },
      { label: 'Middelgrote hond (10 – 20 kg)', price: '€55' },
      { label: 'Grote hond (20+ kg)', price: '€65' },
    ],
  },
  {
    title: 'Puppy wenbeurt',
    description:
      'Een rustige eerste kennismaking met de salon. Dit is een wenbehandeling, geen volledige trimbeurt.',
    items: [
      { label: '12 – 20 weken', price: '€35' },
      { label: '20 weken – 5 maanden', price: '€45' },
    ],
  },
  {
    title: 'Extra verzorging',
    description: 'Kleine handelingen die los geboekt kunnen worden.',
    items: [
      { label: 'Nagels knippen', price: '€12,50' },
      { label: 'Oren reinigen', price: '€12,50' },
      { label: 'Oogjes vrij knippen', price: '€12,50' },
      { label: 'Hygiënische zones bijwerken', price: '€7,50' },
      { label: 'Voetjes knippen', price: '€15' },
      { label: 'Teek verwijderen', price: '€5' },
    ],
  },
];

export const surcharge = {
  text: 'Bij klitten, vervilting of lastig gedrag kan extra tijd nodig zijn. Om de kwaliteit en rust te kunnen waarborgen reken ik hiervoor een toeslag van €15 per half uur.',
};
