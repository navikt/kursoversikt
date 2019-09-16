import React, { FunctionComponent } from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import { FilterGruppe } from '../Kursliste';
import bemHelper from '../../utils/bemHelper';
import FiltervalgSkeleton from './FiltervalgSkeleton';
import './Filter.less';

interface Props {
    tittel: string;
    alternativer: string[];
    filterGruppe: FilterGruppe;
    toggleFilter: (gruppe: FilterGruppe, filterattr: string) => void;
    checked: (filtergruppe: FilterGruppe, filterattr: string) => boolean;
}

const cls = bemHelper('filterboks');

const Filter: FunctionComponent<Props> = ({
    tittel,
    alternativer,
    filterGruppe,
    toggleFilter,
    checked,
}) => {
    return (
        <div className={cls.block}>
            <Ekspanderbartpanel tittel={tittel} apen>
                {alternativer.length > 0 ? (
                    alternativer.map(
                        alternativ =>
                            alternativ !== 'Landsdekkende' && (
                                <Checkbox
                                    label={alternativ}
                                    key={alternativ}
                                    onChange={() => toggleFilter(filterGruppe, alternativ)}
                                    checked={checked(filterGruppe, alternativ)}
                                />
                            )
                    )
                ) : (
                    <FiltervalgSkeleton />
                )}
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;
