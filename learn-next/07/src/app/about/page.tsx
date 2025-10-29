import Link from "next/link";

export default function AboutPage() {
  const date = new Date().toLocaleTimeString("ko-KR");
  return (
    <>
      <h1>AboutPage : {date}</h1>
      <Link href="/">Home</Link>
    </>
  );
}
