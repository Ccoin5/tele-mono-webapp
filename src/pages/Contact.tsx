
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary dark:text-telegram-light">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Get in touch with our team</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Section 1: Contact Information */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
              <div>
                <p className="font-medium dark:text-white">Email</p>
                <span className="dark:text-gray-300">contact@monoptica.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
              <div>
                <p className="font-medium dark:text-white">Phone</p>
                <span className="dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Section 2: Location */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Location</h2>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
            <div>
              <p className="font-medium dark:text-white">Address</p>
              <p className="dark:text-gray-300">123 Vision Street</p>
              <p className="dark:text-gray-300">Optical City, OC 12345</p>
              <p className="dark:text-gray-300">United States</p>
            </div>
          </div>
        </Card>

        {/* Section 3: Hours */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Business Hours</h2>
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-telegram-primary dark:text-telegram-light" />
            <div>
              <p className="font-medium dark:text-white">Opening Hours</p>
              <p className="dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="dark:text-gray-300">Sunday: Closed</p>
            </div>
          </div>
        </Card>

        {/* Section 4: Additional Info */}
        <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-telegram-primary dark:text-telegram-light">Customer Service</h2>
          <div>
            <p className="mb-2 dark:text-gray-300">Our dedicated customer service team is ready to assist you with:</p>
            <ul className="list-disc pl-5 space-y-1 dark:text-gray-300">
              <li>Product inquiries</li>
              <li>Order status updates</li>
              <li>Prescription assistance</li>
              <li>Frame adjustments and repairs</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              For emergency eye care issues, please call our 24/7 hotline: +1 (555) 987-6543
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
