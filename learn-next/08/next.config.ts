import type { NextConfig } from "next";


// CSR, SSR, SSG, ISR + PPR (Partial Prerendering, 부분 시전 렌더링)
// PPR 
// 빠르게 보요줄 수 있는 정적 페이지는 빠르게 보여주고,
// 느리게 보여줘야하는 동적인 부분은 완성되는데로 스티리밍해서 보여준다

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true, // Next.js 16 버전의 캐시 시스템 (모든 캐시 데이터는 PPR 방식으로 고정된다)
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
