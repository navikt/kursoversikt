import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import flaggIkon from '../../ikoner/flag-3.svg';
import bemHelper from '../../utils/bemHelper';
import './KursPanel.less';

const cls = bemHelper('kursPanel');

const dagOgManedPaLesbartFormat = (dato: Date): string => {
    return dato.toLocaleString('nb-no', { day: 'numeric', month: 'long' });
};

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

export const lagPaameldingsfristkomponent = (pameldingsfrist: Date) => {
    return (
        <div className={cls.element('paameldingsfrist')}>
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
