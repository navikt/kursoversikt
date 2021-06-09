import { Kurs } from '../models/Kurs';
import {FilterGruppe, FilterGruppeUtenFylke, FilterState} from './Kursliste';

export const filterGruppeKeys: FilterGruppe[] = ['fylke', 'type', 'tema'];

export const filtrerKurs = (
    filterState: FilterState,
    sokeOrd: string,
    kursArray: Kurs[]
): Kurs[] => {
    let filtrerteKurs = kursArray;
    filterGruppeKeys.map(filtergruppe => {
        if(filtergruppe === 'fylke'){
        return (filtrerteKurs = filtrerPaFylke(filtrerteKurs,filterState))
        }
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
            (
                filterState[filterGruppe].includes(kurs[filterGruppe]! as string))
    );
};

const filtrerPaFylke = (kursSomSkalFiltreres: Kurs[], filterState:FilterState ):Kurs[] => {
    if(filterState.fylke.length === 0)
        return kursSomSkalFiltreres
    return kursSomSkalFiltreres.filter(
        kurs =>
            kurs.fylke &&
            (kurs.fylke.some(fylke => filterState['fylke'].includes(fylke)) || kurs.fylke!.includes('Landsdekkende'))
    )
}


const utforSokIListe = (sokeordState: string, kursSomSkalFiltreres: Kurs[]): Kurs[] => {
    if (sokeordState !== '') {
        return kursSomSkalFiltreres.filter(
            kurs =>
                (kurs.tittel && kurs.tittel.toLowerCase().includes(sokeordState.toLowerCase())) ||
                (kurs.beskrivelse &&
                    kurs.beskrivelse.toLowerCase().includes(sokeordState.toLowerCase()))
        );
    }
    return kursSomSkalFiltreres;
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppeUtenFylke): string[] => {
    const kursMedFilterGruppe = kursArray.filter(kurs => kurs[filterGruppe]);
    let unikeVerdierSet = new Set(kursMedFilterGruppe.map(kurs => kurs[filterGruppe]!));
     return Array.from(unikeVerdierSet.values()).sort()
};

export const lagFylkeFilterKriterier = (kursArray: Kurs[] ): string[] => {
    console.log("lagfylkekriterier", kursArray)
    const fylkeflatmap = kursArray.flatMap(kurs => kurs.fylke!)
    let unikeVerdierSet = new Set(fylkeflatmap);
    return  Array.from(unikeVerdierSet.values()).sort()
};
