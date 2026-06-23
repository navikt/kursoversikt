import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { HourglassBottomFilledIcon } from '@navikt/aksel-icons';
import { dagOgManedPaLesbartFormat } from '../../utils/datoUtils';
import bemHelper from '../../utils/bemHelper';
import classnames from 'classnames';
import './PameldingsfristInfo.less';

const cls = bemHelper('pameldingsfristInfo');

interface Props {
    pameldingsfrist: Date;
    className?: string;
    publiserUtenPameldingsskjema: boolean;
}

const PameldingsfristInfo: FunctionComponent<Props> = ({
    pameldingsfrist,
    className,
    publiserUtenPameldingsskjema,
}) => {
    if (publiserUtenPameldingsskjema) {
        return null;
    }

    return (
        <div className={classnames(cls.block, className)}>
            <HourglassBottomFilledIcon className={cls.element('ikon')} title="Påmeldingsfrist ikon" aria-hidden />
            <BodyShort size="medium" className={cls.element('label')}>
                <b>Påmeldingsfrist:&nbsp;</b>
                {dagOgManedPaLesbartFormat(pameldingsfrist)}
                &nbsp; kl.
                {pameldingsfrist.toLocaleString('nb-no', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </BodyShort>
        </div>
    );
};

export default PameldingsfristInfo;
