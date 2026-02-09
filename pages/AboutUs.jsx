import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 fade-in">
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <div className="lg:w-1/2">
          <img 
            src="https://images.pexels.com/photos/7640434/pexels-photo-7640434.jpeg" 
            alt="Team" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Pioneering Better Smiles Since 1994.</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Belleville Dental was founded with a single mission: to bridge the gap between complex 
            dental science and everyday oral care. We believe that everyone deserves access to 
            expert knowledge and high-quality dental tools.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sky-600 font-bold text-3xl mb-1">30+</h4>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-sky-600 font-bold text-3xl mb-1">500+</h4>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Research Papers</p>
            </div>
            <div>
              <h4 className="text-sky-600 font-bold text-3xl mb-1">12k</h4>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Certified Students</p>
            </div>
            <div>
              <h4 className="text-sky-600 font-bold text-3xl mb-1">2M</h4>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-sky-600 p-16 rounded-3xl text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Our Core Philosophy</h3>
        <p className="text-sky-100 max-w-3xl mx-auto text-xl italic leading-relaxed">
          "Dentistry is not just about fixing teeth; it's about restoring confidence and improving overall systemic health through education and innovation."
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
