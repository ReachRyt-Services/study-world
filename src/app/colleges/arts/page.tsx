import Link from "next/link";

const courses = [
  {
    title: "B.Sc. Computer Science",
    duration: "3 Years",
    description: "Foundation in computation, programming, and data structures.",
    slug: "bsc-cs",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs5N51W5Tpn7H41S_O0r2-17Gzb3gB5sElGD0LTA3YGa_UbM92y3_aFVOCTHQBgRX20z6kgweeeK-j5boprcc7a8myZCKlQSWub6-bZiFg5WxZiWXujGw7tmez_ZRvxlwb1DYUfdnR9HHo7abGRMOT8j7l2Drui2g6LZsSQ-uPvjezWp4FYJpZ50w0pz5ZEAQyQMvmlyBUYSWxR5PiZ2oChu88QFTkJn_XrttzgDyX-tBalTMVtHpRDWF9IypVB5d9_ult8S1Mx6y7"
  },
  {
    title: "B.A. English Literature",
    duration: "3 Years",
    description: "Explore the depth of language, criticism, and creative expression.",
    slug: "ba-english",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpNjQxwGg7bL8qiTfLpYjVe5uRs-67pFaLGtJr99gYRavOqbYGa7rVmg9bIycBosaSBQFez9k3mLbHetLSboG_7yKrAWeo0JImtv6S81mwVrNV7PnY7APL9ZJAYD4OV3d8a6lr8zh6Ki8l_B_GkvolyMXjyMTEVyNSX_fHgWfnRciNj_Jj4C5UPwATjW_0ZWVpNgFjmKKgzT6UuJ1NnJ_jnB8nAX_x92hAaxu4n4Zvl2-o8yHsG7b8ULP_gHdSpvZkgqfXUgs9q2r8"
  },
  {
    title: "B.Com. General",
    duration: "3 Years",
    description: "Develop expertise in commerce, accounting, and business laws.",
    slug: "bcom-general",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1kukXQvt3v5QOMpFctqHn6R-ZSzp7lhPBaliZkdgcUAPCVhpVYnZVqQuLGfIDOu5HYfAwR9WEKpN_Yeb9tWkDsHkJ_SoFyTqiJzqedKWiiKurcbeMtISjYcLHV2Hxr71K1PLtjYKsQPsxL-sPOMUXJKKg8x2WhW3r52MBULBdJ6LoeKOCmV_jaZRgHf6zLCdpOGwy3VWMXTwyH77LYbkhiN31gheRQtlYvenDj7qqJgHNaISKvHqR-5YDjGIuJqNzopikQ7XAsms"
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link key={course.slug} href={`/courses/${course.slug}`} className={`group block bg-white border border-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl animate-scale-in`} style={{ animationDelay: `${index * 150}ms` }}>
              <div className="aspect-square relative overflow-hidden">
                <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-bold tracking-widest">{course.duration}</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-primary leading-tight uppercase group-hover:text-secondary transition-colors mb-4">{course.title}</h3>
                <p className="text-slate-500 text-xs normal-case leading-relaxed mb-6">{course.description}</p>
                <span className="text-[10px] font-black tracking-widest text-primary/40 group-hover:text-primary transition-colors">VIEW DETAILS →</span>
              </div>
            </Link>
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
