export default function App() {
  const clickEvent = () => {
    console.log("클릭!");
  };

  const clickEvent2 = (text: string) => {
    console.log(`클릭! ${text}`);
  };

  // 이벤트를 활용하여 요소에 접근하여 추가하는 방법
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.style.color = "red";
    console.log("123");
    console.log("234");
  };

  return (
    <>
      <h1>App Component</h1>

      {/* 매개변수가 없을 경우 */}
      <button onClick={clickEvent}>클릭</button>

      {/* 매개변수가 있을 경우 */}
      <button onClick={() => clickEvent2("야호!")}>클릭2</button>

      <button onClick={(e) => handleClick(e)}> 클릭 </button>
    </>
  );
}
