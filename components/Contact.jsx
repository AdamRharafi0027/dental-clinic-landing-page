"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import InputField from "./InputFaield";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
    alert("Your appointment request has been submitted! We will contact you soon.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({...prevState, [name]: value,}));
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-24 px-6
  bg-gradient-to-br from-[#f8fafc] via-white to-[#e0f2fe]"
      >
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#0EA5E9]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#10B981]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto">
          <SectionHeader
            title="Book Your Appointment"
            subtitle="Take the first step towards a healthier, brighter smile"
          />

          <div
            className="mt-16 p-[1px] rounded-3xl 
      bg-gradient-to-r from-[#0EA5E9]/40 to-[#10B981]/40
      transition-all duration-500 hover:from-[#0EA5E9]/60 hover:to-[#10B981]/60"
          >
            <div
              className="backdrop-blur-2xl bg-white/50 border border-white/40
        rounded-3xl p-8 lg:p-12
        shadow-2xl shadow-[#0EA5E9]/10"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name *"
                    id="name"
                    type="text"
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                  <InputField
                    label="Phone Number *"
                    id="phone"
                    type="tel"
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <InputField
                  label="Email Address *"
                  id="email"
                  type="email"
                  formData={formData}
                  handleInputChange={handleInputChange}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl
                bg-white/70 backdrop-blur-md
                border border-white/50
                focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]
                transition"
                    >
                      <option value="">Select a service</option>
                      <option value="teeth-whitening">Teeth Whitening</option>
                      <option value="general-dentistry">
                        General Dentistry
                      </option>
                      <option value="dental-implants">Dental Implants</option>
                      <option value="cosmetic-dentistry">
                        Cosmetic Dentistry
                      </option>
                      <option value="pediatric-dentistry">
                        Pediatric Dentistry
                      </option>
                      <option value="emergency-care">Emergency Care</option>
                    </select>
                  </div>

                  <InputField
                    label="Preferred Date *"
                    id="date"
                    type="date"
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl
              bg-white/70 backdrop-blur-md
              border border-white/50
              focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]
              resize-none transition"
                    placeholder="Tell us about your dental concerns..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium text-white
            bg-gradient-to-r from-[#0EA5E9] to-[#0284c7]
            shadow-lg shadow-[#0EA5E9]/30
            transition-all duration-300
            hover:shadow-[#0EA5E9]/60 hover:scale-[1.02]"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
