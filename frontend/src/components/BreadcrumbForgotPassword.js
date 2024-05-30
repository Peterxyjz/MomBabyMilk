import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Đảm bảo bạn đã cài đặt Font Awesome

const BreadcrumbSection = () => {
  return (
    <section className="breadcrumb-section pt-0">
      <div className="container-fluid-lg">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-contain">
              <h2 className="mb-2">Forgot Password</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <i className="fa-solid fa-house"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Forgot Password</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
