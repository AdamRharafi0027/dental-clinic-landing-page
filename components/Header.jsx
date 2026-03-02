'use client'
import { Menu, Smile, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     
      <nav className="sticky top-0 z-50 
        backdrop-blur-xl bg-white/60 
        border-b border-white/30 
        shadow-lg shadow-[#0EA5E9]/5">
        
      
        <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/5 via-transparent to-[#10B981]/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

         
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-11 h-11 
                bg-gradient-to-br from-[#0EA5E9] to-[#10B981]
                rounded-xl flex items-center justify-center
                shadow-lg shadow-[#0EA5E9]/30
                transition-all duration-300
                group-hover:scale-110">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight 
                bg-gradient-to-r from-gray-800 to-gray-600 
                bg-clip-text text-transparent">
                DentalCare
              </span>
            </div>

        
            <div className="hidden md:flex items-center gap-8">

              {["Home", "Services", "About", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 font-medium
                    hover:text-[#0EA5E9] transition-colors
                    after:absolute after:-bottom-1 after:left-0
                    after:h-[2px] after:w-0
                    after:bg-gradient-to-r after:from-[#0EA5E9] after:to-[#10B981]
                    after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {item}
                </a>
              ))}


              <button
                onClick={() =>
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="ml-4 px-6 py-3 rounded-xl font-medium text-white
                  bg-gradient-to-r from-[#0EA5E9] to-[#0284c7]
                  shadow-lg shadow-[#0EA5E9]/30
                  transition-all duration-300
                  hover:shadow-[#0EA5E9]/60 hover:scale-[1.05]"
              >
                Book Appointment
              </button>
            </div>

           
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg 
                backdrop-blur-lg bg-white/40 border border-white/30
                shadow-md transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

     
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-6 rounded-2xl
              backdrop-blur-xl bg-white/70 border border-white/30
              shadow-2xl shadow-[#0EA5E9]/10
              space-y-6 animate-fadeIn">

              {["Home", "Services", "About", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 font-medium
                    hover:text-[#0EA5E9] transition-colors"
                >
                  {item}
                </a>
              ))}

              <button
                onClick={() => {
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 rounded-xl font-medium text-white
                  bg-gradient-to-r from-[#0EA5E9] to-[#0284c7]
                  shadow-lg shadow-[#0EA5E9]/30
                  transition-all duration-300
                  hover:scale-[1.03]"
              >
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;