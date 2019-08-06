import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import './Filter.less';
import { FilterGruppe } from '../Kursliste';
import bemHelper from '../../utils/bemHelper';
import Skeleton from 'react-loading-skeleton';

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
                {alternativer.length > 0 ? (
                    alternativer.map(alternativ => (
                        <Checkbox
                            label={alternativ}
                            key={alternativ}
                            onChange={() => toggleFilter(filterGruppe, alternativ)}
                        />
                    ))
                ) : (
                    <div className={cls.element('skeleton')}>
                        {[...Array(3)].map((x, i) => (
                            <div key={i} className={cls.element('skeletonItem')}>
                                <div className={cls.element('skeletonCheckbox')}>
                                    <Skeleton height={30} width={30} />
                                </div>
                                <Skeleton width={50 + Math.random() * 100} />
                            </div>
                        ))}
                    </div>
                )}
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;
