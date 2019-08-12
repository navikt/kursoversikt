import React, {FunctionComponent} from "react";
import {Panel} from "nav-frontend-paneler";
import {Input} from "nav-frontend-skjema";

interface Props {
    sokeFunksjon :(sokeOrd:string) => void;
}

const Sokeboks: FunctionComponent<Props> = ({sokeFunksjon}) =>{
    return (
        <div className={"filterboks"}>
        <Panel tittel="Søk etter kurs">
        Søk etter kurs
        <Input label={'Inputfelt-label'} onChange={(event) =>{sokeFunksjon(event.target.value)}}/>
    </Panel>
        </div>)

};

export default Sokeboks;