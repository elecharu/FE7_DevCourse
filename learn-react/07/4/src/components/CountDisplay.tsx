import { useContext } from "react";
import { CounterContext } from "../App";

export default function CountDisplay() {
  const context = useContext(CounterContext);
  const count = context?.count ?? 0;
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
}
