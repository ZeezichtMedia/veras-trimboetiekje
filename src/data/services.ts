export interface Service {
  slug: string;
  title: string;
  short: string;
  body: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'knippen-en-scheren',
    title: 'Knippen en scheren',
    short: 'Een complete trimbehandeling, afgestemd op vacht en ras.',
    body: [
      'Tijdens een complete trimbehandeling wordt jouw hond gewassen, zorgvuldig gedroogd en geknipt of geschoren.',
      'Ik kijk altijd naar wat het beste past bij de vacht en het ras, maar ook naar jouw wensen.',
      'Door rustig te werken en de tijd te nemen, zorg ik ervoor dat jouw hond zich veilig voelt en met een mooi, verzorgd resultaat naar huis gaat.',
    ],
    icon: 'scissors',
  },
  {
    slug: 'ontwollen',
    title: 'Ontwollen',
    short: 'Voor honden met veel onderwol — luchtig, licht en comfortabel.',
    body: [
      'Sommige honden hebben veel onderwol, wat kan zorgen voor verharen en een zware vacht.',
      'Tijdens een ontwolbehandeling verwijder ik overtollige onderwol, waardoor de vacht weer luchtig aanvoelt en beter kan ademen.',
      'Dit zorgt niet alleen voor een mooier uiterlijk, maar ook voor meer comfort voor jouw hond.',
    ],
    icon: 'leaf',
  },
  {
    slug: 'ontklitten',
    title: 'Ontklitten / vachtverzorging',
    short: 'Diervriendelijk klitten verwijderen, altijd in overleg.',
    body: [
      'Klitten en vervilting kunnen ongemakkelijk en zeer pijnlijk zijn voor een hond.',
      'Ik kijk altijd zorgvuldig naar de staat van de vacht en kies de meest diervriendelijke oplossing.',
      'In sommige gevallen is het beter om de vacht kort te scheren, zodat de vacht weer gezond kan teruggroeien en jouw hond zich weer prettig voelt. Mocht dit het geval zijn, dan neem ik altijd even contact met het baasje op.',
    ],
    icon: 'sparkle',
  },
  {
    slug: 'tussenbeurt',
    title: 'Tussenbeurt',
    short: 'Vacht fris en in conditie houden tussen de grote beurten door.',
    body: [
      'Een tussenbeurt is ideaal om de vacht tussendoor goed bij te houden.',
      'Tijdens deze behandeling wordt jouw hond gewassen en gedroogd en werk ik kleine onderdelen bij zoals het vrij knippen van de oogjes en het netjes maken van de voetjes.',
      'Zo blijft de vacht fris, schoon en in goede conditie tussen de grotere trimbeurten door.',
    ],
    icon: 'droplet',
  },
  {
    slug: 'kortharige-honden',
    title: 'Kortharige honden',
    short: 'Wassen en losse haren verwijderen — minder verharen in huis.',
    body: [
      'Ook kortharige honden zijn welkom voor verzorging.',
      'Tijdens deze behandeling wordt de vacht gewassen en worden losse haren verwijderd, waardoor de vacht weer schoon en fris aanvoelt.',
      'Dit helpt ook om verharen in huis te verminderen.',
    ],
    icon: 'paw',
  },
  {
    slug: 'puppy-wenbeurt',
    title: 'Puppy wenbeurt',
    short: 'Een rustige, positieve eerste kennismaking met de salon.',
    body: [
      'De eerste ervaring in de trimsalon is ontzettend belangrijk voor een pup.',
      'Tijdens de puppy wenbeurt laat ik jouw hondje rustig kennismaken met alles wat erbij komt kijken, zoals wassen, föhnen en borstelen.',
      'Door dit op een positieve en ontspannen manier te doen, leg ik een goede basis voor toekomstige behandelingen. Alles stap voor stap en stressvrij.',
      'Ik adviseer 2 tot 3 puppy wenbeurten voordat je hond toe is aan een volledige trimbehandeling. Pups zijn welkom vanaf ongeveer 12 weken, mits zij hun eerste vaccinaties hebben gehad.',
    ],
    icon: 'heart',
  },
  {
    slug: 'extra-verzorging',
    title: 'Extra verzorging',
    short: 'Kleine verzorgingsmomenten — los te boeken.',
    body: [
      'Naast de trimbehandelingen bied ik ook kleine verzorgingsmomenten aan die los geboekt kunnen worden.',
      'Denk aan het knippen van de nagels, het reinigen van de oren en het vrij knippen van de oogjes.',
      'Korte nagels zorgen voor een goede houding, schone oren helpen irritaties te voorkomen en vrij zicht rondom de ogen zorgt voor meer comfort.',
    ],
    icon: 'star',
  },
];
