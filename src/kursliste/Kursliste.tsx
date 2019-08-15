import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react';
import { Sidetittel } from 'nav-frontend-typografi';

import {
    byggFilterTilURL,
    filtrer,
    hentFilterFraUrl,
    hentSokFraUrl,
    lagFilterKriterier,
} from './filtrertingsMotor';
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
import { RouteComponentProps } from 'react-router';

export type FilterState = {
    fylke: string[];
    tema: string[];
    type: string[];
};

export type FilterGruppe = 'fylke' | 'type' | 'tema';
const cls = bemHelper('kursliste');

const KursListe: FunctionComponent<RouteComponentProps> = props => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [lasterInnKurs, setLasterInnKurs] = useState<boolean>(true);
    const [sokeState, setsokeState] = useState<string>(hentSokFraUrl(props.location.search));
    const [filterState, setFilterState] = useState<FilterState>(
        hentFilterFraUrl(props.location.search)
    );

    const hentOgSettKurs = () => {
        hentKurs().then(resultat => {
            setKursArray(resultat);
            setFiltrerteKursArray(resultat);
            setLasterInnKurs(false);
            setFiltrerteKursArray(filtrer(filterState, sokeState, resultat));
        });
    };

    const oppdaterFilter = () => {
        setFiltrerteKursArray(filtrer(filterState, sokeState, kursArray));
        props.history.replace(byggFilterTilURL(filterState, sokeState));
    };

    useEffect(hentOgSettKurs, []);

    useEffect(oppdaterFilter, [sokeState, filterState]);

    const handleFilterToggle = (filterGruppe: FilterGruppe, filterKriterie: string) => {
        if (filterState[filterGruppe].includes(filterKriterie)) {
            fjernFilterKriterie(filterGruppe, filterKriterie);
        } else {
            leggTilFilterKriterie(filterGruppe, filterKriterie);
        }
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

    let kursliste: ReactNode = <IngenKurs />;

    if (lasterInnKurs) {
        kursliste = lagPlaceholderlisteForKurs();
    } else if (filtrerteKursArray.length > 0) {
        kursliste = filtrerteKursArray.map((kurs: Kurs) => <KursPanel key={kurs.id} kurs={kurs} />);
    }

    const fritekstSok = (sokeTekst: string) => {
        setsokeState(sokeTekst);
    };

    const finnCheckedStatus = (filterGruppe: FilterGruppe, filterAlternativ: string) => {
        return filterState[filterGruppe].includes(filterAlternativ);
    };

    return (
        <div className={cls.block}>
            <header className="overskrift">
                <Sidetittel className="sentrertTekst">Kurskalender</Sidetittel>
            </header>

            <div className={cls.element('hovedside')}>
                <span className={cls.element('filterKolonne')}>
                    <Sokeboks sokeFunksjon={fritekstSok} verdi={sokeState} />
                    <Filter
                        tittel={'Tema'}
                        alternativer={lagFilterKriterier(kursArray, 'tema')}
                        filterGruppe={'tema'}
                        toggleFilter={handleFilterToggle}
                        bestemCheckedhet={finnCheckedStatus}
                    />
                    <Filter
                        tittel={'Fylker'}
                        alternativer={lagFilterKriterier(kursArray, 'fylke')}
                        filterGruppe={'fylke'}
                        toggleFilter={handleFilterToggle}
                        bestemCheckedhet={finnCheckedStatus}
                    />
                    <Filter
                        tittel={'Type kurs'}
                        alternativer={lagFilterKriterier(kursArray, 'type')}
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
