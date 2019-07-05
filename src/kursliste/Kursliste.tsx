import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
import KursPanel from "./KursPanel/KursPanel";
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
    {kursArray.map((kurs :Kurs) => {
        return <KursPanel kurs={kurs}/>
    })}

</div>

);

};

export default KursListe;