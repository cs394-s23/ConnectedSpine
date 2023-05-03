import { Outlet, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const NavBar = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div className="d-flex justify-content-between vw-100">
            <div className="container d-flex justify-content-between">
              <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <h1>ConnectedSpine</h1>
            </div>
            <div className="container d-flex d-flex justify-content-end">
              <button className="btn btn-light border-0">
                <i className="bi bi-bootstrap-reboot text-end"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div >
  );
};

export default NavBar;
