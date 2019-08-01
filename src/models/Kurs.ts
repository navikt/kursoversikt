export interface ConfigurableCustom {
    Fylke: string;
    'Type kurs': string;
    Tema: string;
}

export interface Kurs {
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
    configurable_custom: ConfigurableCustom;
}

export const tomConfigurableCustom: ConfigurableCustom = {
    Fylke: '',
    'Type kurs': '',
    Tema: '',
};

export const tomtKurs: Kurs = {
    RegistrationID: 0,
    Title: '',
    RegistrationUrl: '',
    RegistrationImageMediaStorageID: 0,
    FrontImageMediaStorageID: 0,
    CatalogListMediaStorageID: '',
    RegistrationFromDateTime: '',
    RegistrationToDateTime: '',
    RegistrationDeadline: '',
    RegistrationPlaceName: '',
    DescriptionInternal: '',
    CatalogText: '',
    Description: '',
    FrontPageDescription: '',
    ActiveWeb: 0,
    ShowRegistrationForm: 0,
    ShowInActivityList: 0,
    configurable_custom: tomConfigurableCustom,
};
