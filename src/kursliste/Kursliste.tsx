import React, {FunctionComponent, useEffect, useState, ReactNode} from 'react';
import {RouteComponentProps} from 'react-router';
import {Sidetittel} from 'nav-frontend-typografi';
import {
    filtrerKurs,
    lagFilterKriterier,
    lagFylkeFilterKriterier,
    lagUnderkategoriFilterKriterier
} from './filtrertingsMotor';
import {hentKurs} from '../api/kursAPI';
import {Kurs} from '../models/Kurs';
import {lagPlaceholderlisteForKurs} from './KursPanel/KursPanelSkeleton';
import bemHelper from '../utils/bemHelper';
import Filter from './Filter/Filter';
import IngenKurs from './IngenKurs/IngenKurs';
import KursPanel from './KursPanel/KursPanel';
import Soketreff from './Soketreff/Soketreff';
import Sokeboks from './Sokeboks/Sokeboks';
import {lagNyttFilter} from './checkboksKontroller';
import {byggFilterTilURL, hentFilterFraUrl, hentSokFraUrl} from '../komponenter/urlLogikk';
import Brodsmulesti from './Brodsmulesti/Brodsmulesti';
import './Kursliste.less';
import {kursapiUrl} from "../utils/lenker";
import {logAmplitudeEvent} from "../utils/amplitude";

export type FilterState = {
    fylke: string[];
    tema: string[];
    type: string[];
    underkategori: string[];
};

export type FilterGruppe = 'fylke' | 'type' | 'tema' | 'underkategori';
export type FilterGruppeUtenFylke = 'type' | 'tema';
const cls = bemHelper('kursliste');

const KursListe: FunctionComponent<RouteComponentProps> = props => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [lasterInnKurs, setLasterInnKurs] = useState<boolean>(true);
    const [sokeState, setsokeState] = useState<string>(hentSokFraUrl(props.location.search));
    const [filterState, setFilterState] = useState<FilterState>(
        hentFilterFraUrl(props.location.search)
    );

    const loggOversiktsvisning = () => {
        logAmplitudeEvent('sidevisning', {});
    };

    const hentOgSettKurs = () => {
        hentKurs(kursapiUrl).then(sfresultat => {
            const resultat = sfresultat
            setKursArray(resultat);
            setLasterInnKurs(false);
            loggOversiktsvisning()
        })
    }

    const brukFilterPaKurslisteOgOppdaterUrl = () => {
        setFiltrerteKursArray(filtrerKurs(filterState, sokeState, kursArray));
        props.history.replace(byggFilterTilURL(filterState, sokeState));
    };

    useEffect(hentOgSettKurs, []);
    useEffect(brukFilterPaKurslisteOgOppdaterUrl, [sokeState, filterState, kursArray, props.history]);

    const handleFilterToggle = (filterGruppe: FilterGruppe, filterKriterie: string) => {
        setFilterState(lagNyttFilter(filterGruppe, filterKriterie, filterState));
    };

    let kursliste: ReactNode = <IngenKurs/>;

    if (lasterInnKurs) {
        kursliste = lagPlaceholderlisteForKurs();
    } else if (filtrerteKursArray.length > 0) {
        kursliste = filtrerteKursArray.map((kurs: Kurs) => <KursPanel key={kurs.id} kurs={kurs}/>);
    }

    const sjekkOmAlternativErChecked = (filterGruppe: FilterGruppe, filterAlternativ: string) => {
        return filterState[filterGruppe].includes(filterAlternativ);
    };

    return (
        <>
            <Brodsmulesti brodsmuler={[]}/>
            <div className={cls.block}>
                <header className="overskrift">
                    <Sidetittel className="sentrertTekst">Kurskalender</Sidetittel>
                </header>

                <div className={cls.element('hovedside')}>
                    <span className={cls.element('filterKolonne')}>
                        <Sokeboks sokeFunksjon={setsokeState} verdi={sokeState}/>
                        <Filter
                            tittel={'Tema'}
                            alternativer={lagFilterKriterier(kursArray, 'tema')}
                            filterGruppe={'tema'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
                            underkategorier={lagUnderkategoriFilterKriterier(kursArray)}
                        />
                        <Filter
                            tittel={'Fylker'}
                            alternativer={lagFylkeFilterKriterier(kursArray)}
                            filterGruppe={'fylke'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
                            underkategorier={[]}
                        />
                        <Filter
                            tittel={'Type kurs'}
                            alternativer={lagFilterKriterier(kursArray, 'type')}
                            filterGruppe={'type'}
                            toggleFilter={handleFilterToggle}
                            checked={sjekkOmAlternativErChecked}
                            underkategorier={[]}
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
