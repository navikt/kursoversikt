import {Kurs} from "../models/Kurs";
import {kursapiUrl} from "../utils/lenker";

export async function hentKurs(): Promise<Kurs[]>{
    let response =await fetch(kursapiUrl);
    if(response.ok){

        return response.json();
    }
    else return [];
}

