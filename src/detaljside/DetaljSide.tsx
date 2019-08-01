import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs, tomtKurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import { RouteComponentProps } from 'react-router';
import { Element, Normaltekst, Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import { Panel } from 'nav-frontend-paneler';
import 'nav-frontend-knapper-style';
import './DetaljSide.less';
import kalenderIkon from '../Ikoner/calendar-3.svg';
import kursTypeIkon from '../Ikoner/person-2.svg';
import { VenstreChevron } from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import {
    lagPaameldingsfristkomponent,
    lagStedkomponent,
    lagDatoTekst,
} from '../utils/kursMetaInfoKomponenter';

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [detteKurset, setDetteKurset] = useState<Kurs>(tomtKurs);

    useEffect(() => {
        const hentOgSettDetteKurset = async () => {
            const resultat = await hentKurs();
            let kursIdFraUrl = props.location.pathname.split('/')[1];
            await setDetteKurset(
                resultat.filter(kurs => {
                    return kurs.id === parseInt(kursIdFraUrl);
                })[0]
            );
        };
        hentOgSettDetteKurset();
    }, [props.location.pathname]);

    const createMarkup = () => ({
        __html: detteKurset.forsideBeskrivelse,
    });

    return (
        <div>
            <header className={'overskrift'}>
                <Sidetittel className={'sentrert__tekst'}>{detteKurset.tittel}</Sidetittel>
            </header>
            <div className={'detaljVisning'}>
                <Panel className={'MetaInfoPanel'}>
                    <div className={'MetaInfoPanel__egenskapTop'}>
                        <img
                            className={'MetaInfoPanel__ikon'}
                            src={kalenderIkon}
                            alt="kalenderIkon"
                        />
                        <Element className={'MetaInfoPanel__infoTekst'}>
                            <b>Når:&nbsp;</b>
                        </Element>
                        {lagDatoTekst(
                            detteKurset.starttidspunkt,
                            detteKurset.sluttidspunkt,
                            'MetaInfoPanel__dato'
                        )}
                    </div>
                    {lagPaameldingsfristkomponent(detteKurset.pameldingsfrist)}
                    {lagStedkomponent(detteKurset)}
                    <div className={'MetaInfoPanel__egenskapTop'}>
                        <img
                            className={'MetaInfoPanel__ikon'}
                            src={kursTypeIkon}
                            alt="kurstypeikon"
                        />
                        <Normaltekst className={'MetaInfoPanel__infoTekst'}>
                            <b>Type kurs:&nbsp;</b>
                            {/* TODO: Kan configurable_custom være null? */}
                            {detteKurset.type}
                        </Normaltekst>
                    </div>
                </Panel>
                <Panel className={'BeskrivelsePanel'}>
                    <header className={'overskrift'}>
                        <Systemtittel>Om kurset</Systemtittel>
                    </header>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                    <Lenke
                        className={'active knapp knapp--hoved margintop2'}
                        href={detteKurset.registreringsUrl}
                    >
                        Meld deg på
                    </Lenke>
                    <div className={'BeskrivelsePanel__tilbakelenke'}>
                        <Lenke href={'/kursoversikt'}>
                            <VenstreChevron type={'venstre'} />
                            Tilbake til kursoversikten
                        </Lenke>
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default DetaljSide;
