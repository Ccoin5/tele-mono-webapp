
import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/sonner";

const SocialNetwork = () => {
  const socialPosts = [
    {
      id: 1,
      user: "Monoptica Design",
      handle: "@monoptica",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=50&h=50&auto=format&fit=crop",
      content: "Just launched our new Telegram-inspired web app! Check it out and let us know what you think.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop",
      likes: 45,
      shares: 12,
      time: "2h ago",
      platform: "twitter",
    },
    {
      id: 2,
      user: "Monoptica Team",
      handle: "@monoptica_official",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=50&h=50&auto=format&fit=crop",
      content: "Our design team has been working on new features for our messaging platform. Stay tuned for updates!",
      image: "",
      likes: 124,
      shares: 38,
      time: "Yesterday",
      platform: "instagram",
    },
    {
      id: 3,
      user: "Monoptica Support",
      handle: "@monoptica_help",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=50&h=50&auto=format&fit=crop",
      content: "Need help with our services? Our support team is available 24/7. Contact us through the app or social media.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=400&auto=format&fit=crop",
      likes: 78,
      shares: 23,
      time: "2d ago",
      platform: "facebook",
    }
  ];

  // Instagram posts
  const [instagramPosts, setInstagramPosts] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400&auto=format&fit=crop",
      caption: "Our new premium lenses collection has arrived! #monoptica #eyewear",
      likes: 127,
      comments: 23,
      time: "2 days ago"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1546914782-96b445f7d7c1?q=80&w=400&auto=format&fit=crop",
      caption: "Modern frames for every style. Visit our store today! #fashion #glasses",
      likes: 89,
      comments: 14,
      time: "4 days ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=400&auto=format&fit=crop",
      caption: "Expert eye care services by our certified specialists #eyecare #health",
      likes: 213,
      comments: 31,
      time: "1 week ago"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400&auto=format&fit=crop",
      caption: "New styles just arrived! Check out our latest collection #newcollection #eyewear",
      likes: 156,
      comments: 18,
      time: "1 week ago"
    }
  ]);

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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

  const platformIcons = {
    twitter: <Twitter className="w-5 h-5 text-blue-400" />,
    instagram: <Instagram className="w-5 h-5 text-pink-500" />,
    facebook: <Facebook className="w-5 h-5 text-blue-600" />,
    linkedin: <Linkedin className="w-5 h-5 text-blue-700" />
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-telegram-primary">Social Network</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Latest updates from our channels</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
        </div>
      </header>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <a href="#" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Twitter className="h-6 w-6 text-blue-400 mb-2" />
          <span className="text-xs dark:text-gray-300">Twitter</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Instagram className="h-6 w-6 text-pink-500 mb-2" />
          <span className="text-xs dark:text-gray-300">Instagram</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Facebook className="h-6 w-6 text-blue-600 mb-2" />
          <span className="text-xs dark:text-gray-300">Facebook</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Linkedin className="h-6 w-6 text-blue-700 mb-2" />
          <span className="text-xs dark:text-gray-300">LinkedIn</span>
        </a>
      </div>

      <div className="space-y-8">
        {/* Instagram Feed Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-telegram-primary dark:text-telegram-light">
            <span className="flex items-center gap-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              Latest Instagram Posts
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="relative aspect-square">
                  <img 
                    src={post.image} 
                    alt="Instagram post" 
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm mb-2 text-gray-700 dark:text-gray-300 line-clamp-2">{post.caption}</p>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Social Updates</h2>
        <div className="space-y-4">
          {socialPosts.map((post) => (
            <Card key={post.id} className="p-4 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10 border-2 border-telegram-light">
                  <img src={post.avatar} alt={post.user} />
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm dark:text-white">{post.user}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{post.handle}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {platformIcons[post.platform as keyof typeof platformIcons]}
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.time}</span>
                    </div>
                  </div>
                  <p className="text-sm my-2 dark:text-gray-300">{post.content}</p>
                  {post.image && (
                    <div className="mt-2 rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post content" className="w-full h-auto" />
                    </div>
                  )}
                  <Separator className="my-3 dark:bg-gray-700" />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{post.likes} likes</span>
                    <span>{post.shares} shares</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
