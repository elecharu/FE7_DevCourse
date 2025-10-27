"use client";

import { useParams, useSearchParams } from "next/navigation";

// import { useParams, useSearchParams } from "next/navigation";

// export default function Page() {
//   const params = useParams();
//   const id = params.id;

//   const searchParams = useSearchParams();
//   const name = searchParams.get("name");
//   const age = searchParams.get("age");

//   console.log(name, age);

//   return (
//     <>
//       <h1>{`post ${id}번째 게시글`}</h1>
//     </>
//   );
// }

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const language = searchParams.get("lang");

  return (
    <>
      <h1>{`post ${params.id}번째 게시글`}</h1>
      <h2>{language}</h2>
    </>
  );
}
