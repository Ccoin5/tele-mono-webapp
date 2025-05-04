
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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

  const platformIcons = {
    twitter: <Twitter className="w-5 h-5 text-blue-400" />,
    instagram: <Instagram className="w-5 h-5 text-pink-500" />,
    facebook: <Facebook className="w-5 h-5 text-blue-600" />,
    linkedin: <Linkedin className="w-5 h-5 text-blue-700" />
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary">Social Network</h1>
        <p className="text-gray-500 text-sm">Latest updates from our channels</p>
      </header>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <a href="#" className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm">
          <Twitter className="h-6 w-6 text-blue-400 mb-2" />
          <span className="text-xs">Twitter</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm">
          <Instagram className="h-6 w-6 text-pink-500 mb-2" />
          <span className="text-xs">Instagram</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm">
          <Facebook className="h-6 w-6 text-blue-600 mb-2" />
          <span className="text-xs">Facebook</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm">
          <Linkedin className="h-6 w-6 text-blue-700 mb-2" />
          <span className="text-xs">LinkedIn</span>
        </a>
      </div>

      <div className="space-y-4">
        {socialPosts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex items-start space-x-3">
              <Avatar className="h-10 w-10 border-2 border-telegram-light">
                <img src={post.avatar} alt={post.user} />
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">{post.user}</p>
                    <p className="text-gray-500 text-xs">{post.handle}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {platformIcons[post.platform as keyof typeof platformIcons]}
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>
                </div>
                <p className="text-sm my-2">{post.content}</p>
                {post.image && (
                  <div className="mt-2 rounded-lg overflow-hidden">
                    <img src={post.image} alt="Post content" className="w-full h-auto" />
                  </div>
                )}
                <Separator className="my-3" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.likes} likes</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialNetwork;
