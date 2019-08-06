import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';

import bemHelper from '../../utils/bemHelper';
import fjell from './fjell.svg';
import './IngenKurs.less';

const cls = bemHelper('ingenKurs');

interface Props {
    vis: boolean;
}

const IngenKurs: FunctionComponent<Props> = ({ vis }) => {
    return (
        <div
            aria-disabled={!vis}
            className={cls.classNames(cls.block, {
                [cls.modifier('vis')]: vis,
            })}
        >
            <img src={fjell} alt="fjell" className={cls.element('illustrasjon')} />
            <Systemtittel>Fant ingen kurs</Systemtittel>
            <p>Prøv igjen med andre kriterier</p>
        </div>
    );
};

export default IngenKurs;
