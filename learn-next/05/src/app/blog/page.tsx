/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { nanumPenScript, anton, jeju } from "../layout";
import GithubIMG from "@/app/assets/images/github.png";
import GithubIMG2 from "../../../public/images/github.png";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

export default function BlogComponent() {
  return (
    <>
      <h1 className={nanumPenScript.className}>BlogComponent Component</h1>
      <h1 className={anton.className}>
        블로그 컴포넌트에 특정 글자 스타일 적용
      </h1>
      <h1 className={jeju.className}>제주 돌담 폰트</h1>
      <img
        src={GithubIMG.src}
        width={100}
        height={100}
        color="black"
        alt="GitHub"
      />
      <img
        src={GithubIMG2.src}
        width={100}
        height={100}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(23%) sepia(96%) saturate(4844%) hue-rotate(349deg) brightness(91%) contrast(93%)",
        }}
        alt="GitHub"
      />
    </>
  );
}
