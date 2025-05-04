
import { ReactNode, useEffect } from "react";
import BottomNavigation from "./BottomNavigation";
import DarkModeToggle from "./DarkModeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Check if user prefers dark mode
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-telegram-bg dark:bg-gray-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm p-2">
        <div className="container mx-auto flex justify-end">
          <DarkModeToggle />
        </div>
      </div>
      <main className="flex-1 pb-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
