import React, { FunctionComponent } from 'react';
import { Heading } from '@navikt/ds-react';

import bemHelper from '../../utils/bemHelper';
import fjell from './fjell.svg';
import './IngenKurs.less';

const cls = bemHelper('ingenKurs');

const IngenKurs: FunctionComponent = () => {
    return (
        <div className={cls.block}>
            <img src={fjell} alt="fjell" className={cls.element('illustrasjon')} />
            <Heading size="medium" level="2">Fant ingen kurs</Heading>
            <p>Prøv igjen med andre kriterier</p>
        </div>
    );
};

export default IngenKurs;
