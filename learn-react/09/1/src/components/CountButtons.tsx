import React from "react";
import { useCounterStore } from "../stores/counterStore";
import { useConfigureStore } from "../stores/configureStore";

export default function CountButtons() {
  console.log("CountButtons Rendering");

  // const increment = useCounterStore((state) => state.increment);
  // const decrement = useCounterStore((state) => state.decrement);
  // const reset = useCounterStore((state) => state.reset);

  // const incrementAmount = useCounterStore((state) => state.incrementAmount);

  // const isDark = useConfigureStore((state) => state.setIsDark);
  // const isLight = useConfigureStore((state) => state.setIsLight);

  const { increment, decrement, reset, incrementAmount } = useCounterStore();
  const { setIsDark, setIsLight } = useConfigureStore();

  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
      <button onClick={() => incrementAmount(10)}>10 증가</button>

      <br />
      <br />

      <button onClick={setIsDark}>다크모드</button>
      <button onClick={setIsLight}>라이트모드</button>
    </>
  );
}
