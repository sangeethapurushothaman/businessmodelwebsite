import React from 'react';
import { Clock, Award, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "18+ Years of Experience",
      description: "Nearly two decades of expertise across diverse industries, helping businesses scale and succeed.",
      icon: <Clock size={28} />,
    },
    {
      title: "Commitment to Quality",
      description: "Every project undergoes rigorous quality checks to ensure excellence in every deliverable.",
      icon: <Award size={28} />,
    },
    {
      title: "Customer Satisfaction",
      description: "We put our clients first, with a 98% satisfaction rate across all our global partnerships.",
      icon: <ThumbsUp size={28} />,
    }
  ];

  return (
    <section id="why-us" className="bg-slate-50 pb-24 font-sans">
      {/* Header Banner */}
      <div className="bg-blue-600 py-20 px-6 text-white text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-[10px] font-black opacity-70 mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-black">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-white mt-6 rounded-full mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="max-w-4xl mx-auto text-center py-16 px-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">What Sets Us Apart</h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We combine deep expertise with a client-first approach to deliver solutions that make a real difference.
        </p>
      </div>

      {/* Advantages Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 rounded-2xl border-b-8 border-transparent shadow-lg 
                         hover:border-blue-600 hover:-translate-y-3 hover:shadow-2xl 
                         transition-all duration-500 ease-in-out flex flex-col items-center text-center"
            >
              {/* Icon Container: Normal state is light blue, Hover state is dark blue */}
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8 
                              group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110
                              transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Decorative Circle in background on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;