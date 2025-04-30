import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import CartItem from './CartItem';

const CartSidebar: React.FC = () => {
  const { items, isCartOpen, toggleCart, totalItems, totalPrice, clearCart } = useCart();
  
  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleCart}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-4 py-5 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart className="w-5 h-5 text-gray-700 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
              <span className="ml-2 text-sm bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button 
              onClick={toggleCart}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
                <p className="text-gray-500 mb-4">Start shopping to add items to your cart</p>
                <Button onClick={toggleCart}>Continue Shopping</Button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex items-center justify-between font-medium">
                <span className="text-base text-gray-900">Subtotal</span>
                <span className="text-lg text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500">
                Shipping and taxes calculated at checkout
              </p>
              <div className="space-y-2">
                <Button fullWidth size="lg">
                  Checkout
                </Button>
                <Button 
                  variant="ghost" 
                  fullWidth
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;