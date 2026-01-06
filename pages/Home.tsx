
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-40"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 space-y-10 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-full font-bold text-[12px] uppercase tracking-[0.2em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Admissions Open • Jan 18 Batch
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] serif-heading">
                Empowering the <br/>
                <span className="gradient-text">Next Generation</span> <br/>
                of Tech Innovators
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Master the world's most critical skills. Join our 30-day intensive offline bootcamp in AI & Cybersecurity, designed exclusively for students from Class 6 onwards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <Link to="/contact" className="group bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 hover:shadow-blue-200 flex items-center justify-center gap-3">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link to="/about" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                  View Curriculum
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start pt-8">
                <div className="flex -space-x-3 overflow-hidden">
                   {[1,2,3,4].map(i => <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/150?u=tech${i}`} alt="Student" />)}
                </div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                  Trusted by <span className="text-slate-900">200+ Students</span> in Ambikapur
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative animate-float">
              <div className="relative z-10 p-4 bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Tech Education" 
                  className="w-full h-[400px] rounded-[32px] object-cover"
                />
                <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-3xl border-white/40 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-2xl text-white">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Practical AI</div>
                      <div className="text-xs text-slate-500 font-medium">Hands-on Lab Training</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm">Our Focus Areas</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 serif-heading leading-tight">Beyond Traditional Learning</h3>
            <p className="text-slate-500 text-lg font-medium">We bridge the gap between classroom theory and real-world technology application.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI & Productivity", 
                desc: "Learn to use AI tools for research, project creation, and faster studying without any coding required.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
                color: "blue"
              },
              { 
                title: "Digital Defense", 
                desc: "Equip yourself against online scams, data theft, and social engineering in a hyper-connected world.",
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
                color: "indigo"
              },
              { 
                title: "Future Career Map", 
                desc: "Discover emerging tech career paths and prepare your mind for the jobs of 2030 and beyond.",
                img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
                color: "slate"
              }
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-[40px] p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 mb-8 overflow-hidden rounded-[24px]">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">{feature.desc}</p>
                <Link to="/about" className="text-blue-600 font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Modern Education Visual Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 serif-heading leading-tight">Interactive Learning in the Heart of Ambikapur</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Our modern classroom is equipped with the latest technology to ensure every student gets a hands-on experience. We focus on active learning where you don't just watch, you create.
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized attention in small batches",
                  "Real-world cybersecurity case studies",
                  "AI tools for creative project preparation",
                  "Safe & inclusive learning environment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Students in classroom" 
                  className="rounded-[40px] shadow-2xl border-8 border-slate-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section refined */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-slate-900 rounded-[60px] p-12 lg:p-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white serif-heading leading-tight">Start your tech legacy <br/> with us today.</h2>
                <p className="text-slate-400 text-lg">Limited seats available for our upcoming January cohort. Ensure your spot in the future.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all text-center">
                  Get Started Now
                </Link>
                <a href="tel:9343704278" className="bg-slate-800 text-white border border-slate-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-700 transition-all text-center">
                  Call for Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
