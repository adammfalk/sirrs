
export class RefInfo {
  name: string;
  email: string;
  city: string;

  constructor (name: string, email: string, city: string) {
    this.name = name;
    this.email = email.toLocaleLowerCase();
    this.city = city;
  }
};

const refList: RefInfo[] = [
  new RefInfo('Aaron Alviar', 'clintonrugby10@gmail.com', 'Cedar Rapids'),
  new RefInfo('Adam Falk', 'adammfalk@gmail.com', 'Des Moines'),
  new RefInfo('Adam Simiele', 'adamsimiele@gmail.com', 'Decorah'),
  new RefInfo('Brian Coopman', 'brian.coopman@gmail.com', 'Quad Cities-ish (IL)'),
  new RefInfo('Bryant Reynolds', 'breyn06@gmail.com', 'Des Moines'),
  new RefInfo('Brent Piper', 'brentpiper84@gmail.com', 'Cedar Falls'),
  new RefInfo('Casey Hansen', 'chansen3215@gmail.com', 'Waverly'),
  new RefInfo('Chad Proctor', 'cproctor319@gmail.com', 'Cedar Rapids'),
  new RefInfo('Chris Draper', 'chris.draper@meidh.com', 'Des Moines'),
  new RefInfo('Chris Karamitros', 'CMK.aramitros@gmail.com', 'Cedar Rapids'),
  new RefInfo('Corey Peterman', 'coreypeterman@gmail.com', 'Fort Dodge'),
  new RefInfo('Dave Carter', 'dave@rockriverservice.com', 'Rockford, IL'),
  new RefInfo('David Randall', 'randadac@uni.edu', 'Cedar Falls'),
  new RefInfo('Dean Hahn', 'dean_hahn@hotmail.com', 'Clinton'),
  new RefInfo('Eddy Tapia', 'tapia.eddy92@gmail.com', 'Des Moines'),
  new RefInfo('James Gadient', 'jamesgadient@gmail.com', 'Cedar Rapids'),
  new RefInfo('Jared Scherrman', 'jpwarriors15@gmail.com', 'Iowa City'),
  new RefInfo('Jeff McHenry', 'rugbymchenry@hotmail.com', 'Des Moines'),
  new RefInfo('Jeremiah Johnson', 'jeremiahkjohnson@gmail.com', 'Des Moines'),
  new RefInfo('Jeremy Beswick', 'jeremybeswick@ymail.com', 'Clinton'),
  new RefInfo('Joe Lippert', 'rugbyjoe10@gmail.com', 'Fort Dodge'),
  new RefInfo('Joe Long', 'thecyclingsir@gmail.com', 'Lincoln, NE'),
  new RefInfo('Justin Johnson', 'jujohn03@gmail.com', 'Omaha, NE'),
  new RefInfo('Marc Blong', 'marcblong@yahoo.com', 'Mason City'),
  new RefInfo('Matt Ragan', 'matthew.ragan@abcsupply.com', 'Quad Cities'),
  new RefInfo('Mathew Rico', 'mathewrico225@gmail.com', 'Souix Falls'),
  new RefInfo('Matt Simon', 'matt.simon.52101@gmail.com', 'Decorah'),
  new RefInfo('Michael Klostermann', 'hawkeyerugby@gmail.com', 'Quad Cities'),
  new RefInfo('Milton Audas', 'milton.audas@gmail.com', 'Muscatine'),
  new RefInfo('Paul Damge', 'pdamge3@gmail.com', 'Des Moines'),
  new RefInfo('Paul Wood', 'pwreferee@hotmail.com', 'Cedar Rapids'),
  new RefInfo('Randy Kiburz', 'rkiburz9@outlook.com', 'Cedar Rapids'),
  new RefInfo('Riley McCormick', 'rimcc22@gmail.com', 'Davenport-Palmer'),
  new RefInfo('Tyler Dailey', 'tyler.a.dailey@gmail.com', 'Iowa City'),
  new RefInfo('Zeus Ramirez', 'bigzeus01@gmail.com', 'Waterloo'),
];

export const Refs: RefInfo[] =
  refList.sort(
    (a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
  );
