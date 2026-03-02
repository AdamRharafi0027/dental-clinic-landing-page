import Card from "./Card";
import SectionHeader from "./SectionHeader";
import benifits from "@/data/BenifitsCardData";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden py-24 px-6
      
        bg-gradient-to-br from-[#0EA5E9] to-[#10B981]
      "
      >
        <div className="relative max-w-7xl mx-auto">
          <div
            className="relative backdrop-blur-2xl bg-white/40 border border-gray-300/40
        rounded-3xl p-12 shadow-2xl shadow-[#0EA5E9]/20
        transition-all duration-500 hover:shadow-[#0EA5E9]/20 "
          >
            <SectionHeader
              title="Why Choose DentalCare?"
              subtitle="We combine expertise, technology, and compassion to deliver exceptional dental care"
            />

            <div className="mx-auto mt-6 mb-12 h-[3px] w-24 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {benifits.map((benifit, index) => (
                <Card key={index} Data={benifit} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
