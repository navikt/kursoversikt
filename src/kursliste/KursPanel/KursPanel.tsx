import React, { FunctionComponent } from 'react';
import { Panel } from 'nav-frontend-paneler';
import Lenke from 'nav-frontend-lenker';
import { Kurs } from '../../models/Kurs';
import { Normaltekst } from 'nav-frontend-typografi';
import './KursPanel.less';
import {
    lagPaameldingsfristkomponent,
    lagStedkomponent,
    lagDatoTekst,
} from '../../utils/kursMetaInfoKomponenter';

interface Props {
    kurs: Kurs;
}

const KursPanel: FunctionComponent<Props> = ({ kurs }) => {
    return (
        <Panel className={'Kurspanel'}>
            <div className={'Kurspanel__tidspunkt'}>
                {lagDatoTekst(kurs.starttidspunkt, kurs.sluttidspunkt, 'Kurspanel__tidsTekst')}
                <Normaltekst>
                    kl.{' '}
                    {kurs.starttidspunkt.toLocaleString('nb-no', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Normaltekst>
                <div className={'Kurspanel__rektangel'}></div>
            </div>
            <div className={'Kurspanel__hovedInnhold'}>
                <Lenke className={'Kurspanel__header'} href={'/kursoversikt/' + kurs.id}>
                    {kurs.tittel}
                </Lenke>
                <Normaltekst className={'Kurspanel__beskrivelse'}>
                    {kurs.internBeskrivelse || ''}
                </Normaltekst>
                {lagStedkomponent(kurs)}
                {lagPaameldingsfristkomponent(kurs.pameldingsfrist)}
            </div>
        </Panel>
    );
};

export default KursPanel;
