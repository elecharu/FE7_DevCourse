import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";

export default function CountOutsideDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <>
      <h1>OutSide : {count}</h1>
    </>
  );
}
