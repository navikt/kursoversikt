import React from 'react';
import { CheckboxGroup, Checkbox } from '@navikt/ds-react';
import {Ekspanderbartpanel} from '../../komponenter/Ekspanderbartpanel/Ekspanderbartpanel';

import bemHelper from '../../utils/bemHelper';
import FiltervalgSkeleton from './FiltervalgSkeleton';
import './Filter.less';

export interface FilterSpec<Keys extends string> {
    tittel: string;
    alternativer: Keys[];
    selected: Keys[];
    updateSelected: (newSelection: Keys[]) => void;
}

interface Props<Keys extends string> extends FilterSpec<Keys> {
    className?: string;
    underkategorier?: Record<Keys, FilterSpec<string>>,
}

const cls = bemHelper('filterboks');

const Filter = <Keys extends string> (props: Props<Keys>) =>
    <Ekspanderbartpanel tittel={props.tittel} className={cls.block}>
        <Checkboxes {...props} />
    </Ekspanderbartpanel>;

const Checkboxes = <Keys extends string>(
        {
            tittel,
            alternativer,
            selected,
            updateSelected,
            underkategorier,
            className
        }: Props<Keys>
    ) =>
        <CheckboxGroup
            legend={tittel}
            hideLegend
            value={selected}
            onChange={updateSelected}
            className={className}
        >
            {alternativer.length > 0 ? (
                alternativer
                    .filter(alternativ => alternativ !== 'Landsdekkende')
                    .map(alternativ =>
                        <div key={alternativ}>
                            <Checkbox value={alternativ}> {alternativ} </Checkbox>
                            { underkategorier && underkategorier[alternativ] && selected.includes(alternativ) ?
                                <Checkboxes
                                    tittel={underkategorier[alternativ].tittel}
                                    alternativer={underkategorier[alternativ].alternativer}
                                    selected={underkategorier[alternativ].selected}
                                    updateSelected={underkategorier[alternativ].updateSelected}
                                    className={cls.element("checkboxes", "indent")}
                                />
                                : null
                            }
                        </div>
                    )
            ) : (
                <FiltervalgSkeleton/>
            )
            }
        </CheckboxGroup>
;

export default Filter;
