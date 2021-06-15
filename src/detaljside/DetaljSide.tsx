import React, { FunctionComponent, useEffect, useState } from 'react';
import { Kurs } from '../models/Kurs';
import { hentKurs } from '../api/kursAPI';
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
import {sfkursapiUrl} from "../utils/lenker";
import {logAmplitudeEvent} from "../utils/amplitude";


const cls = bemHelper('detaljside');

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [kurs, setKurs] = useState<Kurs | undefined>(undefined);

    const loggDetaljvisning = (kursTittel: string) => {
        logAmplitudeEvent('sidevisning', {
            kurstittel: kursTittel
        });
    };

    useEffect(() => {
        const hentOgSettDetteKurset = async () => {
                hentKurs(sfkursapiUrl).then(sfresultat => {
                    const resultat = sfresultat
                    let kursIdFraUrl = props.location.pathname.split('/')[1];
                    let kursFraSalesforce =  resultat.filter(kurs => {
                        return kurs.id === kursIdFraUrl;
                    })[0]
                    setKurs(kursFraSalesforce);
                    loggDetaljvisning(kursFraSalesforce.tittel)
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
