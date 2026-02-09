import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/4269689/pexels-photo-4269689.jpeg',
    'https://images.pexels.com/photos/3845984/pexels-photo-3845984.jpeg',
    'https://images.pexels.com/photos/3952132/pexels-photo-3952132.jpeg',
    'https://images.pexels.com/photos/4269690/pexels-photo-4269690.jpeg',
    'https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg',
    'https://images.pexels.com/photos/3845954/pexels-photo-3845954.jpeg',
    'https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg',
    'https://images.pexels.com/photos/6502308/pexels-photo-6502308.jpeg',
    'https://images.pexels.com/photos/6529120/pexels-photo-6529120.jpeg',
    'https://images.pexels.com/photos/6627534/pexels-photo-6627534.jpeg',
    'https://images.pexels.com/photos/4269372/pexels-photo-4269372.jpeg',
    'https://images.pexels.com/photos/6502345/pexels-photo-6502345.jpeg',
  ];

  return (
    <div className="container mx-auto px-4 fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Gallery</h2>
        <p className="text-slate-500 mt-2">A collection of our facilities, events, and case highlights.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-sm">
            <img src={src} alt={`Gallery ${idx}`} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
