import React, { FunctionComponent } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemHelper';
import './Soketreff.less';
interface Props {
    antallTreff: number;
    totaltAntallKurs: number;
}

const cls = bemHelper('soketreff');

const Soketreff: FunctionComponent<Props> = ({ antallTreff, totaltAntallKurs }) => {
    return (
        <Normaltekst className={cls.block}>
            {' '}
            <b>{antallTreff}</b> treff i <b>{totaltAntallKurs}</b> kurs
        </Normaltekst>
    );
};

export default Soketreff;
