import { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";
import A from "./components/A";

// 메모이제이션
// 한번 계산한 결과를 저장(cache)해 두었다가
// 같은 입력이 들어오면 다시 계산하지 않고 계산된 결과를 재사용하는 방식

// 컴포넌트를 메모이제이션
// 컴포넌트의 메모이제이션은 props가 변경되지 않으면 리렌더링 되지 않음

// 컴포넌트 메모이제이션이 풀리는 순간은 전달된 props가 변경되면 메모이제이션 풀림
// 자기 자신의 상태가 변경되면 메모이제이션 풀림

// 애플리케이션을 처음 설계할 때부터 컴포넌트 최적화를 할 순 없기에
// 가장 마지막에, 문제가 되었을 경우에 진행

// React.memo -> 컴포넌트를 메모이제이션
// useCallback -> 함수를 메모이제이션
// useMeoe -> 변수 값을 메모이제이션

function heavyCalculator() {
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += i;
  }
  return result;
}
export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const totalSum = useMemo(() => heavyCalculator(), []);
  // const totalSum = heavyCalculator();

  console.log("App Rerendring");
  return (
    <>
      <h1>App Count: {count}</h1>
      <h1>1 ~ 10억: {totalSum}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <A handle={handleIncrement} />
    </>
  );
}
