import {Kurs} from "../models/Kurs";
import {pindenaURL} from "../utils/lenker";

export async function hentKurs(): Promise<Kurs[]>{
    let response =await fetch(pindenaURL);
    if(response.ok){
        return response.json();
    }
    else return [];


}