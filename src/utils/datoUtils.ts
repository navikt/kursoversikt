import { Kurs } from '../models/Kurs';

export const gjørOmDatoerTilIsoFormat = (alleKurs: any): Kurs[] => {
    return alleKurs.map((kurs: any) => ({
        ...kurs,
        RegistrationDeadline: new Date(byttMellomromMedT(kurs.RegistrationDeadline)),
        RegistrationFromDateTime: new Date(byttMellomromMedT(kurs.RegistrationFromDateTime)),
        RegistrationToDateTime: new Date(byttMellomromMedT(kurs.RegistrationToDateTime)),
    }));
};

export const byttMellomromMedT = (dato: string): string => {
    return dato.replace(' ', 'T');
};

export const sammenlignKursPaDato = (a: Kurs, b: Kurs) => {
    return a.RegistrationFromDateTime.getTime() - b.RegistrationFromDateTime.getTime();
};
