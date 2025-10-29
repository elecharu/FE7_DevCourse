"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h1>Error: {error.message}</h1>
      <button onClick={reset}>에러 복구</button>
    </>
  );
}
