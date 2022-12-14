import React, { FunctionComponent } from 'react';
import { Panel, BodyShort, Heading } from '@navikt/ds-react';
import { Back } from '@navikt/ds-icons';
import { Kurs } from '../../models/Kurs';
import './OmKurset.less';
import bemHelper from '../../utils/bemHelper';
import { Link as RouteLink} from 'react-router-dom';
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
                <Heading size="medium" level="2">Om kurset</Heading>
            </header>
            {kurs ? (
                <div dangerouslySetInnerHTML={beskrivelse} />
            ) : (
                <Skeleton count={3} aria-disabled={true} />
            )}
            {kurs && (
                <a className={`navds-button navds-button--primary navds-button--medium ${cls.element("knapp")}`} href={kurs.registreringsUrl}>
                    Meld deg på
                </a>
            )}
            <div className={cls.element('tilbakelenke')}>
                <RouteLink to={'/'} className={'lenke'}>
                    <BodyShort size="small">
                        <Back title="pil tilbake" aria-hidden style={{width: "1.1em", height: "1.1em"}} />{' '}
                        Tilbake til kursoversikten
                    </BodyShort>
                </RouteLink>
            </div>
        </Panel>
        </span>
    );
};

export default OmKurset;
