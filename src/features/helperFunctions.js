import data from "./data.json";

let id = 0;

export const newId = () => {
  return id++;
};

let untitledNum = 1;

export const getName = () => {
  const newName = `untitled-document${untitledNum}.md`;
  untitledNum++;
  return newName;
};

export const updateLocalStorage = (name, payload) => {
  localStorage.setItem(name, JSON.stringify(payload));
};

export const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialState = data.map((element) => ({ ...element, id: newId() }));

export default initialState;
