import { getCommentDate } from "../_helper/utils";

export default async function CommentPage({
  params,
  searchParams,
}: {
  params: Promise<{
    id: string;
    commentid: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, commentid } = await params;
  const resolvedSearchParams = await searchParams;
  const name = resolvedSearchParams.name;

  const date = new Date();

  return (
    <>
      <h1>CommentPage</h1>
      <h2>Post ID: {id}</h2>
      <h2>Comment ID: {commentid}</h2>
      <h2>Name: {name}</h2>
      <h2>Date: {getCommentDate(date)}</h2>
    </>
  );
}
