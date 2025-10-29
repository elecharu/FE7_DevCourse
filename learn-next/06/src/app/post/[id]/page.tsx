// '동적세그먼트 - 게시글'
// '1 - 게시글'
// '2 - 게시글' ...

import { Metadata } from "next";
import { Suspense } from "react";
import PostLoading from "./loading";

// 기존 고정적인 메타데이터 선언 방식
// export const metadata: Metadata = {
//   title: "PostPage",
//   description: "PostPage",
// };

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang: string }>;
}) {
  const { id } = await params;
  const { lang = "ko" } = await searchParams;

  return {
    title: `PostPage ${id} - 게시글(${lang})`,
    description: `PostPage ${id} - 게시글(${lang})`,
  };
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <>
      <Suspense fallback={<PostLoading />}>
        <h1>PostPage {id}</h1>
      </Suspense>
    </>
  );
}
