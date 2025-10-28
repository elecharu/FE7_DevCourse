import { Metadata } from "next";
import { Nanum_Pen_Script, Anton } from "next/font/google";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "타이틀",
  description: "테스트 메타데이터",
};
export const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

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
