import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import { Systemtittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { VenstreChevron } from 'nav-frontend-chevron';
import { Kurs } from '../../models/Kurs';
import './OmKurset.less';
import bemHelper from '../../utils/bemHelper';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const cls = bemHelper('omKurset');

interface Props {
    kurs?: Kurs;
}

const OmKurset: FunctionComponent<Props> = ({ kurs }) => {
    const beskrivelse = kurs && {
        __html: kurs.forsideBeskrivelse,
    };


    return (
        <span className={cls.block} >
        <Panel className={cls.element('panel')}>
            <header className={cls.element('overskrift')}>
                <Systemtittel>Om kurset</Systemtittel>
            </header>
            {kurs ? (
                <div dangerouslySetInnerHTML={beskrivelse} />
            ) : (
                <Skeleton count={3} aria-disabled={true} />
            )}
            {kurs && (
                <Lenke className="active knapp knapp--hoved" href={kurs.registreringsUrl}>
                    Meld deg på
                </Lenke>
            )}
            <div className={cls.element('tilbakelenke')}>
                <Link to={'/'} className={'lenke'}>
                    <VenstreChevron type={'venstre'} />
                    Tilbake til kursoversikten
                </Link>
            </div>
        </Panel>
        </span>
    );
};

export default OmKurset;
