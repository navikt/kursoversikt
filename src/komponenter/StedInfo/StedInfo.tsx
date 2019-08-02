import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import plasseringsIkon from '../../ikoner/location-pin-6.svg';
import bemHelper from '../../utils/bemHelper';
import './StedInfo.less';

const cls = bemHelper('stedInfo');

interface Props {
    sted: string;
}

const StedInfo: FunctionComponent<Props> = ({ sted }) => {
    return (
        <div className={cls.block}>
            <img className={cls.element('ikon')} src={plasseringsIkon} alt="plasseringsikon" />
            <Normaltekst className={cls.element('label')}>
                <b>Sted:&nbsp;</b> {sted}
            </Normaltekst>
        </div>
    );
};

export default StedInfo;
