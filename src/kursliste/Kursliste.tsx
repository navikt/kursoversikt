import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
import KursPanel from "./KursPanel/KursPanel";
import Filter from "./Filter/Filter";
import "./Kursliste.less"

const KursListe: FunctionComponent = () =>{

    const [kursArray,setKursArray]=useState(Array<Kurs>() );



    useEffect(() => {
        const hentOgSettKurs = async () => {
            const resultat = await hentKurs();
            setKursArray(resultat);
        };
        hentOgSettKurs();

    },[]);
    let unikeKurs = new Array<string>();

    const getKursTyper = () => {
        const kursMedFylke = kursArray.filter(kurs=> {
            if (!kurs.configurable_custom || !kurs.configurable_custom.Fylke ) {
                return false;
            }
            return true;
        });

        unikeKurs = (kursMedFylke.map(kurs=>kurs.configurable_custom.Fylke));
    };
    getKursTyper();
    console.log("kursArray", kursArray);
    console.log("uttafor unikekursTyper", unikeKurs );
return(
<div className={"hovedside"}>
    <span className={"kursKolonne"}>
        {kursArray.map((kurs : Kurs,) => {
            return <KursPanel key={kurs.RegistrationID} kurs={kurs} />
        })}
    </span>
    <span className={"filterKolonne"}>
        <Filter tittel={"Fylker"} alternativer={unikeKurs}/>
    </span>
</div>


);

};

export default KursListe;