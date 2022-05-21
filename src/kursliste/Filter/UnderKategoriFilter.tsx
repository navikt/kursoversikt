import bemHelper from "../../utils/bemHelper";
import React, {FunctionComponent} from "react";
import { CheckboxGroup, Checkbox } from '@navikt/ds-react';

import './UnderKategoriFilter.less'
import { FilterSpec } from './Filter';

const cls = bemHelper('underKategoriFilter');

const UnderKategoriFilter: FunctionComponent<FilterSpec<string>> = (
    {
        tittel,
        alternativer,
        selected,
        updateSelected,
    }
) => {
    return (
        <div className={cls.block}>
            <CheckboxGroup
                hideLegend
                legend={tittel}
                value={selected}
                onChange={updateSelected}
            >
                {
                    alternativer.map(alternativ =>
                        <Checkbox
                            key={alternativ}
                            value={alternativ}
                        >
                            {alternativ}
                        </Checkbox>
                    )
                }
            </CheckboxGroup>
        </div>
    );
};

export default UnderKategoriFilter;
