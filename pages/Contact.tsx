
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: 'AI & Cybersecurity Program',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Techline Studio! I'm interested in the course.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}`;
    
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-6">
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Get in touch</h1>
                <p className="text-lg text-slate-600">Have questions about the enrollment process or batch timings? We are here to help!</p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Phone / WhatsApp</h3>
                        <p className="text-slate-600">+91 9343704278</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email Support</h3>
                        <p className="text-slate-600">contact@rebrainsolutions.in</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Location</h3>
                        <p className="text-slate-600">Beside Shubh Honda, MG Road, Ambikapur</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Full Name</label>
                            <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Phone Number</label>
                            <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Enter your phone" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Select Program</label>
                        <select name="course" value={formData.course} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all">
                            <option>AI & Cybersecurity (1 Month)</option>
                            <option>Advanced Technology Mentorship</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Tell us more..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
                        <span>Submit to WhatsApp</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.207l-.694 2.547 2.628-.69c.873.472 1.814.717 2.808.718h.001c3.182 0 5.768-2.586 5.769-5.766 0-3.181-2.585-5.766-5.767-5.766zm3.336 8.232c-.145.409-.844.767-1.157.818-.313.05-.62.085-1.047.085s-.91-.105-1.545-.355c-2.706-1.066-4.459-3.83-4.593-4.01s-1.087-1.452-1.087-2.771 1.087-2.454 1.246-2.564c.159-.11.348-.137.465-.137h.375c.12 0 .282.015.408.318.126.301.428 1.037.466 1.111.038.075.063.162.013.264-.05.101-.075.162-.15.253-.075.091-.157.202-.225.27-.075.075-.154.157-.066.301.088.144.391.645.839 1.043.578.514 1.065.674 1.216.749.151.075.24.062.328-.04.088-.101.377-.439.478-.588.101-.15.201-.126.339-.075s.881.415 1.033.491c.151.075.252.113.289.176.038.063.038.365-.107.774z"/></svg>
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
