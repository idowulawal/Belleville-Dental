import { ProductCategory } from './types.js';

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Belleville Pro-White',
    category: ProductCategory.TOOTHPASTE,
    price: 12.99,
    rating: 4.8,
    reviewCount: 156,
    description: 'Advanced whitening formula with hydroxyapatite.',
    image: 'https://images.pexels.com/photos/34024977/pexels-photo-34024977.jpeg'
  },
  {
    id: 'p2',
    name: 'Bamboo Eco-Brush',
    category: ProductCategory.BRUSHES,
    price: 5.49,
    rating: 4.5,
    reviewCount: 89,
    description: '100% biodegradable handle with charcoal bristles.',
    image: 'https://images.pexels.com/photos/6187566/pexels-photo-6187566.jpeg'
  },
  {
    id: 'p3',
    name: 'Junior Sparkle Grapes',
    category: ProductCategory.KIDS,
    price: 8.99,
    rating: 4.9,
    reviewCount: 42,
    description: 'Fluoride-free gentle paste for ages 2-6.',
    image: 'https://images.pexels.com/photos/12065623/pexels-photo-12065623.jpeg'
  },
  {
    id: 'p4',
    name: 'Sonic-X Electric Head',
    category: ProductCategory.ELECTRIC,
    price: 24.99,
    rating: 4.7,
    reviewCount: 210,
    description: 'Replacement heads for Sonic-X series.',
    image: 'https://images.pexels.com/photos/6501917/pexels-photo-6501917.jpeg'
  },
  {
    id: 'p5',
    name: 'Gum Shield Sensitive',
    category: ProductCategory.TOOTHPASTE,
    price: 10.99,
    rating: 4.6,
    reviewCount: 112,
    description: 'Extra relief for sensitive teeth and gums.',
    image: 'https://images.pexels.com/photos/15499663/pexels-photo-15499663.jpeg'
  }
];

export const COURSES = [
  {
    id: 'c1',
    title: 'Modern Endodontics 101',
    category: 'Postgrad',
    duration: '12 Weeks',
    description: 'Comprehensive study of root canal treatments using 3D imaging.'
  },
  {
    id: 'c2',
    title: 'Pediatric Patient Management',
    category: 'Student',
    duration: '4 Weeks',
    description: 'Developing soft skills for treating young patients.'
  }
];

export const RESEARCH = [
  {
    id: 'r1',
    title: 'Nanotechnology in Dental Materials',
    author: 'Dr. Sarah Smith',
    date: '2024-03-15',
    abstract: 'Exploring the impact of nano-fillers in composite resins.',
    mediaType: 'Article'
  },
  {
    id: 'r2',
    title: 'Advancements in Oral Microbiome Research',
    author: 'Belleville Research Group',
    date: '2024-05-20',
    abstract: 'Comprehensive video analysis of biofilm formation.',
    mediaType: 'Video'
  }
];
