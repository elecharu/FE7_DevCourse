import { twMerge } from "tailwind-merge";

interface ButtonsProps {
  style?: React.CSSProperties | string;
  onClick: () => void;
  children: React.ReactNode;
  color?: "gray" | "red" | "purple";
}

export default function Button({
  style,
  onClick,
  children,
  color = "gray",
}: ButtonsProps) {
  const base =
    "rounded-lg text-white text-lg font-medium px-4 py-2 border-0 w-24 h-12";
  const colorClass =
    color === "red"
      ? "bg-red-500"
      : color === "purple"
        ? "bg-purple-600"
        : "bg-neutral-600";

  const mergeClass = twMerge(
    base,
    colorClass,
    typeof style === "string" ? style : undefined
  );

  return (
    <button className={mergeClass} onClick={onClick}>
      {children}
    </button>
  );
}
