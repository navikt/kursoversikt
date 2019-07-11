import {Kurs} from "../models/Kurs";
import {FilterState, FilterGruppe} from "./Kursliste";


export const filtrer = (filterState: FilterState, kursArray: Kurs[]): Kurs[] => {
    console.log("filtrer");
    let filtrerteKurs = kursArray;
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, "Fylke", filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, "Tema", filtrerteKurs);
    filtrerteKurs = utforFiltreringPaaFiltergruppe(filterState, "Type kurs", filtrerteKurs);
    return filtrerteKurs;
};

const utforFiltreringPaaFiltergruppe = (filterState: FilterState, filterGruppe: FilterGruppe, kursSomSkalFiltreres: Array<Kurs>): Kurs[] => {
    const filtrerteKurs = kursSomSkalFiltreres.filter(kurs => {
            if (filterState[filterGruppe].length > 0) {
                if (!kurs.configurable_custom || !kurs.configurable_custom[filterGruppe] || !filterState[filterGruppe].includes(kurs.configurable_custom[filterGruppe])) {
                    return false;
                }
            }
            return true;
        }
    );
    return filtrerteKurs;
};

export const lagFilterKriterier = (kursArray: Kurs[], filterGruppe: FilterGruppe): string[] => {
    const kursMedFylke = kursArray.filter(kurs => {
        if (!kurs.configurable_custom || !kurs.configurable_custom[filterGruppe]) {
            return false;
        }
        return true;
    });
    let unikeVerdierSet = new Set(kursMedFylke.map(kurs => kurs.configurable_custom[filterGruppe]));
    return [...unikeVerdierSet.values()];
};