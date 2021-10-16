export const paths = {
  assignments: 'assignments',
  content: 'content',
  directory: 'directory',
  fees: 'fees',
  home: 'home',
  matchReports: 'match-reports',
  officers: 'officers',
  refereeResources: 'referee-resources',
  clubResources: 'club-resources',
  societyInformation: 'society-information',
  interested: 'become-a-rugby-referee',
  refereeRugby: 'referee-rugby',
  joinUs: 'join-us',
  empty: ''
};

export function path(p: string): string {
  return `/${p}`;
}