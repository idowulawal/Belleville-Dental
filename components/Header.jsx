import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitorCount') || '1240');
    const newCount = count + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);
  }, []);

  const navItems = [
    { label: 'Professional Education', path: '/professional-education' },
    { label: 'Patient Education', path: '/patient-education' },
    { label: 'Research', path: '/research' },
    { label: 'Products', path: '/products' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Site Map', path: '/sitemap' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white">
              <i className="fas fa-tooth text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">Belleville</h1>
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest">Dental Care</span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <span className="block text-[10px] uppercase text-slate-400 font-bold tracking-tighter">Total Visitors</span>
              <span className="text-lg font-mono font-bold text-slate-800 tracking-wider">
                {visitorCount.toLocaleString().padStart(6, '0')}
              </span>
            </div>
            <button 
              className="md:hidden text-slate-600 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        <nav className="hidden md:block py-2">
          <ul className="flex justify-between items-center text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md transition-all duration-200 hover:text-sky-600 hover:bg-sky-50 ${
                      isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden absolute right-4 top-6 text-slate-600 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 absolute w-full left-0 fade-in shadow-xl">
            <ul className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => 
                      `block px-4 py-3 rounded-md font-medium ${
                        isActive ? 'text-sky-600 bg-sky-50' : 'text-slate-600'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
