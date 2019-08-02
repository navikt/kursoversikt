import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import './Filter.less';
import { FilterGruppe } from '../Kursliste';
import bemHelper from '../../utils/bemHelper';

interface Props {
    tittel: string;
    alternativer: string[];
    filterGruppe: FilterGruppe;
    toggleFilter: (gruppe: FilterGruppe, filterattr: string) => void;
}

const cls = bemHelper('filterboks');

const Filter: FunctionComponent<Props> = ({ tittel, alternativer, filterGruppe, toggleFilter }) => {
    return (
        <div className={cls.block}>
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
