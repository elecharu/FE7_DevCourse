import React from "react";

type Problem4Props = {
  name: string;
  age: number;
};

export default function Problem4({ name, age }: Problem4Props) {
  return (
    <>
      <h1>
        {name} {age}
      </h1>
    </>
  );
}
