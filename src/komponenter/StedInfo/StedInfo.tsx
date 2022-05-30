import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
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
            <BodyShort size="small" className={cls.element('label')}>
                <b>Sted:&nbsp;</b> {sted}
            </BodyShort>
        </div>
    );
};

export default StedInfo;
