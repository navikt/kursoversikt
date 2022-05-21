import React, { FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { Heading } from '@navikt/ds-react'
import {
    filtrerKurs,
    lagFilterKriterier,
    lagFylkeFilterKriterier,
    lagUnderkategoriFilterKriterier
} from './filtrertingsMotor';
import { Kurs } from '../models/Kurs';
import { lagPlaceholderlisteForKurs } from './KursPanel/KursPanelSkeleton';
import bemHelper from '../utils/bemHelper';
import Filter, { FilterSpec } from './Filter/Filter';
import IngenKurs from './IngenKurs/IngenKurs';
import KursPanel from './KursPanel/KursPanel';
import Soketreff from './Soketreff/Soketreff';
import Sokeboks from './Sokeboks/Sokeboks';
import { byggFilterTilURL, hentFilterFraUrl, hentSokFraUrl } from '../komponenter/urlLogikk';
import Brodsmulesti from './Brodsmulesti/Brodsmulesti';
import './Kursliste.less';
import { logAmplitudeEvent } from '../utils/amplitude';
import { KursListeContext } from '../utils/KursProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export type FilterState = {
    fylke: string[];
    tema: string[];
    type: string[];
    underkategori: string[];
};

export type FilterGruppe = 'fylke' | 'type' | 'tema' | 'underkategori';
export type FilterGruppeUtenFylke = 'type' | 'tema';
const cls = bemHelper('kursliste');

const hjelpemidlerOgTilrettelegg = 'Hjelpemidler og tilrettelegging'

const KursListe: FunctionComponent = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const {aktiveKurs,kursLaster} = useContext(KursListeContext)
    const [filtrerteKursArray, setFiltrerteKursArray] = useState(Array<Kurs>());
    const [sokeState, setsokeState] = useState<string>(hentSokFraUrl(location.search));

    const [filterState, setFilterState] = useState<FilterState>(
        hentFilterFraUrl(location.search)
    );

    useEffect(()=>{ logAmplitudeEvent('sidevisning', {})}
,[])

    useEffect(() => {
        navigate(byggFilterTilURL(filterState, sokeState), {replace: true});
        setFiltrerteKursArray(filtrerKurs(filterState, sokeState, aktiveKurs));
    }, [sokeState, filterState, aktiveKurs, navigate]);

    let kursliste: ReactNode = <IngenKurs/>;

    if (kursLaster) {
        kursliste = lagPlaceholderlisteForKurs();
    } else if (filtrerteKursArray.length > 0) {
        kursliste = filtrerteKursArray.map((kurs: Kurs) => <KursPanel key={kurs.id} kurs={kurs}/>);
    }

    const underkategorier: Record<string, FilterSpec<string>> = {}
    underkategorier[hjelpemidlerOgTilrettelegg] = {
        tittel: `Undertema til ${hjelpemidlerOgTilrettelegg}`,
        alternativer: lagUnderkategoriFilterKriterier(aktiveKurs),
        selected: filterState.underkategori,
        updateSelected: underkategori => setFilterState({...filterState, underkategori})
    }

    return (
        <>
            <Brodsmulesti brodsmuler={[]}/>
            <div className={cls.block}>
                <header className={cls.element("overskrift")}>
                    <Heading size="xlarge" level="1" className="sentrertTekst">Kurskalender</Heading>
                </header>

                <div className={cls.element('hovedside')}>
                    <span className={cls.element('filterKolonne')}>
                        <Sokeboks sokeFunksjon={setsokeState} verdi={sokeState}/>

                        <Filter
                            tittel="Tema"
                            alternativer={lagFilterKriterier(aktiveKurs, 'tema')}
                            selected={filterState.tema}
                            updateSelected={tema => {
                                if (tema.includes("Hjelpemidler og tilrettelegging")) {
                                    setFilterState({...filterState, tema})
                                } else {
                                    setFilterState({...filterState, tema, underkategori: []})
                                }
                            }}
                            underkategorier={underkategorier}
                        />
                        <Filter
                            tittel="Fylker"
                            alternativer={lagFylkeFilterKriterier(aktiveKurs)}
                            selected={filterState.fylke}
                            updateSelected={fylke => setFilterState({...filterState, fylke})}
                        />
                        <Filter
                            tittel="Type kurs"
                            alternativer={lagFilterKriterier(aktiveKurs, 'type')}
                            selected={filterState.type}
                            updateSelected={type => setFilterState({...filterState, type})}
                        />
                    </span>
                    <span className={cls.element('kursKolonne')}>
                        <Soketreff
                            antallTreff={filtrerteKursArray.length}
                            totaltAntallKurs={aktiveKurs.length}
                        />
                        {kursliste}
                    </span>
                </div>
            </div>
        </>
    );
};

export default KursListe;
