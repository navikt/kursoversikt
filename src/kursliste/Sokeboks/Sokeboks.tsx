import React, { FunctionComponent } from 'react';
import { Heading, Panel, Search } from '@navikt/ds-react';
import bemHelper from '../../utils/bemHelper';

const cls = bemHelper('Sokeboks');

interface Props {
    sokeFunksjon: (sokeOrd: string) => void;
    verdi: string;
}


const Sokeboks: FunctionComponent<Props> = ({ sokeFunksjon, verdi }) => {
    return (
        <div className={'filterboks'}>
            <Panel border className={cls.block}>
                <Search
                    label={ <Heading size="small" level="2">Søk etter kurs</Heading> }
                    hideLabel={false}
                    onChange={sokeFunksjon}
                    placeholder={'Søk etter kurs'}
                    value={verdi}
                    variant="simple"
                />
            </Panel>
        </div>
    );
};

export default Sokeboks;
