import React from "react";

type Problem = {
  style: object;
};

export default function Problem8({ style }: Problem) {
  return (
    <>
      <h1 style={style}>문자 텍스트</h1>
    </>
  );
}
