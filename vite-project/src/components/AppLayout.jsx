import React from "react";
import AppSidebar from "./AppSidebar";
import {Outlet} from "react-router-dom";
// import AppHeader from "./AppHeader";


const AppLayout = () => {
  return (
    <div className="app_layout">
      <AppSidebar />

      <div className="app_layout_wider">
       {/* <AppHeader/> */}
        <div className="app_layout_main">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
