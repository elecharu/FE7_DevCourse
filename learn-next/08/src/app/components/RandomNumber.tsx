import { cacheLife, cacheTag, updateTag } from "next/cache";

async function getRandomNumber() {
  "use cache";
  // cacheLife("default"); // default: 5분
  cacheLife("seconds"); // 1초 마다 캐시 초기화
  // cacheLife("weeks"); // 1주일 마다 캐시 초기화
  // cacheLife("months"); // 1개월 마다 캐시 초기화
  // cacheLife("years"); // 1년 마다 캐시 초기화
  // cacheLife("forever"); // 영구 캐시
  // cacheLife("never"); // 캐시 미사용

  // cacheTag("random"); // 캐시 태그 설정
  // updateTag("random"); // 해당 캐시 태그 데이터 업데이트 (즉, 새로운 데이터로 반영)

  const res = await fetch("http://localhost:4000/random");
  const randomNumber = await res.json();
  return randomNumber;
}

export default async function RandomNumber() {
  const number = await getRandomNumber();

  return (
    <>
      <h1>{number}</h1>
    </>
  );
}
