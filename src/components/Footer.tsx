import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="container-fluid section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div>
                <h3 className="font-poppins text-lg font-semibold">K R Pathavan Trading Company</h3>
              </div>
            </div>
            <p className="text-off-white/80 text-sm leading-relaxed">
              Your trusted source for premium tea powder, dry fruits, and nuts. 
              Bringing authentic Tamil Nadu flavors to your doorstep with quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Tea Powder', href: '/tea' },
                { name: 'Dry Fruits', href: '/dry-fruits' },
                { name: 'Nuts', href: '/nuts' },
                { name: 'About Us', href: '/about' },
                { name: 'Bulk Orders', href: '/bulk-orders' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-off-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h4 className="font-poppins text-lg font-semibold">Customer Support</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact"
                  className="text-off-white/70 hover:text-accent transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:info@krpathavan.com"
                  className="text-off-white/70 hover:text-accent transition-colors text-sm"
                >
                  Email Support
                </a>
              </li>
              <li>
                <span className="text-off-white/70 text-sm">
                  Return Policy
                </span>
              </li>
              <li>
                <span className="text-off-white/70 text-sm">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-poppins text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-off-white/70">
                  <p>43/A, ULKOTTAI ROAD,</p>
                  <p>PAAPANKULAM, JAYANKONDAM,</p>
                  <p>ARIYALUR, TAMIL NADU - 621802</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+919360428764"
                  className="text-sm text-off-white/70 hover:text-accent transition-colors"
                >
                  +91 9360428764
                </a>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a 
                    href="mailto:info@krpathavan.com"
                    className="text-sm text-off-white/70 hover:text-accent transition-colors"
                  >
                    info@krpathavan.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 opacity-0" />
                  <a 
                    href="mailto:krpathavantradingcompany@gmail.com"
                    className="text-sm text-off-white/70 hover:text-accent transition-colors"
                  >
                    krpathavantradingcompany@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/919360428764" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-off-white/20">
        <div className="container-fluid py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-off-white/60">
              © 2024 K R Pathavan Trading Company. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end space-y-3">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link to="/shipping-policy" className="text-sm text-off-white/70 hover:text-accent transition-colors whitespace-nowrap">
                  Shipping Policy
                </Link>
                <Link to="/cancellation-refund-policy" className="text-sm text-off-white/70 hover:text-accent transition-colors whitespace-nowrap">
                  Cancellation & Refund
                </Link>
                <Link to="/privacy-policy" className="text-sm text-off-white/70 hover:text-accent transition-colors whitespace-nowrap">
                  Privacy Policy
                </Link>
                <Link to="/terms-and-conditions" className="text-sm text-off-white/70 hover:text-accent transition-colors whitespace-nowrap">
                  Terms & Conditions
                </Link>
              </div>
              <span className="text-sm text-off-white/60 text-center md:text-right">
                Made with ❤️ in Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;