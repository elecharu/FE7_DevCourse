import { twMerge } from "tailwind-merge";

interface inputProps {
  style?: React.CSSProperties | string;
  children: string;
}

export default function input({ style, children }: inputProps) {
  const base =
    "border border-black rounded-md text-sm text-neutral-400 p-1 outline-none";
  const mergeClass = twMerge(
    base,
    typeof style === "string" ? style : undefined
  );

  return (
    <>
      <input className={mergeClass} placeholder={children} />
    </>
  );
}
