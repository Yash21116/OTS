import React from 'react';
import { Phone, Menu, Navigation } from 'lucide-react';

const Navbar = () => {
  const phoneNumber = "548-388-4586";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-100 z-50">
      {/* The container below uses 'flex' and 'flex-row' (default) 
          to keep items side-by-side. 
      */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 rounded text-amber-500">
            <Navigation size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-xl font-black tracking-tighter italic">
              OTTAWA<span className="text-amber-600">TOWING</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">
              SOLUTIONS
            </span>
          </div>
        </div>

        {/* DESKTOP LINKS - Stays horizontal via 'flex' */}
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          <a href="#services" className="hover:text-amber-600 transition text-sm uppercase tracking-wide">Services</a>
          {/* <a href="#about" className="hover:text-amber-600 transition text-sm uppercase tracking-wide">About</a> */}
          <a href="#reviews" className="hover:text-amber-600 transition text-sm uppercase tracking-wide">Reviews</a>
          
          {/* PHONE BUTTON */}
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-amber-600 transition shadow-lg shadow-slate-200"
          >
            <Phone size={18} fill="currentColor" className="text-amber-500" />
            <span>{phoneNumber}</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER - Only shows on small screens */}
        <button className="md:hidden p-2 text-slate-900">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;