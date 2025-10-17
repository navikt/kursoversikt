import React, { FunctionComponent } from 'react';
import { BodyLong, BodyShort, Panel } from '@navikt/ds-react';
import { Kurs } from '../../models/Kurs';
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
                <BodyShort size="small">{lagTidspunkt(kurs)}</BodyShort>
                <div className={cls.element('rektangel')} />
            </div>
            <div className={cls.element('hovedInnhold')}>
                <Link to={`/${kurs.id}`} className={classnames(cls.element('header'), 'lenke')}>
                    {kurs.tittel}
                </Link>
                <BodyLong spacing size="small" className={cls.element('beskrivelse')}>
                    {kurs.beskrivelse || ''}
                </BodyLong>
                <StedInfo sted={kurs.sted} />
                <PameldingsfristInfo
                    pameldingsfrist={kurs.pameldingsfrist}
                    publiserUtenPameldingsskjema={kurs.publiserUtenPameldingsskjema}
                />
            </div>
        </Panel>
    );
};

export default KursPanel;
