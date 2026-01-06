export type Campus = {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  email: string;
  phone: string;
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
  },

  {
    id: "National",
    name: "CMVC National",
    city: "",
    state: "",
    address: "...",
    email: "Fbanos@compumed.edu",
    phone: "305-788-1854",
  },

  {
    id: "Fort Lauderdale",
    name: "CMVC Fort Lauderdale Campus",
    city: "Fort Lauderdale",
    state: "Florida",
    address: "3075 W Oakland Park Blvd, Oakland Park, FL 33111",
    email: "Famclure@compumed.edu",
    phone: "954-332-9904",
  },

];