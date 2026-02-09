import React from 'react';

const SiteMap = () => {
  return (
    <div className="container mx-auto px-4 fade-in">
      <h2 className="text-4xl font-bold text-slate-900 mb-6">Site Map</h2>
      <ul className="text-slate-600 list-disc pl-6">
        <li><a href="#/">Home</a></li>
        <li><a href="#/professional-education">Professional Education</a></li>
        <li><a href="#/patient-education">Patient Education</a></li>
        <li><a href="#/research">Research</a></li>
        <li><a href="#/products">Products</a></li>
        <li><a href="#/gallery">Gallery</a></li>
        <li><a href="#/sitemap">Site Map</a></li>
        <li><a href="#/about-us">About Us</a></li>
        <li><a href="#/contact-us">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default SiteMap;
