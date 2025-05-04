
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  const [messages] = useState([
    {
      id: 1,
      name: "Monoptica Support",
      message: "Welcome to Telegram! How can we help you today?",
      time: "09:30",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=50&h=50&auto=format&fit=crop",
      unread: 2,
    },
    {
      id: 2,
      name: "Design Team",
      message: "The new designs are ready for review. Please check when you have time.",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=50&h=50&auto=format&fit=crop",
      unread: 0,
    },
    {
      id: 3,
      name: "Development Group",
      message: "Sprint planning meeting scheduled for tomorrow at 10 AM.",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=50&h=50&auto=format&fit=crop",
      unread: 5,
    },
    {
      id: 4,
      name: "Marketing Team",
      message: "Latest campaign numbers are looking good!",
      time: "Tuesday",
      avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=50&h=50&auto=format&fit=crop",
      unread: 0,
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary">Messages</h1>
        <p className="text-gray-500 text-sm">Recent conversations</p>
      </header>

      <div className="space-y-2">
        {messages.map((chat) => (
          <Card key={chat.id} className="p-4 cursor-pointer hover:bg-gray-50">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-telegram-primary">
                <img src={chat.avatar} alt={chat.name} />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {chat.name}
                  </p>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.message}</p>
              </div>
              {chat.unread > 0 && (
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-telegram-primary rounded-full">
                  {chat.unread}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
