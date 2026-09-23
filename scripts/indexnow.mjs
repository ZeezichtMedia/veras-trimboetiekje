// Meldt bij zoekmachines dat de site is gewijzigd, zonder account of login.
//
//   npm run indexnow
//
// Dit werkt via IndexNow: één melding bereikt Bing, Yandex, Naver, Seznam en
// Yep (en daarmee ook DuckDuckGo en Ecosia, die op Bing draaien). Google doet
// NIET mee aan IndexNow; die leest de sitemap via Search Console.
//
// Hoe het bewijst dat wij het zijn: er staat een sleutelbestand op de site
// (public/<sleutel>.txt). De zoekmachine haalt dat op en vergelijkt het met de
// sleutel in de melding. Vandaar: eerst deployen, dan pas melden.
//
// Wanneer draaien? Na een deploy met nieuwe of gewijzigde pagina's.
const HOST = 'www.verastrimboetiekje.nl';
const KEY = 'e42c010323ae2dfb38c1f4dbe6a0cb15';

const origin = `https://${HOST}`;
const keyLocation = `${origin}/${KEY}.txt`;

const fail = (message) => {
  console.error(`\n✗ ${message}`);
  process.exit(1);
};
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

// 1. Staat het sleutelbestand live? Zonder dat weigert IndexNow de melding.
const keyRes = await fetch(keyLocation).catch(() => null);
const keyBody = keyRes?.ok ? (await keyRes.text()).trim() : '';
if (keyBody !== KEY) {
  fail(
    `Sleutelbestand klopt niet: ${keyLocation} gaf ${keyRes?.status ?? 'geen antwoord'}.\n` +
      '  Staat de laatste deploy live? Het bestand hoort in public/ te staan.',
  );
}
console.log(`✓ Sleutelbestand gevonden op ${keyLocation}`);

// 2. De sitemap-index verwijst naar de echte sitemap(s); daaruit komen de pagina's.
const indexRes = await fetch(`${origin}/sitemap-index.xml`).catch(() => null);
if (!indexRes?.ok) fail(`Sitemap-index niet op te halen (${indexRes?.status ?? 'geen antwoord'}).`);
const urlList = [];
for (const sitemapUrl of locs(await indexRes.text())) {
  const res = await fetch(sitemapUrl).catch(() => null);
  if (!res?.ok) fail(`Sitemap ${sitemapUrl} niet op te halen (${res?.status ?? 'geen antwoord'}).`);
  urlList.push(...locs(await res.text()));
}
if (!urlList.length) fail("Geen URL's in de sitemap gevonden.");
console.log(`✓ ${urlList.length} pagina's uit de sitemap:`);
for (const url of urlList) console.log(`    ${url}`);

// 3. Melden. Eén verzoek, alle URL's tegelijk.
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation, urlList }),
});

// 200 = aangenomen, 202 = aangenomen maar sleutel wordt nog gecontroleerd.
if (res.status === 200 || res.status === 202) {
  console.log(`\n✓ Gemeld bij IndexNow (${res.status}). Bing, Yandex, Naver, Seznam en Yep weten het nu.`);
  console.log('  Google doet niet mee aan IndexNow en komt via Search Console en de sitemap.');
} else {
  fail(`IndexNow gaf ${res.status}: ${await res.text().catch(() => '')}`);
}
