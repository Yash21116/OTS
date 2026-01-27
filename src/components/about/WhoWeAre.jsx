const WhoWeAre = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Mosaic from Reference */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl overflow-hidden h-72">
            <img src="/images/about-hero-trucks.png" className="w-full h-full object-cover" alt="Ottawa Night Recovery" />
          </div>
          <div className="rounded-3xl overflow-hidden h-48">
            <img src="/images/about-hero-trucks.png" className="w-full h-full object-cover" alt="Service Detail" />
          </div>
          <div className="rounded-3xl overflow-hidden h-48">
            <img src="/images/about-hero-trucks.png" className="w-full h-full object-cover" alt="Service Detail 2" />
          </div>
        </div>

        {/* Dense Detail Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-black italic uppercase text-slate-950 tracking-tight">Who We Are</h2>
          <div className="text-slate-600 text-lg leading-relaxed space-y-4">
            <p>
              A dedicated team of roadside assistance professionals operates <span className="text-red-600 font-bold">Ottawa Towing Solutions</span>, delivering fast, reliable towing support across the region. Our fleet includes ten tow trucks positioned throughout Ottawa and nearby communities, ensuring rapid response for breakdowns, vehicle recovery, lockouts, battery boosts, and accident towing. 
            </p>
            <p>
              Our company launched in May 2015 and became officially incorporated in December 2015, growing steadily into one of the most dependable towing companies in the city. We are located at 1600 Michael St, Ottawa, just 20 minutes from the Ottawa International Airport (YOW). 
            </p>
            <p>
              We operate 24/7 to support drivers with emergency towing, flatbed transport, and dependable dispatch systems. For questions or service requests, call <span className="text-red-600 font-bold">(613) 869-2323</span> or connect with us through Facebook or Yellow Pages.
            </p>
          </div>
          <a href="tel:6138692323" className="w-fit bg-red-600 text-white px-8 py-4 rounded-xl font-black italic uppercase text-lg hover:bg-red-700 transition-all">
            CALL US! 613-869-2323
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default WhoWeAre