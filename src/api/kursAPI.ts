import { Kurs, KursFraKildeSystem } from '../models/Kurs';
import { sammenlignKursPaDato, tilDato } from '../utils/datoUtils';

export async function hentKurs(url:string): Promise<Kurs[]> {
    let response = await fetch(url);
    if (response.ok) {
        const kurs = await response.json();
        return oversettTilKursObjekt(kurs).sort(sammenlignKursPaDato);
    } else {
        return [];
    }
}


const oversettTilKursObjekt = (alleKurs: KursFraKildeSystem[]): Kurs[] => {
    return alleKurs.filter(kurs=>{return kurs.ShowInActivityList===1}).map((kurs: KursFraKildeSystem) => {
        let fylke, type, tema;
        if (kurs.configurable_custom) {
            fylke = kurs.configurable_custom.Fylke;
            type = (kurs.configurable_custom['Type kurs'] !== undefined) ? kurs.configurable_custom['Type kurs'] : kurs.configurable_custom.Type;
            tema = kurs.configurable_custom.Tema;
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
        };
    });
};
