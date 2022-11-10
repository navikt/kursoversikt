import React, { FC, ReactNode, useState } from 'react';
import { Button, Heading, Panel } from '@navikt/ds-react';
import { Collapse as CollapseIcon, Expand as ExpandIcon } from '@navikt/ds-icons';
import bemHelper from '../../utils/bemHelper';
import './Ekspanderbartpanel.less';

interface Props {
    tittel: string;
    children: ReactNode;
    className?: string;
}

const cls = bemHelper("ekspanderbartpanel")

export const Ekspanderbartpanel: FC<Props> = ({tittel, children, className}) => {
    const [showing, setShowing] = useState(true)

    return (
        <Panel border className={className}>
            <Button
                variant="tertiary"
                className={cls.element("button")}
                onClick={() => setShowing(!showing)}
                aria-expanded={showing}
            >
                <Heading size="small" as="span"> {tittel} </Heading>
                { showing ? <CollapseIcon title="Lukk"/> : <ExpandIcon title="Åpne" /> }
            </Button>

            {showing &&
                <div className={cls.modifier("content")}>
                    {children}
                </div>
            }
        </Panel>
    )
}