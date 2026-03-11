import React from 'react';
import { MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white pb-24">
      {/* Blue Header Banner */}
      <div className="bg-blue-600 py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold opacity-70 mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Let's Talk</h3>
            <p className="text-gray-600 text-lg mb-10">
              Have a question or ready to get started? Reach out to us and our team will respond within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Office Address</h4>
                  <p className="text-gray-600">123 Business Avenue, Suite 100, New York, NY 10001</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-blue-600 font-medium">+1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input type="text" placeholder="+1 (234) 567-890" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea rows="4" placeholder="Tell us about your project or inquiry..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
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