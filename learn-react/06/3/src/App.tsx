// useEffect 훅
// 컴포넌트의 사이드 이펙트(side effect)를 처리하기 위한 훅

import { useEffect, useState } from "react";
import Interval from "./components/interval";

// 사이드 이펙트란?
// 데이터 가져오기, DOM 조작, 이벤트 등록/해제, 타이머 설정/해제 등...
// 실제 렌더링을 위한 동작을 제외한, 모든 나머지 코드들을 사이드 이펙트라고 한다.

// 생명주기
// 컴포넌트가 생성, 수정, 삭제 기준으로 동작하기 때문
export default function App() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 생성 될 때 코드를 실행
  // 컴포넌트가 수정 될 때 코드를 실행
  // 컴포넌트가 삭제 될 때 코드를 실행
  useEffect(() => {
    console.log("APP 컴포넌트 렌더링 테스트", count);

    // 컴포넌트가 화면 영역에서 제거 될 때 호출되는 함수

    return () => {
      // 여기 내용은 컴포넌트가 제거될 때 실행 되는 영역
    };
  }, [count]);

  return (
    <>
      <h1>App Component : {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      {count % 2 === 0 && <Interval />}
    </>
  );
}
