import { Link, Outlet } from "react-router-dom";

const Nav = () => (
  <>
    <div class="navbar bg-base-100">
      <div class="flex-1">
              <a class="btn btn-ghost normal-case text-xl">Business Card Generator</a>
          </div>
          <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
              <li><a><Link to="/">Dashboard</Link></a></li>
              <li><a><Link to="/businesscardpage">Business Card</Link></a></li>
              
              </ul>
          </div>
    </div>
    <Outlet />
  </>
);

export default Nav;