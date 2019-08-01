import { Kurs } from '../models/Kurs';
import { kursapiUrl } from '../utils/lenker';
import { gjørOmDatoerTilIsoFormat, sammenlignKursPaDato } from '../utils/datoUtils';

export async function hentKurs(): Promise<Kurs[]> {
    let response = await fetch(kursapiUrl);
    if (response.ok) {
        const kurs = await response.json();
        return gjørOmDatoerTilIsoFormat(kurs).sort(sammenlignKursPaDato);
    } else {
        return [];
    }
}
