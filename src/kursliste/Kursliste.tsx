import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import KursPanel from './KursPanel/KursPanel';
import Filter from './Filter/Filter';
import './Kursliste.less';
import { filtrer, lagFilterKriterier } from './filtrertingsMotor';
import { Sidetittel } from 'nav-frontend-typografi';

export interface FilterState {
    Fylke: string[];
    Tema: string[];
    'Type kurs': string[];
}

export type FilterGruppe = 'Fylke' | 'Type kurs' | 'Tema';

const KursListe: FunctionComponent = () => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [filterState, setFilterState] = useState<FilterState>({
        Fylke: [],
        Tema: [],
        'Type kurs': [],
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

    const unikeFylker = lagFilterKriterier(kursArray, 'Fylke');
    const unikeKursTyper = lagFilterKriterier(kursArray, 'Type kurs');
    const unikeTema = lagFilterKriterier(kursArray, 'Tema');

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
        <div>
            <header className={'overskrift'}>
                <Sidetittel className={'sentrert__tekst'}>Kurskalender</Sidetittel>
            </header>
            <div className={'hovedside'}>
                <span className={'filterKolonne'}>
                    <Filter
                        tittel={'Fylker'}
                        alternativer={unikeFylker}
                        filterGruppe={'Fylke'}
                        toggleFilter={handleFilterToggle}
                    />
                    <Filter
                        tittel={'Type kurs'}
                        alternativer={unikeKursTyper}
                        filterGruppe={'Type kurs'}
                        toggleFilter={handleFilterToggle}
                    />
                    <Filter
                        tittel={'Tema'}
                        alternativer={unikeTema}
                        filterGruppe={'Tema'}
                        toggleFilter={handleFilterToggle}
                    />
                </span>
                <span className={'kursKolonne'}>
                    {filtrerteKursArray.map((kurs: Kurs) => {
                        return <KursPanel key={kurs.RegistrationID} kurs={kurs} />;
                    })}
                </span>
            </div>
        </div>
    );
};

export default KursListe;
