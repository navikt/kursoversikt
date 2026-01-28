import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { LocationPinFillIcon } from '@navikt/aksel-icons';
import bemHelper from '../../utils/bemHelper';
import './StedInfo.less';

const cls = bemHelper('stedInfo');

interface Props {
    sted: string;
}

const StedInfo: FunctionComponent<Props> = ({ sted }) => {
    return (
        <div className={cls.block}>
            <LocationPinFillIcon className={cls.element('ikon')} title="plasseringsikon" fontSize="6rem" />
            <BodyShort size="medium" className={cls.element('label')}>
                <b>Sted:&nbsp;</b> {sted}
            </BodyShort>
        </div>
    );
};

export default StedInfo;
