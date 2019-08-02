import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs, tomtKurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import { RouteComponentProps } from 'react-router';
import { Sidetittel } from 'nav-frontend-typografi';
import 'nav-frontend-knapper-style';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import Metainfo from './Metainfo/Metainfo';
import OmKurset from './OmKurset/OmKurset';

const cls = bemHelper('detaljside');

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [kurs, setKurs] = useState<Kurs>(tomtKurs);

    useEffect(() => {
        const hentOgSettDetteKurset = async () => {
            const resultat = await hentKurs();
            let kursIdFraUrl = props.location.pathname.split('/')[1];
            await setKurs(
                resultat.filter(kurs => {
                    return kurs.id === parseInt(kursIdFraUrl);
                })[0]
            );
        };
        hentOgSettDetteKurset();
    }, [props.location.pathname]);

    return (
        <div className={cls.block}>
            <header className="overskrift">
                <Sidetittel className="sentrertTekst">{kurs.tittel}</Sidetittel>
            </header>
            <main className={cls.element('innhold')}>
                <Metainfo kurs={kurs} />
                <OmKurset kurs={kurs} />
            </main>
        </div>
    );
};

export default DetaljSide;
