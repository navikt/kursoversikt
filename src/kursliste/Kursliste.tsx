import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import KursPanel from './KursPanel/KursPanel';
import Filter from './Filter/Filter';
import './Kursliste.less';
import { filtrer, lagFilterKriterier } from './filtrertingsMotor';
import { Sidetittel } from 'nav-frontend-typografi';
import bemHelper from '../utils/bemHelper';

export interface FilterState {
    fylke: string[];
    tema: string[];
    type: string[];
}

export type FilterGruppe = 'fylke' | 'type' | 'tema';

const cls = bemHelper('kursliste');

const KursListe: FunctionComponent = () => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
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
                    {filtrerteKursArray.map((kurs: Kurs) => {
                        return <KursPanel key={kurs.id} kurs={kurs} />;
                    })}
                </span>
            </div>
        </div>
    );
};

export default KursListe;
