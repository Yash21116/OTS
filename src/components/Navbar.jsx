import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Navigation } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "548-388-4586";

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/40 backdrop-blur-md border-b border-white/5 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-1.5 rounded text-slate-900">
            <Navigation size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-xl font-black tracking-tighter italic text-white">
              OTTAWA<span className="text-amber-500">TOWING</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">
              SOLUTIONS
            </span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-amber-500 transition text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center gap-2 bg-amber-500 text-slate-900 px-5 py-2.5 rounded-xl hover:bg-white transition shadow-lg shadow-amber-500/10 font-black italic uppercase text-sm"
          >
            <Phone size={18} fill="currentColor" />
            <span>{phoneNumber}</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-amber-500 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                  className="text-2xl font-black italic uppercase tracking-tighter text-white hover:text-amber-500"
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-amber-500 text-slate-900 w-full py-4 rounded-xl font-black italic uppercase text-center text-xl flex items-center justify-center gap-3"
              >
                <Phone size={24} fill="currentColor" />
                {phoneNumber}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;