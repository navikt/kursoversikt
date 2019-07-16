import React, {FunctionComponent, useEffect, useState} from "react";
import {Panel} from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";
import {Kurs} from "../../models/Kurs";
import {Normaltekst} from "nav-frontend-typografi";
import "./KursPanel.less";
import plasseringsIkon from "../../Ikoner/location-pin-6.svg";
import flaggIkon from "../../Ikoner/flag-3.svg";

interface Props {
    kurs: Kurs;
}

const parseDatetime = (date: string) => {
    return new Date(date);

};

const KursPanel: FunctionComponent<Props> = ({kurs}) => {
    const [startTidspunkt, setStartTidspunkt] = useState(new Date());
    const [sluttTidspunkt, setSluttTidspunkt] = useState(new Date());

    useEffect(() => {
        setStartTidspunkt(parseDatetime(kurs.RegistrationFromDateTime));
        setSluttTidspunkt(parseDatetime(kurs.RegistrationToDateTime));
    }, [kurs]);

    const lagDatoTekst = () => {
        const starttid = startTidspunkt.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
        if (startTidspunkt.toDateString() === sluttTidspunkt.toDateString()) {
            return starttid;
        }
        const sluttid = sluttTidspunkt.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
        return starttid + " - " + sluttid;
    };


    return <Panel className={"Kurspanel"}>
        <div className={"Kurspanel__tidspunkt"}>
                <pre>
                    <Normaltekst className={"Kurspanel__dato"}>{lagDatoTekst()}</Normaltekst>
                </pre>
            <Normaltekst>kl. {startTidspunkt.toLocaleString('nb-no', {
                hour: '2-digit',
                minute: '2-digit'
            })}</Normaltekst>
            <div className={"Kurspanel__rektangel"}></div>
        </div>
        <div className={"Kurspanel__hovedInnhold"}>
            <Lenke className={"Kurspanel__header"} href={kurs.RegistrationUrl}>{kurs.Title}</Lenke>
            <Normaltekst className={"Kurspanel__beskrivelse"}>{kurs.DescriptionInternal || ""}</Normaltekst>
            <div className={"Kurspanel__sted"}>
                <img className={"Kurspanel__ikon"} src={plasseringsIkon} alt="plasseringsikon"/>
                <Normaltekst className={"Kurspanel__stedsOgFristTekst"}>
                    <b>Sted:</b> {kurs.RegistrationPlaceName}
                </Normaltekst>
            </div>
            <div className={"Kurspanel__paameldingsfrist"}>
                <img className={"Kurspanel__ikon"} src={flaggIkon} alt="flaggikon"/>
            <Normaltekst className={"Kurspanel__stedsOgFristTekst"}><b>Påmeldingsfrist: </b>{sluttTidspunkt.toLocaleString('nb-no', {
                day: 'numeric',
                month: 'long'
            })}</Normaltekst>
            </div>
        </div>
    </Panel>

};

export default KursPanel;