import React from "react";

interface CountOutSideProps {
  count: number;
}

export default function CountOutSide({ count }: CountOutSideProps) {
  return (
    <>
      <h1>Count Out Side : {count}</h1>
    </>
  );
}
