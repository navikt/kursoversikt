import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import './Filter.less';
import { FilterGruppe } from '../Kursliste';

interface Props {
    tittel: string;
    alternativer: string[];
    filterGruppe: FilterGruppe;
    toggleFilter: (gruppe: FilterGruppe, filterattr: string) => void;
}

const Filter: FunctionComponent<Props> = ({ tittel, alternativer, filterGruppe, toggleFilter }) => {
    return (
        <div className={'filterboks'}>
            <Ekspanderbartpanel tittel={tittel} apen>
                {alternativer.map(alternativ => (
                    <Checkbox
                        label={alternativ}
                        key={alternativ}
                        onChange={() => toggleFilter(filterGruppe, alternativ)}
                    />
                ))}
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;
