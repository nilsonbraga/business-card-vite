import { Link, Outlet } from "react-router-dom";

const Nav = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    <nav>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="navbar bg-base-100">
              <div className="flex-1">
                  <div className="btn btn-ghost normal-case text-xl">Business Card Generator</div>
              </div>
              <div className="flex-none">
                
                  <ul className="menu menu-horizontal p-2 gap-2">
                    <li><label for="my-modal-3" class="btn modal-button">Info</label></li>
                    <li><Link to="/businesscardpage" className="btn">Business Card</Link></li>
                  </ul>
              </div>
        </div>
        
      </div>
    </nav>
    <main className="container mx-auto">
      <Outlet />
    </main>
    
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Desenvolvido por Nilson Braga</h3>
        <p class="py-4">Veja mais em meu GitHub</p>
      </div>
    </div>

  </div>

);

export default Nav;