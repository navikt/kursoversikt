export interface Kurs {
    id: number;
    tittel: string;
    registreringsUrl: string;
    starttidspunkt: Date;
    sluttidspunkt: Date;
    pameldingsfrist: Date;
    sted?: any;
    beskrivelse?: any;
    internBeskrivelse: string;
    forsideBeskrivelse?: any;
    fylke: string;
    type: string;
    tema: string;
}

export const tomtKurs: Kurs = {
    id: 0,
    tittel: '',
    registreringsUrl: '',
    starttidspunkt: new Date(),
    sluttidspunkt: new Date(),
    pameldingsfrist: new Date(),
    sted: '',
    beskrivelse: '',
    internBeskrivelse: '',
    forsideBeskrivelse: '',
    fylke: '',
    type: '',
    tema: '',
};

export interface PindenaKurs {
    RegistrationID: number;
    Title: string;
    RegistrationUrl: string;
    RegistrationImageMediaStorageID: number;
    FrontImageMediaStorageID: number;
    CatalogListMediaStorageID?: any;
    RegistrationFromDateTime: string;
    RegistrationToDateTime: string;
    RegistrationDeadline: string;
    RegistrationPlaceName?: any;
    DescriptionInternal: string;
    CatalogText?: any;
    Description?: any;
    FrontPageDescription?: any;
    ActiveWeb: number;
    ShowRegistrationForm: number;
    ShowInActivityList: number;
    configurable_custom: {
        Fylke: string;
        'Type kurs': string;
        Tema: string;
    };
}
