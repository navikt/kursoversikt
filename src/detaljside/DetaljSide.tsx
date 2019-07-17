import React, {FunctionComponent, useEffect, useState} from "react";
import {Kurs, tomtKurs} from "../models/Kurs";
import {hentKurs} from "../api/pindenaAPI";
import {RouteComponentProps} from "react-router";
import {Sidetittel} from "nav-frontend-typografi";
import {Panel} from "nav-frontend-paneler";
import 'nav-frontend-knapper-style';
import "./DetaljSide.less"

import Lenke from "nav-frontend-lenker";

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
            <header className={"overskrift"}>
                <Sidetittel className={"sentrert__tekst"}>{detteKurset.Title}</Sidetittel>
            </header>
            <Panel className={"MetaInfoPanel"}>
                {detteKurset.RegistrationFromDateTime}
            </Panel>
            <Panel className={"BeskrivelsePanel"}>

                <Lenke className={"active knapp knapp--hoved"} href={detteKurset.RegistrationUrl}>Meld deg på</Lenke>
            </Panel>

        </div>
    );


};

export default DetaljSide;