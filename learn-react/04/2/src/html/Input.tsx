import { twMerge } from "tailwind-merge";

interface inputProps {
  style?: React.CSSProperties | string;
  children: string;
}

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

export default function Input(props: InputProps) {
  const base =
    "inter w-60 h-11 bg-white border border-[#4f4f4f] rounded-lg text-sm text-neutral-400 px-4 outline-none";

  // const mergeClass = twMerge(
  //   base,
  //   typeof style === "string" ? style : undefined
  // );

  // console.log(props);
  const { ...rest } = props;

  console.log(rest);
  return (
    <input
      className={base}
      placeholder={
        typeof props.children === "string" ? props.children : undefined
      }
      {...rest}
    />
  );
}
