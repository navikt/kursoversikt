import amplitude from 'amplitude-js';

const getApiKey = () => {
    return window.location.hostname === 'arbeidsgiver.nav.no'
        ? 'a8243d37808422b4c768d31c88a22ef4'
        : '6ed1f00aabc6ced4fd6fcb7fcdc01b30';
};

export const initAmplitude = () => {
    amplitude.getInstance().init(getApiKey(), '', {
        apiEndpoint: 'amplitude.nav.no/collect',
        saveEvents: false,
        includeUtm: true,
        includeReferrer: true,
        platform: window.location.toString(),
    });
};

export function logAmplitudeEvent(eventName: string, eventData?: any): void {
    amplitude.getInstance().logEvent(eventName, eventData);
}

