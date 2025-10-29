import { Metadata } from "next";
import { Nanum_Pen_Script, Anton } from "next/font/google";
import localFont from "next/font/local";

// 프로젝트 내 폰트 참조
// next/font/local을 이용한 참조 방법
export const jeju = localFont({
  src: [
    {
      path: "./assets/fonts/doldam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/doldam.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

// 프로젝트 폰트 참조
// next/font/google을 이용한 방법
export const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

// 프로젝트 메타데이터 설정
// 하위 컴포넌트에 해당 부분이 있을 경우 상단 메타데이터가 노출되는 것이 아닌 하위 컴포넌트의 메타 데이터가 출력
export const metadata: Metadata = {
  title: "타이틀",
  description: "테스트 메타데이터",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
