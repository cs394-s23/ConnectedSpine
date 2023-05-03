import { Outlet, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-menu">
            <FaIcons.FaBars />
          </div>
          <h1>ConnectedSpine</h1>
          <Button size="sm" variant="secondary" className="start-over-button">
            Start over
          </Button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
