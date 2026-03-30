import React from "react";

export default function InstitutionsHub() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Modern architectural campus building" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASItNi5Z4Wu_k67qVf4lY_O3_V4NsgSo4Q1gZobeYNOe880LaNoapuuxSfxEhJ53FWIHz5Jd3-RWp--anhKvqdOtmjnk9Xciij4zCb1BSfe9IZ3J_MilIRa_Vi8-vVqe0eTpT0jzE1f-N1yGHOix7t7BecYGd_iyTMcVZ2db7b7yxKKp-Fu8Kz7NropLjpix0oSFTJp6hgyquO0R-CAQyqhFvI7KsdXEdZVVS9CIYF9U_rv1RlUj-roHVDQDKmUaZ3F3a2s705Vab7"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 container mx-auto px-8 lg:px-12">
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-4 bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-none">Global Academic Hub</span>
            <h1 className="font-headline font-light text-white text-5xl md:text-7xl tracking-tight leading-[1.1] mb-8 uppercase">
              Three Premier Institutions.<br/><span className="font-normal text-secondary-fixed">One Shared Legacy.</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl font-body font-light leading-relaxed mb-10 tracking-wide">
              Pioneering educational excellence across Engineering, Arts, and Paramedical sciences. We shape the future through rigorous inquiry and innovative practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-white px-10 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-secondary/90 transition-all flex items-center gap-4">
                Download Prospectus
                <span className="material-symbols-outlined text-sm">download</span>
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                Our Accreditation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Bento Grid Section */}
      <section className="py-32 bg-surface px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="font-headline font-light text-3xl md:text-5xl text-primary tracking-[0.1em] mb-8 uppercase">Explore Our Specialized Colleges</h2>
              <p className="text-on-surface-variant text-base font-body font-light leading-loose tracking-wide">Each institution under Study World Group is a center of excellence, equipped with world-class labs and led by industry-seasoned faculty.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-secondary font-medium font-headline text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                Scroll to discover <span className="material-symbols-outlined text-sm animate-bounce">south</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Engineering Card */}
            <div className="group relative bg-white rounded-none overflow-hidden shadow-none transition-all hover:shadow-2xl flex flex-col h-full border border-slate-100">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
                  alt="Engineering lab" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKgaGPaTWyinCLpEKF9ZWkRPiGGNoHHsoE_OZJbDzlz2dA8vcsASlaw8kRedYEjxWpQ1L2rQJxZ_V248yMLIg4ZJrXNtrSo3USSTOH7aHxhIzVUdcR7juHPml93_7ZUwoHiqsh3pro5kP2UfkW0uSTkK-GymXK43KGuNw805uSO7VeVC2pL_fzi309SAwySl9qAvmRiS-h9qEfIBXknEZixQ566oEg2y7B-qsurYbgxGBqV2SkdXlwv2kH_E7OJtW1Rj2bmrCW6ILk"
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center mb-8 text-secondary">
                  <span className="material-symbols-outlined text-2xl font-light">precision_manufacturing</span>
                </div>
                <h3 className="font-headline font-medium text-xl text-primary mb-6 uppercase tracking-widest">Study World Engineering</h3>
                <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 flex-grow tracking-wide">
                  Architecting the technological landscape of tomorrow with focus on AI, Robotics, and Sustainable Energy solutions.
                </p>
                <a href="/colleges/engineering" className="group/btn w-full bg-slate-50 text-primary py-4 rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-3">
                  Explore College
                  <span className="material-symbols-outlined text-xs transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Arts & Design Card */}
            <div className="group relative bg-white rounded-none overflow-hidden shadow-none transition-all hover:shadow-2xl flex flex-col h-full border border-slate-100">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
                  alt="Arts studio" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWszZRQOUeOHHYvyN2jMMLLUQuBXVDIsr85UspiRZX-wsJu9Sg9uc8Ck6oUMYJdSiPbjgKclah7Ew9zl7zV1sRd3K9nTgfdzaN0fW2ROsZNK2fAmhA7aUAsd8lL1Ws4ncNqyOfeu0o1cLVpCrxCeCD0ItlD-t8io3M_O4GzboWcVPjaSDFBue6P5MP2IuVak92k4nXRg35TPSNV8zxVoIVXcVuZnVC7PRYJVGi3xMvq0ou-Bvqsd0m5dlxP9eHHQz1lIAEGSZohb3K"
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center mb-8 text-secondary">
                  <span className="material-symbols-outlined text-2xl font-light">palette</span>
                </div>
                <h3 className="font-headline font-medium text-xl text-primary mb-6 uppercase tracking-widest">Study World Arts</h3>
                <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 flex-grow tracking-wide">
                  Nurturing creative visionaries in contemporary arts, design, and digital media through immersive studio practice.
                </p>
                <a href="/colleges/arts" className="group/btn w-full bg-slate-50 text-primary py-4 rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-3">
                  Explore College
                  <span className="material-symbols-outlined text-xs transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Paramedical Card */}
            <div className="group relative bg-white rounded-none overflow-hidden shadow-none transition-all hover:shadow-2xl flex flex-col h-full border border-slate-100">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" 
                  alt="Medical simulation" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYZvpkmoL5ACa386sBkS-SihEWJJrIh9NhxMFewF0xuwxBBkme_gDZKX3KxXMfL3JVyLBM7S2n3qjZjcyBhU1yOJXbUAuUQPEOXh1vx3SqTHruhmmatlwKFR37urBQJrQk_PLNeeDuXv1d6brftBRy47njAhOVdqm4PznKlkh9ZpG5snxRp5c3LI_gN_JRgjSTYpRzTgXnlmJvmGopAs_Znb4MkFxNvjq1qsSEL6soWewqcNnCBiPs9_qJy-nvr2K8sl4jRjtQJsFL"
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center mb-8 text-secondary">
                  <span className="material-symbols-outlined text-2xl font-light">medical_services</span>
                </div>
                <h3 className="font-headline font-medium text-xl text-primary mb-6 uppercase tracking-widest">Study World Paramedical</h3>
                <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 flex-grow tracking-wide">
                  Training the backbone of the healthcare system with advanced diagnostic techniques and critical care training.
                </p>
                <a href="/colleges/allied-health" className="group/btn w-full bg-slate-50 text-primary py-4 rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-primary hover:text-white flex items-center justify-center gap-3">
                  Explore College
                  <span className="material-symbols-outlined text-xs transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="space-y-4">
              <div className="text-5xl font-headline font-light tracking-tighter">15k+</div>
              <div className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em]">Global Alumni</div>
              <div className="h-px w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-px bg-secondary w-4/5"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-light tracking-tighter">98%</div>
              <div className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em]">Placement Rate</div>
              <div className="h-px w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-px bg-secondary w-[98%]"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-light tracking-tighter">45+</div>
              <div className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em]">Industry Partners</div>
              <div className="h-px w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-px bg-secondary w-2/3"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-light tracking-tighter">120+</div>
              <div className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em]">Specialized Labs</div>
              <div className="h-px w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-px bg-secondary w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-headline font-light text-3xl md:text-5xl text-primary mb-10 uppercase tracking-[0.2em] leading-tight">Ready to Engineer Your Future?</h2>
          <p className="text-base text-on-surface-variant mb-16 font-body font-light leading-loose tracking-wide max-w-2xl mx-auto">
            Join the community of innovators and scholars at Study World Group. Admissions for the 2024 academic year are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-white px-12 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500">Apply Now</button>
            <button className="border border-slate-200 text-primary px-12 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all duration-500">Contact Admissions</button>
          </div>
        </div>
      </section>
    </main>
  );
}
