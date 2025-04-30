import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  
  return (
    <li className="py-5 flex">
      {/* Product image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      {/* Product details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
              {product.title}
            </h3>
            <button
              onClick={() => removeItem(product.id)}
              className="ml-4 text-gray-400 hover:text-gray-500"
              aria-label="Remove item"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.category}</p>
        </div>
        
        <div className="mt-auto flex justify-between items-end">
          {/* Price */}
          <p className="text-sm font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          
          {/* Quantity selector */}
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="p-1.5 text-gray-600 hover:text-gray-900 focus:outline-none disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            
            <span className="px-2 text-sm text-gray-900 select-none">
              {quantity}
            </span>
            
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-1.5 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;