
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-telegram-primary">Contact Us</h1>
        <p className="text-gray-500 text-sm">Get in touch with our team</p>
      </header>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <User size={16} className="text-telegram-primary" />
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
            </div>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="border-telegram-light focus:ring-telegram-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-telegram-primary" />
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="border-telegram-light focus:ring-telegram-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-telegram-primary" />
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
            </div>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="border-telegram-light focus:ring-telegram-primary"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-telegram-primary" />
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
            </div>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              className="min-h-[120px] border-telegram-light focus:ring-telegram-primary"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-telegram-primary hover:bg-telegram-dark"
          >
            Send Message
          </Button>
        </form>
      </Card>

      <Card className="p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-telegram-primary" />
            <span>contact@monoptica.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-telegram-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
