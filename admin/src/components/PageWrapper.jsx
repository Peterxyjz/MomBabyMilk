import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const PageWrapper = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Header />
      <div className="page-body-wrapper">
        <SideBar/>
        
      </div>
    </div>
  );
};
// header

export default PageWrapper;
