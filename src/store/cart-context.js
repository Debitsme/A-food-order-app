import  { createContext } from "react";

const CreateContest = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CreateContest;