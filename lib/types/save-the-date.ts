export type Party = {
   participant: Person;
   mother: Person;
   father: Person;
};

export type BibleQuote = {
   passageText: string;
   location: string;
};

export type Person = {
   firstName: string;
   lastName: string;
};