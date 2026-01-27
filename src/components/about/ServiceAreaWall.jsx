const ServiceAreaWall = () => {
  const neighborhoods = [
    "Kars", "Munster", "Ramsayville", "Sarsfield",
    "Kenmore", "Navan", "Richmond", "Stittsville",
    "Limoges", "Nepean", "Rockcliffe", "Vanier",
    "Manotick", "North Gower", "Russell", "Vars",
    "Metcalfe", "Orleans", "Rockland", "Westwood",
    "Osgoode", "St-pascal", "Woodlawn", "Gloucester"
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Interactive Google Map API Integration */}
          <div className="rounded-3xl overflow-hidden h-[500px] border-4 border-white shadow-2xl relative group">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718441.1163946359!2d-76.45967344376413!3d45.300130529144425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfc3a04d0cb9b%3A0x807cff9d57fa11e0!2sOttawa%20Regional%20Towing%20Company!5e0!3m2!1sen!2sin!4v1769505001406!5m2!1sen!2sin"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md pointer-events-none group-hover:opacity-0 transition-opacity">
               <p className="text-xs font-bold uppercase text-slate-800 tracking-widest">Interactive Map</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black italic uppercase text-slate-950 mb-4 tracking-tight leading-none">
              Service Areas In <br /><span className="text-amber-500">Ottawa, Ontario</span>
            </h2>
            <p className="text-slate-500 mb-8 font-medium">
              We provide 24/7 towing and emergency roadside assistance across the entire National Capital Region.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-[11px] text-slate-500 font-black uppercase tracking-widest border-l-2 border-amber-500 pl-6">
              {neighborhoods.map((area) => (
                <span key={area} className="hover:text-red-600 transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="tel:6138692323" className="bg-red-600 text-white px-8 py-4 rounded-xl font-black italic uppercase text-center shadow-lg shadow-red-600/20 hover:scale-105 transition-transform">
                 CALL US! 613-869-2323
              </a>
              <div className="flex items-center gap-3 px-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-900 font-bold italic uppercase text-sm tracking-tighter">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceAreaWall;