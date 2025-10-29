import { Suspense } from "react";
import RandomNumber from "./components/RandomNumber";
import RandomNum from "./components/RandomNum";

export default async function Page() {
  return (
    <>
      <h1>Random Number</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RandomNumber />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RandomNum />
      </Suspense>
    </>
  );
}
