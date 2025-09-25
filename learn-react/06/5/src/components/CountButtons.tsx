import React, { use, useEffect } from "react";

interface ButtonProps {
  count: number;
  fn: (value: number) => void;
}

export default function CountButtons({ count, fn }: ButtonProps) {
  return (
    <>
      <button onClick={() => fn(count + 1)}>증가</button>
      <button onClick={() => fn(0)}>리셋</button>
      <button onClick={() => fn(count - 1)}>감소</button>
    </>
  );
}
