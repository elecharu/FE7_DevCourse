export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>BlogDetailPage Component {id}</h1>
    </>
  );
}
