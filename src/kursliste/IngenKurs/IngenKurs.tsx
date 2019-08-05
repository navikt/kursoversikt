import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

import bemHelper from '../../utils/bemHelper';
import fjell from './fjell.svg';
import './IngenKurs.less';

const cls = bemHelper('ingenKurs');

const IngenKurs: FunctionComponent = () => {
    return (
        <div className={cls.block}>
            <img src={fjell} alt="fjell" className={cls.element('illustrasjon')} />
            <Systemtittel>Fant ingen kurs</Systemtittel>
            <p>Prøv igjen med andre kriterier</p>
        </div>
    );
};

export default IngenKurs;
