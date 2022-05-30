import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { onBreadcrumbClick, setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';

interface Brodsmule {
    url: string;
    title: string;
    handleInApp: boolean;
}

interface BrodsmuleProps {
    brodsmuler: Brodsmule[];
}

const Brodsmulesti = ({brodsmuler}: BrodsmuleProps) => {
    const navigate = useNavigate();

    onBreadcrumbClick(breadcrumb => {
        navigate(breadcrumb.url);
    });

    const forsideBrodsmule = [{url: '/', title: 'Kurskalender', handleInApp: true}];

    const breadcrumbs = forsideBrodsmule.concat(brodsmuler);

    setBreadcrumbs(breadcrumbs);

    return (
        <></>
    );
};

export default Brodsmulesti;