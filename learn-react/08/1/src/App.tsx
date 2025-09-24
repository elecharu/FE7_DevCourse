import { createContext, useState } from "react";
import Count from "./components/Count";
import Page from "./components/Page";
import CountOutsideDisplay from "./components/CountOutsideDisplay";
import CounterProvider from "./contexts/counter/CounterProvider";
import ConfigureProvider from "./contexts/configure/ConfigureProvider";

// type ConfigContextType = {
//   theme: string;
//   setDarkMode: () => void;
//   setLightMode: () => void;
// };

// export const ConfigContext = createContext<ConfigContextType | null>(null);

export default function App() {
  // const [theme, setTheme] = useState("dark");
  // const setDarkMode = () => setTheme("dark");
  // const setLightMode = () => setTheme("light");

  return (
    <>
      <ConfigureProvider>
        <CounterProvider>
          <Page />
          <CountOutsideDisplay />
        </CounterProvider>
      </ConfigureProvider>
    </>
  );
}
