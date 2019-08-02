import React, { FunctionComponent } from 'react';
import { formaterVarighet } from '../../utils/datoUtils';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemHelper';
import './VarighetInfo.less';

const cls = bemHelper('varighetInfo');

interface Props {
    startTid: Date;
    sluttTid: Date;
    className?: string;
}

const VarighetInfo: FunctionComponent<Props> = ({ startTid, sluttTid, className }) => {
    const varighet = formaterVarighet(startTid, sluttTid);
    return (
        <div className={cls.block}>
            <Normaltekst className={className}>{varighet}</Normaltekst>
        </div>
    );
};

export default VarighetInfo;
