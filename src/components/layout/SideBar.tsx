import React from "react";
import { NavLink } from "react-router";
import SidebarList from "../ui/sidebar-list";
import { sidenavItems } from "../constants";

function SideBar() {
  return (
    <div className="sidebar fixed z-10 backdrop-blur-lg">
      <div className="flex overflow-hidden py-2 px-2 border rounded-lg h-full">
        <ul className="navbar-nav">
          {sidenavItems.map((item) => (
            <li className="nav-item cursor-pointer" key={item.id}>
              {item.path ? (
                <NavLink
                  to={item.path} // Replace with the actual projectId
                  className="rounded-md"
                  // NavLink's isActive prop helps to determine if the route is active
                  children={({ isActive }) => (
                    <SidebarList isActive={isActive}>
                      <p>{item.icon}</p>
                      <span className="link-text">{item.title}</span>
                    </SidebarList>
                  )}
                />
              ) : (
                <div className="nav-item-disabled">
                  <SidebarList className="text-gray-400">
                    <p>{item.icon}</p>
                    <span className="link-text">{item.title}</span>
                  </SidebarList>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
