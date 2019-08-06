import { kursapiUrl } from '../utils/lenker';
import fetchMock from 'fetch-mock';
import kursliste from './kursliste';

const delay = (response: any, after = 500) => () =>
    new Promise(resolve => setTimeout(resolve, after)).then(() => response);

fetchMock.mock(kursapiUrl, delay(kursliste)).spy();
