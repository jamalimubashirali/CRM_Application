import React from "react";
import { SideBarNavigaion } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row overflow-hidden">
        <SideBarNavigaion />
        <Outlet /> 
      </div>
    </>
  );
};

export default Layout;
