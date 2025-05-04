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
        <a href="#" className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <Facebook className="h-6 w-6 text-blue-600 mb-2" />
          <span className="text-xs dark:text-gray-300">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
