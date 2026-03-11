import React from 'react';

const About = () => {
  return (
    /* Section kulla pb-80 (Padding Bottom) iruku, idhu dhaan white space-ai adhigamaakkum */
    <section id="about" className="w-full bg-white font-sans overflow-hidden pb-25">
      
      {/* Blue Container: 
          border-t-8: Top-la matum white border varum.
          border-b-0: Bottom border eduthachu so white-oda merge aagum.
      */}
      <div className="w-full bg-blue-700 border-t-8 border-white flex flex-col lg:flex-row min-h-[500px] shadow-sm">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center items-start bg-blue-700">
          
          {/* Label: "About Us" - mb-12 kuduthu mela thalli vechirukom */}
          <p className="uppercase tracking-[0.4em] text-[11px] font-black text-white mb-12 opacity-90 border-b border-white/30 pb-1">
            About Us
          </p>
          
          {/* Heading with Underline */}
          <div className="relative mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Your Trusted <br /> 
              Business Partner
            </h2>
            {/* Custom Designed Underline (White bars) */}
            <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-white rounded-full"></div>
            <div className="absolute -bottom-4 left-28 w-4 h-1.5 bg-white/40 rounded-full"></div>
          </div>

          {/* Description Text: Ella text-um solid white color-la irukum */}
          <div className="space-y-5 text-white text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Founded in 2005, <span className="font-bold underline decoration-white/30">ApexCorp</span> has 
              grown from a small consulting firm into a full-service business solutions 
              provider. We serve clients across 25+ countries.
            </p>
            
            <p>
              Our multidisciplinary team brings together experts from finance, technology, 
              marketing, and management to provide holistic solutions.
            </p>
            
            {/* Italic Box Section */}
            <p className="text-sm opacity-95 border-l-4 border-white pl-4 italic bg-white/5 py-3">
              We believe in building lasting partnerships based on trust, transparency, 
              and mutual growth.
            </p>
          </div>

          {/* Read More Button with Hover Effect */}
          <button className="mt-10 bg-white text-blue-700 px-10 py-3.5 rounded-sm font-black text-xs uppercase tracking-widest 
            transition-all duration-300 ease-in-out
            hover:bg-blue-50 hover:text-blue-900 hover:shadow-xl hover:-translate-y-1
            active:translate-y-0 shadow-md">
            Read More
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="About Us Office" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle Blue Tint Overlay */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default About;