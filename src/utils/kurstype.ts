export const getOmKursetTittel = (type?: string) => {
    switch (type) {
        case 'Webinar':
            return 'Om Webinaret';
        case 'Konferanse':
            return 'Om Konferansen';
        case 'Seminar':
            return 'Om Seminaret';
        default:
            return 'Om Kurset';
    }
};
