import { kursapiUrl } from '../utils/lenker';
import fetchMock from 'fetch-mock';
import sfkursliste from './sfKursliste';

const delay = (response: any, after = 1500) => () =>
    new Promise(resolve => setTimeout(resolve, after)).then(() => response);

fetchMock.mock(kursapiUrl, delay(sfkursliste)).spy();
