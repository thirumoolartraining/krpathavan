import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const dryFruitsProducts = [
  {
    id: "df1",
    name: "Premium Dates",
    price: 450,
    originalPrice: 550,
    image: '/products/dryfruits/dates.jpg',
    category: "Dry Fruits",
    inStock: true,
    isNew: true,
    rating: 4.9
  },
  {
    id: "df2",
    name: "Dried Figs",
    price: 850,
    image: '/products/dryfruits/figs.jpg',
    category: "Dry Fruits",
    inStock: true,
    rating: 4.7
  },
  {
    id: "df3",
    name: "Raisins",
    price: 320,
    originalPrice: 380,
    image: '/products/dryfruits/raisins.jpg',
    category: "Dry Fruits", 
    inStock: true,
    rating: 4.6
  },
  {
    id: "df4",
    name: "Dried Apricots",
    price: 950,
    image: '/products/dryfruits/apricots.jpg',
    category: "Dry Fruits",
    inStock: false,
    rating: 4.8
  },
  {
    id: "df5", 
    name: "Mixed Dry Fruits",
    price: 1200,
    image: '/products/dryfruits/mixed-dryfruits.jpg',
    category: "Dry Fruits",
    inStock: true,
    isNew: true,
    rating: 4.5
  },
  {
    id: "df6",
    name: "Dried Cranberries",
    price: 650,
    originalPrice: 750,
    category: "Dry Fruits",
    inStock: true,
    rating: 4.4
  }
];

const DryFruits = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  const filteredProducts = dryFruitsProducts
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
      <section className="relative bg-gradient-to-br from-gold/10 to-gold/5 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Premium <span className="text-gold">Dry Fruits</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nature's candy packed with vitamins and minerals. Our carefully selected dry fruits bring you sweetness with health benefits.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search dry fruits..."
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
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No dry fruits found matching your criteria.</p>
              <Button onClick={() => { setSearchTerm(""); setFilterBy("all"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default DryFruits;