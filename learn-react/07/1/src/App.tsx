// 상태 관리
// useState() vs useReducer()

import { useReducer } from "react";
import Count from "./components/Count";
import { reducer } from "./reducer/countReducer";
import Form from "./components/Form";

// useState()
// 장점 : 직관적이고 문법이 쉬움
// 단점 : 상태 업데이트 로직이 컴포넌트 내부에 흩어지기 쉽다.

// useReducer()
// 장점: 상태 업데이트 로직이 한 곳에 모여있음
// 단점: 문법이 어려워 복잡한 상태 관리를 사용할 때 사용

// type State = number;
// export type Action = {
//   type: "INCREMENT" | "DECREMENT" | "RESET";
// };
// // reducer 함수 => 상태 업데이트 로직이 담겨 있는 함수
// function reducer(state: State, action: Action) {
//   // state는 변수값,  action은 객체타입으로 넘어온다
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return 0;
//     default:
//       return state;
//   }
// }
export default function App() {
  // const [상태변수, 액션(리듀서) 발생함수] = useReducer(리듀서함수, 초깃값)
  // const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      {/* <h1>Count: {count}</h1> */}
      <Count />
      <Form />
    </>
  );
}
