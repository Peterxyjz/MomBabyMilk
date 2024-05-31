import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/1.png';

const NavbarTop = () => {
  return (
    <div className="top-nav top-header sticky-header" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="navbar-top">
              <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>
              <Link to="/" className="web-logo nav-logo">
                <img src={logo} className="img-fluid lazyload" alt="Logo" />
              </Link>
              <div className="middle-box">
                <SearchBox />
              </div>
              <RightSideBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="input-group">
        <input type="search" className="form-control" placeholder="I'm searching for..." />
        <button className="btn" type="button" id="button-addon2">
          <i data-feather="search"></i>
        </button>
      </div>
    </div>
  );
};

const RightSideBox = () => {
  return (
    <div className="rightside-box">
      <div className="search-full">
        <div className="input-group">
          <span className="input-group-text">
            <i data-feather="search" className="font-light"></i>
          </span>
          <input type="text" className="form-control search-type" placeholder="Search here.." />
          <span className="input-group-text close-search">
            <i data-feather="x" className="font-light"></i>
          </span>
        </div>
      </div>
      <ul className="right-side-menu">
        <RightSideMenuItem icon="search" />
        <RightSideMenuItem icon="heart" href="wishlist.html" />
        <CartMenuItem />
        <AccountMenuItem />
      </ul>
    </div>
  );
};

const RightSideMenuItem = ({ icon, href }) => {
  return (
    <li className="right-side">
      <a href={href} className="btn p-0 position-relative header-wishlist">
        <i data-feather={icon}></i>
      </a>
    </li>
  );
};

const CartMenuItem = () => {
  return (
    <li className="right-side">
      <div className="onhover-dropdown header-badge">
        <button type="button" className="btn p-0 position-relative header-wishlist">
          <i data-feather="shopping-cart"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge">2
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <CartDropdown />
      </div>
    </li>
  );
};

const CartDropdown = () => {
  return (
    <div className="onhover-div">
      <ul className="cart-list">
        <CartItem
          image="../assets/images/vegetable/product/1.png"
          name="Fantasy Crunchy Choco Chip Cookies"
          price="$80.58"
        />
        <CartItem
          image="../assets/images/vegetable/product/2.png"
          name="Peanut Butter Bite Premium Butter Cookies 600 g"
          price="$25.68"
        />
      </ul>
      <div className="price-box">
        <h5>Total :</h5>
        <h4 className="theme-color fw-bold">$106.58</h4>
      </div>
      <div className="button-group">
        <a href="cart.html" className="btn btn-sm cart-button">View Cart</a>
        <a href="checkout.html" className="btn btn-sm cart-button theme-bg-color text-white">Checkout</a>
      </div>
    </div>
  );
};

const CartItem = ({ image, name, price }) => {
  return (
    <li className="product-box-contain">
      <div className="drop-cart">
        <a href="product-left-thumbnail.html" className="drop-image">
          <img src={image} className="blur-up lazyload" alt="" />
        </a>
        <div className="drop-contain">
          <a href="product-left-thumbnail.html">
            <h5>{name}</h5>
          </a>
          <h6><span>1 x</span> {price}</h6>
          <button className="close-button close_button">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </li>
  );
};


const AccountMenuItem = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch (error) {
        return null;
      }
    }
    return null;
  }); 
  
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <li className="right-side onhover-dropdown">
      <div className="delivery-login-box">
        <div className="delivery-icon">
          <i data-feather="user"></i>
        </div>
        <div className="delivery-detail">
          <h6>Hello,</h6>
          <h5>{user ? user.username : "My Account"}</h5>
        </div>
      </div>
      <div className="onhover-div onhover-div-login">
        <ul className="user-box-name">
          <li className="product-box-contain">
            <Link to="/sign-in">Đăng nhập</Link>
          </li>
          <li className="product-box-contain">
            <Link to="/sign-up">Đăng ký</Link>
          </li>
          <li className="product-box-contain">
            <Link type='submit' onClick={logOut} >Đăng xuất</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default NavbarTop;
