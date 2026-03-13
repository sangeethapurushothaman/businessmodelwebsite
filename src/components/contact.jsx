import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white pb-28">

      {/* HEADER */}
      <div className="bg-blue-600 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-sm font-semibold opacity-80 mb-3">
            CONTACT OUR TEAM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about our services or want to start your next project?
            Our team is here to help you with the best solutions.
          </p>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              We'd Love to Hear From You
            </h3>

            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Whether you have a question about our services, pricing, projects,
              or anything else, our team is ready to answer all your questions.
              Reach out to us and let's start building something incredible together.
            </p>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">

                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Office Address
                  </h4>

                  <p className="text-gray-600">
                    Global Softers Pvt Ltd <br />
                    Anna Nagar, Chennai <br />
                    Tamil Nadu – 600040 <br />
                    India
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">

                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Phone
                  </h4>

                  <p className="text-blue-600 font-semibold">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">

                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    contact@globalsofters.com
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">

            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">
                    Email *
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
                  />
                </div>

              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Phone
                </label>

                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">
                  Message *
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;