import {Normaltekst} from "nav-frontend-typografi";
import React from "react";
import flaggIkon from "../Ikoner/flag-3.svg";
import plasseringsIkon from "../Ikoner/location-pin-6.svg";
import {Kurs} from "../models/Kurs";

export const parseDatetime = (date: string) => {
    return new Date(date.replace(" ", "T"));
};
export const lagDatoTekst = (startTid:Date,sluttTid:Date,className:string) => {
    const starttid = startTid.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
    if (startTid.toDateString() === sluttTid.toDateString()) {
        return <div className={"Kurspanel__datopanel"}><Normaltekst className={className}>{starttid}</Normaltekst> </div>
    }
    const sluttid = sluttTid.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
    return <div  className={"Kurspanel__datopanel"}>
    <Normaltekst className={className}>{starttid + " -"}&nbsp;</Normaltekst>
    <Normaltekst className={className}>{sluttid}</Normaltekst>
        </div>;

};

export const lagPaameldingsfristkomponent = (pameldingsfrist: Date) => {
    return <div className={"Kurspanel__paameldingsfrist"}>
        <img className={"Kurspanel__ikon"} src={flaggIkon} alt="flaggikon"/>
        <Normaltekst className={"Kurspanel__stedsOgFristTekst"}><b>Påmeldingsfrist:&nbsp;</b>{pameldingsfrist.toLocaleString('nb-no', {
            day: 'numeric',
            month: 'long'
        })}, kl.{pameldingsfrist.toLocaleString('nb-no', {
            hour: '2-digit',
            minute: '2-digit'
        })}</Normaltekst>
    </div>
};

export const lagStedkomponent = (kurs:Kurs) => {
    return <div className={"Kurspanel__sted"}>
        <img className={"Kurspanel__ikon"} src={plasseringsIkon} alt="plasseringsikon"/>
        <Normaltekst className={"Kurspanel__stedsOgFristTekst"}>
            <b>Sted:&nbsp;</b> {kurs.RegistrationPlaceName}
        </Normaltekst>
    </div>
};