// 인라인 스타일을 사용하는 경우 (이메일 폼, )

// import "./App.css";

import styles from "./styles/App.module.css";
import classNamess from "classnames";
import classNames from "classnames/bind";

export default function App() {
  const currentState = true;

  const isItalic = true;
  const isColorRed = false;
  const cx = classNames.bind(styles);

  return (
    <>
      <h1
        // 인라인 스타일
        style={{
          color: "red",
          fontSize: "36px",
          // textDecoration: "line-through",
        }}
      >
        App Component
      </h1>

      {/* 외부 스타일 */}
      <h2 className="title">TITLE</h2>

      {/* CSS 모듈형 스타일 */}
      <h2 className={styles.title}>모듈 TITLE</h2>
      <h2 className={styles.secondTitle}>2번째 모듈 TITLE</h2>

      <h3
        className={`${styles.secondTitle} ${currentState ? styles.cancelText : ""}`}
      >
        조건부 CSS 선언
      </h3>

      <div className={cx("container")}>
        <h1 className={cx("title", { "text-red": isColorRed })}>Hello</h1>
        <p className={classNamess("line-through", { italic: isItalic })}>
          Moudles CSS!
        </p>
      </div>
    </>
  );
}
