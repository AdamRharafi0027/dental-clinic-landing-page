import { Mail, MapPin, Phone, Smile } from "lucide-react";

const Footer = () => {
  const social_media_icons = [
    {
      title: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];
  return (
    <footer
      className="relative overflow-hidden pt-24 pb-10 px-6
      bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1120] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl
                bg-gradient-to-br from-[#0EA5E9] to-[#10B981]
                flex items-center justify-center
                shadow-lg shadow-[#0EA5E9]/30"
              >
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">
                DentalCare
              </span>
            </div>

            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Your trusted dental partner in Casablanca, providing premium
              dental care with a personal touch since 2010.
            </p>

            <div className="flex gap-4">
              {social_media_icons.map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="group w-11 h-11 rounded-full
                  bg-white/5 backdrop-blur-md border border-white/10
                  flex items-center justify-center
                  transition-all duration-300
                  hover:bg-gradient-to-r hover:from-[#0EA5E9] hover:to-[#10B981]
                  hover:shadow-lg hover:shadow-[#0EA5E9]/30"
                >
                  <span className="sr-only">{social.title}</span>
                  {social.icon}
                 
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-10 h-10 text-[#0EA5E9] mt-1 group-hover:scale-110 transition" />
                <span>123 Boulevard Mohammed V, Casablanca 20000, Morocco</span>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#0EA5E9] group-hover:scale-110 transition" />
                <span>+212 522-123-456</span>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#0EA5E9] group-hover:scale-110 transition" />
                <span>info@dentalcare.ma</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Opening Hours
            </h3>

            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9AM - 7PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 5PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[#10B981] font-medium">
                  Emergency: 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 DentalCare Casablanca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
