import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '2',
    name: 'Clothing',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '3',
    name: 'Home & Kitchen',
    image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '4',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '5',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: '6',
    name: 'Beauty',
    image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'Experience unparalleled sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and luxurious memory foam ear cushions.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.7,
      count: 128
    },
    seller: {
      id: '101',
      name: 'AudioElite',
      rating: 4.9
    }
  },
  {
    id: '2',
    title: 'Minimalist Watch',
    price: 149.99,
    description: 'A sleek, minimalist timepiece with premium materials and Swiss movement. Water-resistant up to 50 meters with a genuine leather strap.',
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.5,
      count: 89
    },
    seller: {
      id: '102',
      name: 'TimePiece Co.',
      rating: 4.7
    }
  },
  {
    id: '3',
    title: 'Smart Coffee Maker',
    price: 129.99,
    description: 'Schedule your perfect cup of coffee from anywhere with our smartphone-controlled coffee maker. Features customizable strength and temperature settings.',
    category: 'Home & Kitchen',
    image: 'https://images.pexels.com/photos/4350201/pexels-photo-4350201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.2,
      count: 76
    },
    seller: {
      id: '103',
      name: 'SmartHome Gadgets',
      rating: 4.4
    }
  },
  {
    id: '4',
    title: 'Modern Side Table',
    price: 79.99,
    description: 'Add elegance to any room with our modern side table. Crafted from sustainable materials with a sleek, minimalist design.',
    category: 'Home & Kitchen',
    image: 'https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.8,
      count: 52
    },
    seller: {
      id: '104',
      name: 'ModernLiving',
      rating: 4.7
    }
  },
  {
    id: '5',
    title: 'Premium Yoga Mat',
    price: 59.99,
    description: 'Elevate your practice with our eco-friendly, non-slip yoga mat. Optimal cushioning and alignment markers for perfect form.',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/4427507/pexels-photo-4427507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.6,
      count: 105
    },
    seller: {
      id: '105',
      name: 'ZenFitness',
      rating: 4.8
    }
  },
  {
    id: '6',
    title: 'Bestselling Business Book',
    price: 24.99,
    description: 'Transform your approach to business with this groundbreaking bestseller. Packed with actionable strategies and real-world case studies.',
    category: 'Books',
    image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.9,
      count: 215
    },
    seller: {
      id: '106',
      name: 'Knowledge Press',
      rating: 4.9
    }
  },
  {
    id: '7',
    title: 'Organic Skincare Set',
    price: 89.99,
    description: 'Revitalize your skin with our all-natural, organic skincare collection. Includes cleanser, toner, serum, and moisturizer made from premium botanicals.',
    category: 'Beauty',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.7,
      count: 83
    },
    seller: {
      id: '107',
      name: 'Pure Glow Organics',
      rating: 4.6
    }
  },
  {
    id: '8',
    title: 'Wireless Charging Pad',
    price: 39.99,
    description: 'Charge multiple devices simultaneously with our sleek, fast-charging wireless pad. Compatible with all Qi-enabled devices.',
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/4526461/pexels-photo-4526461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rating: {
      rate: 4.4,
      count: 97
    },
    seller: {
      id: '108',
      name: 'TechNow',
      rating: 4.5
    }
  }
];

export const featuredProducts = products.slice(0, 4);