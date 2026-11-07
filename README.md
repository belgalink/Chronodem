# Chrono Dem — demo site

Een herbouw van [chronodem.be](https://www.chronodem.be) als mock-up voor een
salesgesprek. Tweetalig (NL/FR), gebouwd met Next.js 15 en Tailwind 4,
statisch gegenereerd.

## Draaien

```bash
npm install
npm run dev
```

## Routes

| Route | Inhoud |
|---|---|
| `/nl`, `/fr` | De landingspagina |
| `/nl/offerte`, `/fr/devis` | Volumeberekening plus offerteformulier |
| `/nl/diensten/<slug>`, `/fr/services/<slug>` | Dienstpagina's |

`/` stuurt door naar `/nl`.

## Opbouw

- `content/nl.ts` draagt alle Nederlandse copy en exporteert het type `Site`.
- `content/fr.ts` is daarop getypeerd, dus een ontbrekende vertaling breekt de
  build in plaats van stilletjes door te glippen.
- `content/volume.ts` bevat de volumetabel, één op één overgenomen uit de
  bestaande rekentool van Chrono Dem, zodat de cijfers hier overeenkomen met de
  cijfers op kantoor.
- `components/` bevat de UI. `VolumeCalculator`, `QuoteForm`, `Header` en
  `StickyBar` draaien in de browser, de rest wordt op de server gerenderd.

## Inhoud

Alle bedrijfsgegevens, beoordelingen, openingsuren en volumecijfers komen van
chronodem.be, de Google-pagina van het bedrijf en hun Trustlocal-profiel.
De beoordelingen zijn echt en handmatig gekozen omdat ze de kernbelofte van de
pagina bewijzen: geen schade, op tijd, en een factuur die klopt met de offerte.

Foto's in `public/images/echt/` zijn echte werffoto's van Chrono Dem.
De overige beelden zijn gegenereerd voor deze demo. De vrachtwagens daarop
dragen de eigen belettering van Chrono Dem, overgenomen van hun logo: Chrono
in marineblauw, Dem in lichtblauw, met de wereldbol erachter.

`public/video/hero.mp4` is een stille clip van zes seconden, gemaakt uit de
herofoto. Hij speelt automatisch in de hero met de foto als poster, zodat de
eerste weergave nog altijd een geoptimaliseerde afbeelding is.

## Let op

- Het offerteformulier verstuurt niets. Er hangt nog geen backend aan.
- De prijs "vanaf 225 euro" staat op de Nederlandse site en op Trustlocal, maar
  de Franse versie van hun huidige site zegt 255 euro. Hier staat overal 225.
- `NEXT_PUBLIC_SITE_URL` zet het domein voor `sitemap.xml` en `robots.txt`.
