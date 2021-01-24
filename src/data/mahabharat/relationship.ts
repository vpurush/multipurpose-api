enum RelationshipNames {
  Father = "father",
  Mother = "mother",
  Brother = "brother",
  Sister = "sister",
  Guru = "guru",
  Son = "son",
  Daughter = "daughter",
  Spouse = "spouse",
  Wife = "wife",
  Husband = "husband",
  Friend = "friend",
  FosterFather = "foster-father",
  Nephew = "nephew",
  SonInLaw = "son-in-law",
}

export type Relationship = {
  fromCharacter: string;
  toCharacter: string;
  relationship: {
    name: RelationshipNames;
    description?: string;
  }[];
};

export const RelationShips: Relationship[] = [
  {
    fromCharacter: "parasurama",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Guru,
      },
    ],
  },
  {
    fromCharacter: "vidura",
    toCharacter: "vyasa",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "kunti",
    toCharacter: "pandu",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "gandhari",
    toCharacter: "dhritarastra",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "madri",
    toCharacter: "pandu",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "drona",
    toCharacter: "kripi",
    relationship: [
      {
        name: RelationshipNames.Husband,
      },
    ],
  },
  {
    fromCharacter: "drona",
    toCharacter: "bharadvaja",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "ashwattahma",
    toCharacter: "drona",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "ashwattahma",
    toCharacter: "kripi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "drupada",
    toCharacter: "drona",
    relationship: [
      {
        name: RelationshipNames.Friend,
      },
    ],
  },
  {
    fromCharacter: "parasurama",
    toCharacter: "drona",
    relationship: [
      {
        name: RelationshipNames.Guru,
      },
    ],
  },
  {
    fromCharacter: "ashwattahma",
    toCharacter: "drona",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "kripa",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.FosterFather,
      },
    ],
  },
  {
    fromCharacter: "kripi",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.FosterFather,
      },
    ],
  },
  {
    fromCharacter: "sarmistha",
    toCharacter: "vishaparva",
    relationship: [
      {
        name: RelationshipNames.Daughter,
      },
    ],
  },
  {
    fromCharacter: "devayani",
    toCharacter: "shukracharya",
    relationship: [
      {
        name: RelationshipNames.Daughter,
      },
    ],
  },
  {
    fromCharacter: "yayati",
    toCharacter: "sarmistha",
    relationship: [
      {
        name: RelationshipNames.Husband,
      },
    ],
  },
  {
    fromCharacter: "yayati",
    toCharacter: "devayani",
    relationship: [
      {
        name: RelationshipNames.Husband,
      },
    ],
  },
  {
    fromCharacter: "yadu",
    toCharacter: "yayati",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "puru",
    toCharacter: "yayati",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "madhavi",
    toCharacter: "yayati",
    relationship: [
      {
        name: RelationshipNames.Daughter,
      },
    ],
  },
  {
    fromCharacter: "pratipa",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "vyasa",
    toCharacter: "satyavathi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "vyasa",
    toCharacter: "parasara",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "chitrangadha",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "vichitravarya",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "chitrangadha",
    toCharacter: "satyavathi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "vichitravarya",
    toCharacter: "satyavathi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "chitrangadha",
    toCharacter: "shantanu",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "karna",
    toCharacter: "adiratha",
    relationship: [
      {
        name: RelationshipNames.FosterFather,
      },
    ],
  },
  {
    fromCharacter: "karna",
    toCharacter: "duryodhana",
    relationship: [
      {
        name: RelationshipNames.Friend,
      },
    ],
  },
  {
    fromCharacter: "karna",
    toCharacter: "kunti",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "karna",
    toCharacter: "surya",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "gandhari",
    toCharacter: "duryodhana",
    relationship: [
      {
        name: RelationshipNames.Mother,
      },
    ],
  },
  {
    fromCharacter: "gandhari",
    toCharacter: "dhritarastra",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "gatotkacha",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "gatotkacha",
    toCharacter: "hidimbi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "shaktri",
    toCharacter: "vasishtha",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "parasara",
    toCharacter: "shaktri",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "parasara",
    toCharacter: "vyasa",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "drupada",
    toCharacter: "draupadi",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "drupada",
    toCharacter: "dhrishtadyumna",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "drupada",
    toCharacter: "amba",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "bhanumathi",
    toCharacter: "duryodhana",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "nakula",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "yudhishtira",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "surasena",
    toCharacter: "kunti",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "vasudeva",
    toCharacter: "kunti",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "vasudeva",
    toCharacter: "krishna",
    relationship: [
      {
        name: RelationshipNames.Father,
      },
    ],
  },
  {
    fromCharacter: "kansa",
    toCharacter: "surasena",
    relationship: [
      {
        name: RelationshipNames.Nephew,
      },
    ],
  },
  {
    fromCharacter: "karna",
    toCharacter: "jarasandha",
    relationship: [
      {
        name: RelationshipNames.SonInLaw,
      },
    ],
  },
  {
    fromCharacter: "devaki",
    toCharacter: "vasudeva",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "devaki",
    toCharacter: "kansa",
    relationship: [
      {
        name: RelationshipNames.Sister,
      },
    ],
  },
  {
    fromCharacter: "rohini",
    toCharacter: "vasudeva",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "balarama",
    toCharacter: "vasudeva",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "balarama",
    toCharacter: "devaki",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "nanda",
    toCharacter: "rohini",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "yashoda",
    toCharacter: "nanda",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "iravan",
    toCharacter: "ulupi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "iravan",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "chitrangada",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "babruvahana",
    toCharacter: "chitrangada",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "babruvahana",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "balarama",
    toCharacter: "krishna",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "subhadhra",
    toCharacter: "krishna",
    relationship: [
      {
        name: RelationshipNames.Sister,
      },
    ],
  },
  {
    fromCharacter: "subhadhra",
    toCharacter: "balarama",
    relationship: [
      {
        name: RelationshipNames.Sister,
      },
    ],
  },
  {
    fromCharacter: "abhimanyu",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "abhimanyu",
    toCharacter: "subhadhra",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "srikandhi",
    toCharacter: "draupadi",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "srikandhi",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "shakuni",
    toCharacter: "gandhari",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "vaishrava",
    toCharacter: "pulastya",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "lakshmanan",
    toCharacter: "duryodhana",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "lakshmani",
    toCharacter: "duryodhana",
    relationship: [
      {
        name: RelationshipNames.Daughter,
      },
    ],
  },
  {
    fromCharacter: "samba",
    toCharacter: "krishna",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "hanuman",
    toCharacter: "vayu",
    relationship: [
      {
        name: RelationshipNames.Son,
      },
    ],
  },
  {
    fromCharacter: "hanuman",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "savitri",
    toCharacter: "ashwapati",
    relationship: [
      {
        name: RelationshipNames.Daughter,
      },
    ],
  },
  {
    fromCharacter: "yudhishtira",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "yudhishtira",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "yudhishtira",
    toCharacter: "nakula",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "yudhishtira",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "bhima",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "bhima",
    toCharacter: "nakula",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "bhima",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "arjuna",
    toCharacter: "nakula",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "arjuna",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "nakula",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Brother,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "arjuna",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "yudhishtira",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "bhima",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "nakula",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
  {
    fromCharacter: "draupadi",
    toCharacter: "sahadeva",
    relationship: [
      {
        name: RelationshipNames.Wife,
      },
    ],
  },
];
