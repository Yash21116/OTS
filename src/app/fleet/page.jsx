import React from 'react';
import fleetData from '@/data/fleet.json';
import { Truck, CheckCircle2 } from 'lucide-react';

export default function FleetPage() {
  const phoneNumber = "548-388-4586";

  return (
    <main className="bg-white">
      {/* 1. FOCUSED HERO IMAGE */}
      <section className="relative h-[65vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Using the generated Ottawa skyline image as the hero */}
        <img 
          src="/images/about-hero-trucks.png" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[20%]" 
          alt="Ottawa Towing Solutions Fleet Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black italic uppercase text-white tracking-tighter mb-6 leading-none">
              Our <span className="text-red-600">Pro</span> <br />Equipment
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-2xl border-l-4 border-red-600 pl-6">
              Modern recovery technology meeting Ottawa's toughest demands.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRID ARRAY */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {fleetData.map((truck) => (
              <div 
                key={truck.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={truck.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt={truck.name} 
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck size={16} className="text-red-600" />
                    <span className="text-red-600 font-black italic uppercase text-[10px] tracking-widest">
                      {truck.use}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black italic uppercase text-slate-900 mb-3 tracking-tighter">
                    {truck.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium italic">
                    {truck.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 pt-5 border-t border-slate-50">
                    {truck.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-slate-800">
                        <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                        <span className="font-bold text-[11px] uppercase tracking-tight">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Footer */}
          <div className="mt-20 text-center">
            <a 
              href={`tel:${phoneNumber}`} 
              className="inline-flex items-center gap-5 bg-red-600 text-white px-10 py-5 rounded-2xl font-black italic uppercase text-xl shadow-xl shadow-red-600/30 active:scale-95 transition-transform"
            >
              CALL {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}