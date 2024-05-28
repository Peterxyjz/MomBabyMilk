import React from 'react';
import CategoryDropdown from './CategoryDropdown';
import Navbar from './Navbar';

const Nav = () => (
  <div className="container-fluid-lg">
    <div className="row">
      <div className="col-12">
        <div className="header-nav">
          <div className="header-nav-left">
            <button className="dropdown-category">
              <i data-feather="align-left"></i>
              <span>All Categories</span>
            </button>
            <CategoryDropdown />
          </div>
          <div className="header-nav-middle">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
