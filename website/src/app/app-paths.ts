export const paths = {
    assignments: 'assignments',
    content: 'content',
    directory: 'directory',
    fees: 'fees',
    home: 'home',
    matchReports: 'match-reports',
    officers: 'officers',
    resources: 'resources',
    societyInformation: 'society-information',
    empty: ''
};

export function path(p: string): string {
    return `/${p}`;
}