# Kursoversikt
Denne applikasjonen gir en filtrer-, og søkbar oversikt over kurs og webinarer som Nav tilbyr. 
Selve applikasjonen finner du her: 
- prod: [https://arbeidsgiver.nav.no/kursoversikt/](https://arbeidsgiver.nav.no/kursoversikt/)
- dev: [https://kursoversikt.dev.nav.no/kursoversikt/](https://kursoversikt.dev.nav.no/kursoversikt/) 
 
## Kjøre lokalt
Pass på at dependencies for både frontend og server er installert:
- `npm install`
- `cd server && npm install`

Kjør serveren i watch-mode
- `npm run watch`
- Besøk [http://localhost:3000/kursoversikt/](http://localhost:3000/kursoversikt/) i en nettleser.
- Koden rekompileres automatisk; du må refreshe nettleser manuelt.
- Typescript-feil vises kun i konsollen, ikke i nettleseren.

---

## Henvendelser
Spørsmål knyttet til koden eller prosjektet kan opprettes som github issues.
Eller for genereller spørsmål sjekk commit log for personer som aktivt jobber med koden.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-fager.

### Lenker til applikasjon

sentry: https://sentry.gc.nav.no/nav/kurskalender/
metrics: https://grafana.adeo.no/d/o_9KGF8Gk/team-forste-skanse
logs: https://logs.adeo.no/app/dashboards#/view/754c72d0-76d8-11eb-90cb-7315dfb7dea6