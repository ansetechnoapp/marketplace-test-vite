import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showCount = false,
  count,
}) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => {
          const starValue = i + 1;
          return (
            <Star
              key={i}
              className={`${sizes[size]} ${
                starValue <= rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : starValue <= rating + 0.5
                  ? 'text-yellow-400 fill-yellow-400 opacity-50'
                  : 'text-gray-300'
              }`}
            />
          );
        })}
      </div>
      
      {showCount && count !== undefined && (
        <span className={`ml-1.5 ${textSizes[size]} text-gray-600`}>
          ({count})
        </span>
      )}
    </div>
  );
};

export default StarRating;