import { Kurs } from '../models/Kurs';
import { FilterGruppe, FilterState } from './Kursliste';

export const filtrer = (filterState: FilterState, sokeOrd: string, kursArray: Kurs[]): Kurs[] => {
    let filtrerteKurs = kursArray;
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'fylke', filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'tema', filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'type', filtrerteKurs);
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
                (kurs.tittel && kurs.tittel.includes(sokeordState)) ||
                (kurs.internBeskrivelse && kurs.internBeskrivelse.includes(sokeordState))
        );
    }
    return kursSomSkalFiltreres;
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppe): string[] => {
    const kursMedFilterGruppe = kursArray.filter(kurs => kurs[filterGruppe]);
    let unikeVerdierSet = new Set(kursMedFilterGruppe.map(kurs => kurs[filterGruppe]!));
    return [...unikeVerdierSet.values()];
};
