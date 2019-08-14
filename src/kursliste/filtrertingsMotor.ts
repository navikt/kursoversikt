import { Kurs } from '../models/Kurs';
import { FilterGruppe, filterGruppeValues, FilterState } from './Kursliste';

export const filtrer = (filterState: FilterState, sokeOrd: string, kursArray: Kurs[]): Kurs[] => {
    let filtrerteKurs = kursArray;
    filterGruppeValues.map(filtergruppe => {
        return (filtrerteKurs = utforFiltreringPaaFiltergruppe(
            filterState,
            filtergruppe,
            filtrerteKurs
        ));
    });
    filtrerteKurs = utforSokIFiltrertListe(sokeOrd, filtrerteKurs);
    return filtrerteKurs;
};

const utforFiltreringPaaFiltergruppe = (
    filterState: FilterState,
    filterGruppe: FilterGruppe,
    kursSomSkalFiltreres: Array<Kurs>
): Kurs[] => {
    const ingenFilterValgt = filterState[filterGruppe].length === 0;
    if (ingenFilterValgt) {
        return kursSomSkalFiltreres;
    }
    return kursSomSkalFiltreres.filter(
        kurs =>
            kurs[filterGruppe] &&
            (kurs.fylke === 'Landsdekkende' ||
                filterState[filterGruppe].includes(kurs[filterGruppe]!))
    );
};

const utforSokIFiltrertListe = (
    sokeordState: string,
    kursSomSkalFiltreres: Array<Kurs>
): Kurs[] => {
    if (sokeordState !== '') {
        return kursSomSkalFiltreres.filter(
            kurs =>
                (kurs.tittel && kurs.tittel.toLowerCase().includes(sokeordState)) ||
                (kurs.internBeskrivelse &&
                    kurs.internBeskrivelse.toLowerCase().includes(sokeordState))
        );
    }
    return kursSomSkalFiltreres;
};

export const byggFilterTilURL = (filterState: FilterState, sokeOrd: string) => {
    let filter = Object.entries(filterState)
        .map(([kriterie, allekriterier]) =>
            allekriterier.map((ettKriterie: string) => `${kriterie}=${ettKriterie}`).join('&')
        )
        .filter(liste => liste.length !== 0)
        .join('&');
    if (sokeOrd!) {
        filter = leggTilSokeord(filter,sokeOrd);
    }
    return '?' + filter;
};

const leggTilSokeord = (filtertekst:string, sokeOrd:string) =>{
    if(!filtertekst){
        return 'sokeord=' + sokeOrd;
    }
    return filtertekst + '&sokeOrd=' + sokeOrd;
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppe): string[] => {
    const kursMedFilterGruppe = kursArray.filter(kurs => kurs[filterGruppe]);
    let unikeVerdierSet = new Set(kursMedFilterGruppe.map(kurs => kurs[filterGruppe]!));
    return [...unikeVerdierSet.values()];
};

export const hentFilterFraUrl = (urlParams: string) => {
    const query = new URLSearchParams(urlParams);
    return filterGruppeValues.reduce(
        (filter: FilterState, filtergruppe) => ({
            ...filter,
            [filtergruppe]: query.getAll(filtergruppe),
        }),
        {} as FilterState
    );
};
