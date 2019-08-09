import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import VarighetInfo from '../../komponenter/VarighetInfo/VarighetInfo';
import PameldingsfristInfo from '../../komponenter/PameldingsfristInfo/PameldingsfristInfo';
import StedInfo from '../../komponenter/StedInfo/StedInfo';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import { Kurs } from '../../models/Kurs';
import bemHelper from '../../utils/bemHelper';
import kalenderIkon from '../../ikoner/calendar-3.svg';
import kursTypeIkon from '../../ikoner/person-2.svg';
import './Metainfo.less';

const cls = bemHelper('metainfo');

interface Props {
    kurs: Kurs;
}

const Metainfo: FunctionComponent<Props> = ({ kurs }) => {
    return (
        <span className={cls.block}>
            <Panel className={cls.element('panel')}>
                <div className={cls.element('egenskapTop')}>
                    <img className={cls.element('ikon')} src={kalenderIkon} alt="kalenderIkon" />
                    <Element className={cls.element('infoTekst')}>
                        <b>Når:&nbsp;</b>
                    </Element>
                    <VarighetInfo
                        startTid={kurs.starttidspunkt}
                        sluttTid={kurs.sluttidspunkt}
                        kurs={kurs}
                    />
                </div>
                <PameldingsfristInfo
                    pameldingsfrist={kurs.pameldingsfrist}
                    className={cls.element('pamelding')}
                />
                <StedInfo sted={kurs.sted} />
                <div className={cls.element('egenskapTop')}>
                    <img className={cls.element('ikon')} src={kursTypeIkon} alt="kurstypeikon" />
                    <Normaltekst className={cls.element('infoTekst')}>
                        <b>Type kurs:&nbsp;</b>
                        {kurs.type}
                    </Normaltekst>
                </div>
            </Panel>
        </span>
    );
};

export default Metainfo;
