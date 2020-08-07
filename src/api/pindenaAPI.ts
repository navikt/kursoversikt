import { Kurs, PindenaKurs } from '../models/Kurs';
import { kursapiUrl } from '../utils/lenker';
import { sammenlignKursPaDato, tilDato } from '../utils/datoUtils';

export async function hentKurs(): Promise<Kurs[]> {
    let response = await fetch(kursapiUrl);
    if (response.ok) {
        const kurs = await response.json();
        return oversettTilKursObjekt(kurs).sort(sammenlignKursPaDato);
    } else {
        return [];
    }
}

const oversettTilKursObjekt = (alleKurs: PindenaKurs[]): Kurs[] => {
    return alleKurs.filter(kurs=>{return kurs.ShowInActivityList===1}).map((kurs: PindenaKurs) => {
        let fylke, type, tema;
        if (kurs.configurable_custom) {
            fylke = kurs.configurable_custom.Fylke;
            type = kurs.configurable_custom.Type;
            tema = kurs.configurable_custom.Tema;
        }

        return {
            id: kurs.RegistrationID,
            tittel: kurs.Title,
            registreringsUrl: kurs.RegistrationUrl,
            starttidspunkt: tilDato(kurs.RegistrationFromDateTime),
            sluttidspunkt: tilDato(kurs.RegistrationToDateTime),
            pameldingsfrist: tilDato(kurs.RegistrationDeadline),
            sted: kurs.RegistrationPlaceName,
            beskrivelse: kurs.Description,
            forsideBeskrivelse: kurs.FrontPageDescription,
            fylke: fylke,
            type: type,
            tema: tema,
        };
    });
};
