import { ModeToggle } from "@/theme/mode-toggle";
import React from "react";
import { useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, LogOut, Settings, HelpCircle, User } from "lucide-react";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you can add any logout logic like clearing tokens, etc.
    // For now, just navigate to login page
    navigate("/login");
  };

  return (
    <>
      <div className="backdrop-blur-lg border-b border py-2 px-6">
        <div className="flex flex-1 justify-between items-center">
          <h1 className="font-semibold text-xl">ABFI Farm Management</h1>
          <div className="flex items-center gap-2">
            <ModeToggle />

            {/* Avatar with User Info */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Admin User</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-muted-foreground">
                      admin@abfi.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
