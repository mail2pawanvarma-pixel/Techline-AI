
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-32">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 serif-heading leading-tight">Reimagining Education for the Modern Era</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    At Techline Studio, we believe that education must evolve as fast as the technology it teaches. Located in Ambikapur, we provide an elite environment where students can master AI and Cybersecurity through practical, project-based learning.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-2">
                        <div className="text-4xl font-extrabold text-slate-900">30 Days</div>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Intensive Course</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-extrabold text-slate-900">Hands-on</div>
                        <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Practical Training</div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-blue-50 rounded-[40px] -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  alt="Students collaborating" 
                  className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
                />
            </div>
        </div>

        {/* Curriculum Preview */}
        <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-4xl font-extrabold text-slate-900 serif-heading">What You'll Master</h2>
                <p className="text-slate-500 text-lg font-medium">Our curriculum is designed to be accessible yet deeply practical.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "AI Strategy & Ethics", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                { title: "Advanced Research Skills", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { title: "Cyber Defense Systems", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "Professional Mindmapping", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-[32px] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all hover:shadow-xl hover:shadow-slate-100 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">Comprehensive learning modules designed to build critical thinking and mastery over modern digital tools.</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Vision Section */}
        <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 text-center space-y-10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
             <h2 className="text-white text-3xl md:text-5xl font-extrabold serif-heading relative z-10 leading-tight">
               "Our vision is to make Ambikapur a <br/> center for technology excellence."
             </h2>
             <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="w-16 h-[1px] bg-blue-500"></div>
                <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm">Founded by Techline Studio</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default About;
