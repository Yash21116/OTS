const MissionSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-4xl font-black italic uppercase text-slate-950 mb-8 tracking-tight leading-none">
            Ottawa’s Trusted Towing & <br />Roadside Assistance Company
          </h2>
          <p className="text-xl leading-relaxed text-slate-600">
            <span className="text-red-600 font-bold">Ottawa Towing Solutions</span> was founded in 2015 with a clear mission: to provide fast, reliable, and high-quality towing and <span className="text-red-600 font-bold">roadside assistance services</span> for drivers across the Ottawa region.
          </p>
          <p className="text-slate-600">
            Our company brings years of experience in towing, vehicle recovery, flatbed transport, battery boosts, and roadside support shaped by the demands of Ottawa’s roads, traffic, and weather conditions.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-12">
            <h3 className="text-2xl font-black italic uppercase mb-4">Our Commitment Includes:</h3>
            <ul className="grid grid-cols-1 gap-4 text-slate-700 font-medium">
              <li>• Operating fully licensed and insured tow trucks</li>
              <li>• Providing 24/7 towing and roadside assistance across Ottawa</li>
              <li>• Handling every vehicle with safety, precision, and respect</li>
            </ul>
          </div>
        </div>
        <div className="sticky top-32">
          <img src="/images/about-hero-trucks.png" className="rounded-[40px] shadow-2xl shadow-slate-200" alt="Ottawa Tow Truck Service" />
        </div>
      </div>
    </div>
  </section>
);
export default MissionSection;