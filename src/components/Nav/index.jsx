import { Link, Outlet } from "react-router-dom";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/businesscardpage">Business Card</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Nav;