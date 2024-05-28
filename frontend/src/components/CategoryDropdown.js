import React from 'react';

const CategoryDropdown = () => (
  <div className="category-dropdown">
    <div className="category-title">
      <h5>Categories</h5>
      <button type="button" className="btn p-0 close-button text-content">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>

    <ul className="category-list">
      {/* Repeated Category Items */}
      <li className="onhover-category-list">
        <a href="javascript:void(0)" className="category-name">
          <img src="../assets/svg/1/vegetable.svg" alt="" />
          <h6>Vegetables & Fruit</h6>
          <i className="fa-solid fa-angle-right"></i>
        </a>
        <div className="onhover-category-box">
          <div className="list-1">
            <div className="category-title-box">
              <h5>Organic Vegetables</h5>
            </div>
            <div className="category-title-box">
              <h5>Organic Vegetables</h5>
            </div>
          </div>
        </div>
      </li>
      {/* Repeat the similar structure for other categories */}
    </ul>
  </div>
);

export default CategoryDropdown;
