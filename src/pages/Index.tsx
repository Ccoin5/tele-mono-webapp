
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const slides = [
    {
      id: 1,
      title: "Premium Lenses",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format&fit=crop",
      description: "Experience clarity with our premium optical solutions",
    },
    {
      id: 2,
      title: "Modern Frames",
      image: "https://images.unsplash.com/photo-1546914782-96b445f7d7c1?q=80&w=500&auto=format&fit=crop",
      description: "Stylish frames for every face shape and preference",
    },
    {
      id: 3,
      title: "Expert Care",
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=500&auto=format&fit=crop",
      description: "Professional eye care services by certified specialists",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary">Monoptica</h1>
        <p className="text-gray-500 text-sm">Your vision, our priority</p>
      </header>

      {/* Slider Section */}
      <section className="mb-8">
        <Carousel className="mx-auto max-w-md">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                        <h3 className="font-semibold">{slide.title}</h3>
                        <p className="text-sm">{slide.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </section>

      {/* Info Section */}
      <section className="mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-telegram-primary">About Monoptica</h2>
          <p className="text-gray-700 mb-4">
            Monoptica is your premier destination for quality eyewear and professional eye care services. 
            With over 20 years of experience, we offer the latest in optical technology and fashion.
          </p>
          <p className="text-gray-700">
            Our team of certified specialists is dedicated to providing personalized care and 
            the perfect vision solutions tailored to your needs.
          </p>
        </Card>
      </section>

      <h2 className="text-xl font-semibold mb-4 text-telegram-primary">Recent Messages</h2>
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
