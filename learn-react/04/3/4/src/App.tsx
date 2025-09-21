import User from "./components/User";

export default function App() {
  return (
    <>
      <h1>App Component</h1>

      {/* HTML의 속성은 그 태그의 이름이나 기능을 보충해주는 역할 */}
      {/* 컴포넌트의 속성은 그 컴포넌트로 데이터를 전달해주는 기능 */}
      <User name="한성수" age="20" />
    </>
  );
}
