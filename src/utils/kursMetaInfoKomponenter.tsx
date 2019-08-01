import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import flaggIkon from '../Ikoner/flag-3.svg';
import plasseringsIkon from '../Ikoner/location-pin-6.svg';
import { Kurs } from '../models/Kurs';

export const parseDatetime = (date: string) => {
    return new Date(date.replace(' ', 'T'));
};

const dagOgManedPaLesbartFormat = (dato: Date): string => {
    return dato.toLocaleString('nb-no', { day: 'numeric', month: 'long' });
};

export const lagDatoTekst = (startTid: Date, sluttTid: Date, className: string) => {
    if (startTid.toDateString() === sluttTid.toDateString()) {
        return (
            <div className={'Kurspanel__datopanel'}>
                <Normaltekst className={className}>
                    {dagOgManedPaLesbartFormat(sluttTid)}
                </Normaltekst>{' '}
            </div>
        );
    }

    return (
        <div className={'Kurspanel__datopanel'}>
            <Normaltekst className={className}>
                {dagOgManedPaLesbartFormat(startTid) + ' -'}&nbsp;
            </Normaltekst>
            <Normaltekst className={className}>{dagOgManedPaLesbartFormat(sluttTid)}</Normaltekst>
        </div>
    );
};

export const lagPaameldingsfristkomponent = (pameldingsfrist: Date) => {
    return (
        <div className={'Kurspanel__paameldingsfrist'}>
            <img className={'Kurspanel__ikon'} src={flaggIkon} alt="flaggikon" />
            <Normaltekst className={'Kurspanel__stedsOgFristTekst'}>
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

export const lagStedkomponent = (kurs: Kurs) => {
    return (
        <div className={'Kurspanel__sted'}>
            <img className={'Kurspanel__ikon'} src={plasseringsIkon} alt="plasseringsikon" />
            <Normaltekst className={'Kurspanel__stedsOgFristTekst'}>
                <b>Sted:&nbsp;</b> {kurs.RegistrationPlaceName}
            </Normaltekst>
        </div>
    );
};
