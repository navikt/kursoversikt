import { sfkursapiUrl } from '../utils/lenker';
import fetchMock from 'fetch-mock';
import kursliste from './kursliste';

const delay = (response: any, after = 500) => () =>
    new Promise(resolve => setTimeout(resolve, after)).then(() => response);

fetchMock.mock(sfkursapiUrl, delay(kursliste)).spy();
