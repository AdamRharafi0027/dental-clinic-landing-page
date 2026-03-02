const InputField = ({ label, id, type, formData, handleInputChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm mb-2 text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={formData[id]}
      onChange={handleInputChange}
      required
      min={type === "date" ? new Date().toISOString().split("T")[0] : undefined}
      className="w-full px-4 py-3 rounded-xl
      bg-white/70 backdrop-blur-md
      border border-white/50
      focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]
      transition"
      placeholder={`Enter your ${label.toLowerCase().replace("*", "")}`}
    />
  </div>
);
export default InputField;