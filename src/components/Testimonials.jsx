import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      stars: 5,
      quote: "ApexCorp transformed our business operations completely. Their team delivered strategic insights that resulted in a 40% increase in efficiency within the first quarter."
    },
    {
      name: "Michael Chen",
      stars: 5,
      quote: "Professional, responsive, and incredibly knowledgeable. They exceeded every expectation we had and continue to be our go-to consulting partner."
    },
    {
      name: "Emily Rodriguez",
      stars: 5,
      quote: "The strategic insights we received helped us scale from a startup to an industry player in just two years. Their guidance was invaluable at every stage."
    }
  ];

  return (
    <section id="testimonials" className="bg-slate-50 pb-32 font-sans">
      {/* Header Banner */}
      <div className="bg-blue-600 py-20 px-6 text-white text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-[10px] font-black opacity-70 mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-black">Testimonials</h2>
          <div className="w-16 h-1.5 bg-white mt-6 rounded-full mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Center Intro Text */}
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <h3 className="text-3xl font-extrabold text-slate-900 mb-4 italic">
          "Trusted by Businesses Worldwide"
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          Hear what our clients have to say about their experience working with us.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 rounded-2xl border-l-0 hover:border-l-[6px] border-blue-600 
                         shadow-lg hover:shadow-2xl hover:-translate-y-4 
                         transition-all duration-500 ease-in-out flex flex-col"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-blue-50 group-hover:text-blue-100 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Star Rating with Animation */}
              <div className="flex space-x-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className="fill-blue-600 text-blue-600 group-hover:scale-125 transition-transform duration-500" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
              
              {/* Quote Body */}
              <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow text-base md:text-lg">
                "{item.quote}"
              </p>
              
              {/* Author Name */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Verified Client</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;