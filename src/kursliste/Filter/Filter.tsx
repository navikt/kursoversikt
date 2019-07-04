import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { Element } from 'nav-frontend-typografi';
interface Props {
    tittel: string;
    spørsmål: string;

}

const Filter: FunctionComponent<Props> = ({
                                              tittel,
                                              spørsmål
                                          }) => {
    return (
        <div >
            <Ekspanderbartpanel tittel={tittel} apen>
                <Element>{spørsmål}</Element>

                    <Checkbox
                        label="label"
                        checked={true}
                    />

            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;