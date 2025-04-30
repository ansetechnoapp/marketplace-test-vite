import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { totalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              MarketPlace
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              Home
            </a>
            <a href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              Shop
            </a>
            <a href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              Categories
            </a>
            <a href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              Deals
            </a>
            <a href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              About
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
              aria-label="Account"
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              onClick={toggleCart}
              className={`p-2 rounded-full transition-colors relative ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="p-2 relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-100 animate-fadeDown">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-700 py-2 font-medium">Home</a>
            <a href="#" className="text-gray-700 py-2 font-medium">Shop</a>
            <a href="#" className="text-gray-700 py-2 font-medium">Categories</a>
            <a href="#" className="text-gray-700 py-2 font-medium">Deals</a>
            <a href="#" className="text-gray-700 py-2 font-medium">About</a>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 flex space-x-4">
            <Button variant="outline" size="md" className="flex-1">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Button variant="outline" size="md" className="flex-1">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;