import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs } from '../models/Kurs';
import { hentKurs } from '../api/pindenaAPI';
import { RouteComponentProps } from 'react-router';
import { Sidetittel } from 'nav-frontend-typografi';
import 'nav-frontend-knapper-style';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import Metainfo from './Metainfo/Metainfo';
import OmKurset from './OmKurset/OmKurset';
import Skeleton from 'react-loading-skeleton';
import MetainfoSkeleton from './Metainfo/MetainfoSkeleton';
import Brodsmulesti from '../kursliste/Brodsmulesti/Brodsmulesti';
import {kursapiUrl, sfkursapiUrl} from "../utils/lenker";


const cls = bemHelper('detaljside');

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [kurs, setKurs] = useState<Kurs | undefined>(undefined);

    useEffect(() => {
        const hentOgSettDetteKurset = async () => {
            console.log("hentOgSettDetteKurset");
            hentKurs(kursapiUrl).then(async pindenaresultat => {
                hentKurs(sfkursapiUrl).then(sfresultat => {
                    const resultat = pindenaresultat.concat(sfresultat)
                    let kursIdFraUrl = props.location.pathname.split('/')[1];
                    setKurs(
                        resultat.filter(kurs => {
                            return kurs.id === kursIdFraUrl;
                        })[0]
                    );
                })
            })
        };
        hentOgSettDetteKurset();
    }, [props.location.pathname]);

    return (
        <>
            <Brodsmulesti brodsmuler={[{url: '/', title: 'Om kurset', handleInApp: true}]} />
            <div className={cls.block}>
                <header className={cls.element('overskrift')}>
                    <Sidetittel className={cls.element('kurstittel')}>
                        {kurs ? kurs.tittel : <Skeleton width={200} />}
                    </Sidetittel>
                </header>
                <main className={cls.element('innhold')}>
                    {kurs ? <Metainfo kurs={kurs} /> : <MetainfoSkeleton />}
                    <OmKurset kurs={kurs} />
                </main>
            </div>
        </>
    );
};

export default DetaljSide;
