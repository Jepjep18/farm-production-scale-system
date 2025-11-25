import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

function MainLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="sticky top-0 z-100">
          <NavBar />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="block z-50 sm:p-2">
            <SideBar />
          </div>
          <div className="lg:ml-16 sm:ml-16 flex-1 sm:py-2 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
