import React from "react";

type dataProps = {
  data: string[];
};

export default function Problem3({ data }: dataProps) {
  return (
    <>
      <h1>{data.join(",")}</h1>
    </>
  );
}
