export const getOmKursetTittel = (type?: string) => {
    switch (type) {
        case 'Webinar':
            return 'Om webinaret';
        case 'Konferanse':
            return 'Om konferansen';
        case 'Seminar':
            return 'Om seminaret';
        default:
            return 'Om kurset';
    }
};
