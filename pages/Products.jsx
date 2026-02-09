import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants.js';
import { ProductCategory } from '../types.js';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ratings, setRatings] = useState({});

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleRate = (productId, rating) => {
    setRatings(prev => ({ ...prev, [productId]: rating }));
    alert(`Thank you for rating this product ${rating} stars!`);
  };

  return (
    <div className="container mx-auto px-4 fade-in">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Our Products</h2>
          <p className="text-slate-500">Professional-grade oral care solutions for home use.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div className="relative overflow-hidden h-64">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-sky-600 border border-slate-100">
                {product.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-sky-600">${product.price}</span>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="font-bold text-slate-700">{product.rating}</span>
                  <span className="text-slate-400 text-xs">({product.reviewCount})</span>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Rate this product</p>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => handleRate(product.id, star)}
                      className={`text-lg transition-colors ${
                        (ratings[product.id] || 0) >= star ? 'text-yellow-400' : 'text-slate-200 hover:text-yellow-200'
                      }`}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    to={`/contact-us?product=${encodeURIComponent(product.name)}`}
                    className="inline-block w-full text-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-md transition-all"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <i className="fas fa-search text-4xl text-slate-200 mb-4"></i>
          <p className="text-slate-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
