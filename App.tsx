
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const FooterLogo = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-3 mb-2">
      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current text-white">
        <path d="M20,30 L45,30 L80,70 L55,70 Z M20,70 L45,70 L32.5,50 Z" />
        <path d="M80,30 L55,30 L67.5,50 Z" opacity="0.8" />
      </svg>
      <span className="text-xl font-bold tracking-tighter text-white serif-heading">TECHLINE STUDIO</span>
    </div>
    <div className="w-full flex items-center gap-1 opacity-40">
      <div className="h-[1px] flex-1 bg-white"></div>
      <span className="text-[8px] font-bold text-white tracking-[0.4em] uppercase">Pioneering Tech</span>
      <div className="h-[1px] flex-1 bg-white"></div>
    </div>
  </div>
);

const Footer: React.FC = () => (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
            <FooterLogo />
            <p className="max-w-xl mx-auto text-lg leading-relaxed text-slate-500">
                A premium learning center dedicated to preparing the next generation for the challenges and opportunities of the AI era.
            </p>
            <div className="flex flex-wrap justify-center gap-10 pt-4">
                <Link to="/" className="hover:text-blue-500 transition-colors font-bold uppercase tracking-widest text-xs">Home</Link>
                <Link to="/about" className="hover:text-blue-500 transition-colors font-bold uppercase tracking-widest text-xs">Programs</Link>
                <Link to="/contact" className="hover:text-blue-500 transition-colors font-bold uppercase tracking-widest text-xs">Enroll</Link>
                <a href="mailto:contact@rebrainsolutions.in" className="hover:text-blue-500 transition-colors font-bold uppercase tracking-widest text-xs">Email</a>
            </div>
            <div className="pt-12 border-t border-slate-900 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
                © {new Date().getFullYear()} TECHLINE STUDIO ACADEMY. Ambikapur, Chhattisgarh.
            </div>
        </div>
    </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
