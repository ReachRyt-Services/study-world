import React from "react";

const courses = [
  { title: "BSc Cardiac Technology", duration: "3 Years", description: "Specialized training in cardiac diagnostics, ECG, echocardiography, and cardiovascular care.", discipline: "Cardiac Science" },
  { title: "BSc Medical Laboratory Technology", duration: "3 Years", description: "Hands-on learning in clinical lab diagnostics, hematology, microbiology, and biochemistry.", discipline: "Lab Technology" },
  { title: "BSc Operation Theatre and Anaesthesia Technology", duration: "3 Years", description: "Training in OT management, sterilization, anaesthesia assistance, and surgical support.", discipline: "OT Technology" },
  { title: "BSc Radiography and Imaging Technology", duration: "3 Years", description: "Expertise in X-ray, CT, MRI, and other diagnostic imaging techniques.", discipline: "Radiology" },
];

export default function AlliedHealthPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <span className="text-secondary font-bold tracking-[.3em] text-xs mb-6 block">Allied Health Sciences College</span>
          <h1 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tighter leading-none mb-8 uppercase">
            ALLIED HEALTH<br />SCIENCES
          </h1>
          <p className="text-white/70 max-w-2xl font-body font-light leading-relaxed text-base normal-case">
            Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Training the backbone of the healthcare system with advanced diagnostic techniques and critical care training.
          </p>
          <div className="h-2 w-32 bg-secondary mt-8 origin-left"></div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline font-light text-3xl md:text-4xl text-primary tracking-[0.15em] mb-6 uppercase">Courses Offered @ SWAHS</h2>
            <p className="text-base text-on-surface-variant font-body font-light max-w-2xl">
              Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. All programs lead to promising healthcare careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="group bg-white border border-slate-100 hover:border-secondary hover:shadow-lg transition-all duration-500">
                <div className="p-10">
                  <span className="inline-block text-[9px] font-headline font-bold uppercase tracking-[0.2em] text-secondary border border-secondary px-3 py-1 mb-6">{course.discipline}</span>
                  <h3 className="text-lg font-headline font-medium text-primary mb-4 uppercase tracking-wide leading-snug">{course.title}</h3>
                  <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-6 normal-case">{course.description}</p>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant font-body pt-4 border-t border-slate-100">
                    <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                    <span>{course.duration}</span>
                    <span className="text-slate-300 mx-2">|</span>
                    <span className="material-symbols-outlined text-secondary text-base">school</span>
                    <span>10+2 with Biology/Science</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary py-24 px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">medical_services</span>
            <h4 className="text-xl font-black uppercase">Clinical Training</h4>
            <p className="text-white/60 text-sm leading-relaxed">Hands-on exposure in hospital settings from the very first year of your program.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">biotech</span>
            <h4 className="text-xl font-black uppercase">Modern Equipment</h4>
            <p className="text-white/60 text-sm leading-relaxed">State-of-the-art labs equipped with the latest diagnostic and imaging tools.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">group</span>
            <h4 className="text-xl font-black uppercase">Expert Faculty</h4>
            <p className="text-white/60 text-sm leading-relaxed">Learn from experienced healthcare practitioners and medical educators.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline font-light text-3xl text-primary mb-6 uppercase tracking-[0.2em]">Begin Your Healthcare Journey</h2>
          <p className="text-on-surface-variant font-body font-light mb-10 normal-case">
            Admissions open for 2025-26. Join the next generation of healthcare professionals at Study World.
          </p>
          <a href="/contact" className="inline-block bg-secondary text-white px-12 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500">
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
