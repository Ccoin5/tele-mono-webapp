
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const New = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary dark:text-telegram-light">
          Нові надходження
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Ознайомтеся з нашими новими продуктами
        </p>
      </header>

      <Card className="p-6 dark:bg-gray-800 dark:border-gray-700 mb-6">
        <CardContent className="p-0">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold">Ultra Comfort</h2>
            <p className="text-center text-gray-600 dark:text-gray-300">
              Відкрийте для себе новий рівень комфорту з нашими новими лінзами Ultra Comfort
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto" 
              onClick={() => window.open('https://monoptica.com/ultra-comfort', '_blank')}
            >
              Дізнатися більше <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default New;
