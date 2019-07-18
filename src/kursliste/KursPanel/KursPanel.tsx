import React, {FunctionComponent, useEffect, useState} from "react";
import {Panel} from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";
import {Kurs} from "../../models/Kurs";
import {Normaltekst, Element} from "nav-frontend-typografi";
import "./KursPanel.less";
import plasseringsIkon from "../../Ikoner/location-pin-6.svg";
import flaggIkon from "../../Ikoner/flag-3.svg";

interface Props {
    kurs: Kurs;
}

const parseDatetime = (date: string) => {
    return new Date(date.replace(" ", "T"));
};

const KursPanel: FunctionComponent<Props> = ({kurs}) => {
    const [startTidspunkt, setStartTidspunkt] = useState(new Date());
    const [sluttTidspunkt, setSluttTidspunkt] = useState(new Date());
    const [pameldingsfrist, setPameldingsfrist] = useState(new Date());

    useEffect(() => {
        setStartTidspunkt(parseDatetime(kurs.RegistrationFromDateTime));
        setSluttTidspunkt(parseDatetime(kurs.RegistrationToDateTime));
        setPameldingsfrist(parseDatetime(kurs.RegistrationDeadline))
    }, [kurs]);

    const lagDatoTekst = () => {
        const starttid = startTidspunkt.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
        if (startTidspunkt.toDateString() === sluttTidspunkt.toDateString()) {
            return <div className={"Kurspanel__datopanel"}><Element className={"Kurspanel__startdato"}>{starttid}</Element> </div>
        }
        const sluttid = sluttTidspunkt.toLocaleString('nb-no', {day: 'numeric', month: 'long'});
        return <div  className={"Kurspanel__datopanel"}>
            <Element className={"Kurspanel__startdato"}>{starttid + " -"}&nbsp;</Element>
            <Element className={"Kurspanel__sluttdato"}>{sluttid}</Element>
        </div>;

    };


    return <Panel className={"Kurspanel"}>
        <div className={"Kurspanel__tidspunkt"}>
            {lagDatoTekst()}
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
                <Normaltekst className={"Kurspanel__stedsOgFristTekst"}><b>Påmeldingsfrist: &nbsp;</b>{pameldingsfrist.toLocaleString('nb-no', {
                day: 'numeric',
                month: 'long'
                })}, kl.{pameldingsfrist.toLocaleString('nb-no', {
                hour: '2-digit',
                minute: '2-digit'
            })}</Normaltekst>
            </div>
        </div>
    </Panel>

};

export default KursPanel;