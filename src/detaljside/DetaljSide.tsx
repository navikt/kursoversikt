import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Kurs} from '../models/Kurs';
import {RouteComponentProps} from 'react-router';
import {Sidetittel} from 'nav-frontend-typografi';
import 'nav-frontend-knapper-style';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import Metainfo from './Metainfo/Metainfo';
import OmKurset from './OmKurset/OmKurset';
import Skeleton from 'react-loading-skeleton';
import MetainfoSkeleton from './Metainfo/MetainfoSkeleton';
import Brodsmulesti from '../kursliste/Brodsmulesti/Brodsmulesti';
import {logAmplitudeEvent} from "../utils/amplitude";
import {KursListeContext} from "../utils/KursProvider";


const cls = bemHelper('detaljside');

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [kurs, setKurs] = useState<Kurs | undefined>(undefined);
    const {alleKurs} = useContext(KursListeContext)

    const loggDetaljvisning = (kursTittel: string) => {
        logAmplitudeEvent('sidevisning', {
            kurstittel: kursTittel
        });
    };

    useEffect(() => {
        let kursIdFraUrl = props.location.pathname.split('/')[1];
        let kursFraSalesforce = alleKurs.find(kurs =>
          kurs.id === kursIdFraUrl
        )
        setKurs(kursFraSalesforce);
        if(kursFraSalesforce !== undefined){
            loggDetaljvisning(kursFraSalesforce.tittel)
        }
    }, [props.location.pathname, alleKurs]);

    return (
        <>
            <Brodsmulesti brodsmuler={[{url: '/', title: 'Om kurset', handleInApp: true}]}/>
            <div className={cls.block}>
                <header className={cls.element('overskrift')}>
                    <Sidetittel className={cls.element('kurstittel')}>
                        {kurs ? kurs.tittel : <Skeleton width={200}/>}
                    </Sidetittel>
                </header>
                <main className={cls.element('innhold')}>
                    {kurs ? <Metainfo kurs={kurs}/> : <MetainfoSkeleton/>}
                    <OmKurset kurs={kurs}/>
                </main>
            </div>
        </>
    );
};

export default DetaljSide;
