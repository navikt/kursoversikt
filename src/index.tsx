import 'core-js';
import 'unorm/lib/unorm';
import React from 'react';
import './styles/index.less';
import App from './App';
import * as Sentry from "@sentry/browser";
import environment, {gittMiljo} from './utils/environment';
import { injectDecoratorClientSide } from '@navikt/nav-dekoratoren-moduler';
import { createRoot } from 'react-dom/client';
import "@navikt/ds-css";
import 'react-loading-skeleton/dist/skeleton.css'

Sentry.init({
    dsn: "https://0d0215555d834fdab7dd2b90d8c5cb38@sentry.gc.nav.no/60",
    environment: window.location.hostname,
    release: environment.GIT_COMMIT,
    autoSessionTracking: false,
    enabled: gittMiljo({prod: true, other: false}),
});

injectDecoratorClientSide({
    env: gittMiljo({
        prod: "prod",
        other: "dev",
    }),
    params: {
        redirectToApp: true,
        chatbot: false
    }
}).catch(Sentry.captureException);

createRoot(document.getElementById('root')!).render(<App />)