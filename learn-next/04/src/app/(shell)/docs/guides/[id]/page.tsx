import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "1") {
    return notFound();
  }

  console.log("Guide ID:", id);
  return (
    <>
      <h1>Guide {id}</h1>
      <p>가이드 ID: {id}</p>
    </>
  );
}
