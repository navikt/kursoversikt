import React, { FunctionComponent } from 'react';
import { formaterVarighet, lagTidspunkt } from '../../utils/datoUtils';
import { BodyShort } from '@navikt/ds-react';
import bemHelper from '../../utils/bemHelper';
import './VarighetInfo.less';
import { Kurs } from '../../models/Kurs';

const cls = bemHelper('varighetInfo');

interface Props {
    startTid: Date;
    sluttTid: Date;
    className?: string;
    kursForaLageKlokkeslett?: Kurs;
}

const VarighetInfo: FunctionComponent<Props> = ({
    startTid,
    sluttTid,
    className,
    kursForaLageKlokkeslett,
}) => {
    const varighet = formaterVarighet(startTid, sluttTid);
    return (
        <div className={cls.block}>
            <BodyShort spacing size="medium" className={className}>
                {varighet} {kursForaLageKlokkeslett && lagTidspunkt(kursForaLageKlokkeslett)}
            </BodyShort>
        </div>
    );
};

export default VarighetInfo;
