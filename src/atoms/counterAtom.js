import { atom } from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

export default counterAtom;
