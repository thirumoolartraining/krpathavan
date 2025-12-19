import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Heart, Leaf, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background section-padding">
        <div className="container-fluid text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Heart size={16} />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold">
            From <span className="text-gradient-brand">Ariyalur</span>, with Love
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto accent-font leading-relaxed">
            For over 25 years, K R Pathavan Trading Company has been the heart of authentic Tamil Nadu flavors. 
            Our journey began in the bustling markets of Ariyalur, where quality and trust became our foundation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-poppins font-semibold text-foreground">
                Rooted in Tradition, Driven by Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started by Mr. Karthickrajan Kumar in 2024, our company emerged from a simple vision: 
                  to bring the authentic taste of Tamil Nadu's finest produce to every household. 
                  What began as a small family business in Ariyalur has grown into a trusted name 
                  across South India.
                </p>
                <p>
                  We source our tea directly from the lush plantations of the Nilgiris and Western Ghats, 
                  our nuts from the finest orchards, and our dry fruits from trusted suppliers who share 
                  our commitment to quality. Every product that bears our name has been carefully selected, 
                  tested, and approved by our quality experts.
                </p>
                <p>
                  Today, we serve over 1000 families and businesses, but our core values remain unchanged: 
                  authenticity, quality, and the warmth of Tamil Nadu hospitality in every package we deliver.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-8 shadow-tea">
                <div className="w-full h-full bg-white/50 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      Heritage photo<br />coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Our <span className="text-gradient-brand">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Authenticity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We preserve traditional methods and authentic flavors that continue to be 
                  cherished in Tamil Nadu.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Quality Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every product undergoes rigorous quality checks to ensure only the 
                  finest reaches our customers' tables.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-soft hover-lift text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Family Trust</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build lasting relationships with our customers, treating each 
                  family as part of our extended community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facts & Figures */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Our <span className="text-gradient-brand">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that tell our story
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary">1+</div>
              <div className="text-muted-foreground font-medium">Years of Excellence</div>
              <p className="text-sm text-muted-foreground/80">
                Serving authentic flavors since 2024
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">1000+</div>
              <div className="text-muted-foreground font-medium">Happy Customers</div>
              <p className="text-sm text-muted-foreground/80">
                Families trusting us daily
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-muted-foreground font-medium">Premium Products</div>
              <p className="text-sm text-muted-foreground/80">
                Carefully curated selection
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground font-medium">Districts Served</div>
              <p className="text-sm text-muted-foreground/80">
                Across Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;