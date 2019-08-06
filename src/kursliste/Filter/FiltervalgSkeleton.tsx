import React from 'react';
import Skeleton from 'react-loading-skeleton';
import bemHelper from '../../utils/bemHelper';
import './FiltervalgSkeleton.less';

const cls = bemHelper('filtervalgSkeleton');

const FiltervalgSkeleton = () => {
    const treValg = [...Array(3)];

    return (
        <div className={cls.block} aria-disabled={true}>
            {treValg.map((_, i) => {
                const tekstbredde = 50 + Math.random() * 100;

                return (
                    <div key={i} className={cls.element('valg')}>
                        <div className={cls.element('checkbox')}>
                            <Skeleton height={26} width={26} />
                        </div>
                        <Skeleton width={tekstbredde} />
                    </div>
                );
            })}
        </div>
    );
};

export default FiltervalgSkeleton;
