import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountButtons() {
  const context = useContext(CounterContext);
  const increment = context?.increment ?? (() => {});
  const decrement = context?.decrement ?? (() => {});
  const reset = context?.reset ?? (() => {});
  return (
    <>
      <button onClick={() => increment()}> 증가</button>
      <button onClick={() => reset()}> 리셋</button>
      <button onClick={() => decrement()}> 감소</button>
    </>
  );
}
