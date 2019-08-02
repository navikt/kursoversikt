import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs, tomtKurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import { RouteComponentProps } from 'react-router';
import { Element, Normaltekst, Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import { Panel } from 'nav-frontend-paneler';
import 'nav-frontend-knapper-style';
import kalenderIkon from '../ikoner/calendar-3.svg';
import kursTypeIkon from '../ikoner/person-2.svg';
import { VenstreChevron } from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import { lagDatoTekst } from '../kursliste/KursPanel/kursMetaInfoKomponenter';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import StedInfo from '../komponenter/StedInfo/StedInfo';
import PameldingsfristInfo from '../komponenter/PameldingsfristInfo/PameldingsfristInfo';

const cls = bemHelper('detaljside');
const metainfoCls = bemHelper(cls.element('metainfoPanel'));
const beskrivelseCls = bemHelper(cls.element('beskrivelsePanel'));

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
        <div className={cls.block}>
            <header className="overskrift">
                <Sidetittel className="sentrertTekst">{detteKurset.tittel}</Sidetittel>
            </header>
            <main className={cls.element('innhold')}>
                <Panel className={metainfoCls.block}>
                    <div className={metainfoCls.element('egenskapTop')}>
                        <img
                            className={metainfoCls.element('ikon')}
                            src={kalenderIkon}
                            alt="kalenderIkon"
                        />
                        <Element className={metainfoCls.element('infoTekst')}>
                            <b>Når:&nbsp;</b>
                        </Element>
                        {lagDatoTekst(
                            detteKurset.starttidspunkt,
                            detteKurset.sluttidspunkt,
                            metainfoCls.element('dato')
                        )}
                    </div>
                    <PameldingsfristInfo pameldingsfrist={detteKurset.pameldingsfrist} />
                    <StedInfo sted={detteKurset.sted} />
                    <div className={metainfoCls.element('egenskapTop')}>
                        <img
                            className={metainfoCls.element('ikon')}
                            src={kursTypeIkon}
                            alt="kurstypeikon"
                        />
                        <Normaltekst className={metainfoCls.element('infoTekst')}>
                            <b>Type kurs:&nbsp;</b>
                            {/* TODO: Kan configurable_custom være null? */}
                            {detteKurset.type}
                        </Normaltekst>
                    </div>
                </Panel>
                <Panel className={beskrivelseCls.block}>
                    <header className={'overskrift'}>
                        <Systemtittel>Om kurset</Systemtittel>
                    </header>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                    <Lenke
                        className="active knapp knapp--hoved"
                        href={detteKurset.registreringsUrl}
                    >
                        Meld deg på
                    </Lenke>
                    <div className={beskrivelseCls.element('tilbakelenke')}>
                        <Lenke href={'/kursoversikt'}>
                            <VenstreChevron type={'venstre'} />
                            Tilbake til kursoversikten
                        </Lenke>
                    </div>
                </Panel>
            </main>
        </div>
    );
};

export default DetaljSide;
