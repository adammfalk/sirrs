
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
  new RefInfo('Chris Karamitros', 'CMK.aramitros@gmail.com', 'Cedar Rapids'),
  new RefInfo('Eddy Tapia', 'tapia.eddy92@gmail.com', 'Des Moines'),
  new RefInfo('Jeff McHenry', 'rugbymchenry@hotmail.com', 'Des Moines'),
  new RefInfo('Jeremiah Johnson', 'jeremiahkjohnson@gmail.com', 'Des Moines'),
  new RefInfo('Jeremy Beswick', 'jeremybeswick@ymail.com', 'Clinton'),
  new RefInfo('Joe Lippert', 'rugbyjoe10@gmail.com', 'Fort Dodge'),
  new RefInfo('Joe Long', 'thecyclingsir@gmail.com', 'Lincoln, NE'),
  new RefInfo('Matt Simon', 'matt.simon.52101@gmail.com', 'Decorah'),
  new RefInfo('Paul Damge', 'pdamge3@gmail.com', 'Des Moines'),
  new RefInfo('Paul Wood', 'pwreferee@hotmail.com', 'Cedar Rapids'),
  new RefInfo('Randy Kiburz', 'rkiburz9@outlook.com', 'Cedar Rapids'),
  new RefInfo('Zeus Ramirez', 'bigzeus01@gmail.com', 'Waterloo'),
  new RefInfo('Tyler Dailey', 'tyler.a.dailey@gmail.com', 'Iowa City'),
];

export const Refs: RefInfo[] =
  refList.sort(
    (a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
  );
