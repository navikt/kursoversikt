import { FilterGruppe, FilterState } from './Kursliste';

export const lagNyttFilter = (
    filterGruppe: FilterGruppe,
    filterKriterie: string,
    filterState: FilterState
): FilterState => {
    if (filterState[filterGruppe].includes(filterKriterie)) {
        return fjernFilterKriterie(filterGruppe, filterKriterie, filterState);
    } else {
        return leggTilFilterKriterie(filterGruppe, filterKriterie, filterState);
    }
};

const leggTilFilterKriterie = (
    filterGruppe: FilterGruppe,
    kriterieSomSkalLeggesTil: string,
    filterState: FilterState
): FilterState => {
    const nyttFilter = { ...filterState };
    nyttFilter[filterGruppe].push(kriterieSomSkalLeggesTil);
    return nyttFilter;
};

const fjernFilterKriterie = (
    filterGruppe: FilterGruppe,
    krietrieSomSkalFjernes: string,
    filterState: FilterState
): FilterState => {
    const nyttFilter = { ...filterState };
    nyttFilter[filterGruppe] = nyttFilter[filterGruppe].filter(
        filter => filter !== krietrieSomSkalFjernes
    );

    /* Fjernes tema, så fjernes underkategoriene (som hører til tema) også. */
    if (filterGruppe === 'tema') {
        nyttFilter.underkategori = []
    }
    return nyttFilter;
};
