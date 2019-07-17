import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs, tomtKurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
import {RouteComponentProps} from "react-router";

const DetaljSide: FunctionComponent<RouteComponentProps> = props => {
    const [detteKurset, setDetteKurset] = useState<Kurs >(tomtKurs);
    useEffect(() => {
        const hentOgSettKurs = async () => {
            const resultat = await hentKurs();
            let kursIdFraUrl = props.location.pathname.split("/")[1];
            setDetteKurset(resultat.filter(kurs =>{
                if(kurs.RegistrationID === parseInt(kursIdFraUrl)){
                    return true;
                }
                return false;
            })[0]
            )

        };
        hentOgSettKurs();

    }, [props.location.pathname]);

    return (
        <div>
            {detteKurset.Title}
        </div>
    );


};

export default DetaljSide;