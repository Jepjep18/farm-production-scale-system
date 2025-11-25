import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar - Fixed at top */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Main content area with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed width */}
        <aside className="w-16 flex-shrink-0 z-40">
          <SideBar />
        </aside>

        {/* Main content - Takes remaining space */}
        <main className="flex-1 overflow-y-auto p-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;