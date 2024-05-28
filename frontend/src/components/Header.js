import React from 'react';
import Nav from './Nav';
import RightSideMenu from './RightSideMenu.js';

const Header = () => (
  <header className="pb-md-4 pb-0">
    <div className="top-nav top-header sticky-header">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="navbar-top">
              <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>
              <a href="index.html" className="web-logo nav-logo">
                <img src="../assets/images/logo/1.png" className="img-fluid blur-up lazyload" alt="" />
              </a>

              <div className="middle-box">
                <div className="search-box">
                  <div className="input-group">
                    <input type="search" className="form-control" placeholder="I'm searching for..." />
                    <button className="btn" type="button" id="button-addon2">
                      <i data-feather="search"></i>
                    </button>
                  </div>
                </div>
              </div>

              <RightSideMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nav />
  </header>
);

export default Header;
