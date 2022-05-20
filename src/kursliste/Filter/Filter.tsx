import React, { FunctionComponent, useEffect } from 'react';
import {Checkbox} from 'nav-frontend-skjema';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import {FilterGruppe} from '../Kursliste';
import bemHelper from '../../utils/bemHelper';
import FiltervalgSkeleton from './FiltervalgSkeleton';
import './Filter.less';
import UnderKategoriFilter from "./UnderKategoriFilter";

interface Props {
    tittel: string;
    alternativer: string[];
    filterGruppe: FilterGruppe;
    toggleFilter: (gruppe: FilterGruppe, filterattr: string) => void;
    checked: (filtergruppe: FilterGruppe, filterattr: string) => boolean;
    underkategorier: string[],
}

const cls = bemHelper('filterboks');
const hjelpemidlerOgTilrettelegg = 'Hjelpemidler og tilrettelegging'

const Filter: FunctionComponent<Props> = ({
                                              tittel,
                                              alternativer,
                                              filterGruppe,
                                              toggleFilter,
                                              checked,
                                              underkategorier,
                                          }) => {
    useEffect(() => {
        console.log("alternativer", {alternativer})
    }, [alternativer])
    return (
        <div className={cls.block}>
            <Ekspanderbartpanel tittel={tittel} apen>
                {alternativer.length > 0 ? (
                    alternativer.map(
                        alternativ =>
                            (alternativ !== 'Landsdekkende' && (
                                    <div key={alternativ}>
                                        <Checkbox
                                            label={alternativ}
                                            onChange={() => toggleFilter(filterGruppe, alternativ)}
                                            checked={checked(filterGruppe, alternativ)}
                                        />
                                        {(alternativ === hjelpemidlerOgTilrettelegg && checked(filterGruppe, hjelpemidlerOgTilrettelegg) &&
                                            (<UnderKategoriFilter alternativer={underkategorier}
                                                                  toggleFilter={toggleFilter}
                                                                  checked={checked}/>)
                                        )}
                                    </div>
                                )
                            )
                    )) : (
                    <FiltervalgSkeleton/>
                )}
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;
