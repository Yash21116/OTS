"use client";
import React, { useState } from 'react';
import faqData from '@/data/faqs.json';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  // Track open state for each FAQ independently
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = [
    { key: 'roadsideAssistance', label: 'Roadside Assistance' },
    { key: 'accidentCollision', label: 'Accident & Collision' },
    { key: 'specialtyTowing', label: 'Specialty Towing' }
  ];

  return (
    <main className="bg-white min-h-screen mt-20">
      {/* 1. Hero Section */}
      <section className="bg-slate-950 py-20 text-center border-b border-red-600/20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-4 tracking-tighter">
            FAQ <span className="text-red-600">Hub</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            National Capital Region • 24/7 Support
          </p>
        </div>
      </section>

      {/* 2. Categorized FAQ List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {categories.map((cat, catIdx) => (
            <div key={cat.key} className={catIdx !== 0 ? "mt-24" : ""}>
              {/* Categorized Header */}
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-black italic uppercase text-slate-900 tracking-tight shrink-0">
                  {cat.label}
                </h2>
                <div className="h-1 flex-1 bg-slate-100 rounded-full" />
              </div>

              {/* Bespoke FAQ Items */}
              <div className="space-y-4">
                {faqData[cat.key].map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className={`transition-all duration-300 rounded-[2rem] border ${
                        isOpen ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <button 
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <HelpCircle className={`shrink-0 transition-colors ${isOpen ? 'text-red-600' : 'text-slate-300'}`} size={20} />
                          <span className={`text-lg md:text-xl font-bold italic uppercase tracking-tight transition-colors ${
                            isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                          }`}>
                            {faq.question}
                          </span>
                        </div>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-8 pb-8 md:px-14 md:pb-10">
                          <p className="text-slate-600 text-lg leading-relaxed font-medium border-l-2 border-red-600/30 pl-6 italic">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Emergency Support CTA */}
          <div className="mt-24 bg-slate-950 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full" />
            <p className="text-red-600 font-black italic uppercase tracking-widest text-sm mb-4">Immediate Assistance</p>
            <h3 className="text-3xl md:text-4xl font-black italic uppercase mb-8 leading-tight">
              Still have questions <br />about your tow?
            </h3>
            <a 
              href="tel:548-388-4586" 
              className="inline-flex items-center gap-4 bg-red-600 text-white px-12 py-5 rounded-2xl font-black italic uppercase text-xl hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-red-600/20"
            >
              Call 548-388-4586
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}