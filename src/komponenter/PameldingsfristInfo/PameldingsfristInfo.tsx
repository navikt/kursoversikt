import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { dagOgManedPaLesbartFormat } from '../../utils/datoUtils';
import flaggIkon from '../../ikoner/flag-3.svg';
import bemHelper from '../../utils/bemHelper';
import './PameldingsfristInfo.less';

const cls = bemHelper('pameldingsfristInfo');

interface Props {
    pameldingsfrist: Date;
}

const PameldingsfristInfo: FunctionComponent<Props> = ({ pameldingsfrist }) => {
    return (
        <div className={cls.block}>
            <img className={cls.element('ikon')} src={flaggIkon} alt="flaggikon" />
            <Normaltekst className={cls.element('stedsOgFristTekst')}>
                <b>Påmeldingsfrist:&nbsp;</b>
                {dagOgManedPaLesbartFormat(pameldingsfrist)}, kl.
                {pameldingsfrist.toLocaleString('nb-no', {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </Normaltekst>
        </div>
    );
};

export default PameldingsfristInfo;
