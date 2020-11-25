import { sfkursapiUrl } from '../utils/lenker';
import fetchMock from 'fetch-mock';
import sfkursliste from './sfKursliste';

const delay = (response: any, after = 500) => () =>
    new Promise(resolve => setTimeout(resolve, after)).then(() => response);

fetchMock.mock(sfkursapiUrl, delay(sfkursliste)).spy();
