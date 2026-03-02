'use client';
import { Award, Clock, Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe] py-10 lg:py-10 px-10"
    >
     
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#0EA5E9]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#10B981]/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
       
          <div className="space-y-10">
            
       
            <div className="inline-flex items-center gap-2 
              backdrop-blur-lg bg-white/40 border border-white/30
              text-[#10B981] px-5 py-2 rounded-full 
              shadow-lg shadow-[#10B981]/10
              transition hover:scale-105">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">
                Trusted by 5,000+ Families
              </span>
            </div>

         
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                Your Smile,
                <span className="bg-gradient-to-r from-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
                  {" "}Our Priority
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-xl">
                Experience world-class dental care in the heart of Casablanca.
                Professional, painless, and personalized treatments for the
                whole family.
              </p>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-6">
              
             
              <button
                onClick={() =>
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative px-8 py-4 rounded-xl font-medium text-white
                  bg-gradient-to-r from-[#0EA5E9] to-[#0284c7]
                  shadow-lg shadow-[#0EA5E9]/30
                  transition-all duration-300
                  hover:shadow-[#0EA5E9]/60 hover:scale-[1.03]"
              >
                Book Your Appointment
              </button>

         
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-xl font-medium
                  backdrop-blur-lg bg-white/40 border border-white/40
                  text-[#0EA5E9]
                  shadow-lg shadow-[#0EA5E9]/10
                  transition-all duration-300
                  hover:bg-[#0EA5E9] hover:text-white hover:scale-[1.03]"
              >
                Our Services
              </button>
            </div>

           
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              
              <div className="flex items-center gap-3 
                backdrop-blur-lg bg-white/40 border border-white/30
                px-6 py-4 rounded-xl shadow-lg">
                <Phone className="w-5 h-5 text-[#0EA5E9]" />
                <span className="text-gray-700 font-medium">
                  +212 522-123-456
                </span>
              </div>

              <div className="flex items-center gap-3 
                backdrop-blur-lg bg-white/40 border border-white/30
                px-6 py-4 rounded-xl shadow-lg">
                <Clock className="w-5 h-5 text-[#0EA5E9]" />
                <span className="text-gray-700 font-medium">
                  Mon-Sat: 9AM–7PM
                </span>
              </div>
            </div>
          </div>

      
          <div className="relative ">
            
        
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 to-[#10B981]/20 blur-3xl rounded-3xl" />

            <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 
              rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1640618610389-6b09eadb04ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Happy dental patient"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 
              backdrop-blur-lg bg-white/40 border border-white/30
              text-gray-800 px-8 py-6 rounded-2xl 
              shadow-xl shadow-[#10B981]/20 scale-75 lg:scale-100
              transition hover:scale-105">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">
                  15+
                </div>
                <div className="text-sm font-medium text-white/80">
                  Years Experience
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;