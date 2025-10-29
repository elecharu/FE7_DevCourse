// Next.JS의 데이터 패칭
// axios 사용 X,tanstackquery 사용 X, SWR 사용 X
// 오로지 fetch API만 사용
// fetch 웹 표준 API에서 제공하는 함수 -> 웹 브라우저에서만 사용 가능한 것
// - 클라이언트 전용 함수
// Next.JS 팀이 fetch() 함수를 확장하여 Next.JS의 시스템이 녹아들어질수 있도록
// 확장하여 제공하고 있기 때문

// 기존에 자바스크립트에서 사용하던 fetch()와 Next.JS에서 제공하는 fetch()는 다른 함수

import RandomNumber from "./components/RandomNumber";
import Error from "./error";

export default async function page() {
  try {
    const res = await fetch("http://localhost:4000/random");
    const number = await res.json();
    return <RandomNumber number={number} />;
  } catch (err) {
    return (
      <Error
        error={err as Error & { digest?: string }}
        reset={() => {
          // Implement reset logic or leave as a no-op if not needed
        }}
      />
    );
  }
}
