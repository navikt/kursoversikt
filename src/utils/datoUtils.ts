import { Kurs } from '../models/Kurs';

export const tilDato = (dato: string): Date => {
    const [dateAsString, timeAsString] = dato.includes('T') ? dato.split('T') : dato.split(' ')
    const [year, month, day] = dateAsString.split('-').map(i => parseInt(i));
    const [hours, minutes] = timeAsString.split(':').map(i => parseInt(i));

    const monthIndex = month - 1;
    return new Date(year, monthIndex, day, hours, minutes);
};

export const sammenlignKursPaDato = (a: Kurs, b: Kurs) => {
    return a.starttidspunkt.getTime() - b.starttidspunkt.getTime();
};

const månedsnavn = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
];

export const dagOgManedPaLesbartFormat = (dato: Date): string => {
    // Denne fungerer ikke for alle. Så hardkoder hva vi trenger.
    //return dato.toLocaleString('nb-no', { day: 'numeric', month: 'short' });
    const dag = dato.getDate();
    const måned = månedsnavn[dato.getMonth()];
    return `${dag}. ${måned}`;
};

export const formaterTimeOgMinutt = (tidspunkt: Date) => {
    return tidspunkt.toLocaleString('nb-no', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const lagTidspunkt = (kurs: Kurs) => {
    const start = formaterTimeOgMinutt(kurs.starttidspunkt);
    const slutt = formaterTimeOgMinutt(kurs.sluttidspunkt);
    if (start !== slutt) {
        return ' kl. ' + start + ' - ' + slutt;
    }
    return ' kl. ' + start;
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
