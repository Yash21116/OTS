import React from 'react';
import { Phone, Mail, MapPin, Navigation, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "548-388-4586";

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded text-slate-950">
                <Navigation size={24} fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter italic">
                  OTTAWA<span className="text-amber-500">TOWING</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">
                  Solutions
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ottawa's premier 24/7 towing and roadside assistance provider. 
              Professional, insured, and dedicated to getting you back on 
              the road safely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Services</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Towing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Flatbed Transport</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Roadside Assistance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Battery Boost & Tires</a></li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-amber-500">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-amber-500 shrink-0" />
                <a href={`tel:${phoneNumber}`} className="text-slate-300 font-bold hover:text-white">{phoneNumber}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-amber-500 shrink-0" />
                <span className="text-slate-300">service@ottawatowing.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-500 shrink-0" />
                <span className="text-slate-300">Serving Ottawa, Nepean, Kanata & Orleans</span>
              </li>
            </ul>
          </div>

          {/* 4. AVAILABILITY */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="text-amber-500" size={20} />
              HOURS
            </h4>
            <p className="text-3xl font-black text-white italic mb-2">24/7</p>
            <p className="text-slate-400 text-sm">Open 365 Days a Year including Holidays.</p>
            <div className="mt-6 flex items-center gap-2 text-green-500 font-bold text-xs uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Live Dispatch Active
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>© 2026 Ottawa Towing Solutions. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;