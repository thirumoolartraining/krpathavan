import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Leaf } from 'lucide-react';

// Mock data - would come from API
const teaProducts = [
  {
    id: '1',
    name: 'Premium Assam Tea Powder',
    price: 180,
    originalPrice: 220,
    image: '/products/tea/assam-tea.jpg',
    category: 'tea',
    inStock: true,
    isNew: true,
    rating: 4.8
  },
  {
    id: '2', 
    name: 'Traditional Tamil Tea Blend',
    price: 160,
    image: '/products/tea/tamil-tea-blend.jpg',
    category: 'tea',
    inStock: true,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Organic Green Tea Powder', 
    price: 240,
    originalPrice: 280,
    image: '/products/tea/green-tea.jpg',
    category: 'tea',
    inStock: true,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Cardamom Flavored Tea',
    price: 200,
    image: '/products/tea/cardamom-tea.jpg',
    category: 'tea', 
    inStock: false,
    rating: 4.9
  },
  {
    id: '5',
    name: 'Ginger Tea Blend',
    price: 170,
    originalPrice: 190,
    image: '/products/tea/ginger-tea.jpg',
    category: 'tea',
    inStock: true,
    rating: 4.5
  },
  {
    id: '6',
    name: 'Masala Chai Powder',
    price: 220,
    category: 'tea',
    inStock: true,
    isNew: true,
    rating: 4.8
  }
];

const Tea = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  const filteredProducts = teaProducts
    .filter((product): product is typeof product & { 
      name: string; 
      price: number; 
      category: string; 
      inStock: boolean;
    } => {
      // Ensure all required properties exist and are of correct type
      const hasRequiredProps = 
        typeof product?.name === 'string' && 
        typeof product?.price === 'number' && 
        typeof product?.category === 'string' &&
        typeof product?.inStock === 'boolean';
      
      if (!hasRequiredProps) return false;
      
      // Apply search and filter
      const searchTermLower = searchTerm.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchTermLower);
      
      let matchesFilter = true;
      if (filterBy === "inStock") {
        matchesFilter = product.inStock === true;
      } else if (filterBy === "new") {
        matchesFilter = product.isNew === true;
      } else if (filterBy === "sale") {
        matchesFilter = !!product.originalPrice;
      }
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return (b.rating || 0) - (a.rating || 0);
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container-fluid">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} />
              <span>Premium Tea Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-foreground">
              Authentic Tamil Nadu <span className="text-gradient-brand">Tea Powder</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto accent-font">
              Sourced directly from the finest tea gardens of Tamil Nadu. Experience the rich, 
              authentic flavors with our fresh approach to traditional blends.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 border-b">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search teas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="inStock">In Stock</SelectItem>
                    <SelectItem value="new">New Items</SelectItem>
                    <SelectItem value="sale">On Sale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-fluid">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No teas found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setFilterBy("all"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tea;