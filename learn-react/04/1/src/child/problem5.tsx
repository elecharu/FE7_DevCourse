import React from "react";

type Problem5Props = {
  isLoggedIn: string;
};

export default function Problem5({ isLoggedIn }: Problem5Props) {
  return (
    <>
      <h1>{isLoggedIn === "true" ? "로그인됨" : "로그인 안됨"}</h1>
    </>
  );
}
