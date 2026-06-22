import React, { FC, ReactNode, useState } from 'react';
import { Button, Heading, Box } from '@navikt/ds-react';
import { ChevronUpIcon, ChevronDownIcon } from '@navikt/aksel-icons';
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
        <Box padding="space-4" className={className}>
            <Button
                variant="tertiary"
                className={cls.element("button")}
                onClick={() => setShowing(!showing)}
                aria-expanded={showing}
            >
                <Heading size="small" as="span"> {tittel} </Heading>
                { showing ? <ChevronUpIcon title="Lukk" aria-hidden /> : <ChevronDownIcon title="Åpne" aria-hidden /> }
            </Button>

            {showing &&
                <div className={cls.modifier("content")}>
                    {children}
                </div>
            }
        </Box>
    )
}