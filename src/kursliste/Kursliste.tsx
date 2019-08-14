import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react';
import { Sidetittel } from 'nav-frontend-typografi';

import { filtrer, lagFilterKriterier } from './filtrertingsMotor';
import { hentKurs } from '../api/pindenaAPI';
import { Kurs } from '../models/Kurs';
import { lagPlaceholderlisteForKurs } from './KursPanel/KursPanelSkeleton';
import bemHelper from '../utils/bemHelper';
import Filter from './Filter/Filter';
import IngenKurs from './IngenKurs/IngenKurs';
import KursPanel from './KursPanel/KursPanel';
import './Kursliste.less';
import Soketreff from './Soketreff/Soketreff';
import Sokeboks from './Sokeboks/Sokeboks';
import {RouteComponentProps} from "react-router";

export interface FilterState {
    fylke: string[];
    tema: string[];
    type: string[];
}

export type FilterGruppe = 'fylke' | 'type' | 'tema';
export const filterGruppeValues: FilterGruppe[]= ['fylke', 'type', 'tema'];
const cls = bemHelper('kursliste');

const KursListe: FunctionComponent<RouteComponentProps> = props => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [lasterInnKurs, setLasterInnKurs] = useState<boolean>(true);
    const [filterState, setFilterState] = useState<FilterState>({
        fylke: [],
        tema: [],
        type: [],
    });
    const [sokeState, setsokeState] = useState<string>('');

    useEffect(() => {
        const hentOgSettKurs = async () => {
            const resultat = await hentKurs();
            setKursArray(resultat);
            setFiltrerteKursArray(resultat);
            setLasterInnKurs(false);
        };

        hentOgSettKurs();
    }, []);
    useEffect(() => {
        brukFilterFraUrl();
        setFiltrerteKursArray(filtrer(filterState, sokeState, kursArray, props));
    }, [kursArray, sokeState, filterState]);


    const unikeFylker = lagFilterKriterier(kursArray, 'fylke');
    const unikeKursTyper = lagFilterKriterier(kursArray, 'type');
    const unikeTema = lagFilterKriterier(kursArray, 'tema');

    const handleFilterToggle = (filterGruppe: FilterGruppe, filterKriterie: string) => {
        if (filterState[filterGruppe].includes(filterKriterie)) {
            fjernFilterKriterie(filterGruppe, filterKriterie);
        } else {
            leggTilFilterKriterie(filterGruppe, filterKriterie);
        }
        console.log(filterState);
    };

    const leggTilFilterKriterie = (
        filterGruppe: FilterGruppe,
        kriterieSomSkalLeggesTil: string
    ) => {
        const nyttFilter = { ...filterState };
        nyttFilter[filterGruppe].push(kriterieSomSkalLeggesTil);
        setFilterState(nyttFilter);
    };
    const fjernFilterKriterie = (filterGruppe: FilterGruppe, krietrieSomSkalFjernes: string) => {
        const nyttFilter = { ...filterState };
        nyttFilter[filterGruppe] = nyttFilter[filterGruppe].filter(
            filter => filter !== krietrieSomSkalFjernes
        );
        setFilterState(nyttFilter);
    };
    const fritekstSok = (sokeTekst: string) => {
        setsokeState(sokeTekst);
    };

    const finnCheckedStatus = (filterGruppe: FilterGruppe, filterAlternativ: string) => {
        return filterState[filterGruppe].includes(filterAlternativ);
    };
    const brukFilterFraUrl = () => {
        const urlParams = props.location.search;
        const filterFraUrl = hentFilterFraUrl(urlParams);

        /*console.log("filterFraUrl",filterFraUrl.keys().next());
        console.log("filterFraUrl.getAll()",filterFraUrl.values().next());
        console.log("filterFraUrl.getAll()",filterFraUrl.getAll("Tema"));
        console.log("props.location.search",props.location.search);*/
    };

    const hentFilterFraUrl = (urlParams: string) => {

        const query = new URLSearchParams(urlParams);
        return query;
    };



    let kursliste: ReactNode = <IngenKurs />;
    if (lasterInnKurs) {
        kursliste = lagPlaceholderlisteForKurs();
    } else if (filtrerteKursArray.length > 0) {
        kursliste = filtrerteKursArray.map((kurs: Kurs) => <KursPanel key={kurs.id} kurs={kurs} />);
    }

    return (
        <div className={cls.block}>
            <header className="overskrift">
                <Sidetittel className="sentrertTekst">Kurskalender</Sidetittel>
            </header>

            <div className={cls.element('hovedside')}>
                <span className={cls.element('filterKolonne')}>
                    <Sokeboks sokeFunksjon={fritekstSok} />
                    <Filter
                        tittel={'Tema'}
                        alternativer={unikeTema}
                        filterGruppe={'tema'}
                        toggleFilter={handleFilterToggle}
                        bestemCheckedhet={finnCheckedStatus}
                    />
                    <Filter
                        tittel={'Fylker'}
                        alternativer={unikeFylker}
                        filterGruppe={'fylke'}
                        toggleFilter={handleFilterToggle}
                        bestemCheckedhet={finnCheckedStatus}
                    />
                    <Filter
                        tittel={'Type kurs'}
                        alternativer={unikeKursTyper}
                        filterGruppe={'type'}
                        toggleFilter={handleFilterToggle}
                        bestemCheckedhet={finnCheckedStatus}
                    />
                </span>
                <span className={cls.element('kursKolonne')}>
                    <Soketreff
                        antallTreff={filtrerteKursArray.length}
                        totaltAntallKurs={kursArray.length}
                    />
                    {kursliste}
                </span>
            </div>
        </div>
    );
};

export default KursListe;
