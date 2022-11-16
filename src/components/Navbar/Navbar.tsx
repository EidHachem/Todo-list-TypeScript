import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  return (
    <nav className="min-h-[2em] flex items-center py-2 px-10">
      <Link to="/">
        <img src={logo} alt="logo" className="h-8" />
      </Link>
      <ul className="flex items-center gap-6 px-10">
        <li>
          <Link to="/" className="text-white text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todos" className="text-white text-xl">
            Todos
          </Link>
        </li>
        <li>
          <Link to="/expenses" className="text-white text-xl">
            Budget tracker
          </Link>
        </li>
        <li>
          <Link to="/notes" className="text-white text-xl">
            Notes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
