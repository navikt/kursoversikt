import bemHelper from "../../utils/bemHelper";
import React, {FunctionComponent} from "react";
import {Checkbox} from "nav-frontend-skjema";

import './UnderKategoriFilter.less'
import {FilterGruppe} from "../Kursliste";

interface Props {
    alternativer: string[];
    toggleFilter: (gruppe: FilterGruppe, filterattr: string) => void;
    checked: (filtergruppe: FilterGruppe, filterattr: string) => boolean;
}

const cls = bemHelper('underKategoriFilter');

const underkategoriFilterGruppe = 'underkategori'

const UnderKategoriFilter: FunctionComponent<Props> = ({
                                                           alternativer,
                                                           toggleFilter,
                                                           checked,

                                                       }) => {
    return (
        <div className={cls.block}>
            {
                alternativer.map(
                    alternativ =>
                        <Checkbox
                            label={alternativ}
                            key={alternativ}
                            onChange={() => toggleFilter(underkategoriFilterGruppe, alternativ)}
                            checked={checked(underkategoriFilterGruppe, alternativ)}
                        />
                )
            }
        </div>
    );
};

export default UnderKategoriFilter;
