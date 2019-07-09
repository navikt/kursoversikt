
export interface ConfigurableCustom {
    Fylke: string;
    "Type kurs": string;
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