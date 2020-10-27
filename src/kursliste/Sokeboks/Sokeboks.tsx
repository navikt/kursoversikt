import React, { FunctionComponent } from 'react';
import Panel from 'nav-frontend-paneler';
import { Input } from 'nav-frontend-skjema';
import bemHelper from '../../utils/bemHelper';
import {Undertittel} from "nav-frontend-typografi";

const cls = bemHelper('Sokeboks');

interface Props {
    sokeFunksjon: (sokeOrd: string) => void;
    verdi: string;
}


const Sokeboks: FunctionComponent<Props> = ({ sokeFunksjon, verdi }) => {
    return (
        <div className={'filterboks'}>
            <Panel className={cls.block}>
                <span>
                    <Input
                        label={<Undertittel>Søk etter kurs</Undertittel>}
                        onChange={event => {
                            sokeFunksjon(event.target.value);
                        }}
                        placeholder={'Søk etter kurs'}
                        value={verdi}
                    />
                </span>
            </Panel>
        </div>
    );
};

export default Sokeboks;
