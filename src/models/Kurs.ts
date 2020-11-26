export interface Kurs {
    id: string;
    tittel: string;
    registreringsUrl: string;
    starttidspunkt: Date;
    sluttidspunkt: Date;
    pameldingsfrist: Date;
    sted?: any;
    beskrivelse: string;
    forsideBeskrivelse?: any;
    fylke?: string;
    type?: string;
    tema?: string;
}

export const tomtKurs: Kurs = {
    id: '',
    tittel: '',
    registreringsUrl: '',
    starttidspunkt: new Date(),
    sluttidspunkt: new Date(),
    pameldingsfrist: new Date(),
    sted: '',
    beskrivelse: '',
    forsideBeskrivelse: '',
    fylke: '',
    type: '',
    tema: '',
};

export interface PindenaKurs {
    RegistrationID: string|number;
    Title: string;
    RegistrationUrl: string;    RegistrationFromDateTime: string;
    RegistrationToDateTime: string;
    RegistrationDeadline: string;
    RegistrationPlaceName?: any;
    CatalogText?: any;
    Description?: any;
    FrontPageDescription?: any;
    ShowInActivityList: number;
    configurable_custom: {
        Fylke: string;
        Type: string;
        Tema: string;
    };
}
