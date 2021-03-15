import {createRequire} from 'module';

/**
 * en liten hack for å importere pakker som ikke er kompatible med ESM.
 * som f.eks. prometheus-api-metrics
 *
 * med inspirasjon fra: https://github.com/sindresorhus/meow/pull/147/files
 */
export default (module) => createRequire(import.meta.url)(module);