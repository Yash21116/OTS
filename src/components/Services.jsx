import React from 'react';
import { Truck, Car, Battery, Lock, Zap, Construction } from 'lucide-react';

const services = [
  {
    title: "Light Duty Towing",
    desc: "Reliable transport for cars and SUVs across the Ottawa region using damage-free flatbeds.",
    icon: <Truck size={32} />,
  },
  {
    title: "Emergency Roadside",
    desc: "24/7 assistance for stalled vehicles. We maintain rapid response times in the downtown core and suburbs.",
    icon: <Zap size={32} />,
  },
  {
    title: "Battery Boost",
    desc: "Winter in Ottawa can be brutal on batteries. We offer professional boosts to get you moving fast.",
    icon: <Battery size={32} />,
  },
  {
    title: "Lockout Service",
    desc: "Fast, non-destructive vehicle entry if you've locked your keys inside your car or trunk.",
    icon: <Lock size={32} />,
  },
  {
    title: "Fuel Delivery",
    desc: "Ran out of gas on the 417? We deliver fuel directly to your location anywhere in Ottawa.",
    icon: <Car size={32} />,
  },
  {
    title: "Winching & Recovery",
    desc: "Expert recovery services for vehicles stuck in snow, mud, or ditches following Ottawa's heavy storms.",
    icon: <Construction size={32} />,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter mb-4 leading-none">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div className="h-2 w-24 bg-amber-500 rounded-full mb-6" />
          <p className="text-slate-600 font-medium text-lg">
            Ottawa Towing Solutions provides professional, damage-free towing and roadside assistance 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-slate-900 transition-all duration-500 cursor-default shadow-sm hover:shadow-2xl hover:shadow-slate-200"
            >
              <div className="mb-6 text-amber-500 group-hover:text-white transition-colors duration-500 group-hover:scale-110 origin-left transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-4 uppercase italic tracking-tight transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed transition-colors duration-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;