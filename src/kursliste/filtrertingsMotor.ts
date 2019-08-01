import { Kurs } from '../models/Kurs';
import { FilterGruppe, FilterState } from './Kursliste';

export const filtrer = (filterState: FilterState, kursArray: Kurs[]): Kurs[] => {
    let filtrerteKurs = kursArray;
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'fylke', filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'tema', filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, 'type', filtrerteKurs);
    return filtrerteKurs;
};

const utforFiltreringPaaFiltergruppe = (
    filterState: FilterState,
    filterGruppe: FilterGruppe,
    kursSomSkalFiltreres: Array<Kurs>
): Kurs[] => {
    return kursSomSkalFiltreres.filter(kurs => {
        if (filterState[filterGruppe].length > 0) {
            if (!kurs[filterGruppe] || !filterState[filterGruppe].includes(kurs[filterGruppe])) {
                return false;
            }
        }
        return true;
    });
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppe): string[] => {
    const kursMedFylke = kursArray.filter(kurs => {
        if (!kurs[filterGruppe]) {
            return false;
        }
        return true;
    });
    let unikeVerdierSet = new Set(kursMedFylke.map(kurs => kurs[filterGruppe]));
    return [...unikeVerdierSet.values()];
};
