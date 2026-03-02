const Card = ({ Data }) => {
    const Icon = Data.icon
  return (
    <>
  <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2">

   
   
    <div className="relative backdrop-blur-xl bg-white/40 border border-white/40 
      rounded-2xl p-8 shadow-xl shadow-[#0EA5E9]/10
      transition-all duration-500
      hover:shadow-[#0EA5E9]/30">

      
      <div className="w-16 h-16 
        backdrop-blur-lg bg-gradient-to-br from-[#0EA5E9] to-[#10B981]
        rounded-xl flex items-center justify-center mb-6
        shadow-lg shadow-[#0EA5E9]/30
        transition-transform duration-300 group-hover:scale-110">

        <Icon className="w-8 h-8 text-white" />
      </div>

     
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {Data.title}
      </h3>

      
      <p className="text-gray-600 leading-relaxed">
        {Data.description}
      </p>

      
      <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full transition-all duration-300 group-hover:w-24" />

    </div>
  </div>
</>
  );
};

export default Card;
