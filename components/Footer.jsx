import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <i className="fas fa-tooth text-sky-500 text-xl"></i>
              <span className="text-xl font-bold">Belleville Dental</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering oral health through professional education, 
              clinical research, and high-quality patient care.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="text-sm space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-sky-500"></i>
                <span>123 Dental Plaza, Belleville, NY 10012, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-sky-500"></i>
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-sky-500"></i>
                <span>contact@bellevilledental.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#/professional-education" className="hover:text-white transition-colors">Professional Education</a></li>
              <li><a href="#/patient-education" className="hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="#/research" className="hover:text-white transition-colors">Research Library</a></li>
              <li><a href="#/products" className="hover:text-white transition-colors">Our Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs mb-4">Stay updated with the latest dental research and products.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-sky-500 text-white"
              />
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-r-md transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© 2024 Belleville Dental Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
