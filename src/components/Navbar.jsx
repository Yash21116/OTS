"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Navigation, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null); // Added for desktop hover
  const phoneNumber = "548-388-4586";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuStructure = [
    {
      label: "Roadside Assistance",
      links: [
        { name: "24 Hour Towing", slug: "24-hour-towing-ottawa", isService: true },
        { name: "Battery Jump Start", slug: "battery-jump-start-ottawa", isService: true },
        { name: "Out-of-Gas Service", slug: "out-of-gas-ottawa", isService: true },
      ]
    },
    {
      label: "Accident & Collision",
      links: [
        { name: "Electric Car Towing", slug: "electric-car-towing-ottawa", isService: true },
        { name: "Flatbed Towing", slug: "flatbed-towing-ottawa", isService: true },
        { name: "Heavy Duty Towing", slug: "heavy-duty-towing-ottawa", isService: true },
        { name: "Motorcycle Towing", slug: "motorcycle-towing-ottawa", isService: true },
        { name: "Winching Service", slug: "winching-service-ottawa", isService: true },
      ]
    },
    {
      label: "Specialty Towing",
      links: [
        { name: "Corporate Towing", slug: "corporate-towing-ottawa", isService: true },
        { name: "Long-Distance Towing", slug: "long-distance-towing-ottawa", isService: true },
        { name: "Private Towing Service", slug: "private-towing-ottawa", isService: true },
        { name: "Vehicle Storage", slug: "vehicle-storage-ottawa", isService: true },
      ]
    },
    {
      label: "Our Company",
      links: [
        { name: "About Us", slug: "about-us", isService: false },
        { name: "Reviews", slug: "reviews", isService: false },
        { name: "Fleet", slug: "fleet", isService: false },
        { name: "FAQs", slug: "faqs", isService: false },
      ]
    }
  ];

  const toggleSection = (label) => {
    setActiveMobileSection(activeMobileSection === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/5 z-[100]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <div className="bg-amber-500 p-1.5 rounded text-slate-900">
            <Navigation size={22} fill="currentColor" />
          </div>
          <div className="flex flex-col leading-none uppercase">
            <span className="text-xl font-black italic text-white tracking-tighter">
              OTTAWA<span className="text-amber-500">TOWING</span>
            </span>
            <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em]">SOLUTIONS</span>
          </div>
        </a>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-white hover:text-amber-500 transition-colors"
        >
          <Menu size={32} />
        </button>

        {/* RESTORED DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {menuStructure.map((group) => (
            <div 
              key={group.label}
              className="relative py-6"
              onMouseEnter={() => setActiveDesktopDropdown(group.label)}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-amber-500 transition-colors">
                {group.label} 
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDesktopDropdown === group.label ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDesktopDropdown === group.label && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-slate-900 border border-white/10 rounded-xl p-3 shadow-2xl"
                  >
                    {group.links.map((link) => (
                      <a 
                        key={link.slug} 
                        href={link.isService ? `/services/${link.slug}` : `/${link.slug}`}
                        className="block px-4 py-2 text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      >
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <a href={`tel:${phoneNumber}`} className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded-xl font-black italic uppercase text-sm flex items-center gap-2 hover:bg-white transition-colors">
            <Phone size={18} fill="currentColor" /> {phoneNumber}
          </a>
        </div>
      </div>

      {/* FULLSCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col w-full h-screen"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/5 shrink-0">
              <span className="text-xl font-black italic text-white uppercase">
                OTTAWA<span className="text-amber-500">TOWING</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-32 flex flex-col gap-4">
              {menuStructure.map((group) => (
                <div key={group.label} className="border-b border-white/5 pb-4">
                  <button 
                    onClick={() => toggleSection(group.label)}
                    className="w-full flex items-center justify-between text-2xl font-black italic uppercase text-white py-2"
                  >
                    {group.label}
                    <ChevronDown 
                      size={24} 
                      className={`text-amber-500 transition-transform ${activeMobileSection === group.label ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeMobileSection === group.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-4 pl-4 pt-4"
                      >
                        {group.links.map((link) => (
                          <a 
                            key={link.slug}
                            href={link.isService ? `/services/${link.slug}` : `/${link.slug}`}
                            className="text-lg font-bold text-slate-400 active:text-amber-500 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;