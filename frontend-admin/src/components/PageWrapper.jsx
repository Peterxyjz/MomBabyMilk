import React from 'react'

const PageWrapper = () => {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            {/* Page Header Start*/}
            <div className="page-header">
                <div className="header-wrapper m-0">
                    <div className="header-logo-wrapper p-0">
                        <div className="logo-wrapper">
                            <a href="index.html">
                                <img
                                    className="img-fluid main-logo"
                                    src="assets/images/logo/1.png"
                                    alt="logo"
                                />
                                <img
                                    className="img-fluid white-logo"
                                    src="assets/images/logo/1-white.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="toggle-sidebar">
                            <i
                                className="status_toggle middle sidebar-toggle"
                                data-feather="align-center"
                            />
                            <a href="index.html">
                                <img src="assets/images/logo/1.png" className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="nav-right col-6 pull-right right-header p-0">
                        <ul className="nav-menus">
                            <li>
                                <span className="header-search">
                                    <i className="ri-search-line" />
                                </span>
                            </li>
                            <li className="onhover-dropdown">
                                <div className="notification-box">
                                    <i className="ri-notification-line" />
                                    <span className="badge rounded-pill badge-theme">4</span>
                                </div>
                                <ul className="notification-dropdown onhover-show-div">
                                    <li>
                                        <i className="ri-notification-line" />
                                        <h6 className="f-18 mb-0">Thông báo</h6>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-primary" />
                                            Đang vận chuyển<span className="pull-right">10 min.</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-success" />
                                            Đơn hoàn thành<span className="pull-right">1 hr</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fa fa-circle me-2 font-danger" />
                                            Vận chuyển thàng công<span className="pull-right">6 hr</span>
                                        </p>
                                    </li>
                                    <li>
                                        <a className="btn btn-primary" href="javascript:void(0)">
                                            Xem toàn bộ thông báo
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="mode">
                                    <i className="ri-moon-line" />
                                </div>
                            </li>
                            <li className="profile-nav onhover-dropdown pe-0 me-0">
                                <a href="profile-setting.html">
                                    <div className="media profile-media">
                                        <img
                                            className="user-profile rounded-circle"
                                            src="assets/images/users/4.jpg"
                                            alt=""
                                        />
                                        <div className="user-name-hide media-body">
                                            <span>Hậu</span>
                                            <p className="mb-0 font-roboto">Nhân viên</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Page Header Ends*/}
            {/* Page Body Start*/}
            <div className="page-body-wrapper">
                {/* Page Sidebar Start*/}
                <div className="sidebar-wrapper">
                    <div id="sidebarEffect" />
                    <div>
                        <div className="logo-wrapper logo-wrapper-center">
                            <a href="index.html" data-bs-original-title="" title="">
                                <img
                                    className="img-fluid for-white"
                                    src="assets/images/logo/full-white.png"
                                    alt="logo"
                                />
                            </a>
                            <div className="back-btn">
                                <i className="fa fa-angle-left" />
                            </div>
                        </div>
                        <div className="logo-icon-wrapper">
                            <a href="index.html">
                                <img
                                    className="img-fluid main-logo main-white"
                                    src="assets/images/logo/logo.png"
                                    alt="logo"
                                />
                                <img
                                    className="img-fluid main-logo main-dark"
                                    src="assets/images/logo/logo-white.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <nav className="sidebar-main">
                            <div className="left-arrow" id="left-arrow">
                                <i data-feather="arrow-left" />
                            </div>
                            <div id="sidebar-menu">
                                <ul className="sidebar-links" id="simple-bar">
                                    <li className="back-btn" />
                                    <li className="sidebar-list">
                                        <a
                                            className="sidebar-link sidebar-title link-nav"
                                            href="index.html"
                                        >
                                            <i className="ri-home-line" />
                                            <span>Bảng điều khiển</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            className="linear-icon-link sidebar-link sidebar-title"
                                            href="products.html"
                                        >
                                            <i className="ri-store-3-line" />
                                            <span>Danh sách sản phẩm</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            className="linear-icon-link sidebar-link sidebar-title"
                                            href="category.html"
                                        >
                                            <i className="ri-list-check-2" />
                                            <span>Danh Sách phân loại</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a className="sidebar-link sidebar-title" href="all-users.html">
                                            <i className="ri-user-3-line" />
                                            <span>Danh sách member</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            className="sidebar-link sidebar-title"
                                            href="order-list.html"
                                        >
                                            <i className="ri-archive-line" />
                                            <span>Danh sách đơn hàng</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            className="linear-icon-link sidebar-link sidebar-title"
                                            href="coupon-list.html"
                                        >
                                            <i className="ri-price-tag-3-line" />
                                            <span>Mã Voucher</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            className="sidebar-link sidebar-title"
                                            href="support-ticket.html"
                                        >
                                            <i className="ri-phone-line" />
                                            <span>Yêu cầu hoàn trả</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a className="sidebar-link sidebar-title" href="list-page.html">
                                            <i className="ri-list-check" />
                                            <span>Danh sách tin tức</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a className="sidebar-link sidebar-title" href="reports.html">
                                            <i className="ri-file-chart-line" />
                                            <span>Bảng thống kê</span>
                                        </a>
                                    </li>
                                    <li className="sidebar-list">
                                        <a
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop"
                                            href="javascript:void(0)"
                                        >
                                            <i className="ri-logout-box-line" />
                                            <span>Đăng xuất</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-arrow" id="right-arrow">
                                <i data-feather="arrow-right" />
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Page Sidebar Ends*/}
                {/* index body start */}
                <div className="page-body">
                    <div className="container-fluid">
                        <div className="row">
                            {/* chart caard section start */}
                            <div className="col-sm-6 col-xxl-3 col-lg-6">
                                <div className="main-tiles border-5 border-0 card-hover card o-hidden">
                                    <div className="custome-1-bg b-r-4 card-body">
                                        <div className="media align-items-center static-top-widget">
                                            <div className="media-body p-0">
                                                <span className="m-0">Total Revenue</span>
                                                <h4 className="mb-0 counter">
                                                    $6659
                                                    <span className="badge badge-light-primary grow">
                                                        <i data-feather="trending-up" />
                                                        8.5%
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="align-self-center text-center">
                                                <i className="ri-database-2-line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3 col-lg-6">
                                <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                                    <div className="custome-2-bg b-r-4 card-body">
                                        <div className="media static-top-widget">
                                            <div className="media-body p-0">
                                                <span className="m-0">Total Orders</span>
                                                <h4 className="mb-0 counter">
                                                    9856
                                                    <span className="badge badge-light-danger grow">
                                                        <i data-feather="trending-down" />
                                                        8.5%
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="align-self-center text-center">
                                                <i className="ri-shopping-bag-3-line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3 col-lg-6">
                                <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                                    <div className="custome-3-bg b-r-4 card-body">
                                        <div className="media static-top-widget">
                                            <div className="media-body p-0">
                                                <span className="m-0">Total Products</span>
                                                <h4 className="mb-0 counter">
                                                    893
                                                    <a
                                                        href="add-new-product.html"
                                                        className="badge badge-light-secondary grow"
                                                    >
                                                        ADD NEW
                                                    </a>
                                                </h4>
                                            </div>
                                            <div className="align-self-center text-center">
                                                <i className="ri-chat-3-line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3 col-lg-6">
                                <div className="main-tiles border-5 card-hover border-0 card o-hidden">
                                    <div className="custome-4-bg b-r-4 card-body">
                                        <div className="media static-top-widget">
                                            <div className="media-body p-0">
                                                <span className="m-0">Total Customers</span>
                                                <h4 className="mb-0 counter">
                                                    4.6k
                                                    <span className="badge badge-light-success grow">
                                                        <i data-feather="trending-down" />
                                                        8.5%
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="align-self-center text-center">
                                                <i className="ri-user-add-line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header border-0 pb-1">
                                        <div className="card-header-title p-0">
                                            <h4>Category</h4>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="category-slider no-arrow">
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/vegetable.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Vegetables &amp; Fruit</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/cup.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Beverages</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/meats.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Meats &amp; Seafood</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/breakfast.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Breakfast</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/frozen.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Frozen Foods</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/milk.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Milk &amp; Dairies</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/pet.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Pet Food</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/vegetable.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Vegetables &amp; Fruit</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/cup.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Beverages</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/meats.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Meats &amp; Seafood</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/breakfast.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Breakfast</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/frozen.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Frozen Foods</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/milk.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Milk &amp; Dairies</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dashboard-category">
                                                    <a href="javascript:void(0)" className="category-image">
                                                        <img
                                                            src="assets/svg/pet.svg"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a href="javascript:void(0)" className="category-name">
                                                        <h6>Pet Food</h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* chart card section End */}
                            {/* Earning chart star*/}
                            <div className="col-xl-6">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header border-0 pb-1">
                                        <div className="card-header-title">
                                            <h4>Revenue Report</h4>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div id="report-chart" />
                                    </div>
                                </div>
                            </div>
                            {/* Earning chart  end*/}
                            {/* Best Selling Product Start */}
                            <div className="col-xl-6 col-md-12">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header card-header-top card-header--2 px-0 pt-0">
                                        <div className="card-header-title">
                                            <h4>Best Selling Product</h4>
                                        </div>
                                        <div className="best-selling-box d-sm-flex d-none">
                                            <span>Short By:</span>
                                            <div className="dropdown">
                                                <button
                                                    className="btn p-0 dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true"
                                                >
                                                    Today
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div>
                                            <div className="table-responsive">
                                                <table className="best-selling-table w-image w-image w-image table border-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-image">
                                                                        <img
                                                                            src="assets/images/product/1.png"
                                                                            className="img-fluid"
                                                                            alt="Product"
                                                                        />
                                                                    </div>
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$29.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Orders</h6>
                                                                    <h5>62</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Stock</h6>
                                                                    <h5>510</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Amount</h6>
                                                                    <h5>$1,798</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-image">
                                                                        <img
                                                                            src="assets/images/product/2.png"
                                                                            className="img-fluid"
                                                                            alt="Product"
                                                                        />
                                                                    </div>
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$29.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Orders</h6>
                                                                    <h5>62</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Stock</h6>
                                                                    <h5>510</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Amount</h6>
                                                                    <h5>$1,798</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-image">
                                                                        <img
                                                                            src="assets/images/product/3.png"
                                                                            className="img-fluid"
                                                                            alt="Product"
                                                                        />
                                                                    </div>
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$29.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Orders</h6>
                                                                    <h5>62</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Stock</h6>
                                                                    <h5>510</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Amount</h6>
                                                                    <h5>$1,798</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Best Selling Product End */}
                            {/* Recent orders start*/}
                            <div className="col-xl-6">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header card-header-top card-header--2 px-0 pt-0">
                                        <div className="card-header-title">
                                            <h4>Recent Orders</h4>
                                        </div>
                                        <div className="best-selling-box d-sm-flex d-none">
                                            <span>Short By:</span>
                                            <div className="dropdown">
                                                <button
                                                    className="btn p-0 dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton2"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true"
                                                >
                                                    Today
                                                </button>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton2"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div>
                                            <div className="table-responsive">
                                                <table className="best-selling-table table border-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>#64548</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Date Placed</h6>
                                                                    <h5>5/1/22</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$250.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Order Status</h6>
                                                                    <h5>Completed</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Payment</h6>
                                                                    <h5 className="text-danger">Unpaid</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Date Placed</h6>
                                                                    <h5>5/1/22</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$250.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Order Status</h6>
                                                                    <h5>Completed</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Payment</h6>
                                                                    <h5 className="theme-color">Paid</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Date Placed</h6>
                                                                    <h5>5/1/22</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$250.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Order Status</h6>
                                                                    <h5>Completed</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Payment</h6>
                                                                    <h5 className="theme-color">Paid</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="best-product-box">
                                                                    <div className="product-name">
                                                                        <h5>Aata Buscuit</h5>
                                                                        <h6>26-08-2022</h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Date Placed</h6>
                                                                    <h5>5/1/22</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Price</h6>
                                                                    <h5>$250.00</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Order Status</h6>
                                                                    <h5>Completed</h5>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-detail-box">
                                                                    <h6>Payment</h6>
                                                                    <h5 className="theme-color">Paid</h5>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Recent orders end*/}
                            {/* Earning chart star*/}
                            <div className="col-xl-6">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header border-0 mb-0">
                                        <div className="card-header-title">
                                            <h4>Earning</h4>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div id="bar-chart-earning" />
                                    </div>
                                </div>
                            </div>
                            {/* Earning chart end*/}
                            {/* Transactions start*/}
                            <div className="col-xxl-4 col-md-6">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header border-0">
                                        <div className="card-header-title">
                                            <h4>Transactions</h4>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div>
                                            <div className="table-responsive">
                                                <table className="user-table transactions-table table border-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="transactions-icon">
                                                                    <i className="ri-shield-line" />
                                                                </div>
                                                                <div className="transactions-name">
                                                                    <h6>Wallets</h6>
                                                                    <p>Starbucks</p>
                                                                </div>
                                                            </td>
                                                            <td className="lost">-$74</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-color-1">
                                                                <div className="transactions-icon">
                                                                    <i className="ri-check-line" />
                                                                </div>
                                                                <div className="transactions-name">
                                                                    <h6>Bank Transfer</h6>
                                                                    <p>Add Money</p>
                                                                </div>
                                                            </td>
                                                            <td className="success">+$125</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-color-2">
                                                                <div className="transactions-icon">
                                                                    <i className="ri-exchange-dollar-line" />
                                                                </div>
                                                                <div className="transactions-name">
                                                                    <h6>Paypal</h6>
                                                                    <p>Add Money</p>
                                                                </div>
                                                            </td>
                                                            <td className="lost">-$50</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-color-3">
                                                                <div className="transactions-icon">
                                                                    <i className="ri-bank-card-line" />
                                                                </div>
                                                                <div className="transactions-name">
                                                                    <h6>Mastercard</h6>
                                                                    <p>Ordered Food</p>
                                                                </div>
                                                            </td>
                                                            <td className="lost">-$40</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="td-color-4 pb-0">
                                                                <div className="transactions-icon">
                                                                    <i className="ri-bar-chart-grouped-line" />
                                                                </div>
                                                                <div className="transactions-name">
                                                                    <h6>Transfer</h6>
                                                                    <p>Refund</p>
                                                                </div>
                                                            </td>
                                                            <td className="success pb-0">+$90</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Transactions end*/}
                            {/* visitors chart start*/}
                            <div className="col-xxl-4 col-md-6">
                                <div className="h-100">
                                    <div className="card o-hidden card-hover">
                                        <div className="card-header border-0">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="card-header-title">
                                                    <h4>Visitors</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="pie-chart">
                                                <div id="pie-chart-visitors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* visitors chart end*/}
                            {/* To Do List start*/}
                            <div className="col-xxl-4 col-md-6">
                                <div className="card o-hidden card-hover">
                                    <div className="card-header border-0">
                                        <div className="card-header-title">
                                            <h4>To Do List</h4>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <ul className="to-do-list">
                                            <li className="to-do-item">
                                                <div className="form-check user-checkbox">
                                                    <input
                                                        className="checkbox_animated check-it"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="flexCheckDefault"
                                                    />
                                                </div>
                                                <div className="to-do-list-name">
                                                    <strong>Pick up kids from school</strong>
                                                    <p>8 Hours</p>
                                                </div>
                                            </li>
                                            <li className="to-do-item">
                                                <div className="form-check user-checkbox">
                                                    <input
                                                        className="checkbox_animated check-it"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="flexCheckDefault1"
                                                    />
                                                </div>
                                                <div className="to-do-list-name">
                                                    <strong>Prepare or presentation.</strong>
                                                    <p>8 Hours</p>
                                                </div>
                                            </li>
                                            <li className="to-do-item">
                                                <div className="form-check user-checkbox">
                                                    <input
                                                        className="checkbox_animated check-it"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="flexCheckDefault2"
                                                    />
                                                </div>
                                                <div className="to-do-list-name">
                                                    <strong>Create invoice</strong>
                                                    <p>8 Hours</p>
                                                </div>
                                            </li>
                                            <li className="to-do-item">
                                                <div className="form-check user-checkbox">
                                                    <input
                                                        className="checkbox_animated check-it"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="flexCheckDefault3"
                                                    />
                                                </div>
                                                <div className="to-do-list-name">
                                                    <strong>Meeting with Alisa</strong>
                                                    <p>8 Hours</p>
                                                </div>
                                            </li>
                                            <li className="to-do-item">
                                                <form className="row g-2">
                                                    <div className="col-8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="Enter Task Name"
                                                        />
                                                    </div>
                                                    <div className="col-4">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary w-100 h-100"
                                                        >
                                                            Add task
                                                        </button>
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* To Do List end*/}
                        </div>
                    </div>
                </div>
                {/* index body end */}
            </div>
            {/* Page Body End */}
        </div>
    )
}

export default PageWrapper