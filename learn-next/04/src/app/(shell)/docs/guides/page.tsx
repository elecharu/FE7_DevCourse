import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  if (id === "1") {
    return notFound();
  }
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
