
import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "lucide-react";

const SocialNetwork = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-telegram-primary dark:text-telegram-light">Social Network</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Latest updates from our channels</p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <a href="https://www.instagram.com/monoptica.of/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Instagram className="h-6 w-6 text-pink-500 mb-2" />
          <span className="text-xs dark:text-gray-300">Instagram</span>
        </a>
        <a href="https://www.facebook.com/monoptica.of" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Facebook className="h-6 w-6 text-blue-600 mb-2" />
          <span className="text-xs dark:text-gray-300">Facebook</span>
        </a>
      </div>

      {/* Facebook post preview */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Latest Facebook Post</h2>
        <Card className="bg-white dark:bg-gray-800 shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-3">
                <img src="https://graph.facebook.com/monoptica.of/picture" alt="Monoptica" />
              </Avatar>
              <div>
                <h3 className="font-medium dark:text-gray-200">Monoptica</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Optical Store</p>
              </div>
            </div>
            
            <div className="fb-post-container">
              <div className="relative pb-4 h-96 overflow-hidden">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmonoptica.of&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                  className="absolute top-0 left-0 w-full h-full border-none overflow-hidden"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://www.facebook.com/monoptica.of" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Visit Our Facebook Page
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SocialNetwork;
