import React, {FunctionComponent} from "react";
import {Panel} from "nav-frontend-paneler";
import {Input} from "nav-frontend-skjema";
import {Undertittel} from 'nav-frontend-typografi';
import plasseringsIkon from '../../ikoner/location-pin-6.svg';

interface Props {
    sokeFunksjon :(sokeOrd:string) => void;
}

const Sokeboks: FunctionComponent<Props> = ({sokeFunksjon}) =>{
    return (
        <div className={"filterboks"}>
        <Panel tittel="Søk etter kurs">
            <Undertittel>Søk etter kurs</Undertittel>
            <br/>
            <span>
        <Input label={" "} onChange={(event) =>{sokeFunksjon(event.target.value)}} placeholder={"Søk etter kurs"}/> <img alt={"søkeikon"} src={plasseringsIkon}/>
        </span>
    </Panel>
        </div>)

};

export default Sokeboks;