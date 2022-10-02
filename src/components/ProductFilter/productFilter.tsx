import { Grid } from "@mui/material";
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter";
import { RadioFilter } from "../RadioFilter/radioFilter";
export interface IBrand {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}
export interface ITag {
  name: string;
}
const brands: IBrand[] = [
  {
    slug: "Dickens-Franecki",
    name: "Dickens - Franecki",
    address: "12158 Randall Port",
    city: "East Maureenbury",
    state: "NE",
    zip: "74529",
    account: 31010023,
    contact: "Lonzo Stracke",
  },
  {
    slug: "Weissnat-Schowalter-and-Koelpin",
    name: "Weissnat, Schowalter and Koelpin",
    address: "92027 Murphy Cove",
    city: "Port Malachi",
    state: "WY",
    zip: "56670-0684",
    account: 81813543,
    contact: "Kathryne Ernser",
  },
  {
    slug: "Cruickshank-Bayer-and-Gerlach",
    name: "Cruickshank, Bayer and Gerlach",
    address: "45974 Paxton Corner",
    city: "Gerlachmouth",
    state: "OR",
    zip: "67061",
    account: 43249604,
    contact: "Bernhard Greenholt",
  },
  {
    slug: "Boyle-LLC",
    name: "Boyle LLC",
    address: "54371 Mikel Spurs",
    city: "South Josephland",
    state: "SD",
    zip: "49608",
    account: 75111551,
    contact: "Roxanne Walsh",
  },
  {
    slug: "Bernier-Hane",
    name: "Bernier - Hane",
    address: "45929 Chaya Lane",
    city: "Hettingerchester",
    state: "GA",
    zip: "30052-7026",
    account: 98542630,
    contact: "Thea Gleichner",
  },
  {
    slug: "OHara-Group",
    name: "O'Hara Group",
    address: "582 Metz Harbor",
    city: "North Columbus",
    state: "HI",
    zip: "12645-4049",
    account: 8697837,
    contact: "Madalyn Prohaska",
  },
  {
    slug: "Bayer-and-Sons",
    name: "Bayer and Sons",
    address: "1577 Waters Alley",
    city: "New Sabrinahaven",
    state: "AR",
    zip: "86634",
    account: 43975119,
    contact: "Buck Hickle",
  },
  {
    slug: "Leannon-Fahey-and-Sawayn",
    name: "Leannon, Fahey and Sawayn",
    address: "3710 Lew Walk",
    city: "Baileybury",
    state: "NJ",
    zip: "04449",
    account: 78580225,
    contact: "Patience Block",
  },
  {
    slug: "Lowe-Wunsch-and-Stoltenberg",
    name: "Lowe, Wunsch and Stoltenberg",
    address: "93936 Barrows Dale",
    city: "Lake Guido",
    state: "AZ",
    zip: "96989-0569",
    account: 98587385,
    contact: "Pietro Gerlach",
  },
  {
    slug: "Hodkiewicz-Inc",
    name: "Hodkiewicz Inc",
    address: "45516 Ruben Cove",
    city: "Greenberg",
    state: "SC",
    zip: "01429-1435",
    account: 30940841,
    contact: "Coleman Walter",
  },
  {
    slug: "Konopelski-Inc",
    name: "Konopelski Inc",
    address: "81835 Willms Drive",
    city: "Harrisonton",
    state: "MN",
    zip: "81347",
    account: 68653249,
    contact: "Tyson Crona",
  },
  {
    slug: "Nikolaus-Schinner",
    name: "Nikolaus - Schinner",
    address: "04914 Heaney Turnpike",
    city: "Franeckiside",
    state: "VA",
    zip: "96906-4904",
    account: 27668101,
    contact: "Caleigh Block",
  },
  {
    slug: "Sipes-Inc",
    name: "Sipes Inc",
    address: "3190 Braun Rue",
    city: "Lake Adalbertoberg",
    state: "NY",
    zip: "34802",
    account: 71315,
    contact: "Green Schuster",
  },
  {
    slug: "McCullough---Lueilwitz",
    name: "McCullough - Lueilwitz",
    address: "8863 Osinski Views",
    city: "West Rachel",
    state: "SD",
    zip: "96041-6706",
    account: 40663162,
    contact: "Pasquale Parisian",
  },
  {
    slug: "Heathcote-Kautzer-and-Turner",
    name: "Heathcote, Kautzer and Turner",
    address: "3721 Maddison Ville",
    city: "Framishire",
    state: "WV",
    zip: "44805-2477",
    account: 75687014,
    contact: "Jayden Heathcote",
  },
  {
    slug: "Konopelski-Group",
    name: "Konopelski Group",
    address: "476 Minnie Land",
    city: "Walterhaven",
    state: "WV",
    zip: "22132-3558",
    account: 32447634,
    contact: "Manley Bernhard",
  },
  {
    slug: "Metz---Kautzer",
    name: "Metz - Kautzer",
    address: "240 Hoppe Shoal",
    city: "Julesshire",
    state: "FL",
    zip: "21083",
    account: 2672292,
    contact: "Kay Simonis",
  },
  {
    slug: "Rice-Inc",
    name: "Rice Inc",
    address: "264 Jayce Trafficway",
    city: "South Fleta",
    state: "NE",
    zip: "28256",
    account: 72247639,
    contact: "Catherine McKenzie",
  },
  {
    slug: "Franecki---Gaylord",
    name: "Franecki - Gaylord",
    address: "300 Vandervort Stream",
    city: "Lake Kylechester",
    state: "ID",
    zip: "80770-0310",
    account: 93660437,
    contact: "Eda Hayes",
  },
  {
    slug: "Oberbrunner-Block-and-Mills",
    name: "Oberbrunner, Block and Mills",
    address: "356 Conroy Garden",
    city: "New Aileen",
    state: "WY",
    zip: "24466",
    account: 11273532,
    contact: "Braulio Little",
  },
  {
    slug: "Feil-Dooley-and-Reinger",
    name: "Feil, Dooley and Reinger",
    address: "06966 Alfred Ways",
    city: "East Lucio",
    state: "OR",
    zip: "54686",
    account: 24745362,
    contact: "Pascale Waelchi",
  },
  {
    slug: "Leuschke-Smith-and-Conroy",
    name: "Leuschke, Smith and Conroy",
    address: "604 McKenzie Wall",
    city: "Immanuelview",
    state: "SC",
    zip: "42741",
    account: 21650895,
    contact: "Cletus Hessel",
  },
];
const tags: ITag[] = [
  { name: "Trees" },
  { name: "Beach" },
  { name: "Ocean" },
  { name: "Water" },
  { name: "Animal" },
  { name: "Bear" },
  { name: "Road" },
  { name: "Road" },
  { name: "Rocks" },
  { name: "Sunset" },
];
export const ProductFilter: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <RadioFilter />
      <CheckboxFilter items={brands} title={"Brands"} placeholder={"Brands"} />
      <CheckboxFilter items={tags} title={"Tags"} placeholder={"Tags"} />
    </Grid>
  );
};
