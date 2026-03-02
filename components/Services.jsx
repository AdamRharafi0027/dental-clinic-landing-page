import Card from "./Card";
import SectionHeader from "./SectionHeader";
import services from "@/data/ServicesCardData";
const Services = () => {
  return (
   <>
  <section
    id="services"
    className="relative overflow-hidden py-24 px-6
      bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe]"
  >
    
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#0EA5E9]/20 rounded-full blur-[120px]" />
    <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#10B981]/20 rounded-full blur-[120px]" />

    <div className="relative max-w-7xl mx-auto">

    
      <div
        className="relative backdrop-blur-2xl bg-white/40 border border-white/40
        rounded-3xl p-12 shadow-2xl shadow-[#0EA5E9]/20
        transition-all duration-500 hover:shadow-[#0EA5E9]/20 "
      >
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive dental care tailored to your needs."
        />

       
        <div className="mx-auto mt-6 mb-12 h-[3px] w-24 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} Data={service} />
          ))}
        </div>
      </div>
    </div>
  </section>
</>
  );
};

export default Services;
