import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <div className="container mx-auto px-4 fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
        <p className="text-slate-600">Have questions about our courses or products? We're here to help.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all">
                <option>Product Inquiry</option>
                <option>Professional Course Question</option>
                <option>Research Collaboration</option>
                <option>General Support</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" required></textarea>
            </div>
            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-200 transition-all">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Office</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 shrink-0">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                  <p className="text-slate-500">123 Dental Plaza, Belleville, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-500">+1 (555) 234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-500">support@bellevilledental.org</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1475891658535!2d-74.04944!3d40.71455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2s123%20Dental%20Plaza%2C%20Belleville%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
