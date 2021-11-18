import { Kurs, KursFraKildeSystem } from '../models/Kurs';
import { sammenlignKursPaDato, tilDato } from '../utils/datoUtils';
import {kursapiUrl} from "../utils/lenker";


export async function hentAlleKurs(): Promise<Kurs[]> {
    let response = await fetch(kursapiUrl);
    if (response.ok) {
        const kurs = await response.json();
        return oversettTilKursObjekt(kurs).sort(sammenlignKursPaDato)
    } else {
        return [];
    }
}


const oversettTilKursObjekt = (alleKurs: KursFraKildeSystem[]): Kurs[] => {
    return alleKurs.map((kurs: KursFraKildeSystem) => {
        let fylke, type, tema, underkategori;
        if (kurs.configurable_custom) {
            fylke = (kurs.configurable_custom['Fylke'] ? kurs.configurable_custom['Fylke'].split(';') :[] );
            type = (kurs.configurable_custom['Type kurs'] !== undefined) ? kurs.configurable_custom['Type kurs'] : kurs.configurable_custom.Type;
            tema = kurs.configurable_custom.Tema;
            underkategori = (kurs.configurable_custom['Underkategori'] ? kurs.configurable_custom['Underkategori'].split(';') :[] );
        }
        let id:string = (typeof kurs.RegistrationID === 'number') ? kurs.RegistrationID.toString() : kurs.RegistrationID

         return {
            id: id,
            tittel: kurs.Title,
            registreringsUrl: kurs.RegistrationUrl,
            starttidspunkt: tilDato(kurs.RegistrationFromDateTime),
            sluttidspunkt: tilDato(kurs.RegistrationToDateTime),
            pameldingsfrist: tilDato(kurs.RegistrationDeadline),
            sted: kurs.RegistrationPlaceName,
            beskrivelse: kurs.DescriptionInternal ? kurs.DescriptionInternal : kurs.Description,
            forsideBeskrivelse: kurs.FrontPageDescription,
            fylke: fylke,
            type: type,
            tema: tema,
            underkategori: underkategori,
             aktivt:kurs.ShowInActivityList
        };
    });
};
