import React from "react";

import Child from "./child/problem1";
import Child2 from "./child/problem2";
import Child3 from "./child/problem3";
import Child4 from "./child/problem4";
import Child5 from "./child/problem5";
import Child6 from "./child/problem6";

import Child7 from "./child/problem7";
import Child8 from "./child/problem8";
import Child9 from "./child/problem9";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Problem1() {
  const problem4Obj = {
    name: "Alice",
    age: 30,
  };

  const problem6Event = () => {
    console.log("onClick");
  };

  const problem8Style = {
    fontSize: "50px",
    color: "red",
  };

  return (
    <>
      <h1>problem1 Component</h1>
      <Child text={"Hello, World!"} />
      <Child2 number={42} />
      <Child3 data={["Apple", "Banana", "Cherry"]} />
      <Child4 {...problem4Obj} />
      <Child5 isLoggedIn={"true"} />
      <Child6 event={problem6Event} />
      <Child7 name={"김철수"} />
      <Child8 style={problem8Style} />
      <Child9 header={<Header />} footer={<Footer />} content={<Content />} />
    </>
  );
}

// ### 2. **숫자 값을 `props`로 전달하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 숫자 값 `42`를 전달하고, `Child` 컴포넌트에서 해당 숫자를 출력하시오.

// ### 3. **배열을 `props`로 전달하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 `['Apple', 'Banana', 'Cherry']`라는 배열을 전달하고, `Child` 컴포넌트에서 이를 받으세요.

// ### 4. **객체를 `props`로 전달하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 객체 `{ name: 'Alice', age: 30 }`를 전달하고, `Child` 컴포넌트에서 해당 객체의 속성 `name`과 `age`를 출력하시오.

// ### 5. **boolean 값을 `props`로 전달하여 조건 처리하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 `isLoggedIn`이라는 boolean 값을 전달하고, 이 값을 기반으로 "로그인됨" 또는 "로그인 안됨"을 출력하시오.

// ### 6. **함수를 `props`로 전달하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 `onClick`이라는 함수(예: 버튼 클릭 시 콘솔에 메시지 출력)를 전달하세요.

// ### 7. **기본값을 가진 `props` 처리하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 `name`을 전달하지만, 전달되지 않으면 기본값 `"홍길동"`을 사용하여 출력하시오.

// ### 8. **다양한 자료형을 `props`로 전달하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 `value`라는 이름의 prop을 전달하고, `value`가 문자열, 숫자, 배열일 수 있도록 처리하고 값을 출력하시오

// ### 9. **`props`로 스타일 전달하여 출력하기**

// **문제:**

// `App` 컴포넌트에서 `Child` 컴포넌트로 font-size: 50px, color: red 스타일을 `style` prop으로 전달하고, `Child` 컴포넌트에서 해당 스타일을 적용하여 텍스트를 출력하시오.

// ### 10. **`props`로 여러 자식 컴포넌트를 전달하기**

// **문제:**

// `App` 컴포넌트에서 Header, Content, Footer 컴포넌트를 `Child` 컴포넌트로 전달하고, `Child` 컴포넌트에서 이들을 렌더링하시오.(컴포넌트의 내용은 자율)
