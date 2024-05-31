import React from "react";
import logoImg from '../assets/images/logo/2.png'
const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div id="sidebarEffect" />
      <div>
        <div className="logo-wrapper logo-wrapper-center">
          <a href="/" data-bs-original-title="" title="">
            <img
              className="img-fluid for-white"
              src={logoImg}
              alt="logo"
            />
          </a>
          <div className="back-btn">
            <i className="fa fa-angle-left" />
          </div>
          <div className="toggle-sidebar">
            <i className="ri-apps-line status_toggle middle sidebar-toggle" />
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <a href="/">
            <img
              className="img-fluid main-logo main-white"
              src={logoImg}
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
                  href="/admin"
                >
                  <i className="ri-home-line" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sidebar-list">
                <a
                  className="sidebar-link sidebar-title"
                  href="javascript:void(0)"
                >
                  <i className="ri-user-3-line" />
                  <span>Users</span>
                </a>
                <ul className="sidebar-submenu">
                  <li>
                    <a href="all-users.html">All users</a>
                  </li>
                  <li>
                    <a href="add-new-user.html">Add new user</a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-list">
                <a
                  className="linear-icon-link sidebar-link sidebar-title"
                  href="javascript:void(0)"
                >
                  <i className="ri-settings-line" />
                  <span>Settings</span>
                </a>
                <ul className="sidebar-submenu">
                  <li>
                    <a href="/profile-setting">Profile Setting</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right-arrow" id="right-arrow">
            <i data-feather="arrow-right" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
