import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import bemHelper from '../../utils/bemHelper';
import './KursPanel.less';
import { dagOgManedPaLesbartFormat } from '../../utils/datoUtils';

const cls = bemHelper('kursPanel');

export const lagDatoTekst = (startTid: Date, sluttTid: Date, className: string) => {
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
