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
    const startTidspunkt = kurs.RegistrationFromDateTime;
    const sluttTidspunkt = kurs.RegistrationToDateTime;
    const pameldingsfrist = kurs.RegistrationDeadline;

    return (
        <Panel className={'Kurspanel'}>
            <div className={'Kurspanel__tidspunkt'}>
                {lagDatoTekst(startTidspunkt, sluttTidspunkt, 'Kurspanel__tidsTekst')}
                <Normaltekst>
                    kl.{' '}
                    {startTidspunkt.toLocaleString('nb-no', {
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </Normaltekst>
                <div className={'Kurspanel__rektangel'}></div>
            </div>
            <div className={'Kurspanel__hovedInnhold'}>
                <Lenke
                    className={'Kurspanel__header'}
                    href={'/kursoversikt/' + kurs.RegistrationID}
                >
                    {kurs.Title}
                </Lenke>
                <Normaltekst className={'Kurspanel__beskrivelse'}>
                    {kurs.DescriptionInternal || ''}
                </Normaltekst>
                {lagStedkomponent(kurs)}
                {lagPaameldingsfristkomponent(pameldingsfrist)}
            </div>
        </Panel>
    );
};

export default KursPanel;
