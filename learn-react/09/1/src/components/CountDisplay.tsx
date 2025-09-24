import React from "react";
import { useCounterStore } from "../stores/counterStore";
import { useConfigureStore } from "../stores/configureStore";

export default function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  const theme = useConfigureStore((state) => state.theme);
  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Theme: {theme}</h1>
    </>
  );
}
