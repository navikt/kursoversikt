import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Checkbox } from 'nav-frontend-skjema';
import "./Filter.less"
interface Props {
    tittel: string;
    alternativer: string[];

}

const Filter: FunctionComponent<Props> = ({
                                              tittel,
                                              alternativer
                                          }) => {
    return (
        <div className={"filterboks"}>
            <Ekspanderbartpanel tittel={tittel} apen>
                {alternativer.map(alternativ => (
                    <Checkbox
                        label={alternativ}
                        key={alternativ}
                    />
                ))}
            </Ekspanderbartpanel>
        </div>
    );
};

export default Filter;