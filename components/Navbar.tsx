
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-slate-900">
        <path d="M20,30 L45,30 L80,70 L55,70 Z M20,70 L45,70 L32.5,50 Z" />
        <path d="M80,30 L55,30 L67.5,50 Z" opacity="0.8" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tighter text-slate-900 leading-none serif-heading">TECHLINE</span>
      <div className="flex items-center gap-1">
        <div className="h-[1px] flex-1 bg-slate-300"></div>
        <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">STUDIO</span>
        <div className="h-[1px] flex-1 bg-slate-300"></div>
      </div>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Programs', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.to} className="text-sm text-slate-600 hover:text-blue-600 font-semibold tracking-wide transition-colors uppercase">
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-100">
              Enroll Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 px-4 space-y-4 animate-fade-in-up shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} onClick={() => setIsOpen(false)} className="block text-lg text-slate-600 font-bold hover:text-blue-600">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-center text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100">
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
