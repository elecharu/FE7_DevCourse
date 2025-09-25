import React from "react";

interface ButtonsProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Buttons({ onClick, children }: ButtonsProps) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
