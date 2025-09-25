import { Link, NavLink, Outlet, useNavigate } from "react-router";

// Link -> 단순 이동
// NavLink -> 단순 이동 + isActive
export default function DefaultLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/v1/dashboard");
  };
  return (
    <>
      <header>
        <h1>header</h1>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {({ isActive }) => <span>about{isActive && "(선택됨)"}</span>}
            </NavLink>
          </li>
          <li>
            <button onClick={handleClick}>대시보드로 이동</button>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}
