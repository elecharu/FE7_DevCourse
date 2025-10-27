/*

1. 기본 라우트
1.1 app/page.tsx, app/about/page.tsx

- app
-- about
-- -- page.tsx
-- page.tsx

2. 중첩 라우트
2.1 /app/about/contact/page.tsx

- app
-- about/
-- -- contact/
-- -- -- page.tsx
-- -- page.tsx
-- page.tsx

3. 동적 라우트
3.1 /app/post/[id]/page.tsx
3.2 서버 컴포넌트 - params, searchParams
3.3 클라이언트 컴포넌트 - useParams(), useSearchParams()

- app
-- post/
-- -- [id]/
-- -- -- page.tsx
-- page.tsx


4. 중첩 동적 라우트
4.1 /app/post/[id]/comment/[commentId]/page.tsx

- app
-- post/
-- -- [id]/
-- -- -- page.tsx (ex: /post/1)
-- -- -- comment/
-- -- -- -- [commentId]/
-- -- -- -- -- page.tsx (ex: /post/1/comment/1)
-- page.tsx (ex: /post)


5. 캐치 올 세그먼트 - /post/1, /post/1/section

- app
-- post/
-- -- [...id]/
-- -- -- page.tsx
-- page.tsx

6. 옵셔널 캐치 올 세그먼트 - /post, /post/1, /post/1/section

- app
-- post/
-- -- [[...id]]/
-- -- -- page.tsx
-- page.tsx


7. 프라이빗 폴더 -> /about -> 작동 안됨 -> 왜? -> 프라이빗 폴더는 라우트에서 제외되기 때문

- app
-- _about
-- -- page.tsx
-- page.tsx

8. 라우트 그룹 - /(main)/about -> (X) , /about(o) -> 라우트 그룹은 라우트에서 제외되기 때문

- app
-- (main)
-- -- about
-- -- -- page.tsx
-- page.tsx


*/