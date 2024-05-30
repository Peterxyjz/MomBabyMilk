import React from 'react';
import NavbarTop from './NavbarTop';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="pb-md-4 pb-0">
      <NavbarTop />
      <MainNav />
    </header>
  );
};

export default Header;
