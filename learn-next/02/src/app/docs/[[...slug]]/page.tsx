export default async function DocsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = await params;

  const pageParams = await params;
  console.log(pageParams);

  return <h1>DocsPage {slug.join("/")}</h1>;
}
