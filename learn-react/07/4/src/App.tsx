import { createContext, useState } from "react";
import Count from "./components/Count";

// 전역 상태 관리
// Context API
// Redux Toolkit
// Zustand(주스탄드, 저스탠드, 저스탄드)
// Mobx, Recoil... 등 많이 존재함

// Context API
// 1. 컨텍스객체를 생성해야함 -> createContext
// 2. 컨텍스트의 범위를 지정해야 함
// 3. 데이터를 공급
// 4. 사용

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextType | null>(null);

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <CounterContext value={{ count, increment, decrement, reset }}>
        <Count />
      </CounterContext>
    </>
  );
}
