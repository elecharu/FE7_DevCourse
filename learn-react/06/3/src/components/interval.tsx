import { useEffect, useState } from "react";

export default function interval() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval 실행 됨");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("INTERVAL UNMOUNT!");
    };
  }, []);

  return (
    <>
      <h1>interval Component</h1>
    </>
  );
}
