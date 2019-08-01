import { Kurs } from '../models/Kurs';

export const tilDato = (dato: string): Date => {
    return new Date(dato.replace(' ', 'T'));
};

export const sammenlignKursPaDato = (a: Kurs, b: Kurs) => {
    return a.starttidspunkt.getTime() - b.starttidspunkt.getTime();
};
