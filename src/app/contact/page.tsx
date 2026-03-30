import React from "react";

export default function ContactUs() {
  return (
    <main className="bg-surface antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            className="w-full h-full object-cover grayscale invert" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgGH1P3PO3HKqW5znS-W2m_IlwBDLHicDgtwMGDCrgrBcRQChoEhZ7V2a2rwIvtwnzWwxaZ84XBxppkLWUUwIrQNMvLS79O6HeuSl1n1bYQrHkGsjzKrbklHAb13ZTuwYm_oiNCHkTtpXzQ24OaGF_W_yMfjUWM2_wbl1p1UHgp638n-k9fTX7QDe6uPQGWyTgRiaJgr-yjbH2EM5pUPCd-qgNu2ETFga8dzuXfyRtX2yYH_wKyrV4RWqcq1N7cIZAheTa0yJQ6NtS"
            alt="World map decoration"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-block px-6 py-1.5 rounded-none bg-secondary/30 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-10 font-headline">Connect with Us</span>
            <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-[0.1em] leading-tight mb-10 uppercase">
              Get in <span className="font-normal text-secondary-fixed">Touch.</span>
            </h1>
            <p className="text-lg text-slate-300 font-body font-light leading-loose tracking-wide">
              Whether you're an aspiring engineer, a prospective partner, or simply have a question about our global institutions, our team is ready to guide your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-8 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-12">
              <div className="flex items-start space-x-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-none bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-2xl font-light">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-medium text-primary mb-4 uppercase tracking-widest">Global Headquarters</h3>
                  <p className="text-on-surface-variant font-body font-light leading-loose tracking-wide text-sm">
                    124 Engineering Plaza, Academic District<br/>
                    Science Park, London, EC1V 4PY<br/>
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-none bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-2xl font-light">call</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-medium text-primary mb-4 uppercase tracking-widest">Direct Liaison</h3>
                  <p className="text-on-surface-variant font-body font-light leading-loose tracking-wide text-sm">
                    Admissions: +44 20 7946 0123<br/>
                    General Inquiry: +44 20 7946 0555
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-none bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-2xl font-light">mail</span>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-medium text-primary mb-4 uppercase tracking-widest">Email Channels</h3>
                  <p className="text-on-surface-variant font-body font-light leading-loose tracking-wide text-sm">
                    admissions@studyworld.edu<br/>
                    partnerships@studyworld.edu
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <div className="bg-slate-50 p-10 rounded-none">
                <h4 className="font-headline font-medium text-primary mb-6 uppercase tracking-widest text-sm">Office Hours</h4>
                <div className="space-y-4 text-xs font-body font-light tracking-wide">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Monday – Friday</span>
                    <span className="text-primary font-bold tracking-widest">08:00 – 18:00 GMT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Saturday</span>
                    <span className="text-primary font-bold tracking-widest">09:00 – 14:00 GMT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-12 md:p-16 rounded-none border border-slate-50 shadow-2xl">
              <h2 className="text-3xl font-headline font-light text-primary mb-4 uppercase tracking-[0.1em]">Send an Inquiry</h2>
              <p className="text-sm text-on-surface-variant mb-12 font-body font-light tracking-wide leading-loose">Fill out the form below and an academic advisor will reach out within 24 hours.</p>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em]">Full Name</label>
                    <input className="w-full bg-slate-50 border-0 focus:ring-1 focus:ring-secondary rounded-none py-5 px-6 text-sm font-body font-light transition-all" placeholder="Enter your name" type="text"/>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em]">Email Address</label>
                    <input className="w-full bg-slate-50 border-0 focus:ring-1 focus:ring-secondary rounded-none py-5 px-6 text-sm font-body font-light transition-all" placeholder="Enter your email" type="email"/>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em]">College of Interest</label>
                  <select className="w-full bg-slate-50 border-0 focus:ring-1 focus:ring-secondary rounded-none py-5 px-6 text-sm font-body font-light appearance-none transition-all">
                    <option>Faculty of Mechanical Engineering</option>
                    <option>School of Computer Science</option>
                    <option>Department of Civil Engineering</option>
                    <option>Global Business School</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-headline font-bold text-primary uppercase tracking-[0.3em]">Your Message</label>
                  <textarea className="w-full bg-slate-50 border-0 focus:ring-1 focus:ring-secondary rounded-none py-5 px-6 text-sm font-body font-light transition-all resize-none" placeholder="Tell us about your academic goals..." rows={5}></textarea>
                </div>
                <button className="w-full bg-primary text-white font-headline font-bold py-5 rounded-none text-[10px] uppercase tracking-[0.4em] hover:bg-secondary transition-all duration-500 flex items-center justify-center space-x-3" type="submit">
                  <span>Send Inquiry</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
