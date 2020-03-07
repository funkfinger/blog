import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <Link to="/">
      <h1 className="site-heading">Jay, Trying To Remember...</h1>
    </Link>
    <h2>dumb stuff I should probably forget anyway</h2>
  </header>
);

export default Header;
