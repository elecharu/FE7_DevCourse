// CSS Modules => classNames
// Tailwind CSS => tailwind-merge

import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline items-center justify-center">
        App Component
      </h1>

      {/* 유틸리티 클래스 */}
      <div className="vertical">
        <button className="btn-primary">버튼</button>
        <button className="btn-primary">버튼</button>
        <button className="btn-primary">버튼</button>
        <button className="btn-primary">버튼</button>
        <button className="btn-primary bg-amber-700">버튼</button>

        {/* Tailwind Merge 사용법 */}
        <button
          className={twMerge(
            "px-2 py-1 bg-red hover:bg-dark-red",
            "p-3 bg-[#B91C1C]"
          )}
        >
          버튼
        </button>
      </div>
    </>
  );
}
