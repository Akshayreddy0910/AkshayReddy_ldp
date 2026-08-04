export interface Candidate {
  name: string;
  adjudication: string;
  status: "CLEAR" | "CONSIDER";
  location: string;
  date: string;
}

export const candidates: Candidate[] = [
  {
    name: "John Smith",
    adjudication: "-",
    status: "CLEAR",
    location: "Barrouallie",
    date: "2/22/2022",
  },
  {
    name: "Serene",
    adjudication: "-",
    status: "CLEAR",
    location: "Vanersborg",
    date: "3/13/2022",
  },
  {
    name: "Walsh",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sukamanah",
    date: "7/2/2022",
  },
  {
    name: "Maurizia",
    adjudication: "-",
    status: "CLEAR",
    location: "Sukamanah",
    date: "2/20/2022",
  },
  {
    name: "Kendre",
    adjudication: "-",
    status: "CLEAR",
    location: "Beutong Ateuh",
    date: "5/19/2022",
  },
  {
    name: "Erastus",
    adjudication: "-",
    status: "CLEAR",
    location: "Hoviyn Am",
    date: "12/1/2021",
  },
  {
    name: "Jereme",
    adjudication: "-",
    status: "CONSIDER",
    location: "Sharıngol",
    date: "7/26/2022",
  },
  {
    name: "John Smith",
    adjudication: "-",
    status: "CONSIDER",
    location: "Lianyun",
    date: "5/28/2022",
  },
  {
    name: "Cari",
    adjudication: "-",
    status: "CLEAR",
    location: "Taboao da Serra",
    date: "5/23/2022",
  },
  {
    name: "Kimble",
    adjudication: "-",
    status: "CONSIDER",
    location: "Veseli nad Moravou",
    date: "8/24/2022",
  },
];
