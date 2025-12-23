import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Tea', href: '/tea' },
    { name: 'Nuts', href: '/nuts' },
    { name: 'Dry Fruits', href: '/dry-fruits' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-fluid">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="hidden sm:block">
              <h1 className="font-poppins text-lg font-semibold text-foreground">
                K R Pathavan Trading Company
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Bulk Orders CTA */}
            <Link to="/bulk-orders" className="hidden lg:block">
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Bulk Orders
              </Button>
            </Link>

            {/* WhatsApp Contact */}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-sm text-primary hover:text-accent transition-colors"
            >
              <Phone size={16} />
              <span>Contact</span>
            </a>

            {/* Cart */}
            <Button variant="outline" size="sm" className="relative" onClick={toggleCart}>
              <ShoppingCart size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Link to="/bulk-orders">
                      <Button className="w-full mb-3 btn-hero">
                        Bulk Orders
                      </Button>
                    </Link>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary"
                    >
                      <Phone size={16} />
                      <span>WhatsApp Contact</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;