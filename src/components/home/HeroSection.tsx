import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 pt-16">
      {/* Background image */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5872347/pexels-photo-5872347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4'
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Discover Quality Products For Your Lifestyle
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Explore our curated collection of premium products from trusted sellers around the world.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button size="lg">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-white fill-current">
          <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,88C1200,80,1320,64,1380,56L1440,48L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;