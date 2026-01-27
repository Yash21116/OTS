import React from 'react';
import { allServices } from "@/data/services";
import { ArrowRight } from "lucide-react";

const ServiceGrid = ({ currentSlug }) => {
  // Filter out the current page and take the first 4 other services
  const otherServices = Object.keys(allServices)
    .filter(slug => slug !== currentSlug)
    .slice(0, 8);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black italic uppercase text-slate-900 tracking-tight">
              Other Expert Services
            </h2>
            <p className="text-slate-500 font-medium italic">Professional roadside assistance available 24/7</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((slug) => {
            const item = allServices[slug];
            return (
              <a 
                key={slug} 
                href={`/services/${slug}`}
                className="group bg-white border border-slate-200 p-8 rounded-2xl hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 transition-all"
              >
                <h3 className="text-xl font-black italic uppercase text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-black italic uppercase text-xs tracking-widest">
                  View Service <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;