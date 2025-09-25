import { useContext } from "react";
import { CounterActionContext } from "../contexts/counter/counterContext";
import { ConfigContext } from "../contexts/configure/configContext";
import React from "react";

export default React.memo(function CountButtons() {
  const context = useContext(CounterActionContext)!;
  const { setDarkMode, setLightMode } = useContext(ConfigContext)!;

  console.log("Count Buttons Rendering");
  return (
    <>
      <button onClick={() => context.increment()}>증가</button>
      <button onClick={() => context.reset()}>리셋</button>
      <button onClick={() => context.decrement()}>감소</button>
      <button onClick={setDarkMode}>다크모드</button>
      <button onClick={setLightMode}>라이트모드</button>
    </>
  );
});
