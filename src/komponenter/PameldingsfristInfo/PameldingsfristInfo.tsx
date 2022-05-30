import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { dagOgManedPaLesbartFormat } from '../../utils/datoUtils';
import flaggIkon from '../../ikoner/flag-3.svg';
import bemHelper from '../../utils/bemHelper';
import classnames from 'classnames';
import './PameldingsfristInfo.less';

const cls = bemHelper('pameldingsfristInfo');

interface Props {
    pameldingsfrist: Date;
    className?: string;
}

const PameldingsfristInfo: FunctionComponent<Props> = ({ pameldingsfrist, className }) => {
    return (
        <div className={classnames(cls.block, className)}>
            <img className={cls.element('ikon')} src={flaggIkon} alt="flaggikon" />
            <BodyShort size="small" className={cls.element('label')}>
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
