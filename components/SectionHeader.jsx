
const SectionHeader = ({ title, subtitle }) => {
  return (
    <>
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-5xl">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </>
  )
}

export default SectionHeader