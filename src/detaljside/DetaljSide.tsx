import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs, tomtKurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import { RouteComponentProps } from 'react-router';
import { Sidetittel, Systemtittel } from 'nav-frontend-typografi';
import { Panel } from 'nav-frontend-paneler';
import 'nav-frontend-knapper-style';
import { VenstreChevron } from 'nav-frontend-chevron';
import Lenke from 'nav-frontend-lenker';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import Metainfo from './Metainfo/Metainfo';

const cls = bemHelper('detaljside');
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
                <Metainfo kurs={detteKurset} />
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
