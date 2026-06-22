import React from 'react';
import { Box } from '@navikt/ds-react'
import Skeleton from 'react-loading-skeleton';
import './Metainfo.less';
import bemHelper from '../../utils/bemHelper';

const cls = bemHelper('metainfo');

const MetainfoSkeleton = () => (
    <Box background="default" borderWidth="1" borderColor="info" borderRadius="8" padding="space-4" className={cls.block} aria-disabled={true}>
        {[100, 200, 80, 110].map((bredde, i) => (
            <div key={i} className={cls.element('skeleton__rad')}>
                <Skeleton circle height={20} width={20} />
                <Skeleton width={bredde} />
            </div>
        ))}
    </Box>
);

export default MetainfoSkeleton;
