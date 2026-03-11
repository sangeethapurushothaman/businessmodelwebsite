import React from 'react';
import { BarChart3, ShieldCheck, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic planning, market analysis, and growth roadmaps to position your business for long-term success.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment, compliance frameworks, and mitigation strategies to protect your assets.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Innovation Strategy",
      description: "Digital transformation, emerging technology adoption, and creative problem-solving for modern challenges.",
      icon: <Lightbulb size={24} />,
    }
  ];

  return (
    <section id="services" className="bg-slate-50 pb-20 font-sans">
      {/* Blue Header Banner */}
      <div className="bg-blue-600 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[11px] font-bold opacity-80 mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-white/30 rounded-full mb-6"></div>
          <p className="max-w-xl opacity-90 text-lg">
            Comprehensive business solutions designed to drive growth, efficiency, and innovation.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-xl border-b-4 border-transparent shadow-lg 
                         hover:border-blue-600 hover:-translate-y-2 hover:shadow-2xl 
                         transition-all duration-300 ease-in-out flex flex-col items-start"
            >
              {/* Icon Container with Hover Animation */}
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 
                              group-hover:bg-blue-600 group-hover:text-white  
                              transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Decorative line on hover */}
              <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-blue-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;