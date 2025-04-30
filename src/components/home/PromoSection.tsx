import React from 'react';
import Button from '../ui/Button';

const PromoSection: React.FC = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-blue-800 bg-opacity-50 px-3 py-1 text-sm font-medium text-white rounded-full mb-4">
                Special Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Summer Sale <br />
                <span className="text-yellow-300">Up to 50% Off</span>
              </h2>
              <p className="text-blue-100 mb-8 max-w-md">
                Upgrade your style with our premium summer collection. Limited time offer on selected items.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg">
                  Shop Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  View Details
                </Button>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 relative">
              <div 
                className="h-64 lg:h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
                }}
              >
                <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;