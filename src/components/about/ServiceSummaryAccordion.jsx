"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ServiceSummaryAccordion = () => {
  // 1. State to track the active index
  const [activeIndex, setActiveIndex] = useState(null);

  const summaries = [
    { 
      title: "Roadside Assistance", 
      content: "Comprehensive support for tire changes, lockouts, and minor mechanical issues. Our technicians are equipped with specialized tools to get you back on the road without needing a tow whenever possible." 
    },
    { 
      title: "Jump Start", 
      content: "Professional 12V and 24V battery boosting for all vehicle types including EVs and heavy-duty trucks. We use safe-start technology to protect your vehicle's sensitive electronics." 
    },
    { 
      title: "Out of Gas Service", 
      content: "Emergency fuel delivery of gas or diesel directly to your highway or residential location. We provide enough fuel to get you to the nearest service station safely." 
    },
    { 
      title: "24 Hour Towing Service", 
      content: "Light, medium, and heavy-duty towing available 365 days a year across the capital region. Our dispatchers are on standby 24/7 to ensure the fastest response times in Ottawa." 
    },
    { 
      title: "Specialty Towing Services", 
      content: "Damage-free flatbed transport for luxury, lowered, and classic cars. We utilize specialized strapping and loading techniques to ensure your high-value vehicle remains pristine." 
    },
    { 
      title: "Heavy Towing Services", 
      content: "Industrial recovery for trucks, buses, and heavy machinery. Our heavy-duty wreckers are capable of uprighting overturned vehicles and long-distance commercial hauling." 
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black italic uppercase text-slate-950 mb-4 tracking-tighter">
            Towing Services in Ottawa, ON
          </h2>
          <p className="text-slate-500 font-medium">
            Ottawa Towing Solutions is operated by a team of experienced roadside assistance professionals. 
            Click on any of our <span className="text-red-600 font-bold">services</span> below to learn more.
          </p>
        </div>
        
        <div className="border-t border-slate-100">
          {summaries.map((s, i) => (
            <div key={i} className="border-b border-slate-100">
              <button 
                onClick={() => toggleAccordion(i)}
                className="w-full flex justify-between items-center py-7 text-left hover:bg-slate-50/50 px-4 transition-all group"
              >
                <span className={`text-xl font-black italic uppercase tracking-tight transition-colors ${activeIndex === i ? 'text-red-600' : 'text-slate-800'}`}>
                  {s.title}
                </span>
                <div className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                  {activeIndex === i ? (
                    <Minus className="text-red-600" size={28} />
                  ) : (
                    <Plus className="text-red-600" size={28} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-8 text-lg text-slate-600 leading-relaxed font-medium">
                      {s.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSummaryAccordion;