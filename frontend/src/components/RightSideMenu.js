import React from 'react';

const RightSideMenu = () => (
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
      <li className="right-side">
        <div className="delivery-login-box">
          <div className="delivery-icon">
            <div className="search-box">
              <i data-feather="search"></i>
            </div>
          </div>
        </div>
      </li>
      <li className="right-side">
        <a href="wishlist.html" className="btn p-0 position-relative header-wishlist">
          <i data-feather="heart"></i>
        </a>
      </li>
      <li className="right-side">
        <div className="onhover-dropdown header-badge">
          <button type="button" className="btn p-0 position-relative header-wishlist">
            <i data-feather="shopping-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge">2
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

          <div className="onhover-div">
            <ul className="cart-list">
              <li className="product-box-contain">
                <div className="drop-cart">
                  <a href="product-left-thumbnail.html" className="drop-image">
                    <img src="../assets/images/vegetable/product/1.png" className="blur-up lazyload" alt="" />
                  </a>
                  <div className="drop-contain">
                    <a href="product-left-thumbnail.html">
                      <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                    </a>
                    <h6><span>1 x</span> $80.58</h6>
                    <button className="close-button close_button">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li className="product-box-contain">
                <div className="drop-cart">
                  <a href="product-left-thumbnail.html" className="drop-image">
                    <img src="../assets/images/vegetable/product/2.png" className="blur-up lazyload" alt="" />
                  </a>
                  <div className="drop-contain">
                    <a href="product-left-thumbnail.html">
                      <h5>Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                    </a>
                    <h6><span>1 x</span> $25.68</h6>
                    <button className="close-button close_button">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </li>
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
        </div>
      </li>
      <li className="right-side onhover-dropdown">
        <div className="delivery-login-box">
          <div className="delivery-icon">
            <i data-feather="user"></i>
          </div>
          <div className="delivery-detail">
            <h6>Hello,</h6>
            <h5>My Account</h5>
          </div>
        </div>

        <div className="onhover-div onhover-div-login">
          <ul className="user-box-name">
            <li className="product-box-contain">
              <i></i>
              <a href="login.html">Log In</a>
            </li>
            <li className="product-box-contain">
              <a href="sign-up.html">Register</a>
            </li>
            <li className="product-box-contain">
              <a href="forgot.html">Forgot Password</a>
            </li>
          </ul>
        </div>
      </li>
      <li className="right-side onhover-dropdown">
        <div className="delivery-login-box">
          <div className="delivery-icon">
            <i data-feather="user"></i>
          </div>
          <div className="delivery-detail">
            <h6>Hello,</h6>
            <h5>My Account</h5>
          </div>
        </div>

        <div className="onhover-div onhover-div-login">
          <ul className="user-box-name">
            <li className="product-box-contain">
              <i></i>
              <a href="login.html">Log In</a>
            </li>
            <li className="product-box-contain">
              <a href="sign-up.html">Register</a>
            </li>
            <li className="product-box-contain">
              <a href="forgot.html">Forgot Password</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

export default RightSideMenu;
