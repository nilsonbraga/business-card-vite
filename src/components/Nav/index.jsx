import { Link, Outlet } from "react-router-dom";

const Nav = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <nav>
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
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
        
      </div>
    </nav>
    <main class="container mx-auto">
      <Outlet />
    </main>
  </div>
);

export default Nav;