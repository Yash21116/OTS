"use client";
import React, { useState } from 'react';
import reviewsData from '@/data/reviews.json';
import { Star } from 'lucide-react';

/* 📌 FINALIZATION NOTE: 
  Before launch, replace the 'reviewsData' import with a dynamic fetch 
  from the Google Places API for 'Ottawa Towing Solutions'.
*/

const VerifiedBadge = () => (
  <div className="bg-[#4285F4] rounded-full p-[1px] ml-1 flex items-center justify-center shadow-sm shrink-0">
    <svg 
      viewBox="0 0 24 24" 
      className="w-2.5 h-2.5 text-white fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  </div>
);

const ReviewsWall = () => {
  // Logic: Initial 3 reviews, load 3 more on each click
  const [visibleCount, setVisibleCount] = useState(3);
  
  const showMoreReviews = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="py-12 md:py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black italic uppercase text-slate-900 mb-2 tracking-tighter">
            Customer <span className="text-red-600">Reviews</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
            Real feedback from the Ottawa Community
          </p>
        </div>

        {/* Compact Grid slicing based on visibleCount */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviewsData.slice(0, visibleCount).map((review) => (
            <div 
              key={review.id} 
              className="break-inside-avoid bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 ${review.color}`}>
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-black italic uppercase text-slate-900 leading-none mb-1 text-[13px] truncate">
                      {review.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] font-bold" title={review.exactDate}>
                      {review.timeLabel}
                    </p>
                  </div>
                </div>
                <img src="/images/google-g-logo.png" className="w-3.5 h-3.5 grayscale group-hover:grayscale-0 transition-all shrink-0" alt="Google" />
              </div>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" stroke="none" />
                  ))}
                </div>
                {review.verified && <VerifiedBadge />}
              </div>

              <p className="text-slate-700 text-[13px] leading-snug font-medium italic mb-3">
                "{review.text}"
              </p>
              
              <div className="pt-3 border-t border-slate-50 flex justify-between items-center">
                <button className="text-slate-400 font-black italic uppercase text-[8px] tracking-wider hover:text-red-600 transition-colors">
                  READ MORE
                </button>
                <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Functional Load More Button */}
        {visibleCount < reviewsData.length && (
          <div className="mt-10 text-center">
            <button 
              onClick={showMoreReviews}
              className="bg-slate-200 hover:bg-red-600 hover:text-white text-slate-600 px-8 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-sm"
            >
              Load more reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsWall;