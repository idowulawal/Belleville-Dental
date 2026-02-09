import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[650px] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Dental Operatory" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center space-x-2 bg-sky-600/20 backdrop-blur-md border border-sky-500/30 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-sky-400">
                Pioneering Dental Innovation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Advancing the <br />
              <span className="text-sky-400">Future</span> of Oral Care
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
              Belleville Dental serves as a global hub for academic research, professional development, and advanced patient preventive care.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/products" 
                className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-sky-900/20 transform hover:-translate-y-1 active:scale-95"
              >
                Shop Pro Products
              </Link>
              <Link 
                to="/professional-education" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Academic Portal
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Core Ecosystem</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
              We integrate clinical practice with academic rigor to deliver a comprehensive approach to oral health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-sky-100 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 text-2xl mb-8 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Professional Growth</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Access accredited CE courses, clinical documentation, and faculty resources designed for continuous clinical excellence.</p>
              <Link to="/professional-education" className="inline-flex items-center text-sky-600 font-bold hover:space-x-4 transition-all">
                <span>Explore Faculty Resources</span>
                <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-white bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-sky-100 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Patient Well-being</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Evidence-based patient tips, preventive care manuals, and simplified guides for managing complex oral conditions.</p>
              <Link to="/patient-education" className="inline-flex items-center text-emerald-600 font-bold hover:space-x-4 transition-all">
                <span>Patient Knowledge Hub</span>
                <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-white bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:shadow-sky-100 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Scientific Research</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">Stay informed with cutting-edge peer-reviewed articles, high-definition video case studies, and ongoing trials.</p>
              <Link to="/research" className="inline-flex items-center text-purple-600 font-bold hover:space-x-4 transition-all">
                <span>Access the Library</span>
                <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
