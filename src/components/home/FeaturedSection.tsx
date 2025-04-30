import React from 'react';
import { Product } from '../../types';
import ProductGrid from '../product/ProductGrid';

interface FeaturedSectionProps {
  products: Product[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ products }) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ProductGrid 
          products={products} 
          title="Featured Products" 
          subtitle="Handpicked by our experts for exceptional quality and value" 
        />
      </div>
    </div>
  );
};

export default FeaturedSection;