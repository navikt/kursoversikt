import React, { FunctionComponent } from 'react';
import { formaterVarighet, lagTidspunkt } from '../../utils/datoUtils';
import { Normaltekst } from 'nav-frontend-typografi';
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
            <Normaltekst className={className}>
                {varighet} {kursForaLageKlokkeslett && lagTidspunkt(kursForaLageKlokkeslett)}
            </Normaltekst>
        </div>
    );
};

export default VarighetInfo;
