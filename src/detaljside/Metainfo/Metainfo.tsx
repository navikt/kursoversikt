import React, { FunctionComponent } from 'react';
import { BodyShort, Label, Panel } from '@navikt/ds-react';
import VarighetInfo from '../../komponenter/VarighetInfo/VarighetInfo';
import PameldingsfristInfo from '../../komponenter/PameldingsfristInfo/PameldingsfristInfo';
import StedInfo from '../../komponenter/StedInfo/StedInfo';
import { Kurs } from '../../models/Kurs';
import ShareKurs from '../ShareKurs';
import bemHelper from '../../utils/bemHelper';
import kalenderIkon from '../../ikoner/calendar-3.svg';
import kursTypeIkon from '../../ikoner/person-2.svg';
import './Metainfo.less';

const cls = bemHelper('metainfo');

interface Props {
    kurs: Kurs;
}

const Metainfo: FunctionComponent<Props> = ({ kurs }) => {
    const kursUrl = window.location.href;
    console.log(kurs.tittel)
    return (
        <span className={cls.block}>
            <Panel className={cls.element('panel')}>
                <div className={cls.element('egenskapTop')}>
                    <img className={cls.element('ikon')} src={kalenderIkon} alt="kalenderIkon" />
                    <Label spacing size="small" className={cls.element('infoTekst')}>
                        <b>Når:&nbsp;</b>
                    </Label>
                    <VarighetInfo
                        startTid={kurs.starttidspunkt}
                        sluttTid={kurs.sluttidspunkt}
                        kursForaLageKlokkeslett={kurs}
                    />
                </div>
                <PameldingsfristInfo
                    pameldingsfrist={kurs.pameldingsfrist}
                    className={cls.element('pamelding')}
                    publiserUtenPameldingsskjema={kurs.publiserUtenPameldingsskjema}
                />
                <StedInfo sted={kurs.sted} />
                <div className={cls.element('egenskapTop')}>
                    <img className={cls.element('ikon')} src={kursTypeIkon} alt="kurstypeikon" />
                    <BodyShort size="small" className={cls.element('infoTekst')}>
                        <b>Type kurs:&nbsp;</b>
                        {kurs.type}
                    </BodyShort>
                </div>
                <ShareKurs url={kursUrl} title={kurs.tittel} />
            </Panel>
        </span>
    );
};

export default Metainfo;
