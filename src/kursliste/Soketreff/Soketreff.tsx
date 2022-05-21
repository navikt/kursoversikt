import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import bemHelper from '../../utils/bemHelper';
import './Soketreff.less';

interface Props {
    antallTreff: number;
    totaltAntallKurs: number;
}

const cls = bemHelper('soketreff');

const Soketreff: FunctionComponent<Props> = ({ antallTreff, totaltAntallKurs }) => {
    return (
        <BodyShort spacing className={cls.block}>
            <b>{antallTreff}</b> treff i <b>{totaltAntallKurs}</b> kurs
        </BodyShort>
    );
};

export default Soketreff;
