// import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// 클래스형으로 작성한 방법
// class App extends React.Component {
//   render(): React.ReactNode {
//     return <h1>Hello, World(With Class Components</h1>;
//   }
// }

// // 함수형으로 작성한 방법
// function App() {
//   return (
//     <>
//       <h1>Hello, World!</h1>
//     </>
//   );

// }
// export default App;

import React from "react";
import Article from "./components/Article";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function App() {
  return (
    <>
      <h1>App Component</h1>
      <Header />
      <Nav />
      <Article />
      <Section />
      <Aside />
      <Footer />
    </>
  );
}
