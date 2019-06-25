
import {pindenaURL} from "../utils/lenker";
import fetchMock from "fetch-mock";
fetchMock
    .get(pindenaURL,
        [
            {
                "RegistrationID": 1879,
                "Title": "test ia",
                "RegistrationUrl": "https://pindena.pameldingssystem.no/test-ia",
                "RegistrationImageMediaStorageID": 0,
                "FrontImageMediaStorageID": 0,
                "CatalogListMediaStorageID": null,
                "RegistrationFromDateTime": "2019-06-30 00:00:00",
                "RegistrationToDateTime": "2019-07-02 00:00:00",
                "RegistrationDeadline": "2019-06-30 00:00:00",
                "RegistrationPlaceName": "resepsjonen",
                "DescriptionInternal": "Kurs i hvordan man kan inkludere.",
                "CatalogText": null,
                "Description": "<p>Påmeldings beskrivelse</p>",
                "FrontPageDescription": "<p>forsidebeskrivelse</p>"
            },
            {
                "RegistrationID": 1880,
                "Title": "test ia",
                "RegistrationUrl": "https://pindena.pameldingssystem.no/test-ia",
                "RegistrationImageMediaStorageID": 0,
                "FrontImageMediaStorageID": 0,
                "CatalogListMediaStorageID": null,
                "RegistrationFromDateTime": "2019-06-30 00:00:00",
                "RegistrationToDateTime": "2019-07-02 00:00:00",
                "RegistrationDeadline": "2019-06-30 00:00:00",
                "RegistrationPlaceName": "resepsjonen",
                "DescriptionInternal": "Kurs i hvordan man kan inkludere.",
                "CatalogText": null,
                "Description": "<p>Påmeldings beskrivelse</p>",
                "FrontPageDescription": "<p>forsidebeskrivelse</p>"
            }
        ]
    )
    .spy();