import { Kurs } from '../models/Kurs';

export const tilDato = (dato: string): Date => {
    return new Date(dato.replace(' ', 'T'));
};

export const sammenlignKursPaDato = (a: Kurs, b: Kurs) => {
    return a.starttidspunkt.getTime() - b.starttidspunkt.getTime();
};

export const dagOgManedPaLesbartFormat = (dato: Date): string => {
    return dato.toLocaleString('nb-no', { day: 'numeric', month: 'short' });
};

export const formaterVarighet = (startTid: Date, sluttTid: Date): string => {
    if (startTid.toDateString() === sluttTid.toDateString()) {
        return dagOgManedPaLesbartFormat(sluttTid);
    } else if (startTid.getMonth() === sluttTid.getMonth()) {
        return startTid.getDate() + '. - ' + dagOgManedPaLesbartFormat(sluttTid);
    } else {
        return dagOgManedPaLesbartFormat(startTid) + ' - ' + dagOgManedPaLesbartFormat(sluttTid);
    }
};
