import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import StarRating from '../ui/StarRating';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Wishlist button */}
      <button 
        className="absolute top-2 right-2 z-10 rounded-full bg-white p-1.5 text-gray-900 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4" />
      </button>
      
      {/* Product image */}
      <div className="aspect-h-1 aspect-w-1 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Product info */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="default">{product.category}</Badge>
          <StarRating rating={product.rating.rate} size="sm" />
        </div>
        
        <h3 className="mb-2 text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
        
        <div className="mt-auto flex items-end justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          
          <button
            onClick={() => addItem(product)}
            className="flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;