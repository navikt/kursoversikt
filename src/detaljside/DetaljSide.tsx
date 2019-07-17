import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";

const DetaljSide: FunctionComponent = () => {
    const [kursArray, setKursArray] = useState(Array<Kurs>());

    useEffect(() => {
        const hentOgSettKurs = async () => {
            const resultat = await hentKurs();
            setKursArray(resultat);

        };
        hentOgSettKurs();

    }, []);

    return (
        <div>
            heihei
        </div>
    );


};

export default DetaljSide;