const randomDates = () => {
    const start = new Date()
    start.setMonth(start.getMonth() - 3)
    const end = new Date()
    end.setMonth(start.getMonth() + 3)
    const from = new Date(+start + Math.random() * (end - start));
    const to = new Date(from)
    to.setMonth(from.getMonth() + 1)
    const deadline = new Date(from)
    deadline.setMonth(from.getMonth() + 1)
    deadline.setHours(to.getHours() - (24 * 7))
    return {
        from: from.toISOString(),
        to: to.toISOString(),
        deadline: deadline.toISOString(),
    };
}

const sfkursliste = [{
    "Title": "Hørselsteknisk utstyr: Roger skoleanlegg i skolen – Koding av utstyr",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/pamelding/ss/pamelding?id=a160E00000295DmQAI",
    "RegistrationToDateTime": "2020-11-17T12:00:00.000Z",
    "RegistrationPlaceName": "Videokonferanse",
    "RegistrationID": "a160E00000295DmQAI",
    "RegistrationFromDateTime": "2020-11-17T11:00:00.000Z",
    "RegistrationDeadline": "2020-11-13T14:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "AVLYST Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002cZcoQAE",
    "RegistrationToDateTime": "2021-05-11T13:00:00.000Z",
    "RegistrationPlaceName": "Sannergata 2",
    "RegistrationID": "a160E000002cZcoQAE",
    "RegistrationFromDateTime": "2021-05-11T12:00:00.000Z",
    "RegistrationDeadline": "2021-05-10T12:00:00.000Z",
    "FrontPageDescription": "<p>Hola</p>",
    "Description": "sdfgsdfg",
    "configurable_custom": {
        "Underkategori": "Kognisjon;",
        "Type": "Webinar",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002WfSLQA0",
    "RegistrationToDateTime": "2021-02-16T14:00:00.000Z",
    "RegistrationPlaceName": "NAV Oslo",
    "RegistrationID": "a160E000002WfSLQA0",
    "RegistrationFromDateTime": "2021-02-16T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-15T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Test2",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002WfSQQA0",
    "RegistrationToDateTime": "2021-02-23T14:00:00.000Z",
    "RegistrationPlaceName": "NAV Oslo",
    "RegistrationID": "a160E000002WfSQQA0",
    "RegistrationFromDateTime": "2021-02-23T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-15T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Bernard sin",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002Y4D9QAK",
    "RegistrationToDateTime": "2021-03-01T16:00:00.000Z",
    "RegistrationPlaceName": "Moss",
    "RegistrationID": "a160E000002Y4D9QAK",
    "RegistrationFromDateTime": "2021-03-01T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-26T12:00:00.000Z",
    "FrontPageDescription": "<p>Litt mer tekst her</p>",
    "Description": "En liten kort beskrivelse",
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Bernard sin klone",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002YdY8QAK",
    "RegistrationToDateTime": "2021-03-01T16:00:00.000Z",
    "RegistrationPlaceName": "Moss",
    "RegistrationID": "a160E000002YdY8QAK",
    "RegistrationFromDateTime": "2021-03-01T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-26T12:00:00.000Z",
    "FrontPageDescription": "<p>Litt mer tekst her</p>",
    "Description": "En liten kort beskrivelse",
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Test deaktivering",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002X93DQAS",
    "RegistrationToDateTime": "2021-02-08T14:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002X93DQAS",
    "RegistrationFromDateTime": "2021-02-08T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-07T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002XxOBQA0",
    "RegistrationToDateTime": "2021-03-26T13:15:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002XxOBQA0",
    "RegistrationFromDateTime": "2021-03-26T12:00:00.000Z",
    "RegistrationDeadline": "2021-03-24T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "Nettverks samling Barnehage langt ord",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002WpHTQA0",
    "RegistrationToDateTime": "2021-10-10T10:45:00.000Z",
    "RegistrationPlaceName": "Artig Barnehage",
    "RegistrationID": "a160E000002WpHTQA1",
    "RegistrationFromDateTime": "2021-06-01T08:15:00.000Z",
    "RegistrationDeadline": "2021-10-10T20:45:00.000Z",
    "FrontPageDescription": null,
    "Description": "Et veldig langt ord: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "configurable_custom": {
        "Underkategori": "Bolig;Hørsel;Kognisjon",
        "Type": "Nettverks- og erfaringssamling",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Nettverks samling Barnehage",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002WpHTQA0",
    "RegistrationToDateTime": "2021-10-10T10:45:00.000Z",
    "RegistrationPlaceName": "Artig Barnehage",
    "RegistrationID": "a160E000002WpHTQA0",
    "RegistrationFromDateTime": "2021-06-01T08:15:00.000Z",
    "RegistrationDeadline": "2021-10-10T20:45:00.000Z",
    "FrontPageDescription": null,
    "Description": "Deling av informasjon og erfaringsutvekslingss",
    "configurable_custom": {
        "Underkategori": "Bolig;Hørsel;Kognisjon",
        "Type": "Nettverks- og erfaringssamling",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Morsomt kurs",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002UpTHQA0",
    "RegistrationToDateTime": "2021-02-01T14:00:00.000Z",
    "RegistrationPlaceName": "Oslo",
    "RegistrationID": "a160E000002UpTHQA0",
    "RegistrationFromDateTime": "2021-02-01T12:00:00.000Z",
    "RegistrationDeadline": "2021-01-31T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Jobbsøking",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://aaregisteretsoknad.nav.no/s/pamelding?id=a160E000002qk0UQAQ",
    "RegistrationToDateTime": "2021-06-23T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002qk0UQAQ",
    "RegistrationFromDateTime": "2021-06-23T12:00:00.000Z",
    "RegistrationDeadline": "2021-06-22T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Arbeidssøkeraktivitet",
        "Fylke": "Agder;Møre og Romsdal;Nordland;Rogaland"
    }
}, {
    "Title": "AVLYST Barnehagenettverk",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002XOUMQA4",
    "RegistrationToDateTime": "2021-04-09T15:00:00.000Z",
    "RegistrationPlaceName": "Adresse Ski",
    "RegistrationID": "a160E000002XOUMQA4",
    "RegistrationFromDateTime": "2021-03-01T09:00:00.000Z",
    "RegistrationDeadline": "2021-03-08T12:00:00.000Z",
    "FrontPageDescription": "<p>Kravspesfikasjon (henter fra)</p>",
    "Description": "Karriereveiledningskurs for arbeidssøkere",
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Nettverks- og erfaringssamling",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Veldig, veldig, veldig, veldig, veldig, veldig, veldig, veldig, veldig, veldig, veldig, veldig lang tittel",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002Z2TFQA0",
    "RegistrationToDateTime": "2021-11-01T14:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002Z2TFQA1",
    "RegistrationFromDateTime": "2021-11-01T12:00:00.000Z",
    "RegistrationDeadline": "2021-04-05T12:00:00.000Z",
    "FrontPageDescription":"<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Webinar", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "test tid",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002Z2TFQA0",
    "RegistrationToDateTime": "2021-11-01T14:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002Z2TFQA0",
    "RegistrationFromDateTime": "2021-11-01T12:00:00.000Z",
    "RegistrationDeadline": "2021-04-05T12:00:00.000Z",
    "FrontPageDescription":"<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Webinar", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Kurs i flere fylker",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://aaregisteretsoknad.nav.no/s/pamelding?id=a160E000002qSNOQA2",
    "RegistrationToDateTime": "2021-06-07T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002qSNOQA2",
    "RegistrationFromDateTime": "2021-06-07T12:00:00.000Z",
    "RegistrationDeadline": "2021-06-06T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Arbeidssøkeraktivitet",
        "Fylke": "Oslo;Agder;Rogaland"
    }
}, {
    "Title": "Kurs for spesielt interesserte",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://aaregisteretsoknad.nav.no/s/pamelding?id=a160E000002qk0eQAA",
    "RegistrationToDateTime": "2021-06-30T12:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002qk0eQAA",
    "RegistrationFromDateTime": "2021-06-30T09:00:00.000Z",
    "RegistrationDeadline": "2021-06-29T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Informasjonsmøte",
        "Tema": null,
        "Fylke": "Oslo;Vestfold og Telemark;Vest-Viken;Øst-Viken"
    }
}, {
    "Title": "Hjelpekurs",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://aaregisteretsoknad.nav.no/s/pamelding?id=a160E000002qk0ZQAQ",
    "RegistrationToDateTime": "2021-06-21T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002qk0ZQAQ",
    "RegistrationFromDateTime": "2021-06-21T12:00:00.000Z",
    "RegistrationDeadline": "2021-06-20T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": "Oslo;Agder;Innlande;Møre og Romsdal;Nordland;Rogaland;Troms og Finnmark;Trøndelag;Vestfold og Telemark;Vestland;Vest-Viken;Øst-Viken"
    }
}, {
    "Title": "Eksperbistand",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002QnWbQAK",
    "RegistrationToDateTime": "2020-12-03T13:30:00.000Z",
    "RegistrationPlaceName": "Sannergata 2",
    "RegistrationID": "a160E000002QnWbQAK",
    "RegistrationFromDateTime": "2020-12-03T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-30T12:00:00.000Z",
    "FrontPageDescription": "<p>Hvem er eksperten?</p>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Webinar", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002TstdQAC",
    "RegistrationToDateTime": "2021-01-29T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002TstdQAC",
    "RegistrationFromDateTime": "2021-01-29T12:00:00.000Z",
    "RegistrationDeadline": "2021-01-28T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "Opplæring - klone",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002X8vaQAC",
    "RegistrationToDateTime": "2021-02-15T13:00:00.000Z",
    "RegistrationPlaceName": "Oslo",
    "RegistrationID": "a160E000002X8vaQAC",
    "RegistrationFromDateTime": "2021-02-15T10:00:00.000Z",
    "RegistrationDeadline": "2021-02-14T12:00:00.000Z",
    "FrontPageDescription": "<p><a href=\"\" target=\"_blank\">stine.uddal@nav.no</a> Dette er beskrivelsen av selve kurset</p><p><br></p><p><br></p>",
    "Description": "Denne beskrivelsen havner i kurslisten",
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002X8vVQAS",
    "RegistrationToDateTime": "2021-02-15T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002X8vVQAS",
    "RegistrationFromDateTime": "2021-02-15T12:00:00.000Z",
    "RegistrationDeadline": "2021-02-14T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Opplæring",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002W5nNQAS",
    "RegistrationToDateTime": "2021-02-15T13:00:00.000Z",
    "RegistrationPlaceName": "Oslo",
    "RegistrationID": "a160E000002W5nNQAS",
    "RegistrationFromDateTime": "2021-02-15T10:00:00.000Z",
    "RegistrationDeadline": "2021-02-14T12:00:00.000Z",
    "FrontPageDescription": "<p><a href=\"\" target=\"_blank\">stine.uddal@nav.no</a> Dette er beskrivelsen av selve kurset</p><p><br></p><p><br></p>",
    "Description": "Denne beskrivelsen havner i kurslisten",
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002Ry2rQAC",
    "RegistrationToDateTime": "2020-12-23T12:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002Ry2rQAC",
    "RegistrationFromDateTime": "2020-12-20T12:00:00.000Z",
    "RegistrationDeadline": "2020-12-24T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "Test",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002PXkPQAW",
    "RegistrationToDateTime": "2020-11-30T13:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002PXkPQAW",
    "RegistrationFromDateTime": "2020-11-30T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-29T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Sykkelutprøving Kirkenes",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4aeQAA",
    "RegistrationToDateTime": "2020-09-29T12:59:59.000Z",
    "RegistrationPlaceName": "Barentshallen",
    "RegistrationID": "a160E000001s4aeQAA",
    "RegistrationFromDateTime": "2020-09-29T09:00:00.000Z",
    "RegistrationDeadline": "2020-09-28T23:00:00.000Z",
    "FrontPageDescription": "<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": "Hørsel",
        "Type": "Konferanse",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Hørsel: Digitalt kurs \"Hør etter!\"",
    "ShowInActivityList": 1,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4afQAA",
    "RegistrationToDateTime": "2020-11-19T15:29:59.000Z",
    "RegistrationPlaceName": "Digitalt kurs ved NAV Hjelpemiddelsentral Nordland",
    "RegistrationID": "a160E000001s4afQAA",
    "RegistrationFromDateTime": "2020-11-19T11:30:00.000Z",
    "RegistrationDeadline": "2020-11-18T15:00:00.000Z",
    "FrontPageDescription": "<h2><b>NAV Hjelpemiddelsentral Nordland inviterer til digitalt kurs</b></h2><h1><b>HØR ETTER!</b></h1><p><br></p><h3><b>Hvordan skape godt kommunikasjonsmiljø?</b></h3><h3><b>Hørselsvansker og tilrettelegging</b></h3><p><b>Onsdag 14. oktober klokken 11:30-15:30</b></p><p><b>Link til oppkobling: </b><a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_Zjk3Y2EzODMtYzcxZS00MDFiLTk5ZmQtMTZkNjczNTdlNmQ5%40thread.v2/0?context=%7b%22Tid%22%3a%2262366534-1ec3-4962-8869-9b5535279d0b%22%2c%22Oid%22%3a%22311edc57-e9e1-492f-b910-8ccce219ceb7%22%7d\" target=\"_blank\">Bli med i Microsoft Teams-møte</a></p><p><br></p><p>Vi tilbyr kurs til lærere, barnehagelærere, pedagoger og andre som jobber med barn og ungdom med hørselsvansker i barnehage, skole og utdanning.</p><p><br></p><h3>Kurset vil omhandle følgende temaer</h3><ul><li>Hva er et godt lydmiljø og hvorfor er det viktig for alle?</li><li>Råd og veiledning rundt tilrettelegging</li><li>Hørselstekniske hjelpemidler; Hva og hvorfor?</li><li>Overganger mellom barnehage og skole, mellom skoler samt overgang mellom skole og arbeidsliv</li><li>Saksgang og søknadsprosedyre</li><li>Innlegg fra Statped</li><li>Innlegg fra Hørselsentral</li></ul><h4>Kursledere<b>: </b>Audiopedagog Inger Lise Neef og seniorrådgiver Line Bjørnerud</h4><p><b>Praktisk informasjon:</b></p><p>Det blir informasjon rundt den praktiske gjennomføringen ved oppstart av kurset.</p><p><br></p><p>For mer informasjon, ta kontakt med <a href=\"mailto:Inger.lise.neef@nav.no\" target=\"_blank\">Inger.lise.neef@nav.no</a> eller <a href=\"mailto:line.bjornerud@nav.no\" target=\"_blank\">line.bjornerud@nav.no</a></p><p><br></p><p>Velkommen til digitalt kurs!</p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": "Syn",
        "Type": "Webinar",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Hørsel: Webinar - Kurs i trådløse samtaleforsterkere",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4agQAA",
    "RegistrationToDateTime": "2020-11-18T14:30:00.000Z",
    "RegistrationPlaceName": "Webinar ved NAV Hjelpemiddelsentral Oslo",
    "RegistrationID": "a160E000001s4agQAA",
    "RegistrationFromDateTime": "2020-11-18T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-04T15:00:00.000Z",
    "FrontPageDescription": "<h3>Mål </h3>\\r\\n<p>NAV Hjelpemiddelsentral Oslo tilbyr kurs for ergoterapeuter og andre i kommunen som jobber med hørsel. <br>Målet er å opparbeide økt kompetanse på utredning og utprøving trådløs samtaleforsterker.<br>  </p>\\r\\n<h3>Innhold/program </h3>\\r\\n<p>Kartlegging og utprøving av trådløs samtaleforsterker &quot;Roger&quot;. <br>Valg av mottaker og sender - når velger man hva.<br>Bruk og stell.  </p>\\r\\n<h3>Praktisk informasjon </h3>\\r\\n<p>Kurset vil foregå digitalt via Teams:</p>\\r\\n<p>Dette kurset vil ikke bli gjort opptak av <br>Ditt navn vil være synlig for andre deltagere i kurset <br>Du kan selv velge om du vil ha på bilde/lyd av deg selv <br>Ingen deltagere har lov til å gjøre opptak av kurset som holdes </p>\\r\\n<p> </p>\\r\\n<p>Meld deg på kurset her og du vil få tilsendt link til pålogging i forkant av kurset. </p>\\r\\n<p>Les her hvordan du blir med i et møte uten en Teams konto:</p>\\r\\n<p><a class=\"Hyperlink SCXW33104041 BCX9\" href=\"https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508\" target=\"_blank\"><span class=\"TextRun Underlined SCXW33104041 BCX9\"><span class=\"NormalTextRun SCXW33104041 BCX9\">https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508</span></span></a></p>\\r\\n<p> </p>\\r\\n<p>Kursansvarlig: Helena Erstad <a href=\"mailto:helena.erstad@nav.no \" target=\"_blank\">helena.erstad@nav.no </a></p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Syn: Webinar - Tilpasning og opplæring av IKT til synshemmede",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4ahQAA",
    "RegistrationToDateTime": "2020-11-30T12:00:00.000Z",
    "RegistrationPlaceName": "Webinar ved NAV Hjelpemiddelsentral Oslo",
    "RegistrationID": "a160E000001s4ahQAA",
    "RegistrationFromDateTime": "2020-11-30T09:00:00.000Z",
    "RegistrationDeadline": "2020-11-29T12:00:00.000Z",
    "FrontPageDescription": "<h3>Mål </h3><p>Kurset inngår som en del av opplæringen i hjelpemidlenes funksjon, og vil inneholde teoretisk innføring og oppgaver til praktisk jobbing med tekniske datahjelpemidler for elever som er svaksynte. For fullstendig program, se tilsendt invitasjon.   </p><p><br></p><h3>Innhold/program </h3><h3>Praktisk informasjon </h3><p>Hvis du har behov for tolk, er det fint om du gir oss beskjed snarest mulig, og innen fristen for påmelding er gått ut.</p><p><br></p><p>Kurset vil foregå digitalt via Teams:</p><p><br></p><p>Dette kurset vil ikke bli gjort opptak av </p><p>Ditt navn vil være synlig for andre deltagere i kurset </p><p>Du kan selv velge om du vil ha på bilde/lyd av deg selv </p><p>Ingen deltagere har lov til å gjøre opptak av kurset som holdes </p><p><br></p><p><br></p><p>Meld deg på kurset her og du vil få tilsendt link til pålogging i forkant av kurset. </p><p><br></p><p>Les her hvordan du blir med i et møte uten en Teams konto:</p><p><br></p><p><a href=\"https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508\" target=\"_blank\">https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508</a></p><p><br></p><p>Kursansvarlig: Frøydis Formo Riise <a href=\"mailto:froydis.formo.riise@nav.no\" target=\"_blank\">froydis.formo.riise@nav.no</a></p><p>´</p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "PODD- Introduksjonskurs og workshop i Tromsø",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4aYQAQ",
    "RegistrationToDateTime": "2020-10-16T12:59:59.000Z",
    "RegistrationPlaceName": "NAV Hjelpemiddelsentral Troms og Finnmark, Tromsø",
    "RegistrationID": "a160E000001s4aYQAQ",
    "RegistrationFromDateTime": "2020-10-15T08:00:00.000Z",
    "RegistrationDeadline": "2020-10-11T23:00:00.000Z",
    "FrontPageDescription": "<p><b>PODD</b> står for Pragmatisk Organisering av Dynamisk Display.</p><p><br></p><p><i>Pragmatisk organisering</i>: Vokabularet er organisert etter personens kommunikative funksjoner og samtalebehov. Tar utgangspunkt i de mest effektive måtene å organisere ordforrådet på, for å møte varierte krav i kommunikasjonen</p><p><i>Dynamisk Display</i>: Kommunikasjonshjelpemidler med symboler, der et sideskift skjer på bakgrunn av det foregående valget.</p><p><br></p><p>PODD finnes i flere versjoner som følger de naturlige trinnene i språkutviklingen.</p><p><br></p><p><b>INNHOLD:</b></p><p>Dag 1  Gjennomgang av oppbygging, forskjeller og likheter i de ulike PODD materialene – både bøker og elektronisk.</p><p><br></p><p>Dag 2  Vise hvordan man redigerer i PODD bøkene og den elektroniske versjonen slik at det blir et personlig hjelpemiddel.</p><p><br></p><p><b>MÅL FOR DAGENE:</b></p><p>Lære om PODD og hvordan man enkelt kan gjøre materialet personlig!</p><p><br></p><p><b>MÅLGRUPPE:</b></p><p>Logopeder, spesialpedagoger, lærere, assistenter, ergoterapeuter, foresatte, vernepleiere og andre som er interessert i å tilrettelegge for kommunikasjon for personer med behov for ASK</p><p><br></p><p> </p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "PODD - introduksjon og workshop i Alta",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4aZQAQ",
    "RegistrationToDateTime": "2020-10-14T12:59:59.000Z",
    "RegistrationPlaceName": "Alta",
    "RegistrationID": "a160E000001s4aZQAQ",
    "RegistrationFromDateTime": "2020-10-13T08:00:00.000Z",
    "RegistrationDeadline": "2020-10-07T23:00:00.000Z",
    "FrontPageDescription": "<p><strong>Kommunikasjon med symboler!</strong></p>\\r\\n<p><strong>PODD</strong> står for Pragmatisk Organisering av Dynamisk Display.</p>\\r\\n<p><em>Pragmatisk organisering</em>: Vokabularet er organisert etter personens kommunikative funksjoner og samtalebehov. Tar utgangspunkt i de mest effektive måtene å organisere ordforrådet på, for å møte varierte krav i kommunikasjonen<br><em>Dynamisk Display</em>: Kommunikasjonshjelpemidler med symboler, der et sideskift skjer på bakgrunn av det foregående valget.</p>\\r\\n<p>PODD finnes i flere versjoner som følger de naturlige trinnene i språkutviklingen.</p>\\r\\n<p><strong>INNHOLD:<br></strong>Dag 1     Gjennomgang av oppbygging, forskjeller og likheter i de ulike PODD materialene – både bøker og elektronisk.</p>\\r\\n<p>Dag 2     Vise hvordan man redigerer i PODD bøkene og den elektroniske versjonen slik at det blir et personlig hjelpemiddel.</p>\\r\\n<p><strong>MÅL FOR DAGENE:</strong><br>Lære om PODD og hvordan man enkelt kan gjøre materialet personlig!</p>\\r\\n<p><strong>MÅLGRUPPE:<br></strong>Logopeder, spesialpedagoger, lærere, assistenter, ergoterapeuter, foresatte, vernepleiere og andre som er interessert i å tilrettelegge for kommunikasjon for personer med behov for ASK</p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Kurs",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Personlig Økonomi - over 3 dager (Sandnes)",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4aaQAA",
    "RegistrationToDateTime": "2020-10-20T10:30:00.000Z",
    "RegistrationPlaceName": "NAV Sandnes",
    "RegistrationID": "a160E000001s4aaQAA",
    "RegistrationFromDateTime": "2020-10-20T07:30:00.000Z",
    "RegistrationDeadline": "2020-10-19T12:59:59.000Z",
    "FrontPageDescription": "<p>Kurset holdes over 3 dager, 20. og 21. oktober, samt 17. november. Klokken 0830-1130 alle dagene. </p>\\r\\n<p><strong>Ta med BankId og Bærbar PC.</strong> (Hvis du ikke har pc får du låne av NAV)</p>\\r\\n<p> </p>\\r\\n<p>Kurset er praktisk rettet. Stikkord angående innhold i kurset er:</p>\\r\\n<ul></ul>\\r\\n<ul><li>Smart pengebruk</li></ul>\\r\\n<ul><li>Hva bruker vi pengene på?</li></ul>\\r\\n<ul><li>Sparing</li></ul>\\r\\n<ul><li>Lage budsjett</li></ul>\\r\\n<ul><li>Holde seg til budsjettet</li></ul>\\r\\n\\r\\n<p>Vel møtt!</p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Informasjonsmøte",
        "Tema": "Arbeidssøkeraktivitet",
        "Fylke": null
    }
}, {
    "Title": "Sykkelutprøving Alta",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4abQAA",
    "RegistrationToDateTime": "2020-10-02T12:00:00.000Z",
    "RegistrationPlaceName": "BUL-hallen",
    "RegistrationID": "a160E000001s4abQAA",
    "RegistrationFromDateTime": "2020-10-02T08:00:00.000Z",
    "RegistrationDeadline": "2020-10-01T23:00:00.000Z",
    "FrontPageDescription": "<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Konferanse",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Sykkelutprøving Hammerfest",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4acQAA",
    "RegistrationToDateTime": "2020-10-01T12:59:59.000Z",
    "RegistrationPlaceName": "Flerbrukshallen",
    "RegistrationID": "a160E000001s4acQAA",
    "RegistrationFromDateTime": "2020-10-01T09:00:00.000Z",
    "RegistrationDeadline": "2020-10-01T00:00:00.000Z",
    "FrontPageDescription": "<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Konferanse",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Sykkelutprøving Vadsø",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001s4adQAA",
    "RegistrationToDateTime": "2020-09-30T12:00:00.000Z",
    "RegistrationPlaceName": "Varangerhallen",
    "RegistrationID": "a160E000001s4adQAA",
    "RegistrationFromDateTime": "2020-09-30T08:00:00.000Z",
    "RegistrationDeadline": "2020-09-29T23:00:00.000Z",
    "FrontPageDescription": "<p><strong>Påmelding er ikke nødvendig!</strong></p>\\r\\n<p><strong>Målgruppe:</strong><strong><br></strong>Alle interesserte og våre samarbeidspartnere. <br>NAV kan låne ut sykler til de under 26 år som har behov for spesialsykler, etter søknad. De som er over 26 år må betale en egenandel (10% av verdien på sykkelen, maks kr 4000,-)</p>\\r\\n<p><strong>Utprøving:</strong><br>Vi stiller med terapeuter og forhandlere som kan bistå med utprøving og tilpassing. <br>De som skal hjelpe til å søke om sykkel bør delta ved utprøvingen.<br>Er det noen som har spesielle behov vil vi vite om det i forkant, og <em>så snart som mulig</em>, slik at forhandler har mulighet for å ta med utstyr til tilpassing.</p>\\r\\n<p><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">Forhandlere som deltar er: </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://bardum.no/produktkategori/sykler-og-motor/\" target=\"_blank\">Bardum</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://www.caretec.no/produktkategori/aktivitetsutstyr/sykler-utstyr/\" target=\"_blank\">Caretec</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://hjelpemiddelspesialisten.no/produkter/sykler\" target=\"_blank\">Hjelpemiddelspesialisten</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.krabat.no/\" target=\"_blank\">Krabat</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://medema.no/produkter/sykler/\" target=\"_blank\">Medema</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">, </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"http://skeno.no/produkter/sykkel/\" target=\"_blank\">Skeno</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\"> og </span><a style=\"color: #0066cc; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: underline; white-space: normal;\" href=\"https://www.sunrisemedical.no/\" target=\"_blank\">Sunrise Medical</a><span style=\"float: none; background-color: #ffffff; color: #000000; font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 14px; font-style: normal; font-weight: 400; text-align: left; text-decoration: none; white-space: normal;\">.</span></p>\\r\\n<p><strong>Husk kartleggingen i forkant</strong><strong>:</strong><br>- gi informasjon om regelverk og egenandel<br>- diskuter hvor sykkelen skal brukes<br>- kan personen ivareta sin egen og andres sikkerhet? <br>- trengs det spesiell sykkelstørrelse og tilleggsutstyr?<br>- kan sykkelen oppbevares forsvarlig, også innendørs om vinteren?</p>\\r\\n<p><strong>Reiseutgifter:</strong><br>NAV kan dekke utgifter for at bruker skal komme seg til utprøvingsstedene.<br><em><strong>Det forutsetter at vår kontaktperson i kommunen er kontaktet, har kartlagt behovet og har gjort avtale med NAV Hjelpemiddelsentral</strong></em><em>. Bare de som har gjort dette på forhånd vil kunne få drosjerekvisisjon</em><em>. </em>Vi regner med at dere samler flere personer i samme transport!</p>\\r\\n<p><strong>Smittevern:</strong><br>Alle regler for smittevern vil bli ivaretatt. Kommer det mange som vil prøve sykler samtidig, kan noen måtte vente.</p>\\r\\n<p>Ta kontakt med NAV Hjelpemiddelsentral for mer informasjon på <strong>telefon 40 70 28 20</strong></p>",
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Konferanse",
        "Tema": "Hjelpemidler og tilrettelegging",
        "Fylke": null
    }
}, {
    "Title": "Demokurs",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002W5nDQAS",
    "RegistrationToDateTime": "2021-02-15T12:00:00.000Z",
    "RegistrationPlaceName": "NAV Oslo",
    "RegistrationID": "a160E000002W5nDQAS",
    "RegistrationFromDateTime": "2021-02-15T10:00:00.000Z",
    "RegistrationDeadline": "2021-02-14T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "CV-kurs2",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001rpjyQAA",
    "RegistrationToDateTime": "2021-02-18T13:30:00.000Z",
    "RegistrationPlaceName": "Sannergata 2",
    "RegistrationID": "a160E000001rpjyQAA",
    "RegistrationFromDateTime": "2021-02-08T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-30T12:00:00.000Z",
    "FrontPageDescription": "<p>Agenda:</p><ul><li>Hva skal med i en CV</li><li>Hva bør ikke med i en CV</li><li>Rekkefølgen på innhold</li><li>Hvordan forsvare hull i CV</li></ul>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Arbeidssøkeraktivitet", "Fylke": null}
}, {
    "Title": "Opplæring",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002W5nXQAS",
    "RegistrationToDateTime": "2021-02-22T13:00:00.000Z",
    "RegistrationPlaceName": "Oslo",
    "RegistrationID": "a160E000002W5nXQAS",
    "RegistrationFromDateTime": "2021-02-22T10:00:00.000Z",
    "RegistrationDeadline": "2021-02-21T12:00:00.000Z",
    "FrontPageDescription": "<p>Dette er beskrivelsen av selve kurset</p>",
    "Description": "Denne beskrivelsen havner i kurslisten",
    "configurable_custom": {
        "Underkategori": null,
        "Type": "Webinar",
        "Tema": "Inkluderende arbeidsliv (IA)",
        "Fylke": null
    }
}, {
    "Title": "Fagområde: Webinar -",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001sEAXQA2",
    "RegistrationToDateTime": "2020-10-17T23:00:00.000Z",
    "RegistrationPlaceName": "Webinar ved NAV Hjelpemiddelsentral Oslo",
    "RegistrationID": "a160E000001sEAXQA2",
    "RegistrationFromDateTime": "2020-10-17T23:00:00.000Z",
    "RegistrationDeadline": "2020-10-17T23:00:00.000Z",
    "FrontPageDescription": "<h3>Mål </h3><h3>Innhold/program </h3><h3>Praktisk informasjon </h3><p>Kurset vil foregå digitalt via Teams:</p><p><br></p><p>Dette kurset vil ikke bli gjort opptak av </p><p>Ditt navn vil være synlig for andre deltagere i kurset </p><p>Du kan selv velge om du vil ha på bilde/lyd av deg selv </p><p>Ingen deltagere har lov til å gjøre opptak av kurset som holdes </p><p><br></p><p><br></p><p>Meld deg på kurset her og du vil få tilsendt link til pålogging i forkant av kurset. </p><p><br></p><p>Les her hvordan du blir med i et møte uten en Teams konto:</p><p><br></p><p><a href=\"https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508\" target=\"_blank\">https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508</a></p><p><br></p><p>Kursansvarlig: Navn + e-post <a href=\"mailto:agneta.glans.nordbye@nav.no\" target=\"_blank\">@nav.no</a> </p>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "Fagområde: Webinar -",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000001sEAYQA2",
    "RegistrationToDateTime": "2020-10-17T23:00:00.000Z",
    "RegistrationPlaceName": "Webinar ved NAV Hjelpemiddelsentral Oslo",
    "RegistrationID": "a160E000001sEAYQA2",
    "RegistrationFromDateTime": "2020-10-17T23:00:00.000Z",
    "RegistrationDeadline": "2020-10-17T23:00:00.000Z",
    "FrontPageDescription": "<h3>Mål </h3><p><br></p><p>\\r\\n</p><p>test test test</p><p>   </p><p><br></p><p>\\r\\n</p><h3>Innhold/program </h3><p>\\r\\n</p><p><br></p><p>Bernard test</p><p>  </p><p><br></p><p>\\r\\n</p><h3>Praktisk informasjon </h3><p>\\r\\n</p><p>Kurset vil foregå digitalt via Teams:</p><p>\\r\\n</p><p>Dette kurset vil ikke bli gjort opptak av </p><p>Ditt navn vil være synlig for andre deltagere i kurset </p><p>Du kan selv velge om du vil ha på bilde/lyd av deg selv </p><p>Ingen deltagere har lov til å gjøre opptak av kurset som holdes </p><p>\\r\\n</p><p> </p><p><br></p><p>\\r\\n</p><p>Meld deg på kurset her og du vil få tilsendt link til pålogging i forkant av kurset. </p><p>\\r\\n</p><p>Les her hvordan du blir med i et møte uten en Teams konto:</p><p>\\r\\n</p><p><a href=\"https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508\" target=\"_blank\">https://support.microsoft.com/nb-no/office/bli-med-i-et-m%C3%B8te-uten-en-teams-konto-c6efc38f-4e03-4e79-b28f-e65a4c039508</a></p><p>\\r\\n</p><p>Kursansvarlig: Navn + e-post <a href=\"mailto:agneta.glans.nordbye@nav.no\" target=\"_blank\">@nav.no</a> </p>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": null, "Tema": null, "Fylke": null}
}, {
    "Title": "Kurs",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002Ti23QAC",
    "RegistrationToDateTime": "2021-01-08T15:00:00.000Z",
    "RegistrationPlaceName": null,
    "RegistrationID": "a160E000002Ti23QAC",
    "RegistrationFromDateTime": "2021-01-08T12:00:00.000Z",
    "RegistrationDeadline": "2021-01-07T12:00:00.000Z",
    "FrontPageDescription": null,
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Annet", "Fylke": null}
}, {
    "Title": "Opplæring kurs",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002P4E3QAK",
    "RegistrationToDateTime": "2020-11-13T14:00:00.000Z",
    "RegistrationPlaceName": "Teams",
    "RegistrationID": "a160E000002P4E3QAK",
    "RegistrationFromDateTime": "2020-11-13T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-12T18:00:00.000Z",
    "FrontPageDescription": "<p><b>Velkommen til kurs!</b></p><p><br></p><p>Her kan legge inn:</p><p><br></p><ul><li>Lenker</li><li>Bilder</li><li>Lister m.m. </li></ul>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Annet", "Fylke": null}
}, {
    "Title": "Opplæring kurs",
    "ShowInActivityList": 0,
    "RegistrationUrl": "https://preprod-navdialog.cs89.force.com/s/pamelding?id=a160E000002P4FKQA0",
    "RegistrationToDateTime": "2020-11-20T14:00:00.000Z",
    "RegistrationPlaceName": "Teams",
    "RegistrationID": "a160E000002P4FKQA0",
    "RegistrationFromDateTime": "2020-11-20T12:00:00.000Z",
    "RegistrationDeadline": "2020-11-19T18:00:00.000Z",
    "FrontPageDescription": "<p><b>Velkommen til kurs!</b></p><p><br></p><p>Her kan legge inn:</p><p><br></p><ul><li>Lenker</li><li>Bilder</li><li>Lister m.m. </li></ul>",
    "Description": null,
    "configurable_custom": {"Underkategori": null, "Type": "Kurs", "Tema": "Annet", "Fylke": null}
}].map(kurs => {
    const {from, to, deadline} = randomDates()
    kurs.RegistrationFromDateTime = from
    kurs.RegistrationToDateTime = to
    kurs.RegistrationDeadline = deadline
    return kurs
})

export default sfkursliste;