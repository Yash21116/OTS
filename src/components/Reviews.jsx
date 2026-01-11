import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Moe Nazali",
    date: "2025-04-12",
    rating: 5,
    text: "Great service I was broken down in the west end of Ottawa and they showed up within 15 mins of calling them and was the cheapest and fastest after calling about 10 companies.",
    source: "Google"
  },
  {
    name: "Sarah Jenkins",
    date: "2025-05-20",
    rating: 5,
    text: "Locked my keys in the car at the Rideau Centre. They arrived faster than the app estimated. Very professional and friendly service!",
    source: "Google"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="w-full bg-black overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* LEFT SIDE: Visual Brand Proof */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2000" 
            alt="Customer using phone" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
          
          {/* Floating Rating Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col items-center">
              <div className="flex gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={32} />)}
              </div>
              <p className="text-white font-black text-2xl italic tracking-tighter">EXCELLENT SERVICE</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Carousel */}
        <div className="lg:w-1/2 bg-black flex flex-col justify-center p-12 lg:p-24 relative">
          <div className="max-w-xl mx-auto w-full text-center">
            <h2 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-12">
              What Our <span className="text-amber-500">Clients Say...</span>
            </h2>

            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* User Profile Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 border-2 border-white/20">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <span className="text-slate-500 text-sm">{testimonials[currentIndex].date}</span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 text-amber-500">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-300 text-lg leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevReview}
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-white/50 hover:text-amber-500 transition-colors"
              >
                <ChevronLeft size={48} />
              </button>
              <button 
                onClick={nextReview}
                className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-white/50 hover:text-amber-500 transition-colors"
              >
                <ChevronRight size={48} />
              </button>
            </div>

            {/* Google Rating Score Footer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white text-sm font-bold uppercase tracking-widest">
                Google <span className="text-slate-400">rating score:</span> <span className="text-amber-500">4.4</span> of 5, based on 34 reviews
              </p>
              
              <button className="mt-8 group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black uppercase transition-all hover:bg-amber-500">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                Leave us a Review!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;