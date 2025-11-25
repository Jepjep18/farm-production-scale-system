import { Moon, Sun } from "lucide-react";

import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Function to toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative h-6 w-12 rounded-full bg-slate-200 p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-green-500"
      aria-label="Toggle theme"
    >
      <div
        className={`${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        } flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out dark:bg-black`}
      >
        {theme === "dark" ? (
          <Moon className="h-3 w-3 text-green-700" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </div>
    </button>
  );
}
