import { useRecoilValue } from "recoil";
import counterAtom from "../atoms/counterAtom";

function DisplayCounter() {
  const counter = useRecoilValue(counterAtom);
  return <div>Counter: {counter}</div>;
}

export default DisplayCounter;
