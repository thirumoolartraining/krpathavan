import { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  rating?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image = '/placeholder.svg',
  category,
  inStock,
  isNew,
  rating = 4.5
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inStock) {
      addToCart({
        id,
        name,
        price,
        originalPrice,
        image,
        category
      });
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative product-card p-4">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/20 rounded-lg mb-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              New
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">
              -{discount}%
            </Badge>
          )}
        </div>
        
        {!inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Badge variant="outline" className="bg-background/90">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground capitalize">{category}</span>
          <div className="flex items-center space-x-1">
            <span className="text-accent">★</span>
            <span className="text-muted-foreground">{rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-lg line-clamp-2 h-14">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">₹{price.toFixed(2)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!inStock}
          className="w-full mt-2 bg-primary hover:bg-accent text-primary-foreground"
        >
          <ShoppingCart size={16} className="mr-2" />
          {inStock ? 'Quick Add' : 'Out of Stock'}
        </Button>

        {/* Wishlist Button */}
        <Button
          variant="outline"
          className="w-full mt-2"
          onClick={toggleWishlist}
        >
          <Heart
            size={16}
            className={`mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
          />
          {isWishlisted ? 'Saved' : 'Save for Later'}
        </Button>

        {/* Bulk Order Link */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-secondary hover:text-secondary-foreground hover:bg-secondary/10 mt-2"
        >
          Bulk Enquiry
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;