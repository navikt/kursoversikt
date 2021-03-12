# Kursoversikt
Denne applikasjonen gir en filtrer-, og søkbar oversikt over kurs og webinarer som Nav tilbyr. Selve applikasjonen finner du her: https://arbeidsgiver.nav.no/kursoversikt/

## Komme i gang

- Installere avhengigheter: `yarn`
- Kjøre applikasjonen normalt: `yarn start` (NB! Krever at backend kjører på port 8080)
- Kjøre applikasjon med mock: `yarn start:mock` eller `yarn start:mock:win` på windows
- Bygge applikasjonen: `yarn build`
- Kjøre applikasjonen med Node-backend:
    1. `yarn && yarn build`
    2. `cd server`
    3. `npm i && npm start`
- Kjøre applikasjonen med Docker:
    1. `yarn && yarn build`
    2. `yarn docker:build`
    3. `yarn docker:start`
    4. For å stoppe, kjør `docker stop <id>` med id-en fra forrige kommando

---

## Henvendelser
Spørsmål knyttet til koden eller prosjektet kan opprettes som github issues.
Eller for genereller spørsmål sjekk commit log for personer som aktivt jobber med koden.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #arbeidsgiver-min-side-arbeidsgiver.

### Lenker til applikasjon

dev: https://kursoversikt.dev.nav.no/kursoversikt
prod: https://arbeidsgiver.nav.no/kursoversikt/
sentry: https://sentry.gc.nav.no/nav/kurskalender/
metrics: https://grafana.adeo.no/d/o_9KGF8Gk/team-forste-skanse
logs: https://logs.adeo.no/app/dashboards#/view/754c72d0-76d8-11eb-90cb-7315dfb7dea6