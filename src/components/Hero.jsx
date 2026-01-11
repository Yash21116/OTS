import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import TT1 from '../assets/TT1.jpg';
import TT2 from '../assets/TT2.jpg';
const images = [
  TT1,TT2
  
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const phoneNumber = "548-388-4586";

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND SLIDESHOW LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* 2. THE OVERLAY LAYER (The "Secret Sauce") 
          Decreasing opacity from left to right to reveal the truck while keeping text legible.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      
      {/* Subtle bottom-to-top vignette to anchor the buttons */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

      {/* 3. CONTENT LAYER */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-48">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Status Badge @PROBLEMSOURCE */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-500 px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
              24/7 Emergency Response Available
            </span>
          </div>

          {/* Aggressive Branding Typography */}
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] mb-6 italic uppercase tracking-tighter drop-shadow-xl">
            Fast Towing <br />
            <span className="text-amber-500 italic">When You Need It Most.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl font-medium leading-relaxed drop-shadow-md">
            Stranded in Ottawa? Our professional fleet is <span className="text-white font-bold underline decoration-amber-500 decoration-2 underline-offset-4">15-30 minutes</span> away. Reliable, affordable, and ready to get you moving.
          </p>

          {/* Call to Action Group */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={`tel:${phoneNumber}`}
              className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-amber-500/20"
            >
              <Phone fill="currentColor" size={24} />
              CALL NOW
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-xl transition-all">
              Request a Quote
            </button>
          </div>

          {/* Mini Trust Bar */}
          <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="text-amber-500" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Fast Arrival</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Shield className="text-amber-500" size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Fully Insured</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SLIDE INDICATORS (Edge-aligned) */}
      <div className="absolute bottom-10 right-12 z-30 flex gap-3">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-12 bg-amber-500' : 'w-4 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;