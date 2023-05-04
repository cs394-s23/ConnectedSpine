import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  useLoaderData,
  useParams,
  useNavigate,
  Navigate,
} from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleSidebar}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul>
          <li>
            <NavLink className="no-underline">Profile (add later)</NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={toggleSidebar}
              activeClassName="active"
              className="no-underline"
            >
              Landing Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zipcode"
              onClick={toggleSidebar}
              activeClassName="active"
              className="no-underline"
            >
              Zip Code Page
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <header>
        <nav class="navbar">
          <div className="d-flex justify-content-between vw-100">
            <div className="container d-flex justify-content-between">
              <Sidebar />
              <h1>ConnectedSpine</h1>
            </div>
            <div className="container d-flex d-flex justify-content-end">
              <button
                className="btn btn-light border-0"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-bootstrap-reboot text-end"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
