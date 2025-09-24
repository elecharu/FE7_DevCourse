import { createSlice } from "@reduxjs/toolkit";

const counfigureSlice = createSlice({
  name: "counfigureSlice",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setIsDark: (state) => {
      state.theme = "dark";
    },
    setIsLight: (state) => {
      state.theme = "light";
    },
  },
});

export const { setIsDark, setIsLight } = counfigureSlice.actions;
export default counfigureSlice.reducer;
