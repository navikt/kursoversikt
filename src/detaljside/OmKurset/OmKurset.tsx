import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import { Systemtittel } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';
import { VenstreChevron } from 'nav-frontend-chevron';
import { Kurs } from '../../models/Kurs';
import './OmKurset.less';
import bemHelper from '../../utils/bemHelper';
import { Link } from 'react-router-dom';

const cls = bemHelper('omKurset');

interface Props {
    kurs: Kurs;
}

const OmKurset: FunctionComponent<Props> = ({ kurs }) => {
    const beskrivelse = {
        __html: kurs.forsideBeskrivelse,
    };

    return (
        <Panel className={cls.block}>
            <header className={cls.element('overskrift')}>
                <Systemtittel>Om kurset</Systemtittel>
            </header>
            <div dangerouslySetInnerHTML={beskrivelse} />
            <Lenke className="active knapp knapp--hoved" href={kurs.registreringsUrl}>
                Meld deg på
            </Lenke>
            <div className={cls.element('tilbakelenke')}>
                <Link to={'/'} className={'lenke'}>
                    <VenstreChevron type={'venstre'} />
                    Tilbake til kursoversikten
                </Link>
            </div>
        </Panel>
    );
};

export default OmKurset;
