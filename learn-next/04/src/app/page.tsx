"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  // router.back() : 이전 페이지로 이동
  // router.forward() : 다음 페이지로 이동
  // router.hmrRefresh() : 현재 페이지 새로고침
  // router.prefetch() : 다음 페이지 미리 로드 (상용 모드에서만)
  // router.push(url) : Route 전환
  // router.refresh() : 현재 페이지 새로고침
  // router.replace(url) : 라우트 전환(브라우저 히스토리 기록 X)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-rose-500 ">홈</h1>
      <button onClick={() => router.push("/lang/html")}>HTML</button>
      <button onClick={() => router.push("/lang/css")}>CSS</button>
      <button onClick={() => router.push("/lang/javascript")}>
        JavaScript
      </button>
      {/* <Link href="/lang/html">HTML</Link>
      <Link href="/lang/css">CSS</Link>
      <Link href="/lang/javascript">JavaScript</Link> */}
    </>
  );
}
