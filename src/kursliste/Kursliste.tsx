import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
const KursListe: FunctionComponent = () =>{
const [kursArray,setKursArray]=useState(Array<Kurs>() );
    const hentOgSettKurs = async () => {
        setKursArray(await hentKurs());
    };

    useEffect(() => {
        hentOgSettKurs();

},[]);
return(
<div>
    kursliste
    {kursArray.map((value) => {
    return value.Title;
    })}
</div>

);

};

export default KursListe;