import { Metadata } from "next";
import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";
// export const dynamic = "force-dynamic"; // SSR 설정
// export const revalidate = 0; // 재검증 시간 설정 (0초 마다 데이터 갱신)

async function getRandomNumber(): Promise<number> {
  const res = await fetch("http://localhost:4000/random", {
    // cache: "no-store", // 캐시 데이터 X (SSR 렌더링 방식)

    // ISR 렌더링 방식
    cache: "force-cache", // 캐시 데이터 사용
    // next: {
    //   revalidate: 60 * 60, // 1시간 마다 데이터 캐싱 ( 60초 * 60 = 1시간 )
    // },
    next: {
      tags: ["random", "number", "num"],
    },
  });
  const number = await res.json();
  return number;
}

export async function generateMetadata(): Promise<Metadata> {
  const number = await getRandomNumber();
  return {
    title: `${number}`,
    description: `${number} Page`,
  };
}

const handle = async () => {
  "use server";
  revalidatePath("/");
  revalidateTag("random", "max");
};

export default async function Page() {
  const date = new Date().toLocaleTimeString("ko-KR");
  const number = await getRandomNumber();
  return (
    <>
      <h1>
        {number}Page : {date}
      </h1>
      <Link href="/about">About</Link>
      <form action={handle}>
        <button onClick={handle}>Refresh</button>
      </form>
    </>
  );
}
