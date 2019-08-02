import React, { FunctionComponent } from 'react';
import { dagOgManedPaLesbartFormat } from '../../utils/datoUtils';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemHelper';

const cls = bemHelper('varighetInfo');

interface Props {
    startTid: Date;
    sluttTid: Date;
    className: string;
}

const VarighetInfo: FunctionComponent<Props> = ({ startTid, sluttTid, className }) => {
    if (startTid.toDateString() === sluttTid.toDateString()) {
        return (
            <div className={cls.element('datopanel')}>
                <Normaltekst className={className}>
                    {dagOgManedPaLesbartFormat(sluttTid)}
                </Normaltekst>{' '}
            </div>
        );
    }

    return (
        <div className={cls.element('datopanel')}>
            <Normaltekst className={className}>
                {dagOgManedPaLesbartFormat(startTid) + ' -'}&nbsp;
            </Normaltekst>
            <Normaltekst className={className}>{dagOgManedPaLesbartFormat(sluttTid)}</Normaltekst>
        </div>
    );
};

export default VarighetInfo;
