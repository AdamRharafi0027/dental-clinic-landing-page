import Image from "next/image";
import SectionHeader from "./SectionHeader";

const ResultSlider = () => {
  return (
    <section
      className="relative py-24 px-6 
      bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Real Results"
          subtitle="See the transformations we've achieved for our patients"
        />

        <div className="max-w-5xl mx-auto mt-16">
          <div
            className="p-[1px] rounded-3xl 
            bg-gradient-to-r from-[#0EA5E9]/40 to-[#10B981]/40
            transition-all duration-500 hover:from-[#0EA5E9]/60 hover:to-[#10B981]/60"
          >
            <div
              className="relative rounded-3xl 
              backdrop-blur-2xl bg-white/50 border border-white/40
              shadow-2xl shadow-[#0EA5E9]/10 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative group">
                  <span
                    className="absolute top-6 left-6 
                    bg-gradient-to-r from-red-500 to-red-600 
                    text-white px-5 py-2 rounded-full text-sm font-medium z-10 shadow-lg"
                  >
                    Before
                  </span>

                  <Image
                    src="https://images.unsplash.com/photo-1658994477987-42468f4dbbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Before treatment"
                    width={1080}
                    height={384}
                    className="w-full h-96 object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative group">
                  <span
                    className="absolute top-6 right-6 
                    bg-gradient-to-r from-[#10B981] to-[#059669] 
                    text-white px-5 py-2 rounded-full text-sm font-medium z-10 shadow-lg"
                  >
                    After
                  </span>

                  <Image
                    src="https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="After treatment"
                    width={1080}
                    height={384}
                    className="w-full h-96 object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div
                className="absolute inset-y-0 left-1/2 w-[2px] 
                bg-gradient-to-b from-transparent via-[#0EA5E9]/40 to-transparent hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSlider;
