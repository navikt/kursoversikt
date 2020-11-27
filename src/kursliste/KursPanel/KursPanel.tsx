import React, { FunctionComponent } from 'react';
import Panel from 'nav-frontend-paneler';
import { Kurs } from '../../models/Kurs';
import { Normaltekst } from 'nav-frontend-typografi';
import './KursPanel.less';
import bemHelper from '../../utils/bemHelper';
import StedInfo from '../../komponenter/StedInfo/StedInfo';
import PameldingsfristInfo from '../../komponenter/PameldingsfristInfo/PameldingsfristInfo';
import VarighetInfo from '../../komponenter/VarighetInfo/VarighetInfo';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { lagTidspunkt } from '../../utils/datoUtils';

interface Props {
    kurs: Kurs;
}

const cls = bemHelper('kursPanel');

const KursPanel: FunctionComponent<Props> = ({ kurs }) => {
    return (
        <Panel className={cls.block}>
            <div className={cls.element('tidspunkt')}>
                <VarighetInfo
                    startTid={kurs.starttidspunkt}
                    sluttTid={kurs.sluttidspunkt}
                    className={cls.element('tidsTekst')}
                />
                <Normaltekst>{lagTidspunkt(kurs)}</Normaltekst>
                <div className={cls.element('rektangel')} />
            </div>
            <div className={cls.element('hovedInnhold')}>
                <Link to={`/${kurs.id}`} className={classnames(cls.element('header'), 'lenke')}>
                    {kurs.tittel}
                </Link>
                <Normaltekst className={cls.element('beskrivelse')}>
                    {kurs.beskrivelse || ''}
                </Normaltekst>
                <StedInfo sted={kurs.sted} />
                <PameldingsfristInfo pameldingsfrist={kurs.pameldingsfrist} />
            </div>
        </Panel>
    );
};

export default KursPanel;
