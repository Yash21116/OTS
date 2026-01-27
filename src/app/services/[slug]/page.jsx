import { allServices } from "@/data/services";
import ServiceGrid from "@/components/ServiceGrid";
import ReviewsWall from "@/components/about/ReviewsWall";
import { notFound } from "next/navigation";
import { Star, Phone, ShieldCheck, Quote } from "lucide-react";

// 1. Breadcrumbs Component
const Breadcrumbs = ({ serviceName, category }) => (
  <nav className="flex text-xs md:text-sm text-slate-400 mb-8 uppercase tracking-widest font-bold">
    <a href="/" className="hover:text-amber-500 transition-colors">Home</a>
    <span className="mx-2">/</span>
    <span className="text-slate-500">{category}</span>
    <span className="mx-2">/</span>
    <span className="text-white">{serviceName}</span>
  </nav>
);

// 2. SEO Metadata Generator
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = allServices[slug];

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title}`,
    description: service.description,
    openGraph: {
      title: `${service.title} - 24/7 Fast Response Ottawa`,
      description: service.description,
      images: ['/images/og-image.jpg'], 
    },
  };
}

// 3. Main Service Page Template
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = allServices[slug];

  if (!service) notFound();

  // Global Brand Data (Placeholder for real Google OTS data)
  const globalRating = "4.7";
  const towingPrice = "120";
  const boostPrice = "80";
  const contactNumber = "548-388-4586";

  
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/towing-hero.jpg" 
            className="w-full h-full object-cover opacity-30 grayscale-[30%]"
            alt="Ottawa Roadside Assistance"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <div className="flex justify-center">
            <Breadcrumbs serviceName={service.title} category={service.category} />
          </div>

          {/* Google Trust Bar */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-2xl">
              <img src="/images/google-g-logo.png" className="w-5 h-5" alt="Google" />
              <span className="text-white font-bold text-xs tracking-tight">Google rating</span>
              <span className="text-amber-500 font-bold ml-1">{globalRating}</span>
              <div className="flex text-amber-500 ml-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </div>

          {/* Aggressive H1 */}
          <h1 className="text-3xl md:text-6xl font-black italic uppercase text-white mb-10 tracking-tighter leading-[0.95] max-w-5xl mx-auto">
            <span className="bg-red-600 px-3 py-1 not-italic inline-block mb-2">Reliable</span><br />
            {service.title} <br />
            <span>Service in Ottawa</span>
          </h1>

          {/* Pricing Matrix */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 mb-12">
            <div className="text-center">
              <p className="text-slate-400 text-[10px] md:text-xs uppercase font-black tracking-widest mb-2">Towing Services<br/>starting from</p>
              <p className="text-white text-3xl md:text-5xl font-black italic tracking-tighter">
                <span className="text-amber-500">$</span>{towingPrice}
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-slate-400 text-[10px] md:text-xs uppercase font-black tracking-widest mb-2">Unlocking &<br/>Boost from</p>
              <p className="text-white text-3xl md:text-5xl font-black italic tracking-tighter">
                <span className="text-amber-500">$</span>{boostPrice}
              </p>
            </div>
          </div>

          {/* Main CTA Button */}
          <a 
            href={`tel:${contactNumber}`} 
            className="inline-flex items-center gap-4 bg-red-600 text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl font-black italic uppercase text-lg md:text-2xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl shadow-red-600/40 active:scale-95"
          >
            <Phone size={24} fill="currentColor" />
            CALL US! {contactNumber}
          </a>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
              <ShieldCheck size={36} />
            </div>
            <h2 className="text-3xl font-black italic uppercase text-slate-900 tracking-tight">
              {service.title}
            </h2>
          </div>
          <div className="prose prose-xl prose-slate">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
              {service.description}
            </p>
            <p className="mt-8 text-slate-500 text-lg">
              Whether you are stuck on the 417 or in a residential driveway, our Ottawa-based team is equipped with the latest recovery technology to ensure your vehicle is handled with the utmost care. We pride ourselves on transparent pricing and the fastest dispatch times in the capital region.
            </p>
          </div>
        </div>
      </section>

      <ReviewsWall />

      {/* --- SERVICE GRID --- */}
      <ServiceGrid currentSlug={slug}/>
    </main>
  );
}