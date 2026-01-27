const WhyChooseUs = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-200">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-4xl font-black italic uppercase text-slate-900 mb-20 tracking-tight">
        Why Choose Ottawa Towing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { title: "Experienced Local Professionals", desc: "Operated by trained towing professionals with years of hands-on experience handling breakdowns." },
          { title: "24/7 Reliable Response", desc: "Vehicle issues don't follow a schedule, which is why service is available 24 hours a day." },
          { title: "Fully Licensed & Insured", desc: "All towing operations are performed using licensed, insured equipment and proper recovery procedures." },
          { title: "Transparent, Professional Service", desc: "Clear communication, honest service practices, and responsible vehicle handling are central to every call." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="w-12 h-1 bg-amber-500 mx-auto mb-8 group-hover:w-20 transition-all" />
            <h3 className="text-xl font-black italic uppercase text-slate-900 mb-4 tracking-tighter leading-tight">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default WhyChooseUs;