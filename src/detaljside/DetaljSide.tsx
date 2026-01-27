import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {Kurs} from '../models/Kurs';
import { Alert, Heading } from '@navikt/ds-react';
import bemHelper from '../utils/bemHelper';
import './DetaljSide.less';
import Metainfo from './Metainfo/Metainfo';
import OmKurset from './OmKurset/OmKurset';
import Skeleton from 'react-loading-skeleton';
import MetainfoSkeleton from './Metainfo/MetainfoSkeleton';
import Brodsmulesti from '../kursliste/Brodsmulesti/Brodsmulesti';
import {KursListeContext} from "../utils/KursProvider";
import { useLocation } from 'react-router-dom';


const cls = bemHelper('detaljside');

const DetaljSide: FunctionComponent = () => {
    const [kurs, setKurs] = useState<Kurs | undefined>(undefined);
    const {alleKurs} = useContext(KursListeContext)
    const location = useLocation()

    useEffect(() => {
        let kursIdFraUrl = location.pathname.split('/')[1];
        setKurs(
            alleKurs.find(k =>
            k.id === kursIdFraUrl
        )
        );
    }, [location.pathname, alleKurs]);

    return (
        <>
            <Brodsmulesti brodsmuler={[{url: '/', title: 'Om kurset', handleInApp: true}]}/>
            <div className={cls.block}>
                <header className={cls.element('overskrift')}>
                    <Heading size="xlarge" className={cls.element('kurstittel')}>
                        {kurs ? kurs.tittel : <Skeleton width={200}/>}
                    </Heading>
                </header>

                {
                    kurs?.aktivt===0 &&
                    <div className={cls.element('varselbanner')}>
                    <Alert variant="warning">
                        Dette kurset er ikke aktivt. Det vil sannsynligvis ikke være mulig å melde seg som deltaker
                    </Alert>
                    </div>
                }
                <main className={cls.element('innhold')}>
                    {kurs ? <Metainfo kurs={kurs}/> : <MetainfoSkeleton/>}
                    <OmKurset kurs={kurs}/>
                </main>
            </div>
        </>
    );
};

export default DetaljSide;
