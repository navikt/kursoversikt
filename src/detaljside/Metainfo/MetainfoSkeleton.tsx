import React from 'react';
import Panel from 'nav-frontend-paneler';
import Skeleton from 'react-loading-skeleton';
import './Metainfo.less';
import bemHelper from '../../utils/bemHelper';

const cls = bemHelper('metainfo');

const MetainfoSkeleton = () => (
    <Panel className={cls.block} aria-disabled={true}>
        {[100, 200, 80, 110].map((bredde, i) => (
            <div key={i} className={cls.element('skeleton__rad')}>
                <Skeleton circle height={20} width={20} />
                <Skeleton width={bredde} />
            </div>
        ))}
    </Panel>
);

export default MetainfoSkeleton;
