import React from "react";
import { twMerge } from "tailwind-merge";

interface SidebarListProps {
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function SidebarList({
  isActive,
  children,
  className,
}: SidebarListProps) {
  return (
    <div
      className={twMerge(
        `nav-link ${
          isActive
            ? "bg-gray-950 text-white rounded-md flex justify-center"
            : ""
        }`,
        className
      )}
    >
      {children}
    </div>
  );
}
