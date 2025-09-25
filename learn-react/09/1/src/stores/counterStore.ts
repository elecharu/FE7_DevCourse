import { create } from "zustand";
import { combine, createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAmount: (value: number) => void;
}

// export const useCounterStore = create<CounterStore>()((set) => ({
//   count: 10,

//   increment: () => { set((state) => ({ count: state.count += 1 })) },
//   decrement: () => { set((state) => ({ count: state.count -= 1 })) },
//   reset: () => { set({ count: 0 }) },

//   incrementAmount: (value) => { set((state) => ({ count: state.count + value })) }
// }))

// export const useCounterStore = create<CounterStore>()(
// 별도의 npm install immer라는 패키지 설치 필요!
// immer (콜백 함수)

// subscribeWithSelector(
//   devtools(
//     immer((set) => ({

//       count: 10,

//       increment: () =>
//         set((state) => {
//           state.count += 1;
//         }),
//       decrement: () =>
//         set((state) => {
//           state.count -= 1;
//         }),
//       reset: () =>
//         set((state) => {
//           state.count = 0;
//         }),

//       incrementAmount: (value: number) =>
//         set((state) => {
//           state.count += value;
//         }),
//     }))
//   )
// )

// combine -> immer -> persist -> devtools -> subscribeWithSelector
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (set) => ({
            increment: () =>
              set((state) => {
                state.count += 1;
              }),
            decrement: () =>
              set((state) => {
                state.count -= 1;
              }),
            reset: () => set({ count: 0 }),
            incrementAmount: (value) =>
              set((state) => {
                state.count += value;
              }),
          }))
        ),
        // persist storage 이름
        {
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      // devtools trace 속성 지정
      {
        trace: true,
      }
    )
  )
);