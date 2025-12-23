import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, Truck, DollarSign, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BulkOrders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 via-accent/5 to-background section-padding">
        <div className="container-fluid text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <Package size={16} />
            <span>Wholesale Partnership</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold">
            Partner with <span className="text-gradient-brand">K R Pathavan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto accent-font leading-relaxed">
            Join hundreds of restaurants, retailers, and distributors who trust us for their bulk supply needs. 
            Get competitive wholesale rates and reliable delivery across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Why Choose Our <span className="text-gradient-brand">Wholesale Program</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Benefits that make the difference for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Competitive Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Special wholesale rates with additional discounts for large volume orders. 
                  Save 15-30% compared to retail prices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Reliable Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scheduled deliveries across Tamil Nadu. Bulk orders delivered within 2-5 business days 
                  with proper packaging.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Same premium quality for bulk orders. Every shipment includes quality certificates 
                  and freshness guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
                Request <span className="text-gradient-brand">Bulk Quote</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name *</Label>
                      <Input id="business" placeholder="Your business/company name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 xxxxx xxxxx" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Business Location</Label>
                    <Input id="location" placeholder="City, District, Tamil Nadu" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant/Hotel</SelectItem>
                        <SelectItem value="retailer">Retail Store</SelectItem>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="caterer">Catering Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="products">Products Interested In *</Label>
                    <Textarea 
                      id="products" 
                      placeholder="Please specify the products you're interested in (tea, nuts, dry fruits) with approximate quantities..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Monthly Quantity</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select approximate quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">10-50 kg per month</SelectItem>
                        <SelectItem value="medium">50-200 kg per month</SelectItem>
                        <SelectItem value="large">200-500 kg per month</SelectItem>
                        <SelectItem value="xlarge">500+ kg per month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Any specific requirements, delivery preferences, or questions..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="btn-hero flex-1">
                      Submit Bulk Enquiry
                    </Button>
                    <a 
                      href="https://wa.me/919876543210?text=Hello! I'm interested in bulk orders from K R Pathavan Trading Company."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button type="button" size="lg" variant="outline" className="w-full">
                        <MessageCircle className="mr-2 w-5 h-5" />
                        WhatsApp Direct
                      </Button>
                    </a>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-poppins font-semibold">
              Need <span className="text-gradient-brand">Immediate</span> Assistance?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our bulk order specialists are available to help you with custom quotes and delivery schedules
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a 
                href="tel:+919876543210"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  📞 Call: +91 98765 43210
                </Button>
              </a>
              <a 
                href="mailto:bulk@krpathavantrading.com"
                className="flex-1"
              >
                <Button variant="outline" className="w-full">
                  ✉️ Email: bulk@krpathavan.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BulkOrders;