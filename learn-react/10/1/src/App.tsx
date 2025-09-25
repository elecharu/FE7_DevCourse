// 라우트(Route)
// 라우트들의 집합(Routes)
// 라우터 : 앱 전체에서 라우팅 시스템을 제공하는 컨테이너 (react-router)
// 라우트 : 특정 URL 패턴과 컴포넌트를 매핑하는 규칙

// 중첩 라우트 -> <Outlet />
// 레이아웃 라우트
// 라우트 프리픽스 -> URL에 공통의 접두사
// 동적세그먼트 ->
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about";
import Dashboard from "./pages/Dashboard";
import Summary from "./pages/Summary";
import Setting from "./pages/Setting";
import DefaultLayout from "./layouts/DefaultLayout";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        {/* 레이아웃 라우트 */}
        <Route element={<DefaultLayout />}>
          <Route index element={<Navigate to="/blog" />} />
          <Route path="blog" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* 동적 세그먼트 */}
          {/* 옵셔널 세그먼트 -> ? */}
          <Route path="team?/:id?/group/:groupId" element={<Team />} />

          {/* 라우트 프리픽스 */}
          <Route path="v1">
            {/* 동적 세그먼트 + 라우트 프리픽스 */}
            {/* <Route path=":id" element={<Team />} /> */}
            {/* 중첩 라우트 */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Summary />}></Route>
              <Route path="setting" element={<Setting />}></Route>
            </Route>
          </Route>
        </Route>
        {/* 스플랫 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
