# TV 20

## Hvordan kjøre koden

Koden kjøres enkelt ved å kjøre kommandoene i stegene under.

### 1. Installering av dependencies

```bash
$ yarn install
```

### 2. Kjøre prosjektet

```bash
$ yarn dev
```

---

## Applikasjonen:

Applikasjonen viser enkelt frem nyeste saker fra breaking api'et til TV2.

| "As a user i want to be able to view the most recent news-articles from different news-portals"

Du kan velge mellom følgende views:

### Single view:

Single view er laget for de som ønsker å kunne scrolle nedover og se saker i sin helhet uten å måtte klikke seg inn på noe. Dette er et mer fokusert view som kun viser en portal om gangen.

### Multi view:

Multi view er for de som vil ha oversikt over alle saker på tvers av alle portalene. For å lese en sak som er interessant for leseren, kan de simpelt klikke på saken for å få opp en større versjon i en modal.

---

## Dependencies

### [React router](https://reactrouter.com/en/main)

Basic routing library for handling multiple pages inside the application.

### [@mui/joy](https://mui.com/joy-ui/getting-started/overview/)

Joy-UI er et material-design basert UI-Bibliotek som gir oss veldig basice komponenter. Brukt her fordi det korter ned tiden til man har en MVP.

### [simplebar-react](https://www.npmjs.com/package/simplebar-react)

Et bibliotek som gir oss litt simplere scrollbars som gir en mer helhetlig følelse i designet.

### [axios](https://axios-http.com/docs/intro)

Axios er et http-bibliotek som lar oss lage en instanse med baseURL slik at vi slipper å gjenta det når vi skal gjøre et API kall. Mest brukt av preferanse over `fetch`.

### Andre

- `html-react-parser` - Brukt for parsing av MARKUP fra breaking apiet.
- `date-fns` - Brukt for parsing og formattering av datoer.
- `react-helmet` - Brukt for å få lagt til tittel på hver side for bedre SEO

---

## Deployment

Applikasjonen blir automatisk deployet til `Vercel`. Foreløpig er det ingen tester, men du vil bli nektet å deploye hvis du har ESLint feiler/advarsler.
