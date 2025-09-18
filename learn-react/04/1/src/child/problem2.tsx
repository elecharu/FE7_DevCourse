import React from "react";

type numberProps = {
  number: number;
};

export default function problem2({ number: number }: numberProps) {
  return (
    <>
      <h1>{number}</h1>
    </>
  );
}
