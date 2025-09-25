import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CheckBoxProps {
  style?: React.CSSProperties | string;
  checked: boolean;
  children?: React.ReactNode;
}

export default function CheckBox({ style, checked, children }: CheckBoxProps) {
  const [check, setCheck] = useState<boolean>(checked);

  const base =
    "cursor-pointer appearance-none rounded border-2 border-neutral-600 bg-neutral-800";
  const checkedStyle = check ? "bg-neutral-600 border-neutral-600" : "";
  const mergeClass = twMerge(
    base,
    checkedStyle,
    typeof style === "string" ? style : undefined
  );

  return (
    <div className="flex justify-center items-center gap-2">
      <label className="relative inline-flex items-center">
        <input
          className={mergeClass}
          type="checkbox"
          checked={check}
          onChange={() => setCheck((prev) => !prev)}
        />
        <span
          className={twMerge(
            "text-white text-sm font-bold opacity-0 transition-opacity",
            check ? "opacity-100" : "opacity-0"
          )}
        >
          ✓
        </span>
      </label>
      {children && <span className="text-black">{children}</span>}
    </div>
  );
}
