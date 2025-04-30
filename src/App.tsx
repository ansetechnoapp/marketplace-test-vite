import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategorySection from './components/home/CategorySection';
import FeaturedSection from './components/home/FeaturedSection';
import PromoSection from './components/home/PromoSection';
import TestimonialSection from './components/home/TestimonialSection';
import CartSidebar from './components/cart/CartSidebar';
import { categories, featuredProducts, products } from './data/products';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <CategorySection categories={categories} />
          <FeaturedSection products={featuredProducts} />
          <PromoSection />
          <TestimonialSection />
        </main>
        
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;