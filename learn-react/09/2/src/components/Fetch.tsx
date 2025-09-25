import useFetch from "../hooks/useFetch";

// 화면 렌더링과 관련 없는 작업 -> 사이드 이펙트
// 사이드 이펙트 -> useEffect()

export default function Fetch() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Posts[]>("http://localhost:3001/posts");
  const {
    data: comments,
    isLoading: isLoadingComments,
    error: errorComments,
  } = useFetch<Comments[]>("http://localhost:3001/comments");

  if (isLoading || isLoadingComments) return <pre>Loading...</pre>;
  if (error || errorComments) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <ul>
        {Array.isArray(posts) &&
          posts.map((v) => <li key={v.id}>{v.title}</li>)}
      </ul>

      <ul>
        {Array.isArray(comments) &&
          comments.map((v) => <li key={v.id}>{v.text}</li>)}
      </ul>
    </>
  );
}
