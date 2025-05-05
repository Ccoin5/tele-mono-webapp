import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary dark:text-telegram-light">АДРЕСИ МЕРЕЖІ ОПТИК</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
      </p>
      </header>

      <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
        <Accordion type="single" collapsible className="w-full">
          {/* Accordion 1: Contact Information */}
          <AccordionItem value="contact-info">
            <AccordionTrigger className="text-lg font-semibold text-telegram-primary dark:text-telegram-light">
Дніпро, ТЦ «Новий центр» 1 поверх вул. В’ячеслава Липинського, 7б</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
                  <div>
                    <p className="font-medium dark:text-white">Phone</p>
                    <span className="dark:text-gray-300">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
                  <div>
                    <p className="font-medium dark:text-white">Additional Phone</p>
                    <span className="dark:text-gray-300">+1 (555) 987-6543</span>
                  </div>
                </div>
                <div className="mt-3">
                  <Button className="bg-[#7360F2] hover:bg-[#5B4CD6] text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact on Viber
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Accordion 2: Location */}
          <AccordionItem value="location">
            <AccordionTrigger className="text-lg font-semibold text-telegram-primary dark:text-telegram-light">Дніпро, вул. Набережна Заводська, 97А</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
                  <div>
                    <p className="font-medium dark:text-white">Address</p>
                    <p className="dark:text-gray-300">123 Vision Street</p>
                    <p className="dark:text-gray-300">Optical City, OC 12345</p>
                    <p className="dark:text-gray-300">United States</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Button className="bg-[#7360F2] hover:bg-[#5B4CD6] text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact on Viber
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Accordion 3: Business Hours */}
          <AccordionItem value="hours">
            <AccordionTrigger className="text-lg font-semibold text-telegram-primary dark:text-telegram-light">
              Business Hours
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
                  <div>
                    <p className="font-medium dark:text-white">Opening Hours</p>
                    <p className="dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="dark:text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Button className="bg-[#7360F2] hover:bg-[#5B4CD6] text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact on Viber
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Accordion 4: Customer Service */}
          <AccordionItem value="customer-service">
            <AccordionTrigger className="text-lg font-semibold text-telegram-primary dark:text-telegram-light">
              Customer Service
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
                  <div>
                    <p className="font-medium dark:text-white">Customer Support</p>
                    <p className="dark:text-gray-300">For emergency eye care issues, please call our 24/7 hotline:</p>
                    <p className="dark:text-gray-300">+1 (555) 987-6543</p>
                    <ul className="list-disc pl-5 space-y-1 dark:text-gray-300 mt-2">
                      <li>Product inquiries</li>
                      <li>Order status updates</li>
                      <li>Prescription assistance</li>
                      <li>Frame adjustments and repairs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3">
                  <Button className="bg-[#7360F2] hover:bg-[#5B4CD6] text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact on Viber
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>;
};
export default Contact;