import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';
import { Sidetittel } from 'nav-frontend-typografi';
import { filtrerKurs, lagFilterKriterier } from './filtrertingsMotor';
import { hentKurs } from '../api/pindenaAPI';
import { Kurs } from '../models/Kurs';
import { lagPlaceholderlisteForKurs } from './KursPanel/KursPanelSkeleton';
import bemHelper from '../utils/bemHelper';
import Filter from './Filter/Filter';
import IngenKurs from './IngenKurs/IngenKurs';
import KursPanel from './KursPanel/KursPanel';
import Soketreff from './Soketreff/Soketreff';
import Sokeboks from './Sokeboks/Sokeboks';
import { lagNyttFilter } from './checkboksKontroller';
import { byggFilterTilURL, hentFilterFraUrl, hentSokFraUrl } from '../komponenter/urlLogikk';
import Brodsmulesti from './Brodsmulesti/Brodsmulesti';
import './Kursliste.less';
import {kursapiUrl, sfkursapiUrl} from "../utils/lenker";

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
        hentKurs(kursapiUrl).then(async pindenaresultat => {
            hentKurs(sfkursapiUrl).then( sfresultat =>{
                console.log("hentOgSettDetteKurset pindenaresultat", pindenaresultat);
                console.log("hentOgSettDetteKurset sfresultat", sfresultat);
                const resultat = pindenaresultat.concat(sfresultat)
                console.log("hentOgSettDetteKurset resultat", resultat);
                setKursArray(resultat);
                setFiltrerteKursArray(resultat);
                setLasterInnKurs(false);
                setFiltrerteKursArray(filtrerKurs(filterState, sokeState, resultat));
            })


        });
    };
    const brukFilterPaKurslisteOgOppdaterUrl = () => {
        setFiltrerteKursArray(filtrerKurs(filterState, sokeState, kursArray));
        props.history.replace(byggFilterTilURL(filterState, sokeState));
    };

    useEffect(hentOgSettKurs, []);
    useEffect(brukFilterPaKurslisteOgOppdaterUrl, [sokeState, filterState]);

    const handleFilterToggle = (filterGruppe: FilterGruppe, filterKriterie: string) => {
        setFilterState(lagNyttFilter(filterGruppe, filterKriterie, filterState));
    };

    let kursliste: ReactNode = <IngenKurs />;

    if (lasterInnKurs) {
        kursliste = lagPlaceholderlisteForKurs();
    } else if (filtrerteKursArray.length > 0) {
        kursliste = filtrerteKursArray.map((kurs: Kurs) => <KursPanel key={kurs.id} kurs={kurs} />);
    }

    const sjekkOmAlternativErChecked = (filterGruppe: FilterGruppe, filterAlternativ: string) => {
        return filterState[filterGruppe].includes(filterAlternativ);
    };

    return (
        <>
            <Brodsmulesti brodsmuler={[]} />
            <div className={cls.block}>
                <header className="overskrift">
                    <Sidetittel className="sentrertTekst">Kurskalender</Sidetittel>
                </header>

                <div className={cls.element('hovedside')}>
                    <span className={cls.element('filterKolonne')}>
                        <Sokeboks sokeFunksjon={setsokeState} verdi={sokeState} />
                        <Filter
                            tittel={'Tema'}
                            alternativer={lagFilterKriterier(kursArray, 'tema')}
                            filterGruppe={'tema'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
                        />
                        <Filter
                            tittel={'Fylker'}
                            alternativer={lagFilterKriterier(kursArray, 'fylke')}
                            filterGruppe={'fylke'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
                        />
                        <Filter
                            tittel={'Type kurs'}
                            alternativer={lagFilterKriterier(kursArray, 'type')}
                            filterGruppe={'type'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
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
        </>
    );
};

export default KursListe;
