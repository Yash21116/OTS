import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Logic: In a real app, you'd send data to an API here.
    // For now, we trigger the success UI:
    toast.success('Quote Request Sent! We will call you shortly.', {
      duration: 5000,
      style: {
        background: '#0f172a',
        color: '#fff',
        border: '1px solid #f59e0b',
        fontWeight: 'bold'
      },
      iconTheme: {
        primary: '#f59e0b',
        secondary: '#fff',
      },
    });

    onClose(); // Closes the modal
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-amber-500 p-6 text-slate-950 flex justify-between items-center">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Request a Quote</h2>
            <button onClick={onClose} className="hover:rotate-90 transition-transform">
              <X size={24} />
            </button>
          </div>

          {/* Added onSubmit handler here */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                <input required name="name" type="text" className="w-full p-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Phone</label>
                <input required name="phone" type="tel" className="w-full p-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" placeholder="613-555-0123" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500">Pickup Location</label>
              <input required name="location" type="text" className="w-full p-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" placeholder="e.g. ByWard Market" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-500">Service Needed</label>
              <select name="service" className="w-full p-3 bg-slate-100 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none appearance-none">
                <option>Emergency Towing</option>
                <option>Battery Boost</option>
                <option>Lockout</option>
                <option>Flat Tire</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-slate-950 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-slate-950 transition-all uppercase tracking-widest mt-4">
              Get My Estimate <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuoteModal;