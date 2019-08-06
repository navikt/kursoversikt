import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemHelper';
import Skeleton from 'react-loading-skeleton';
import './KursPanel.less';

const cls = bemHelper('kursPanel');

export const lagPlaceholderlisteForKurs = () => (
    <div className={cls.element('skeleton')}>
        {[1, 2, 3].map(n => (
            <KursPanelSkeleton key={n} />
        ))}
    </div>
);

const KursPanelSkeleton: FunctionComponent = () => {
    return (
        <Panel className={cls.block} aria-disabled={true}>
            <div className={cls.element('tidspunkt')}>
                <Skeleton width={70} />
                <Skeleton width={55} />
                <div className={cls.element('rektangel')} />
            </div>
            <div className={cls.element('hovedInnhold')}>
                <div className={cls.element('header')}>
                    <Skeleton width={140} />
                </div>
                <Normaltekst className={cls.element('beskrivelse')}>
                    <Skeleton />
                    <Skeleton width={260} />
                </Normaltekst>
                <div className={cls.element('skeleton__ikonOgTekst')}>
                    <div className={cls.element('skeleton__ikon')}>
                        <Skeleton circle width={20} height={20} />
                    </div>
                    <Skeleton width={130} />
                </div>
                <div className={cls.element('skeleton__ikonOgTekst')}>
                    <div className={cls.element('skeleton__ikon')}>
                        <Skeleton circle width={20} height={20} />
                    </div>
                    <Skeleton width={250} />
                </div>
            </div>
        </Panel>
    );
};

export default KursPanelSkeleton;
