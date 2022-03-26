import { selector } from "recoil";
import counterAtom from "./counterAtom";

export const squareSelector = selector({
  key: "squareSelector",
  get: ({ get }) => {
    return get(counterAtom) ** 2;
  },
});
