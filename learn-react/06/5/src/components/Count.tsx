import CountButton from "./CountButtons";
import CountDisplay from "./CountDisplay";

import React from "react";

interface CountProps {
  count: number;
  fn: (value: number) => void;
}
export default function Count({ count, fn }: CountProps) {
  return (
    <>
      <CountDisplay count={count} />
      <CountButton count={count} fn={fn} />
    </>
  );
}
