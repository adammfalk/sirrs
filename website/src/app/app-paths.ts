export const paths = {
    covidInfo: 'covid-info',
    assignments: 'assignments',
    content: 'content',
    directory: 'directory',
    fees: 'fees',
    home: 'home',
    matchReports: 'match-reports',
    officers: 'officers',
    refereeResources: 'referee-resources',
    resources: 'resources',
    societyInformation: 'society-information',
    empty: ''
};

export function path(p: string): string {
    return `/${p}`;
}