import React from "react";
const Header = () => {
  return (
    <header className="pb-md-4 pb-0">
      <div className="header-top">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 d-xxl-block d-none">
              <div className="top-left-header">
                <i className="iconly-Location icli text-white" />
                <span className="text-white">
                  1418 Riverwood Drive, CA 96052, US
                </span>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
              <div className="header-offer">
                <div className="notification-slider">
                  <div>
                    <div className="timer-notification">
                      <h6>
                        <strong className="me-1">Welcome to Fastkart!</strong>
                        Wrap new offers/gift every single day on Weekends.
                        <strong className="ms-1">
                          New Coupon Code: Fast024
                        </strong>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div className="timer-notification">
                      <h6>
                        Something you love is now on sale!
                        <a href="shop-left-sidebar.html" className="text-white">
                          Buy Now !
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <ul className="about-list right-nav-about">
                <li className="right-nav-list">
                  <div className="dropdown theme-form-select">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="select-language"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src="../assets/images/country/united-states.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                      <span>English</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0)"
                          id="english"
                        >
                          <img
                            src="../assets/images/country/united-kingdom.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <span>English</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0)"
                          id="france"
                        >
                          <img
                            src="../assets/images/country/germany.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <span>Germany</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0)"
                          id="chinese"
                        >
                          <img
                            src="../assets/images/country/turkish.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                          />
                          <span>Turki</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="right-nav-list">
                  <div className="dropdown theme-form-select">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="select-dollar"
                      data-bs-toggle="dropdown"
                    >
                      <span>USD</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          id="aud"
                          href="javascript:void(0)"
                        >
                          AUD
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="eur"
                          href="javascript:void(0)"
                        >
                          EUR
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          id="cny"
                          href="javascript:void(0)"
                        >
                          CNY
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="top-nav top-header sticky-header">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="navbar-top">
                <button
                  className="navbar-toggler d-xl-none d-inline navbar-menu-button"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#primaryMenu"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars" />
                  </span>
                </button>
                <a href="index.html" className="web-logo nav-logo">
                  <img
                    src="../assets/images/logo/1.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </a>
                <div className="middle-box">
                  <div className="location-box">
                    <button
                      className="btn location-button"
                      data-bs-toggle="modal"
                      data-bs-target="#locationModal"
                    >
                      <span className="location-arrow">
                        <i data-feather="map-pin" />
                      </span>
                      <span className="locat-name">Your Location</span>
                      <i className="fa-solid fa-angle-down" />
                    </button>
                  </div>
                  <div className="search-box">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="I'm searching for..."
                      />
                      <button className="btn" type="button" id="button-addon2">
                        <i data-feather="search" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rightside-box">
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light" />
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light" />
                      </span>
                    </div>
                  </div>
                  <ul className="right-side-menu">
                    <li className="right-side">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <div className="search-box">
                            <i data-feather="search" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side">
                      <a href="contact-us.html" className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="phone-call" />
                        </div>
                        <div className="delivery-detail">
                          <h6>24/7 Delivery</h6>
                          <h5>+91 888 104 2340</h5>
                        </div>
                      </a>
                    </li>
                    <li className="right-side">
                      <a
                        href="wishlist.html"
                        className="btn p-0 position-relative header-wishlist"
                      >
                        <i data-feather="heart" />
                      </a>
                    </li>
                    <li className="right-side">
                      <div className="onhover-dropdown header-badge">
                        <button
                          type="button"
                          className="btn p-0 position-relative header-wishlist"
                        >
                          <i data-feather="shopping-cart" />
                          <span className="position-absolute top-0 start-100 translate-middle badge">
                            2
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                        </button>
                        <div className="onhover-div">
                          <ul className="cart-list">
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a
                                  href="product-left-thumbnail.html"
                                  className="drop-image"
                                >
                                  <img
                                    src="../assets/images/vegetable/product/1.png"
                                    className="blur-up lazyload"
                                    alt=""
                                  />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left-thumbnail.html">
                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                  </a>
                                  <h6>
                                    <span>1 x</span> $80.58
                                  </h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
                                  </button>
                                </div>
                              </div>
                            </li>
                            <li className="product-box-contain">
                              <div className="drop-cart">
                                <a
                                  href="product-left-thumbnail.html"
                                  className="drop-image"
                                >
                                  <img
                                    src="../assets/images/vegetable/product/2.png"
                                    className="blur-up lazyload"
                                    alt=""
                                  />
                                </a>
                                <div className="drop-contain">
                                  <a href="product-left-thumbnail.html">
                                    <h5>
                                      Peanut Butter Bite Premium Butter Cookies
                                      600 g
                                    </h5>
                                  </a>
                                  <h6>
                                    <span>1 x</span> $25.68
                                  </h6>
                                  <button className="close-button close_button">
                                    <i className="fa-solid fa-xmark" />
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
                            <a
                              href="cart.html"
                              className="btn btn-sm cart-button"
                            >
                              View Cart
                            </a>
                            <a
                              href="checkout.html"
                              className="btn btn-sm cart-button theme-bg-color
                                          text-white"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="right-side onhover-dropdown">
                      <div className="delivery-login-box">
                        <div className="delivery-icon">
                          <i data-feather="user" />
                        </div>
                        <div className="delivery-detail">
                          <h6>Hello,</h6>
                          <h5>My Account</h5>
                        </div>
                      </div>
                      <div className="onhover-div onhover-div-login">
                        <ul className="user-box-name">
                          <li className="product-box-contain">
                            <i />
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="header-nav">
              <div className="header-nav-left">
                <button className="dropdown-category">
                  <i data-feather="align-left" />
                  <span>All Categories</span>
                </button>
                <div className="category-dropdown">
                  <div className="category-title">
                    <h5>Categories</h5>
                    <button
                      type="button"
                      className="btn p-0 close-button text-content"
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                  <ul className="category-list">
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/vegetable.svg" alt="" />
                        <h6>Vegetables &amp; Fruit</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Organic Vegetables</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Potato &amp; Tomato
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cucumber &amp; Capsicum
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Leafy Vegetables</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Root Vegetables</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Beans &amp; Okra</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cabbage &amp; Cauliflower
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Gourd &amp; Drumstick
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Specialty</a>
                            </li>
                          </ul>
                          <div className="category-title-box">
                            <h5>Organic Vegetables</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Potato &amp; Tomato
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cucumber &amp; Capsicum
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Leafy Vegetables</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Root Vegetables</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Beans &amp; Okra</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cabbage &amp; Cauliflower
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Gourd &amp; Drumstick
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Specialty</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/cup.svg" alt="" />
                        <h6>Beverages</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box w-100">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Energy &amp; Soft Drinks</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Soda &amp; Cocktail Mix
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Soda &amp; Cocktail Mix
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Sports &amp; Energy Drinks
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Non Alcoholic Drinks
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Packaged Water</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Spring Water</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Flavoured Water</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/meats.svg" alt="" />
                        <h6>Meats &amp; Seafood</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Meat</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Fresh Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Frozen Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Marinated Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Fresh &amp; Frozen Meat
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Seafood</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Fresh Water Fish</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Dry Fish</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Frozen Fish &amp; Seafood
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Marine Water Fish</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Canned Seafood</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Prawans &amp; Shrimps
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Other Seafood</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/breakfast.svg" alt="" />
                        <h6>Breakfast &amp; Dairy</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Breakfast Cereals</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Oats &amp; Porridge
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Kids Cereal</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Muesli</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Flakes</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Granola &amp; Cereal Bars
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Instant Noodles</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Pasta &amp; Macaroni
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Frozen Non-Veg Snacks
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Dairy</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Milk</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Curd</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Paneer, Tofu &amp; Cream
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Butter &amp; Margarine
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Condensed, Powdered Milk
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Buttermilk &amp; Lassi
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Yogurt &amp; Shrikhand
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Flavoured, Soya Milk
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/frozen.svg" alt="" />
                        <h6>Frozen Foods</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box w-100">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Noodle, Pasta</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Instant Noodles</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Hakka Noodles</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Cup Noodles</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Vermicelli</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Instant Pasta</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/biscuit.svg" alt="" />
                        <h6>Biscuits &amp; Snacks</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Biscuits &amp; Cookies</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">Salted Biscuits</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Marie, Health, Digestive
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cream Biscuits &amp; Wafers
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Glucose &amp; Milk Biscuits
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Cookies</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Bakery Snacks</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Bread Sticks &amp; Lavash
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Cheese &amp; Garlic Bread
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Puffs, Patties, Sandwiches
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Breadcrumbs &amp; Croutons
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="onhover-category-list">
                      <a href="javascript:void(0)" className="category-name">
                        <img src="../assets/svg/1/grocery.svg" alt="" />
                        <h6>Grocery &amp; Staples</h6>
                        <i className="fa-solid fa-angle-right" />
                      </a>
                      <div className="onhover-category-box">
                        <div className="list-1">
                          <div className="category-title-box">
                            <h5>Grocery</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Lemon, Ginger &amp; Garlic
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Indian &amp; Exotic Herbs
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Vegetables
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Organic Fruits</a>
                            </li>
                          </ul>
                        </div>
                        <div className="list-2">
                          <div className="category-title-box">
                            <h5>Organic Staples</h5>
                          </div>
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Dry Fruits
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Dals &amp; Pulses
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Millet &amp; Flours
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Sugar, Jaggery
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Masalas &amp; Spices
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Rice, Other Rice
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Organic Flours</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Organic Edible Oil, Ghee
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-nav-middle">
                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                      />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Home
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="index.html">
                                Kartshop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-2.html">
                                Sweetshop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-3.html">
                                Organic
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-4.html">
                                Supershop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-5.html">
                                Classic shop
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-6.html">
                                Furniture
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-7.html">
                                Search Oriented
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-8.html">
                                Category Focus
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-9.html">
                                Fashion
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-10.html">
                                Book
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="index-11.html">
                                Digital
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Shop
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category-slider.html"
                              >
                                Shop Category Slider
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category.html"
                              >
                                Shop Category Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-banner.html"
                              >
                                Shop Banner
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Shop Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-list.html"
                              >
                                Shop List
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-right-sidebar.html"
                              >
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-top-filter.html"
                              >
                                Shop Top Filter
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Product
                          </a>
                          <div className="dropdown-menu dropdown-menu-3 dropdown-menu-2">
                            <div className="row">
                              <div className="col-xl-3">
                                <div className="dropdown-column m-0">
                                  <h5 className="dropdown-header">
                                    Product Pages{" "}
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-left-thumbnail.html"
                                  >
                                    Product Thumbnail
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-4-image.html"
                                  >
                                    Product Images
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-slider.html"
                                  >
                                    Product Slider
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-sticky.html"
                                  >
                                    Product Sticky
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-accordion.html"
                                  >
                                    Product Accordion
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-circle.html"
                                  >
                                    Product Tab
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-digital.html"
                                  >
                                    Product Tab
                                  </a>
                                  <h5 className="custom-mt dropdown-header">
                                    Product Features
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-circle.html"
                                  >
                                    Bundle (Cross Sale)
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-left-thumbnail.html"
                                  >
                                    Hot Stock Progress{" "}
                                    <label className="menu-label">New</label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-sold-out.html"
                                  >
                                    SOLD OUT
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-circle.html"
                                  >
                                    Sale Countdown
                                  </a>
                                </div>
                              </div>
                              <div className="col-xl-3">
                                <div className="dropdown-column m-0">
                                  <h5 className="dropdown-header">
                                    Product Variants Style{" "}
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-rectangle.html"
                                  >
                                    Variant Rectangle
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-circle.html"
                                  >
                                    Variant Circle{" "}
                                    <label className="menu-label">New</label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-color-image.html"
                                  >
                                    Variant Image Swatch
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-color.html"
                                  >
                                    Variant Color
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-radio.html"
                                  >
                                    Variant Radio Button
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-dropdown.html"
                                  >
                                    Variant Dropdown
                                  </a>
                                  <h5 className="custom-mt dropdown-header">
                                    Product Features
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-left-thumbnail.html"
                                  >
                                    Sticky Checkout
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-dynamic.html"
                                  >
                                    Dynamic Checkout
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-sticky.html"
                                  >
                                    Secure Checkout
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-bundle.html"
                                  >
                                    Active Product view
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-bundle.html"
                                  >
                                    Active Last Orders
                                  </a>
                                </div>
                              </div>
                              <div className="col-xl-3">
                                <div className="dropdown-column m-0">
                                  <h5 className="dropdown-header">
                                    Product Features{" "}
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-image.html"
                                  >
                                    Product Simple
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-rectangle.html"
                                  >
                                    Product Classified{" "}
                                    <label className="menu-label">New</label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-size-chart.html"
                                  >
                                    Size Chart{" "}
                                    <label className="menu-label">New</label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-size-chart.html"
                                  >
                                    Delivery &amp; Return
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-size-chart.html"
                                  >
                                    Product Review
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-expert.html"
                                  >
                                    Ask an Expert
                                  </a>
                                  <h5 className="custom-mt dropdown-header">
                                    Product Features
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                    href="product-bottom-thumbnail.html"
                                  >
                                    Product Tags
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-image.html"
                                  >
                                    Store Information
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-image.html"
                                  >
                                    Social Share{" "}
                                    <label className="menu-label warning-label">
                                      Hot
                                    </label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-left-thumbnail.html"
                                  >
                                    Related Products
                                    <label className="menu-label warning-label">
                                      Hot
                                    </label>
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="product-right-thumbnail.html"
                                  >
                                    Wishlist &amp; Compare
                                  </a>
                                </div>
                              </div>
                              <div className="col-xl-3 d-xl-block d-none">
                                <div className="dropdown-column m-0">
                                  <div className="menu-img-banner">
                                    <a
                                      className="text-title"
                                      href="product-circle.html"
                                    >
                                      <img
                                        src="../assets/images/mega-menu.png"
                                        alt="banner"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Mega Menu
                          </a>
                          <div className="dropdown-menu dropdown-menu-2">
                            <div className="row">
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">
                                  Daily Vegetables
                                </h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Beans &amp; Brinjals
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Cauliflower
                                </a>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="dropdown-item"
                                >
                                  Chilies, Garlic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Vegetables &amp; Salads
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Gourd, Cucumber
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Herbs &amp; Sprouts
                                </a>
                                <a
                                  href="demo-personal-portfolio.html"
                                  className="dropdown-item"
                                >
                                  Lettuce &amp; Leafy
                                </a>
                              </div>
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">Baby Tender</h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Beans &amp; Brinjals
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Cauliflower
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Chilies, Garlic
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Vegetables &amp; Salads
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Gourd, Cucumber
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Potatoes &amp; Tomatoes
                                </a>
                                <a
                                  href="shop-left-sidebar.html"
                                  className="dropdown-item"
                                >
                                  Peas &amp; Corn
                                </a>
                              </div>
                              <div className="dropdown-column col-xl-3">
                                <h5 className="dropdown-header">
                                  Exotic Vegetables
                                </h5>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Asparagus &amp; Artichokes
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Avocados &amp; Peppers
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Broccoli &amp; Zucchini
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Celery, Fennel &amp; Leeks
                                </a>
                                <a
                                  className="dropdown-item"
                                  href="shop-left-sidebar.html"
                                >
                                  Chilies &amp; Lime
                                </a>
                              </div>
                              <div className="dropdown-column dropdown-column-img col-3" />
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-detail.html"
                              >
                                Blog Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-grid.html"
                              >
                                Blog Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-list.html"
                              >
                                Blog List
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown new-nav-item">
                          <label className="new-dropdown">New</label>
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li className="sub-dropdown-hover">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Email Template{" "}
                                <span className="new-text">
                                  <i className="fa-solid fa-bolt-lightning" />
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="../email-templete/abandonment-email.html">
                                    Abandonment
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/offer-template.html">
                                    Offer Template
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/order-success.html">
                                    Order Success
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/reset-password.html">
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a href="../email-templete/welcome.html">
                                    Welcome template
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="sub-dropdown-hover">
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Invoice Template{" "}
                                <span className="new-text">
                                  <i className="fa-solid fa-bolt-lightning" />
                                </span>
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="../invoice/invoice-1.html">
                                    Invoice 1
                                  </a>
                                </li>
                                <li>
                                  <a href="../invoice/invoice-2.html">
                                    Invoice 2
                                  </a>
                                </li>
                                <li>
                                  <a href="../invoice/invoice-3.html">
                                    Invoice 3
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item" href="404.html">
                                404
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="about-us.html">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="cart.html">
                                Cart
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="contact-us.html"
                              >
                                Contact
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="checkout.html">
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="compare.html">
                                Compare
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="faq.html">
                                Faq
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-success.html"
                              >
                                Order Success
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-tracking.html"
                              >
                                Order Tracking
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="otp.html">
                                OTP
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="search.html">
                                Search
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="user-dashboard.html"
                              >
                                User Dashboard
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="wishlist.html">
                                Wishlist
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Seller
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-become.html"
                              >
                                Become a Seller
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-dashboard.html"
                              >
                                Seller Dashboard
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-detail.html"
                              >
                                Seller Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-detail-2.html"
                              >
                                Seller Detail 2
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-grid.html"
                              >
                                Seller Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="seller-grid-2.html"
                              >
                                Seller Grid 2
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-nav-right">
                <button
                  className="btn deal-button"
                  data-bs-toggle="modal"
                  data-bs-target="#deal-box"
                >
                  <i data-feather="zap" />
                  <span>Deal Today</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
