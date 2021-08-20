
export class RefInfo {
  name: string;
  email: string;
  city: string;

  constructor (name: string, email: string, city: string) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
};

export const Refs: RefInfo[] = [
  new RefInfo('Aaron Alviar', 'clintonrugby10@gmail.com', 'Cedar Rapids'),
  new RefInfo('Adam Falk', 'adammfalk@gmail.com', 'Des Moines'),
  new RefInfo('Chris Karamitros', 'CMK.aramitros@gmail.com', 'Cedar Rapids'),
  new RefInfo('Eddy Tapia', 'tapia.eddy92@gmail.com', 'Des Moines'),
  new RefInfo('Joe Long', 'thecyclingsir@gmail.com', 'Lincoln, NE'),
  new RefInfo('Randy Kiburz', 'rkiburz9@outlook.com', 'Cedar Rapids'),
  new RefInfo('Paul Damge', 'pdamge3@gmail.com', 'Des Moines'),
  new RefInfo('Paul Wood', 'pwreferee@hotmail.com', 'Cedar Rapids'),
  new RefInfo('Zeus Ramirez', 'bigzeus01@gmail.com', 'Waterloo'),
];
