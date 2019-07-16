import {Kurs} from "../models/Kurs";
import {kursapiUrl} from "../utils/lenker";

const sammenlignKursPaDato= (a:Kurs,b:Kurs) =>{
    const aTime= a.RegistrationFromDateTime.replace(" ","T");
    const bTime= b.RegistrationFromDateTime.replace(" ","T");
    return (new Date(aTime).getTime() - new Date(bTime).getTime());
};

export async function hentKurs(): Promise<Kurs[]>{
    let response =await fetch(kursapiUrl);
    if(response.ok){
        const kursJson = await response.json().then(data => data as Kurs[]);
        return kursJson.sort(sammenlignKursPaDato);

    }
    else return [];
}

