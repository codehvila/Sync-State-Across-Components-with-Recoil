import { useRecoilValue } from "recoil";
import { squareSelector } from "../atoms/squareSelector";

function Square() {
  const squareNumber = useRecoilValue(squareSelector);
  return <div>Square: {squareNumber}</div>;
}

export default Square;
