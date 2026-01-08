
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'I build clean and responsive user interfaces that people actually enjoy using. This includes layouts, forms, buttons, and making sure everything works smoothly across phones, tablets, and desktops.',
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'I develop backend systems that handle data, security, and application logic. The focus is on clean APIs, stable performance, and systems that can grow without slowing down.',
    },
    {
      id: 3,
      title: 'Full-Stack Web Solutions',
      description: 'I build complete web applications from frontend to backend. This means everything works together properly — from the user interface to the server, database, and authentication.',
    },
  ]

  return (
    <section id="services" className="bg-gray-700 relative w-full px-12 lg:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 tracking-tight">
            Services
          </h2>
          <p className="text-md sm:text-[50px] text-white max-w-2xl mx-auto mt-1">
            How I can help you <span className="italic">growww</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              className={`p-6 sm:p-8 bg-yellow-100 border border-gray-200 rounded-lg overflow-hidden hover:bg-yellow-200 transition-all duration-300 hover:translate-y-2 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Service Number */}
              <div className="inline-block mb-4 relative z-10">
                <span className="text-sm font-bold text-yellow-100 bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                  {service.id}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 relative z-10 text-red-500">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
