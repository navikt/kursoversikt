import { Kurs } from '../models/Kurs';
import { FilterGruppe, FilterState } from './Kursliste';

export const filterGruppeKeys: FilterGruppe[] = ['fylke', 'type', 'tema'];

export const filtrerKurs = (
    filterState: FilterState,
    sokeOrd: string,
    kursArray: Kurs[]
): Kurs[] => {
    let filtrerteKurs = kursArray;
    filterGruppeKeys.map(filtergruppe => {
        return (filtrerteKurs = utforFiltreringPaaFiltergruppe(
            filterState,
            filtergruppe,
            filtrerteKurs
        ));
    });
    filtrerteKurs = utforSokIListe(sokeOrd, filtrerteKurs);
    return filtrerteKurs;
};

const utforFiltreringPaaFiltergruppe = (
    filterState: FilterState,
    filterGruppe: FilterGruppe,
    kursSomSkalFiltreres: Kurs[]
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

const utforSokIListe = (sokeordState: string, kursSomSkalFiltreres: Kurs[]): Kurs[] => {
    if (sokeordState !== '') {
        return kursSomSkalFiltreres.filter(
            kurs =>
                (kurs.tittel && kurs.tittel.toLowerCase().includes(sokeordState.toLowerCase())) ||
                (kurs.internBeskrivelse &&
                    kurs.internBeskrivelse.toLowerCase().includes(sokeordState.toLowerCase()))
        );
    }
    return kursSomSkalFiltreres;
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppe): string[] => {
    const kursMedFilterGruppe = kursArray.filter(kurs => kurs[filterGruppe]);
    let unikeVerdierSet = new Set(kursMedFilterGruppe.map(kurs => kurs[filterGruppe]!));
    return [...unikeVerdierSet.values()];
};
