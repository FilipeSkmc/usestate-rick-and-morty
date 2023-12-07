import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';
import logo from '../assets/logo.png';

function Layout() {
  return (
    <div className="box">
      <header>
        <img src={ logo } alt="rick and morty" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/personagens">Personagens</NavLink>
          <NavLink to="/favoritos">Favoritos</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
