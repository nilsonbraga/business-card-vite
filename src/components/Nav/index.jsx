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
                    <li><label htmlFor="my-modal-3" className="btn modal-button">Info</label></li>
                    <li><Link to="/businesscardpage" className="btn">Business Card</Link></li>
                  </ul>
              </div>
        </div>
        
      </div>
    </nav>
    <main className="container mx-auto">
      <Outlet />
    </main>
    
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Desenvolvido por Nilson Braga</h3>
        <p className="py-4">Veja mais em meu GitHub</p>
      </div>
    </div>

  </div>

);

export default Nav;