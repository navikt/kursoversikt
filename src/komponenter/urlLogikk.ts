import { FilterState } from '../kursliste/Kursliste';
import { filterGruppeKeys } from '../kursliste/filtrertingsMotor';
const sokeOrdKey = 'sokeord';

export const hentFilterFraUrl = (urlParams: string) => {
    const query = new URLSearchParams(urlParams);
    return filterGruppeKeys.reduce(
        (filter: FilterState, filtergruppe) => ({
            ...filter,
            [filtergruppe]: query.getAll(filtergruppe),
        }),
        {} as FilterState
    );
};

export const hentSokFraUrl = (urlParams: string): string => {
    const query = new URLSearchParams(urlParams);
    return query.get(sokeOrdKey) || '';
};

const leggTilSokeord = (filtertekst: string, sokeOrd: string) => {
    if (!filtertekst) {
        return sokeOrdKey + '=' + sokeOrd;
    }
    return filtertekst + '&' + sokeOrdKey + '=' + sokeOrd;
};

export const byggFilterTilURL = (filterState: FilterState, sokeOrd: string) => {
    let filter = Object.entries(filterState)
        .map(([kriterie, allekriterier]) =>
            allekriterier.map((ettKriterie: string) => `${kriterie}=${ettKriterie}`).join('&')
        )
        .filter(liste => liste.length !== 0)
        .join('&');
    if (sokeOrd!) {
        filter = leggTilSokeord(filter, sokeOrd);
    }
    return '?' + filter;
};
