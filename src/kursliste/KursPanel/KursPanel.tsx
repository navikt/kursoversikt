import React, {FunctionComponent} from "react";
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
    return <Panel className={"Kurspanel"}>
        <Undertittel className={"Kurspanel__tidspunkt"}>{parseDatetime(kurs.RegistrationFromDateTime).getDate()}. {parseDatetime(kurs.RegistrationFromDateTime).toLocaleString('nb-no', { month: 'long' })}</Undertittel>
        <div className={"Kurspanel__hovedInnhold"}>
        <Lenke className={"Panel__header"} href={kurs.RegistrationUrl}>{kurs.Title}</Lenke>
        <Normaltekst>{kurs.DescriptionInternal}</Normaltekst>
        </div>
    </Panel>

};

export default KursPanel;