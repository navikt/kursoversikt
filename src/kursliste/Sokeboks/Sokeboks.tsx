import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import { Input } from 'nav-frontend-skjema';
import './Sokeboks.less';
import bemHelper from '../../utils/bemHelper';

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
                        label={'Søk etter kurs '}
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
