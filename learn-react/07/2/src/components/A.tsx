import React, { useState } from "react";
import B from "./B";

// React.memo()
export default React.memo(function A({ handle }: { handle: () => void }) {
  const [count, setCount] = useState(0);
  console.log("A Rerendring");
  return (
    <>
      <h1>A Count: {count}</h1>
      {/* <h1>count2 Count: {count2}</h1> */}
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <button onClick={() => handle()}>APP 컴포넌트 증가</button>
      <B />
    </>
  );
});
