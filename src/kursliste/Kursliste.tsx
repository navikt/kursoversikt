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

    const getUniqueProps = (property:'Fylke' | 'Type kurs' | 'Tema') => {
        const kursMedFylke = kursArray.filter(kurs=> {
            if (!kurs.configurable_custom || !kurs.configurable_custom[property]) {
                return false;
            }
            return true;
        });
        let unikeVerdierSet = new Set (kursMedFylke.map(kurs=>kurs.configurable_custom[property]));
        return Array.from(unikeVerdierSet.values());
    };


    let unikeFylker = getUniqueProps ("Fylke");
    let unikeKursTyper = getUniqueProps("Type kurs");
    let unikeTema = getUniqueProps("Tema");

    console.log("kursArray", kursArray);
    console.log("uttafor unikekursTyper", unikeFylker );
return(
<div className={"hovedside"}>
    <span className={"kursKolonne"}>
        {kursArray.map((kurs : Kurs,) => {
            return <KursPanel key={kurs.RegistrationID} kurs={kurs} />
        })}
    </span>
    <span className={"filterKolonne"}>
        <Filter tittel={"Fylker"} alternativer={unikeFylker}/>
        <Filter tittel={"Type kurs"} alternativer={unikeKursTyper}/>
        <Filter tittel={"Tema"} alternativer={unikeTema}/>
    </span>
</div>


);

};

export default KursListe;