import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import { Element } from 'nav-frontend-typografi';
interface Props {
    tittel: string;
    sporsmaal: string;

}

const Filter: FunctionComponent<Props> = ({
                                              tittel,
                                              sporsmaal
                                          }) => {
    return (
        <div >
            <Ekspanderbartpanel tittel={tittel} apen>
                <Element>{sporsmaal}</Element>

                    <Checkbox
                        label="label"
                        checked={true}
                    />

            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;