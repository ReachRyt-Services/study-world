import Link from "next/link";

const courses = [
  { title: "B.Com (CA)", duration: "3 Years", description: "Commerce with Computer Applications — bridging business and technology.", slug: "bcom-ca" },
  { title: "BBA", duration: "3 Years", description: "Bachelor of Business Administration with comprehensive management training.", slug: "bba" },
  { title: "BBA with Aviation", duration: "3 Years", description: "Business Administration with a specialized focus on the aviation industry.", slug: "bba-aviation" },
  { title: "BBA Logistics & Supply Chain Management", duration: "3 Years", description: "Managing global supply chains and logistics operations for modern industries.", slug: "bba-logistics" },
  { title: "BCA", duration: "3 Years", description: "Bachelor of Computer Applications — software, databases, and systems design.", slug: "bca" },
  { title: "BCA with IBM", duration: "3 Years", description: "BCA with exclusive IBM curriculum integration and industry certification.", slug: "bca-ibm" },
  { title: "BSc AI & DS", duration: "3 Years", description: "Artificial Intelligence and Data Science — building the next generation of AI practitioners.", slug: "bsc-ai-ds" },
  { title: "BSc Computer Science", duration: "3 Years", description: "Foundation in computation, programming, and data structures.", slug: "bsc-cs" },
  { title: "BSc Information Technology", duration: "3 Years", description: "IT infrastructure, networking, and systems management.", slug: "bsc-it" },
  { title: "BSc Clinical Psychology", duration: "3 Years", description: "Understanding the human mind — clinical assessment, therapy, and behavioral science.", slug: "bsc-clinical-psychology" },
];

export default function ArtsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 uppercase">
      {/* Hero Section */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-0 animate-slow-pan"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent z-1"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <span className="text-secondary font-bold tracking-[.3em] text-xs mb-6 block animate-fade-in-up">Arts & Science College</span>
          <h1 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none mb-8 animate-fade-in-up delay-100">
            ARTS & SCIENCE<br/>PROGRAMS
          </h1>
          <div className="h-2 w-32 bg-secondary animate-scale-in delay-300 origin-left"></div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline font-light text-3xl md:text-4xl text-primary tracking-[0.15em] mb-6 uppercase">Courses Offered @ SWCAS</h2>
          <p className="text-base text-on-surface-variant font-body font-light max-w-2xl normal-case">Affiliated to Bharathiar University, Coimbatore. Explore our diverse range of undergraduate programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={course.slug} className="group block bg-white border border-primary/10 hover:border-secondary transition-all duration-500 shadow-sm hover:shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-[9px] font-headline font-bold uppercase tracking-[0.2em] text-white bg-primary px-3 py-1">{course.duration}</span>
                </div>
                <h3 className="text-base font-black text-primary leading-tight uppercase group-hover:text-secondary transition-colors mb-3">{course.title}</h3>
                <p className="text-slate-500 text-xs normal-case leading-relaxed">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary py-24 px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">diversity_3</span>
            <h4 className="text-xl font-black uppercase">COMMUNITY</h4>
            <p className="text-white/60 text-sm normal-case leading-relaxed">A vibrant environment where diverse perspectives converge to create meaningful impact.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">lightbulb</span>
            <h4 className="text-xl font-black uppercase">CREATIVITY</h4>
            <p className="text-white/60 text-sm normal-case leading-relaxed">Fostering innovation across disciplines through traditional and digital mediums.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-secondary text-5xl">trending_up</span>
            <h4 className="text-xl font-black uppercase">GROWTH</h4>
            <p className="text-white/60 text-sm normal-case leading-relaxed">Dedicated to the holistic development of our students beyond academic excellence.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
