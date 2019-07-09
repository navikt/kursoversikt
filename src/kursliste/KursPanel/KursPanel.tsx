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
    const [sluttTidspunkt,setSluttTidspunkt] = useState(new Date());

    useEffect(() =>{
        setStartTidspunkt(parseDatetime(kurs.RegistrationFromDateTime));
        setSluttTidspunkt(parseDatetime(kurs.RegistrationToDateTime));
    },[kurs]);

    const lagDatoTekst = () => {
        const starttid = startTidspunkt.toLocaleString('nb-no', {day:'numeric', month: 'long' });
        console.log("startTidspunkt.toDateString()",startTidspunkt.toDateString());
        console.log("sluttTidspunkt.toDateString()",sluttTidspunkt.toDateString());
        if(startTidspunkt.toDateString() === sluttTidspunkt.toDateString()){
            return starttid;
        }
        const sluttid = sluttTidspunkt.toLocaleString('nb-no', {day:'numeric', month: 'long' });
        return starttid + " - \n" + sluttid;
    };


    return <Panel className={"Kurspanel"}>
        <div className={"Kurspanel__dato"}>
                <pre>
                    <Undertittel>{lagDatoTekst()}</Undertittel>
                </pre>
            <Normaltekst>kl. {startTidspunkt.toLocaleString('nb-no', {hour:'2-digit', minute: '2-digit' })}</Normaltekst>
            <div className={"Kurspanel__rektangel"} ></div>
        </div>
        <div className={"Kurspanel__hovedInnhold"}>
            <Lenke className={"Kurspanel__header"} href={kurs.RegistrationUrl}>{kurs.Title}</Lenke>
            <Normaltekst>{kurs.DescriptionInternal}</Normaltekst>
            <Normaltekst> <b>Sted:</b> {kurs.RegistrationPlaceName}</Normaltekst>
            <Normaltekst><b>Påmeldingsfrist: </b>{sluttTidspunkt.toLocaleString('nb-no', {day:'numeric', month: 'long' })}</Normaltekst>

        </div>
    </Panel>

};

export default KursPanel;