import React, {FunctionComponent, useEffect, useState} from "react";
import {Panel} from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";
import {Kurs} from "../../models/Kurs";
import { Normaltekst, Undertittel} from "nav-frontend-typografi";
import "./KursPanel.less"

interface Props {
    kurs: Kurs;
}
const parseDatetime = (date: string)=>{
    return new Date(date);

};

const KursPanel: FunctionComponent<Props> = ({ kurs }) =>{
    const [startTidspunkt,setStartTidspunkt] = useState(new Date());

    useEffect(() =>{
        setStartTidspunkt(parseDatetime(kurs.RegistrationFromDateTime));

    },[kurs]);

    return <Panel className={"Kurspanel"}>
        <div className={"Kurspanel__dato"}>
            <Undertittel >{startTidspunkt.getDate()}. {startTidspunkt.toLocaleString('nb-no', { month: 'long' })}</Undertittel>
            <Normaltekst>kl. {startTidspunkt.getHours()}</Normaltekst>
            <div className={"Kurspanel__rektangel"} ></div>
        </div>
        <div className={"Kurspanel__hovedInnhold"}>
        <Lenke className={"Panel__header"} href={kurs.RegistrationUrl}>{kurs.Title}</Lenke>
        <Normaltekst>{kurs.DescriptionInternal}</Normaltekst>
        </div>
    </Panel>

};

export default KursPanel;