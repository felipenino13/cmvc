export type Campus = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  email: string;
  phone: string;
  label: string;
};

export const CAMPUSES: Campus[] = [
  {
    id: "Dallas",
    name: "CMVC Dallas Campus",
    city: "Dallas",
    state: "Texas",
    address: "8131 Lyndon B. Johnson, Suite 300, Dallas, Texas",
    email: "dleonard@compumed.edu",
    phone: "972-301-8459",
    label: "",
  },

  {
    id: "National",
    name: "CMVC National",
    city: "",
    state: "",
    address: "",
    email: "Fbanos@compumed.edu",
    phone: "305-788-1854",
    label: "/programs/label-national.png",
  },

  {
    id: "Fort Lauderdale",
    name: "CMVC Fort Lauderdale Campus",
    city: "Fort Lauderdale",
    state: "Florida",
    address: "3075 W Oakland Park Blvd, Oakland Park, FL 33111",
    email: "Famclure@compumed.edu",
    phone: "954-332-9904",
    label: "",
  },

  {
    id: "Hialeah",
    name: "CMVC Hialeah Campus",
    city: "Hialeah",
    state: "Florida",
    address: "2900 West 12th Avenue. 3rd Floor. Hialeah, FL 33012",
    email: "",
    phone: "954-332-9904",
    label: "",
  },

  {
    id: "Kendall",
    name: "CMVC Kendall Campus",
    city: "Kendall",
    state: "Florida",
    address: "11401 SW 40 Street. Suite 150, 1st Floor. Miami, FL 33165",
    email: "",
    phone: "(305) 553-2898",
    label: "",
  },

];