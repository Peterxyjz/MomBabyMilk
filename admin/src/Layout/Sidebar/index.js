import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import LogoWrapper from "../../Components/CommonComponent/LogoWrapper";
import MENUITEMS from "./MenuData";
import AccountContext from "../../Helper/AccountContext";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
const MenuList = dynamic(() => import("./MenuList"), {
  ssr: false,
})
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { role, setRole } = useContext(AccountContext);
  const { accountData, accountContextData } = useContext(AccountContext);
  const checkrole = accountData ? accountData?.role?.name : "null";


  let storePermission = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) storePermission = localStorage.getItem("account") && JSON.parse(localStorage.getItem("account"));
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  // useEffect(() => {
  //   const storedRole = localStorage.getItem("role.name");
  //   if (storedRole) {
  //     const parsedRole = JSON.parse(storedRole);
  //     setRole(parsedRole.name);
  //   }
  // }, [])

  const filteredMenuItems = MENUITEMS.filter(menuItem => {
    // Nếu menuItem.permission không tồn tại, cho phép hiển thị
    if (!menuItem.role) {
      return true;
    }
    // Nếu vai trò của người dùng phù hợp, hiển thị menuItem
    return menuItem.role.includes(checkrole);
  });
  
  

  return (
    <div className={`sidebar-wrapper ${sidebarOpen ? "close_icon" : ""}`}>
      <div id="sidebarEffect" />
      <div className={`${mounted ? 'skeleton-loader' : ""}`}>
        <LogoWrapper setSidebarOpen={setSidebarOpen} />
        <nav className="sidebar-main">
          <div id="sidebar-menu">
            <ul className="sidebar-links" id="simple-bar">
              <MenuList menu={filteredMenuItems} level={0} activeMenu={activeMenu} setActiveMenu={setActiveMenu} key={role} />
            </ul>
          </div>
        </nav>
      </div>
    </div >
  );
};

export default Sidebar;
