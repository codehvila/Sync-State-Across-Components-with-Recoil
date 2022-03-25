import { useRecoilState } from "recoil";
import counterAtom from "../atoms/counterAtom";

function DisplayCounter() {
  const [counter] = useRecoilState(counterAtom);
  return <div>{counter}</div>;
}

export default DisplayCounter;
