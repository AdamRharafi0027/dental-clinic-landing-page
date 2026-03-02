import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import testimonial from "@/data/TestimonialCardData";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 px-6
      bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe]"
    >

      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#0EA5E9]/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#10B981]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">


        <div
          className="relative backdrop-blur-2xl bg-white/40 border border-white/40
          rounded-3xl p-12 shadow-2xl shadow-[#0EA5E9]/20"
        >
          <SectionHeader
            title="Our Testimonials"
            subtitle="What our patients say about their experience with us."
          />

          <div className="mx-auto mt-6 mb-16 h-[3px] w-24 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {testimonial.map((testimon, index) => (
              
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl
                bg-gradient-to-br from-[#0EA5E9]/40 to-[#10B981]/40
                transition-all duration-500 hover:from-[#0EA5E9]/60 hover:to-[#10B981]/60
                hover:-translate-y-2"
              >


                <div
                  className="relative h-full backdrop-blur-xl bg-white/60
                  border border-white/40 rounded-2xl p-8
                  shadow-xl shadow-[#0EA5E9]/10
                  transition-all duration-500
                  group-hover:shadow-[#0EA5E9]/30"
                >
                  <div className="flex items-center gap-4 mb-6">

                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] blur-md opacity-40"></div>
                      <Image
                        src={testimon.image}
                        alt={testimon.name}
                        width={64}
                        height={64}
                        className="relative w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimon.name}
                      </h4>

                      <div className="flex gap-1 mt-1">
                        {[...Array(testimon.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#facc15] text-[#facc15]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>


                  <p className="text-gray-600 italic leading-relaxed">
                    “{testimon.text}”
                  </p>

  
                  <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;