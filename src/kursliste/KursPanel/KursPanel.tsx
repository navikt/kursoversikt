import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import Lenke from 'nav-frontend-lenker';
import { Kurs } from '../../models/Kurs';
import { Normaltekst } from 'nav-frontend-typografi';
import './KursPanel.less';
import bemHelper from '../../utils/bemHelper';
import { lagDatoTekst, lagPaameldingsfristkomponent } from './kursMetaInfoKomponenter';
import StedInfo from '../../komponenter/StedInfo/StedInfo';

interface Props {
    kurs: Kurs;
}

const cls = bemHelper('kursPanel');

const KursPanel: FunctionComponent<Props> = ({ kurs }) => {
    return (
        <Panel className={cls.block}>
            <div className={cls.element('tidspunkt')}>
                {lagDatoTekst(kurs.starttidspunkt, kurs.sluttidspunkt, cls.element('tidsTekst'))}
                <Normaltekst>
                    kl.{' '}
                    {kurs.starttidspunkt.toLocaleString('nb-no', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Normaltekst>
                <div className={cls.element('rektangel')} />
            </div>
            <div className={cls.element('hovedInnhold')}>
                <Lenke className={cls.element('header')} href={'/kursoversikt/' + kurs.id}>
                    {kurs.tittel}
                </Lenke>
                <Normaltekst className={cls.element('beskrivelse')}>
                    {kurs.internBeskrivelse || ''}
                </Normaltekst>
                <StedInfo sted={kurs.sted} />
                {lagPaameldingsfristkomponent(kurs.pameldingsfrist)}
            </div>
        </Panel>
    );
};

export default KursPanel;
