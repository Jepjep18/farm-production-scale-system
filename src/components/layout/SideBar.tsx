import React, { useState } from "react";
import { NavLink } from "react-router";
import SidebarList from "../ui/sidebar-list";
import CollapsibleSidebarList from "../ui/collapsible-sidebar-list";
import { sidenavItems } from "../constants";

function SideBar() {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  const handleGroupToggle = (groupId: string) => {
    setOpenGroupId(prevId => prevId === groupId ? null : groupId);
  };

  return (
    <div className="sidebar fixed z-10 backdrop-blur-lg">
      <div className="flex overflow-hidden py-2 px-2 border rounded-lg h-full">
        <ul className="navbar-nav">
          {sidenavItems.map((item) => (
            <li className="nav-item cursor-pointer" key={item.id}>
              {item.items ? (
                // Collapsible group item
                <CollapsibleSidebarList 
                  item={item} 
                  isOpen={openGroupId === item.id}
                  onToggle={() => handleGroupToggle(item.id)}
                />
              ) : (
                // Regular single item
                item.path ? (
                  <NavLink
                    to={item.path}
                    className="rounded-md"
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
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;