// 자바스크립트 변수 선언 키워드
// var, let, const

import { useState } from "react";

// 리액트 변수 선언 키워드
// usetState()

export default function App() {
  // let count = 1;
  const handleIncrement = () => {
    setCount((v) => v + 1);
  };
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>App Component</h1>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          // count += 1;
          // console.log(count);
          // setCount(count + 1);
          handleIncrement();
        }}
      >
        증가
      </button>
    </>
  );
}
