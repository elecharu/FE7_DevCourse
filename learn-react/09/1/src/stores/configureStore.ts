import { create } from "zustand";

type ConfigureStore = {
  theme: string;
  setIsDark: () => void;
  setIsLight: () => void;

}
export const useConfigureStore = create<ConfigureStore>()((set) => ({
  theme: "dark",
  // setIsDark: () => { set((state) => ({ theme: state.theme = "dark" })) },
  // setIsLight: () => { set((state) => ({ theme: state.theme = "light" })) },

  setIsDark: () => { set({ theme: "dark" }) },
  setIsLight: () => { set({ theme: "light" }) },
}))