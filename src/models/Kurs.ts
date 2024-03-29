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
    fylke?: string[];
    type?: string;
    tema?: string;
    underkategori?: string[];
    aktivt:number
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
    fylke: [],
    type: '',
    tema: '',
    underkategori: [],
    aktivt:0
};

export interface KursFraKildeSystem {
    RegistrationID: string|number;
    Title: string;
    RegistrationUrl: string;
    RegistrationFromDateTime: string;
    RegistrationToDateTime: string;
    RegistrationDeadline: string;
    RegistrationPlaceName?: any;
    CatalogText?: any;
    Description?: any;
    DescriptionInternal?:string;
    FrontPageDescription?: any;
    ShowInActivityList: number;
    configurable_custom: {
        Fylke: string;
        Type?: string;
        Tema: string;
        'Type kurs'?: string;
        Underkategori: string|null;
    }

}
