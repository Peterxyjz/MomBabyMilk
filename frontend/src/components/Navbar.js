import React from 'react';

const Navbar = () => (
  <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
    <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
      <div className="offcanvas-header navbar-shadow">
        <h5>Menu</h5>
        <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">All Products</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">Best Seller</a>
          </li>
          <li className="nav-item dropdown dropdown-mega">
            <a className="nav-link dropdown-toggle ps-xl-2 ps-0" href="javascript:void(0)" data-bs-toggle="dropdown">Sales</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown">News</a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
              </li>
              <li>
                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
              </li>
              <li>
                <a className="dropdown-item" href="blog-list.html">Blog List</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
