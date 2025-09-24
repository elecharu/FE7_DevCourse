// 요소를 반복 렌더링 하기 위해서는
// 요소를 가공해서 가공된 값이 포함된 배열로 만들어서 표현식으로 출력

import { useState } from "react";
import UserCard from "./components/UserCard";

export default function App() {
  const isLogin = true;

  // if (isLogin) return <h1>로그인</h1>;
  // else return <h1>로그아웃</h1>;

  // const items = [<li>Apple</li>, <li>Banana</li>, <li>Cherry</li>];

  // const items = ["Apple", "Banana", "Cherry"];

  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const handleItemAdd = (newItem: any) => {
    setItems([newItem, ...items]);
  };

  const userObj = [
    {
      id: 1,
      name: "kim",
      age: 20,
    },
    {
      id: 2,
      name: "han",
      age: 21,
    },
  ];
  return (
    <>
      <h1>App Component</h1>

      {/* <h1>{items}</h1> */}

      {/* 배열을 가공할 일이 없거나, 배열의 뒷쪽으로만 새로운 요소를 추가할 경우 -> index값을 key로 사용해도 됨 */}

      {/* 배열을 가공해야 할 일이 있을 때, 배열의 앞쪽에 새로운 요소를 추가하거나, */}
      {/* 배열 요소와 요소 사이에 새로운 요소를 추가할 경우 -> index를 key값으로 사용하면 안됨 */}
      {items.map((v) => (
        <input placeholder={v} style={{ display: "block" }}></input>
      ))}

      <button onClick={() => handleItemAdd("NewItem")}>추가</button>

      <ul>
        {userObj.map((user) => (
          <UserCard key={user.id} />
        ))}
      </ul>
    </>
  );
}
