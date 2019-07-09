import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
import KursPanel from "./KursPanel/KursPanel";
import Filter from "./Filter/Filter";
import "./Kursliste.less"
const KursListe: FunctionComponent = () =>{

    const [kursArray,setKursArray]=useState(Array<Kurs>() );
    const hentOgSettKurs = async () => {
        setKursArray(await hentKurs());
    };

    useEffect(() => {
        hentOgSettKurs();

    },[]);

return(
<div className={"hovedside"}>
    <span className={"kursKolonne"}>
        {kursArray.map((kurs : Kurs) => {
            return <KursPanel kurs={kurs}/>
        })}
    </span>
    <span className={"filterKolonne"}>
        <Filter tittel={"Type kurs"} sporsmaal={"Kurs"}/>
    </span>
</div>


);

};

export default KursListe;