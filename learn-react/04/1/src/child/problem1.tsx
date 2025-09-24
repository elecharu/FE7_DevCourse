import React from "react";

type ChildProps = {
  text: string;
};

export default function problem1({ text }: ChildProps) {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
}
