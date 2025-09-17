import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-off-white to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-primary/5" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)',
               backgroundSize: '60px 60px'
             }} 
        />
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} />
              <span>From Ariyalur, Tamil Nadu</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
                <span className="text-gradient-brand">Authentic Taste.</span>
                <br />
                <span className="text-foreground">Trusted Quality.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl accent-font">
                Premium tea powder, dry fruits, and nuts sourced directly from the heart of Tamil Nadu. 
                Experience the authentic flavors that have been trusted by families for generations.
              </p>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="w-5 h-5 text-accent" />
                <span>Locally Sourced</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-accent" />
                <span>Family Trusted</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Leaf className="w-5 h-5 text-accent" />
                <span>Fresh & Pure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/tea">
                <Button size="lg" className="btn-hero group">
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/bulk-orders">
                <Button size="lg" variant="outline" className="btn-hero-outline">
                  Bulk Orders
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-tea">
              <img
                src={heroImage}
                alt="Premium tea, nuts, and dry fruits from Tamil Nadu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-gold animate-pulse">
              <span className="text-accent-foreground font-bold text-sm">100%</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full shadow-soft"></div>
            
            {/* Quality Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-soft">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <div className="text-sm">
                  <div className="font-semibold text-charcoal">Premium Quality</div>
                  <div className="text-muted-foreground">Locally Sourced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;