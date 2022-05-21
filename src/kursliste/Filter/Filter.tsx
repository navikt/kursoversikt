import React from 'react';
import { CheckboxGroup, Checkbox } from '@navikt/ds-react';
import {Ekspanderbartpanel} from '../../komponenter/Ekspanderbartpanel/Ekspanderbartpanel';

import bemHelper from '../../utils/bemHelper';
import FiltervalgSkeleton from './FiltervalgSkeleton';
import './Filter.less';
import UnderKategoriFilter from "./UnderKategoriFilter";

export interface FilterSpec<Keys extends string> {
    tittel: string;
    alternativer: Keys[];
    selected: Keys[];
    updateSelected: (newSelection: Keys[]) => void;
}

interface Props<Keys extends string> extends FilterSpec<Keys> {
    underkategorier?: Record<Keys, FilterSpec<string>>,
}

const cls = bemHelper('filterboks');

const Filter = <Keys extends string> ({
                                              tittel,
                                              alternativer,
                                              selected,
                                              updateSelected,
                                              underkategorier,
                                          }: Props<Keys>) => {

    return (
        <div className={cls.block}>
            <Ekspanderbartpanel tittel={tittel}>
                <CheckboxGroup
                    legend={tittel}
                    hideLegend
                    value={selected}
                    onChange={updateSelected}
                >
                    {alternativer.length > 0 ? (
                        alternativer
                            .filter(alternativ => alternativ !== 'Landsdekkende')
                            .map(alternativ =>
                                <div key={alternativ}>
                                    <Checkbox value={alternativ}> {alternativ} </Checkbox>
                                    { underkategorier && underkategorier[alternativ] && selected.includes(alternativ) ?
                                        <UnderKategoriFilter
                                            tittel={underkategorier[alternativ].tittel}
                                            alternativer={underkategorier[alternativ].alternativer}
                                            selected={underkategorier[alternativ].selected}
                                            updateSelected={underkategorier[alternativ].updateSelected}
                                        />
                                        : null
                                    }
                                    {/*{(alternativ === hjelpemidlerOgTilrettelegg && checked(filterGruppe, hjelpemidlerOgTilrettelegg) &&*/}
                                    {/*    (<UnderKategoriFilter*/}
                                    {/*        legend={hjelpemidlerOgTilrettelegg}*/}
                                    {/*        alternativer={underkategorier}*/}
                                    {/*        toggleFilter={toggleFilter}*/}
                                    {/*        selected={checked}*/}
                                    {/*    />)*/}
                                    {/*)}*/}
                                </div>
                            )
                    ) : (
                        <FiltervalgSkeleton/>
                    )
                    }
                </CheckboxGroup>
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;
