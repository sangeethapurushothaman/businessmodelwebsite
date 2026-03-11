import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const successImageUrl =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

  return (
    <div id="home" className="relative w-full overflow-hidden bg-white">
      {/* pb-16: Blue background-oda height-ai koraika padding-ai koraichu irukom.
         min-h-[550px]: Overall blue section height-um ippo kammiyaagum.
      */}
      <section className="bg-blue-600 relative min-h-[550px] flex items-center pt-10 pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 z-10">
            <p className="text-blue-200 uppercase tracking-widest text-xs font-bold mb-4 animate-[fadeUp_1s_ease-out]">
              Professional Business Solutions
            </p>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-[fadeUp_1.3s_ease-out]">
              Empowering Businesses to <br />
              Achieve Greater Success
            </h1>

            <p className="text-blue-100/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-[fadeUp_1.6s_ease-out]">
              We deliver innovative strategies and reliable solutions that drive
              growth, efficiency, and lasting impact.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-[fadeUp_2s_ease-out]">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-transform hover:-translate-y-1 shadow-lg">
                Get Started <ArrowRight size={18} />
              </button>

              <button className="flex items-center justify-center border-2 border-white/40 hover:border-white text-white bg-transparent px-8 py-4 rounded-md transition-all font-bold uppercase text-xs tracking-widest hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10 animate-[fadeIn_2s_ease-out]">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="bg-white p-3 rounded-2xl shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={successImageUrl}
                  alt="Corporate Success"
                  className="rounded-xl w-full h-[350px] lg:h-[420px] object-cover border-2 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intha div thaan kela extra WHITE SPACE tharum. 
          h-32: White space-oda size. Venumna h-40 or h-20 nu mathalaam.
      */}
      <div className="w-full h-32 bg-white"></div>

      <style>
        {`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        `}
      </style>
    </div>
  );
};

export default HeroSection;