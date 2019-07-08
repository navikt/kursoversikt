
import {kursapiUrl} from "../utils/lenker";
import fetchMock from "fetch-mock";
fetchMock
    .get(kursapiUrl,
        [
            {
                "RegistrationID": 1879,
                "Title": "Testtittel for testkurs 1",
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
                "FrontPageDescription": "<p>forsidebeskrivelse</p>\r\n<p>programbeskrivelse</p>\r\n<p><strong>stor tekst</strong></p>\r\n<ol>\r\n<li><strong>nummerert</strong></li>\r\n<li>liste</li>\r\n<li><em>med ting</em></li>\r\n<li>\r\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\r\n<tbody>\r\n<tr>\r\n<td style=\"width: 33.3333%;\">se her ja</td>\r\n<td style=\"width: 33.3333%;\">en stor tabelll</td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n<tr>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n<tr>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</li>\r\n</ol>"
            },
            {
                "RegistrationID": 1880,
                "Title": "Testtittel for testkurs 1",
                "RegistrationUrl": "https://pindena.pameldingssystem.no/test-ia",
                "RegistrationImageMediaStorageID": 0,
                "FrontImageMediaStorageID": 0,
                "CatalogListMediaStorageID": null,
                "RegistrationFromDateTime": "2019-06-30 00:00:00",
                "RegistrationToDateTime": "2019-07-02 00:00:00",
                "RegistrationDeadline": "2019-06-30 00:00:00",
                "RegistrationPlaceName": "resepsjonen",
                "DescriptionInternal": "Kurs i hvordan man kan inkludere. dette kurset har en litt lengere beskrivelsestekst for å se hvordan det blir seende ut.",
                "CatalogText": null,
                "Description": "<p>Påmeldings beskrivelse</p>",
                "FrontPageDescription": "<p>forsidebeskrivelse</p>\r\n<p>programbeskrivelse</p>\r\n<p><strong>stor tekst</strong></p>\r\n<ol>\r\n<li><strong>nummerert</strong></li>\r\n<li>liste</li>\r\n<li><em>med ting</em></li>\r\n<li>\r\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\r\n<tbody>\r\n<tr>\r\n<td style=\"width: 33.3333%;\">se her ja</td>\r\n<td style=\"width: 33.3333%;\">en stor tabelll</td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n<tr>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n<tr>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n<td style=\"width: 33.3333%;\"> </td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</li>\r\n</ol>"
            }
        ]
    )
    .spy();