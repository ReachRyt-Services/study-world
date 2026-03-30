import React from "react";

export default function EngineeringCourses() {
  const ugCourses = [
    { title: "B.E Computer Science & Engineering", discipline: "Computer Science", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.E CSE with Cyber Security", discipline: "Cyber Security", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.E CSE with Artificial Intelligence & Machine Learning (AIML)", discipline: "AI & ML", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.E Electronics and Communication Engineering", discipline: "Electronics", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.E Electrical and Electronics Engineering", discipline: "Electrical", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.E Mechanical Engineering", discipline: "Mechanical", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
    { title: "B.Tech Artificial Intelligence & Data Science (AIDS)", discipline: "AI & Data Science", duration: "4 Years", eligibility: "10+2 with Math Focus" },
    { title: "B.Tech Information Technology", discipline: "IT", duration: "4 Years", eligibility: "10+2 with Physics, Chemistry, Math" },
  ];
  const pgCourses = [
    { title: "Master of Business Administration (MBA)", discipline: "Management", duration: "2 Years", eligibility: "Any UG Degree" },
  ];


  return (
    <main className="bg-surface antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary to-primary-container">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            alt="Engineering abstract" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC01X5AG-E_UGPk7sONu35Lz0vuWOOWIK_N_EyAhTrUFN6IfczPnMwqPKJku1_87jGthkeZFcOqTt08iszY5ljBuFYN_s8yKjBG1ObYYEv_NCeuMZ7xPTbfMSAnIoSze3-DfIWWyUxwEN8BHHUQ3zh12_CzL303gof9tW9x9gT-m0QfRpqzoXi7V-NATgC0Xlf8rVFJab6Alf7bfSwLRYXLqrVDAs2AerusIcEi7iUun2Lx-Spu0PuxwzNdRMVmsP0IuFPNW5FTer4B"
          />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-none bg-secondary/20 text-secondary-fixed mb-8 font-headline text-[10px] font-bold tracking-[0.3em] uppercase">
              Faculty of Engineering
            </span>
            <h1 className="font-headline font-light text-white tracking-[0.1em] mb-10 text-4xl md:text-6xl leading-tight uppercase">
              Engineering the <br/> <span className="font-normal text-secondary-fixed">Future.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-loose mb-12 font-body font-light tracking-wide">
              Developing the next generation of innovators through rigorous technical training, world-class research facilities, and global industry partnerships.
            </p>
            <div className="flex flex-wrap gap-6">
              <a className="px-10 py-4 bg-secondary text-white rounded-none font-headline font-medium text-xs uppercase tracking-widest transition-transform hover:scale-105" href="#courses">Explore Programs</a>
              <button className="px-10 py-4 border border-white/20 text-white rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">play_circle</span>
                Campus Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-32 px-8" id="courses">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="font-headline font-light text-3xl md:text-4xl text-primary tracking-[0.15em] mb-8 uppercase">Undergraduate Programs</h2>
            <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide max-w-2xl">Our engineering curriculum is designed to meet the demands of a rapidly evolving global technological landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {ugCourses.map((course, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 hover:border-secondary hover:shadow-lg transition-all duration-500 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block text-[9px] font-headline font-bold uppercase tracking-[0.2em] text-secondary border border-secondary px-2 py-1 mb-4 self-start">{course.discipline}</span>
                  <h3 className="text-sm font-headline font-medium text-primary mb-4 uppercase tracking-wide leading-snug flex-grow">{course.title}</h3>
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                      <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                      <span className="material-symbols-outlined text-secondary text-base">school</span>
                      <span>{course.eligibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="font-headline font-light text-3xl md:text-4xl text-primary tracking-[0.15em] mb-8 uppercase">Postgraduate Programs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {pgCourses.map((course, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 hover:border-secondary hover:shadow-lg transition-all duration-500 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block text-[9px] font-headline font-bold uppercase tracking-[0.2em] text-secondary border border-secondary px-2 py-1 mb-4 self-start">{course.discipline}</span>
                  <h3 className="text-sm font-headline font-medium text-primary mb-4 uppercase tracking-wide leading-snug flex-grow">{course.title}</h3>
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                      <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body">
                      <span className="material-symbols-outlined text-secondary text-base">school</span>
                      <span>{course.eligibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-primary p-12 flex flex-col justify-center text-center relative overflow-hidden group max-w-2xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-2xl font-headline font-light text-white mb-8 uppercase tracking-[0.2em]">Seek Guidance</h3>
              <p className="text-slate-300 mb-12 font-body font-light leading-relaxed tracking-wide">Our academic counselors are ready to help you map your career path in engineering.</p>
              <button className="w-full py-4 bg-secondary text-white rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-primary">Talk to Counselor</button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-surface-container-low border-y border-slate-100 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            <div>
              <div className="text-5xl font-headline font-light text-primary mb-4 tracking-tighter">95%</div>
              <div className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em]">Placement Rate</div>
            </div>
            <div>
              <div className="text-5xl font-headline font-light text-primary mb-4 tracking-tighter">120+</div>
              <div className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em]">Labs & Centers</div>
            </div>
            <div>
              <div className="text-5xl font-headline font-light text-primary mb-4 tracking-tighter">500+</div>
              <div className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em]">Industry Partners</div>
            </div>
            <div>
              <div className="text-5xl font-headline font-light text-primary mb-4 tracking-tighter">15k+</div>
              <div className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.3em]">Engineering Alumni</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
