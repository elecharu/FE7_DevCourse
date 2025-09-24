import React from "react";

type Problem = {
  event: () => void;
};

export default function Problem6({ event }: Problem) {
  return (
    <>
      <button onClick={event}>클릭</button>
    </>
  );
}
