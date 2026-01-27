const AboutHero = () => (
  <section className="relative min-h-[60vh] mt-20  flex items-center bg-slate-950 pt-20 pb-20 overflow-hidden">
    <img src="/images/about-hero-trucks.png" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Ottawa Towing Fleet" />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
    <div className="container mx-auto px-6 z-10">
      <div className="flex items-center gap-2 mb-6 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
         <img src="/images/google-g-logo.png" className="w-5 h-5" alt="Google" />
         <span className="text-white font-bold text-sm">4.7 ★★★★★</span>
      </div>
      <h1 className="text-5xl md:text-8xl font-black italic uppercase text-white tracking-tighter mb-8 leading-[0.85]">
        About Ottawa <br /><span className="text-white">Towing Solutions</span>
      </h1>
      <p className="text-white text-lg md:text-xl max-w-2xl mb-10 font-medium italic opacity-90">
        Launched in May 2015 and proudly incorporated since December 2015, serving drivers across the region with reliable towing support.
      </p>
      <a href="tel:548-388-4586" className="inline-block bg-red-600 text-white px-10 py-5 rounded-xl font-black italic uppercase text-xl shadow-2xl shadow-red-600/40">
        CALL US! 548-388-4586
      </a>
    </div>
  </section>
);
export default AboutHero;