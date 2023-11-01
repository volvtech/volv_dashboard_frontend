// Header.js
import React from 'react';

import '../layouts/index.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Volv Dashboard</div>
        <ul className="nav-links">
          <li><a href="/">My Dashboard</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/publishers">Publishers</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
