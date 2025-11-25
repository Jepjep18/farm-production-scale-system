// collapsible-sidebar-list.tsx (simpler version)
import React from "react";
import { NavLink } from "react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import SidebarList from "./sidebar-list";

interface CollapsibleSidebarListProps {
  item: {
    id: string;
    title: string;
    icon: React.ReactNode;
    items?: any[];
  };
  isOpen: boolean;
  onToggle: () => void;
}

function CollapsibleSidebarList({ item, isOpen, onToggle }: CollapsibleSidebarListProps) {
  return (
    <div className="w-full mb-1">
      {/* Parent item that acts as toggle */}
      <div
        onClick={onToggle}
        className="cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <SidebarList>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <p>{item.icon}</p>
              <span className="link-text ml-3">{item.title}</span>
            </div>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 link-text" />
            ) : (
              <ChevronRight className="h-4 w-4 link-text" />
            )}
          </div>
        </SidebarList>
      </div>

      {/* Dropdown items */}
      {isOpen && item.items && (
        <div className="ml-4 mt-1 space-y-1">
          {item.items.map((subItem) => (
            <div key={subItem.id} className="min-h-[43px]">
              {subItem.path ? (
                <NavLink
                  to={subItem.path}
                  className="rounded-md"
                  children={({ isActive }) => (
                    <SidebarList isActive={isActive} className="pl-8">
                      <p>{subItem.icon}</p>
                      <span className="link-text">{subItem.title}</span>
                    </SidebarList>
                  )}
                />
              ) : (
                <div className="nav-item-disabled">
                  <SidebarList className="text-gray-400 pl-8">
                    <p>{subItem.icon}</p>
                    <span className="link-text">{subItem.title}</span>
                  </SidebarList>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CollapsibleSidebarList;