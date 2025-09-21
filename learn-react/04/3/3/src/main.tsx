import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import ProblemApp from "./proble_App.tsx";
import "./css/index.css";
import "./css/fonts.css";
import "./css/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <ProblemApp />
  </StrictMode>
);
