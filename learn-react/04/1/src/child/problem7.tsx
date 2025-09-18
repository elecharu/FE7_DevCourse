import React from "react";

type Problem = {
  name?: string;
};

export default function Problem7({ name = "홍길동" }: Problem) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
