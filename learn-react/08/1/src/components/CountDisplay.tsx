import { useContext } from "react";
import { CounterContext } from "../contexts/counter/counterContext";
import { ConfigContext } from "../contexts/configure/configContext";

export default function CountDisplay() {
  const context = useContext(CounterContext);
  const count = context?.count ?? 0;

  const { theme } = useContext(ConfigContext)!;

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>theme: {theme}</h1>
    </>
  );
}
