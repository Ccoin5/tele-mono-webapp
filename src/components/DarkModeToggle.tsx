
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      toast("Dark mode enabled", {
        description: "Your preferences have been saved",
      });
    } else {
      document.documentElement.classList.remove("dark");
      toast("Light mode enabled", {
        description: "Your preferences have been saved",
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      {darkMode ? (
        <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ) : (
        <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      )}
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
