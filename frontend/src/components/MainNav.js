import React from 'react';

const MainNav = () => {
  return (
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
              <nav className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                  <div className="offcanvas-header navbar-shadow">
                    <h5>Menu</h5>
                    <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav">
                      <NavItem name="Shop" submenu={<ShopMenu />} />
                      <NavItem name="Product" submenu={<ProductMenu />} />
                      <NavItem name="Mega Menu" submenu={<MegaMenu />} />
                      <NavItem name="Blog" submenu={<BlogMenu />} />
                      <NavItem name="Pages" submenu={<PagesMenu />} />
                      <NavItem name="Seller" submenu={<SellerMenu />} />
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ name, submenu }) => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{name}</a>
      {submenu}
    </li>
  );
};

const ShopMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

const ProductMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

const MegaMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

const BlogMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

const PagesMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

const SellerMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="shop-category-slider.html">Shop Category Slider</a></li>
      <li><a className="dropdown-item" href="shop-category.html">Shop Category Sidebar</a></li>
    </ul>
  );
};

// Tạo các menu tương tự cho ProductMenu, MegaMenu, BlogMenu, PagesMenu và SellerMenu
//...

const CategoryDropdown = () => {
  return (
    <div className="category-dropdown">
      <div className="category-title">
        <h5>Categories</h5>
        <button type="button" className="btn p-0 close-button text-content">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className="category-list">
        <CategoryItem name="Vegetables & Fruit" icon="../assets/svg/1/vegetable.svg" />
        <CategoryItem name="Beverages" icon="../assets/svg/1/cup.svg" />
        <CategoryItem name="Meats & Seafood" icon="../assets/svg/1/meats.svg" />
        <CategoryItem name="Breakfast & Dairy" icon="../assets/svg/1/breakfast.svg" />
        <CategoryItem name="Frozen Foods" icon="../assets/svg/1/frozen.svg" />
        <CategoryItem name="Biscuits & Snacks" icon="../assets/svg/1/biscuit.svg" />
      </ul>
    </div>
  );
};

const CategoryItem = ({ name, icon }) => {
  return (
    <li className="onhover-category-list">
      <a href="#" className="category-name">
        <img src={icon} alt="" />
        <h6>{name}</h6>
        <i className="fa-solid fa-angle-right"></i>
      </a>
      <CategoryBox />
    </li>
  );
};

const CategoryBox = () => {
  return (
    <div className="onhover-category-box">
      <div className="list-1">
        <div className="category-title-box">
          <h5>Organic Vegetables</h5>
        </div>
        <ul>
          <li><a href="#">Potato & Tomato</a></li>
          <li><a href="#">Cucumber & Capsicum</a></li>
        </ul>
        <div className="category-title-box">
          <h5>Organic Vegetables</h5>
        </div>
        <ul>
          <li><a href="#">Potato & Tomato</a></li>
          <li><a href="#">Cucumber & Capsicum</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
