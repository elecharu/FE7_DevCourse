import { css } from "@emotion/css";
import styled from "styled-components";
import { button } from "./styles/style.css";

// styled-components 사용 예제
// styled.태그명``;
export default function App() {
  const HelloWorld = styled.h1`
    font-size: 48px;
    color: red;
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
  `;

  const color = "darkgreen";

  return (
    <>
      {/* styled-component 방식*/}
      <HelloWorld>App Component</HelloWorld>

      {/* emotion 방식 */}
      <div
        className={css`
          background-color: hotpink;
          &:hover {
            color: ${color};
          }
        `}
      >
        This has a hotpink background.
      </div>

      {/* vanilla-extract */}
      <button className={button}>바닐라 버튼</button>
    </>
  );
}
