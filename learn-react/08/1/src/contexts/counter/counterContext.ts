import { createContext } from "react";

type CounterContextType = {
  count: number;
  increment?: () => void;
  decrement?: () => void;
  reset?: () => void;
};

type CounterActionContextType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  count: 0,
});

export const CounterActionContext = createContext<CounterActionContextType>({
  increment: () => { },
  decrement: () => { },
  reset: () => { },
});