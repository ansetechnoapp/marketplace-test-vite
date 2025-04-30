import React from 'react';
import StarRating from '../ui/StarRating';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Fashion Designer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'The quality of products on MarketPlace is exceptional. I\'ve been shopping here for years and have never been disappointed. The customer service is also top-notch!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mark Williams',
    role: 'Software Engineer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'Fast shipping, great prices, and an incredible selection. The website is also very easy to navigate. Definitely my go-to for online shopping.',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Jessica Chen',
    role: 'Marketing Director',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'I appreciate the attention to detail in product descriptions and images. It makes online shopping much more reliable. Their return policy is also very fair.',
    rating: 5
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Thousands of satisfied customers trust MarketPlace for their shopping needs. Here's what some of them have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <StarRating rating={testimonial.rating} size="md" />
              
              <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;