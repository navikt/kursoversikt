import React, { FunctionComponent } from 'react';
import { Box, BodyShort, Heading, LocalAlert } from '@navikt/ds-react';
import { ArrowLeftIcon } from '@navikt/aksel-icons';
import { Kurs } from '../../models/Kurs';
import './OmKurset.less';
import bemHelper from '../../utils/bemHelper';
import { Link as RouteLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const cls = bemHelper('omKurset');

interface Props {
    kurs?: Kurs;
}

const OmKurset: FunctionComponent<Props> = ({ kurs }) => {
    const beskrivelse = kurs && {
        __html: kurs.forsideBeskrivelse.replace(/\\r\\n/g, '<br />'),
    };


    return (
        <span className={cls.block}>
            <Box background="default" borderWidth="1" borderColor="info" borderRadius="8" padding="space-4" className={cls.element('panel')}>
                <header className={cls.element('overskrift')}>
                    <Heading size="medium" level="2">
                        Om kurset
                    </Heading>
                </header>
                {kurs ? (
                    <div className={cls.element('beskrivelse')}>
                        <div dangerouslySetInnerHTML={beskrivelse} />
                    </div>
                ) : (
                    <Skeleton count={3} aria-disabled={true} />
                )}
                {kurs &&
                    (kurs.publiserUtenPameldingsskjema ? (
                        <LocalAlert status="announcement">
                            <LocalAlert.Title>
                                Påmelding er ikke nødvendig for dette kurset.
                            </LocalAlert.Title>
                        </LocalAlert>
                    ) : (
                        <a
                            className={`navds-button navds-button--primary navds-button--medium ${cls.element(
                                'knapp'
                            )}`}
                            href={kurs.registreringsUrl}
                        >
                            Meld deg på
                        </a>
                    ))}

                <div className={cls.element('tilbakelenke')}>
                    <RouteLink to={'/'} className={'lenke'}>
                        <BodyShort size="small">
                            <ArrowLeftIcon
                                title="pil tilbake"
                                aria-hidden
                                style={{ width: '1.1em', height: '1.1em' }}
                            />{' '}
                            Tilbake til kursoversikten
                        </BodyShort>
                    </RouteLink>
                </div>
            </Box>
        </span>
    );
};

export default OmKurset;
