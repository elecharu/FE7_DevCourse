import { useEffect, useState } from "react";

import Count from "./components/Count";
import CountOutSide from "./components/CountOutSide";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} fn={setCount} />
      <CountOutSide count={count} />
    </>
  );
}
