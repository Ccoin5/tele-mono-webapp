
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
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
        <h1 className="text-2xl font-bold text-telegram-primary dark:text-telegram-light">Monoptica</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Your vision, our priority</p>
      </header>

      {/* Slider Section - Updated to be full width */}
      <section className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative h-64 w-full">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      {/* Info Section */}
      <section className="mb-8">
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-telegram-primary dark:text-telegram-light">About Monoptica</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Monoptica is your premier destination for quality eyewear and professional eye care services. 
            With over 20 years of experience, we offer the latest in optical technology and fashion.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our team of certified specialists is dedicated to providing personalized care and 
            the perfect vision solutions tailored to your needs.
          </p>
        </Card>
      </section>

      {/* Telegram Bot Help Section */}
      <section className="mb-8">
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2 text-telegram-primary dark:text-telegram-light">Need Help? Chat with Our Bot</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Get instant assistance and information through our Telegram bot.
              </p>
            </div>
            <a href="https://t.me/monoptica_bot" target="_blank" rel="noopener noreferrer">
              <Button className="bg-telegram-primary hover:bg-telegram-dark text-white">
                <MessageCircle className="mr-2" />
                Open Telegram Bot
              </Button>
            </a>
          </div>
        </Card>
      </section>

      {/* Glasses Manufacturing and Repair Section */}
      <section className="mb-8">
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2 text-telegram-primary dark:text-telegram-light">
                Виготовлення, ремонт окулярів будь-якої складності
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Професійні послуги з виготовлення та ремонту окулярів. Індивідуальний підхід до кожного клієнта.
              </p>
            </div>
            <a href="https://www.instagram.com/monoptica.of/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <Instagram className="mr-2" />
                Instagram
              </Button>
            </a>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
