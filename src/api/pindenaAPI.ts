import {Kurs} from "../models/Kurs";
import {kursapiUrl} from "../utils/lenker";

const sammenlignKursPaDato= (a:Kurs,b:Kurs) =>{
    return new  Date(a.RegistrationFromDateTime).getTime() - new Date(b.RegistrationFromDateTime).getTime();
};

export async function hentKurs(): Promise<Kurs[]>{
    let response =await fetch(kursapiUrl);
    if(response.ok){
        const kursJson = await response.json().then(data => data as Kurs[]);
        return kursJson.sort(sammenlignKursPaDato);
    }
    else return [];
}

