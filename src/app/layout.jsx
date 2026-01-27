import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import {Phone} from 'lucide-react';
import ServiceAreaWall from "@/components/about/ServiceAreaWall";
const inter = Inter({ subsets: ["latin"] });

// src/app/layout.jsx
export const metadata = {
  title: {
    default: "Ottawa Towing Solutions | 24/7 Professional Roadside Help",
    template: "%s | Ottawa Towing Solutions" // Adds branding to every sub-page title
  },
  description: "Ottawa's fastest towing service. 15-30 min response time for emergency towing, battery boosts, and lockouts.",
  keywords: ["Towing Ottawa", "Roadside Assistance Ottawa", "Tow Truck Near Me"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <ServiceAreaWall />
        <Footer />
        {/* GLOBAL STICKY MOBILE CALL BUTTON */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-[50] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
          <a 
            href="tel:548-388-4586" 
            className="flex items-center justify-center gap-3 bg-red-600 text-white w-full py-4 rounded-2xl font-black italic uppercase text-xl shadow-2xl shadow-red-600/40 animate-pulse"
          >
            <Phone size={24} fill="currentColor" />
            CALL 548-388-4586
          </a>
        </div>
      </body>
    </html>
  );
}