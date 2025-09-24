import Profile from "./components/Profile";
import User from "./components/User";

export default function App() {
  const clickHandler = () => {
    console.log("CLICK");
  };

  const userObj = {
    name: "한성수",
    age: 20,
  };

  return (
    <>
      {/* <h1>App Component</h1> */}
      <User userObj={userObj} event={clickHandler} />

      {/* 전개 연산자 방식 */}
      <Profile {...userObj} />
    </>
  );
}
