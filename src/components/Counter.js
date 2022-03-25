import { useRecoilState } from "recoil";
import counterAtom from "../atoms/counterAtom";

function Counter() {
  const [counter, setCounter] = useRecoilState(counterAtom);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>{counter} +</button>&nbsp;
      <button onClick={() => setCounter(counter - 1)}>{counter} -</button>
    </>
  );
}

export default Counter;
