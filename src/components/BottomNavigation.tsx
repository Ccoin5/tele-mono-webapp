
import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, Share2 } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={24} />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <MessageCircle size={24} />,
    },
    {
      name: "Social",
      path: "/social",
      icon: <Share2 size={24} />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center ${
              path === item.path 
                ? "text-telegram-primary" 
                : "text-gray-500 hover:text-telegram-primary"
            }`}
          >
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
