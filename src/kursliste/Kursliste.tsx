import React, { FunctionComponent, useEffect, useState } from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import FlipMove from 'react-flip-move';

import { filtrer, lagFilterKriterier } from './filtrertingsMotor';
import { hentKurs } from '../api/pindenaAPI';
import { Kurs } from '../models/Kurs';
import { lagPlaceholderlisteForKurs } from './KursPanel/KursPanelSkeleton';
import bemHelper from '../utils/bemHelper';
import Filter from './Filter/Filter';
import IngenKurs from './IngenKurs/IngenKurs';
import KursPanel from './KursPanel/KursPanel';
import './Kursliste.less';

export interface FilterState {
    fylke: string[];
    tema: string[];
    type: string[];
}

export type FilterGruppe = 'fylke' | 'type' | 'tema';

const cls = bemHelper('kursliste');

const fadeInAnimation = {
    from: {
        transform: 'scale(0.9)',
        opacity: '0',
    },
    to: {
        transform: 'none',
        opacity: '1',
    },
};

const fadeOutAnimation = {
    from: {
        opacity: '1',
    },
    to: {
        transform: 'scale(0.9)',
        opacity: '0',
    },
};

const KursListe: FunctionComponent = () => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [lasterInnKurs, setLasterInnKurs] = useState<boolean>(true);
    const [filterState, setFilterState] = useState<FilterState>({
        fylke: [],
        tema: [],
        type: [],
    });

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
        setFiltrerteKursArray(filtrer(filterState, kursArray));
    }, [kursArray, filterState]);

    const unikeFylker = lagFilterKriterier(kursArray, 'fylke');
    const unikeKursTyper = lagFilterKriterier(kursArray, 'type');
    const unikeTema = lagFilterKriterier(kursArray, 'tema');

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

    return (
        <div className={cls.block}>
            <header className="overskrift">
                <Sidetittel className="sentrertTekst">Kurskalender</Sidetittel>
            </header>
            <div className={cls.element('hovedside')}>
                <span className={cls.element('filterKolonne')}>
                    <Filter
                        tittel={'Fylker'}
                        alternativer={unikeFylker}
                        filterGruppe={'fylke'}
                        toggleFilter={handleFilterToggle}
                    />
                    <Filter
                        tittel={'Type kurs'}
                        alternativer={unikeKursTyper}
                        filterGruppe={'type'}
                        toggleFilter={handleFilterToggle}
                    />
                    <Filter
                        tittel={'Tema'}
                        alternativer={unikeTema}
                        filterGruppe={'tema'}
                        toggleFilter={handleFilterToggle}
                    />
                </span>
                <span className={cls.element('kursKolonne')}>
                    {lasterInnKurs ? (
                        lagPlaceholderlisteForKurs()
                    ) : (
                        <FlipMove
                            enterAnimation={fadeInAnimation}
                            leaveAnimation={fadeOutAnimation}
                            className={cls.element('kursKolonne__inner')}
                        >
                            {filtrerteKursArray.map((kurs: Kurs) => (
                                <div key={kurs.id}>
                                    <KursPanel kurs={kurs} />
                                </div>
                            ))}
                        </FlipMove>
                    )}
                    <IngenKurs vis={filtrerteKursArray.length === 0 && !lasterInnKurs} />
                </span>
            </div>
        </div>
    );
};

export default KursListe;
