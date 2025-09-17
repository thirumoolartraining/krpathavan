import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  variant: 'tea' | 'nuts' | 'gold';
  productCount: number;
}

const CategoryCard = ({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  variant, 
  productCount 
}: CategoryCardProps) => {
  const getCardClasses = () => {
    const baseClasses = "group relative overflow-hidden rounded-lg p-8 text-white shadow-lg hover-lift";
    
    switch (variant) {
      case 'tea':
        return `${baseClasses} category-card-tea`;
      case 'nuts':
        return `${baseClasses} category-card-nuts`;
      case 'gold':
        return `${baseClasses} category-card-gold`;
      default:
        return `${baseClasses} category-card-tea`;
    }
  };

  return (
    <div className={getCardClasses()}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Icon className="w-8 h-8" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{productCount}+</div>
            <div className="text-sm opacity-90">Products</div>
          </div>
        </div>

        <h3 className="text-2xl font-poppins font-semibold mb-3">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>

        <Link to={href}>
          <Button 
            variant="secondary" 
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm group"
          >
            Explore {title}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default CategoryCard;