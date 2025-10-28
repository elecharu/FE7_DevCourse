const languageContent = {
  html: "HTML 언어 페이지",
  css: "CSS 언어 페이지",
  javascript: "JavaScript 언어 페이지",
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <h1>{languageContent[id[0] as keyof typeof languageContent]}</h1>
    </>
  );
}
