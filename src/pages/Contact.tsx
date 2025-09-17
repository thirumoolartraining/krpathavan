import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = `Hi K R Pathavan! I'm interested in your products and would like to get in touch.`;
    const whatsappUrl = `https://wa.me/919360428764?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tea-green/10 to-tea-green/5 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Get in <span className="text-tea-green">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products? Need bulk orders? We're here to help you find the perfect tea, nuts, and dry fruits for your needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-charcoal">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us directly or visit our store in Ariyalur. We're always happy to assist you with your requirements.
                </p>
              </div>

              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-tea-green/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-tea-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Address</h3>
                      <p className="text-muted-foreground">
                        No 148/ 85B, Viruthachalam Road<br />
                        Jayakondam, Ariyalur<br />
                        Tamil Nadu, India - 621802
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-nut-brown/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-nut-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Phone</h3>
                      <p className="text-muted-foreground">+91 9360428764</p>
                      <p className="text-sm text-muted-foreground">Available 9 AM - 7 PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Email</h3>
                      <p className="text-muted-foreground">info@krpathavan.com</p>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-tea-green/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-tea-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-charcoal">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us more about your requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;