import React, { FunctionComponent } from 'react';
import { Heading, Box, Search } from '@navikt/ds-react';
import bemHelper from '../../utils/bemHelper';

const cls = bemHelper('Sokeboks');

interface Props {
    sokeFunksjon: (sokeOrd: string) => void;
    verdi: string;
}


const Sokeboks: FunctionComponent<Props> = ({ sokeFunksjon, verdi }) => {
    return (
        <div className={'filterboks'}>
            <Box padding="space-8" className={cls.block}>
                <Search
                    id="sokeboks_sok"
                    label="Søk i Kurskalender"
                    hideLabel={false}
                    onChange={sokeFunksjon}
                    value={verdi}
                    variant="simple"
                />
            </Box>
        </div>
    );
};

export default Sokeboks;
