type Person = {
   firstName: string;
   lastName: string;
};

type Party = {
   participant:  Person;
   mother: Person;
   father: Person;
}

export const partyA: Party = {
   participant: {
      firstName: "Jacques",
      lastName: "Fernandes",
   },
   mother: {
      firstName: "Margaret",
      lastName: "Fernandes",
   },
   father: {
      firstName: "Mariano",
      lastName: "Fernandes",
   }
};

export const partyB: Party = {
   participant: {
      firstName: "Nicci",
      lastName: "Sequeira",
   },
   father: {
      firstName: "Oscar",
      lastName: "Sequeira"
   },
   mother: {
      firstName: "Maria",
      lastName: "Sequeira"
   }
};

export const weddingDate = new Date("2025-01-03");

type RemotePhoto = {
   url: string;
   height: number;
   width: number;
}

export const backgroundPhoto: RemotePhoto = {
   url: "/lake_como_church_compress.jpg",
   height: 1500,
   width: 2000,
};

export const mainPhoto: RemotePhoto = {
   url: "/milan_galleria_couple_compress.jpg",
   height: 4000,
   width: 3000,
};

type BibleQuote = {
   passageText: string;
   location: string;
};

export const bibleQuotes: BibleQuote[] = [
   // {
   //    location: "1 Corinthians 13:4-7",
   //    passageText: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
   // },
   {
      location: "Ephesians 4:2-3",
      passageText: "Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace."
   },
   {
      location: "Song of Solomon 3:4",
      passageText: "I have found the one whom my soul loves."
   },
   {
      location: "Colossians 3:14",
      passageText: "And over all these virtues put on love, which binds them all together in perfect unity."
   },
   {
      location: "Genesis 2:24",
      passageText: "Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh."
   }
];