import React from "react";

export default function EngineeringCourses() {
  const courses = [
    {
      title: "B.Tech Computer Science & Engineering",
      discipline: "Computer Science",
      description: "Focus on algorithms, software architecture, and full-stack development with industry-aligned curriculum.",
      duration: "4 Years",
      eligibility: "10+2 with Physics, Chem, Math",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbLGYzd-vfhyRJ9SoE77RUp5XS46p4ij6QpO44UsO7mHz0v2Z_23QmfG8B4zB_VWbJVYRt4SlDXX-DUCk1RAQ0dyxw2--Qj-EJPjJKNy0qp74rd289eTapek-3sudjUw7AjISNHR8IYnMqW0ohnEMyBQr0jElnH8LSl8HnlopACAikfmn6-JnH5qNXyrApNPPklGAWhdukgJEfX8HuTiUcwMRh1QjZfL5T-gCKUMhlq5N8O73Cn-u5qovWKRc-0aF7miotANSjheQc",
      tag: "Computer Science"
    },
    {
      title: "B.Tech Mechanical Engineering",
      discipline: "Mechanical",
      description: "Master thermodynamics, robotics, and advanced manufacturing processes in our state-of-the-art workshops.",
      duration: "4 Years",
      eligibility: "10+2 with PCM (Min 60%)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCizJixdL2x0rpp6lJNqOKmJWCcT6V-TKS63krPC0Eb9gM8SH7uSxbC4-QlvNqLvKTLe11UbSlGcv7fseCbcl4n7jkU3vTZ9vEKJP-SCWpEa9fGB8vuFEehOmg37fbDJ-oplL5sZN-1x1QzJqkoPt9ZF3BRJybZBMQ8ZFmaTwYY-n4eWcNbWPrCKdPxIQQO_iEw3z26mvctUG8BfxOnTCDtP5sqKg6cgmJwhH82JYu_7B8y6Hl_GlJmjWScbYu79oAMCyyXMRAayuk",
      tag: "Mechanical"
    },
    {
      title: "B.Tech AI & Data Science",
      discipline: "Emerging Tech",
      description: "Explore machine learning, neural networks, and big data analytics at our specialized AI Excellence center.",
      duration: "4 Years",
      eligibility: "10+2 with Math Focus",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72TAMnAWWjA-OQP3q6HggAINYNGG8BrLjiB_XP1oVI61fJBDP_g8zBIw9EDJ_gyUxl3sycx3ltbRsLfaKp7rKXdVauaAMFca9dyW-L39_aBttB53ERKpMnMParT1CQNfmiqt4d7MRZFrdiOy6DWl3t7UyUwSp5qTSAeQy4qgwLjmZAzlrdDOXu7nDIAWkcekMCKl__bNrpVARYzbtXhfXhHV9-t7jwXggl9bENn93Uu80uqmeaNTnREQGdftgvKvsY8TAt9_xuLtv",
      tag: "Emerging Tech"
    },
    {
      title: "B.Tech Electronics & Comm.",
      discipline: "Electronics",
      description: "VLSI design, embedded systems, and wireless communications for the next era of connectivity.",
      duration: "4 Years",
      eligibility: "10+2 with PCM Merit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3bxX-7xjkIlDtm1jEuZG88Ve2bYmhGceM_ITj6UA8nT7aOB5OY6CPaxrASJT1ijoMKnfBXYLedejQ0WywyPxTiGvu3mS_CjVdOrRQkpREId_t276eIZi-M-IsXZFdKuwLpFDOM1U-5YyH9rlgSkg0bTOnM50R5rLey-kMg1BIUlaDZWgWA_u3ZbgT3SSg1uiIG1-apV5fBa0ewPKpm45Cz18XeZ00DgyMW7wPGaYjw9WbEcqwoSYiFePBYUseb0vHC61e1YA2ZPuB",
      tag: "Electronics"
    },
    {
      title: "M.Tech Advanced Systems",
      discipline: "Postgrad",
      description: "Specialized research-driven program for working professionals and graduates aiming for leadership roles.",
      duration: "2 Years",
      eligibility: "B.Tech/B.E in related field",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgGmefSs6hmZE__zp5Iv2pV-kR8z7FEjSi2AdO6daBRkqDCGeJEb_W0sFLetaPCTgM1jGCd74pbXH68kPrIgiqJfU0DgI7JTFgWSo5hKHZdq4PfSagD9QLQ69thRoZ60S1pWzva-gdVYhNzV2iBjVz_MnDQTl-7wmJkL_fo-GZVSWErLKP-qTFq8O8ACN9jRR-1ezghBkj_Vy7F96L8IA0TZFkHq3qf8kTb2gLTZ-EtxipiJt-XE6lEjrFSSc1xqb2WpRjdpAttjIg",
      tag: "M.Tech"
    }
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
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="font-headline font-light text-3xl md:text-4xl text-primary tracking-[0.15em] mb-8 uppercase">Undergraduate & Graduate Programs</h2>
              <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide">Our engineering curriculum is designed to meet the demands of a rapidly evolving global technological landscape.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {courses.map((course, idx) => (
              <div key={idx} className="group bg-white rounded-none overflow-hidden shadow-none hover:shadow-2xl transition-all duration-500 border border-slate-50 flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" 
                    src={course.image}
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-none text-[10px] font-bold tracking-[0.2em] font-headline uppercase">
                    {course.tag}
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-xl font-headline font-medium text-primary mb-6 uppercase tracking-wider">{course.title}</h3>
                  <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 flex-grow tracking-wide">
                    {course.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 text-xs text-on-surface font-body font-light tracking-wide">
                      <span className="material-symbols-outlined text-secondary text-lg">schedule</span>
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-on-surface font-body font-light tracking-wide">
                      <span className="material-symbols-outlined text-secondary text-lg">school</span>
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                  </div>
                  <div className="mt-auto flex gap-4">
                    <button className="flex-1 bg-slate-50 text-primary py-4 px-6 rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined text-sm">download</span>
                      Brochure
                    </button>
                    <button className="p-4 bg-secondary text-white rounded-none hover:bg-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-primary p-12 flex flex-col justify-center text-center relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-headline font-light text-white mb-8 uppercase tracking-[0.2em]">Seek Guidance</h3>
                <p className="text-slate-300 mb-12 font-body font-light leading-relaxed tracking-wide">Our academic counselors are ready to help you map your career path in engineering.</p>
                <button className="w-full py-4 bg-secondary text-white rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-primary">Talk to Counselor</button>
              </div>
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
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
