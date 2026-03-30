import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[870px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Study World Campus"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA426FeTh-wigiI_Q-8cqWwLyKwfPnj1CAksgARVbvlO3v4tvCk0e9HUjI01VvBfSqvjrrFnalYdKyiduymTx1JeMcfV_y1EvJV1slQCtAwjlJbZ2UPXoToe-_rZ4qidkG6xwyksJ85SWmckotQ88B2qmG_TOgZg5W2l-BFAzdz2o8b1sDvuGlOgsHd9pNxXMQ-jebjY72YJLOyKZhYzgXmhy0mMiZEma4EPhb2F-YKBBcy92fUxSkcf1BPvyXSuGW2LL1VfJC7NGGs"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 px-8 md:px-20 max-w-4xl">
          <span className="inline-block mb-10 text-secondary-fixed-dim text-xs font-light tracking-[0.4em] uppercase font-headline">
            Est. 2004 • Excellence in Education
          </span>
          <h1 className="text-3xl md:text-5xl font-headline font-light text-white leading-[1.3] mb-8 tracking-[0.15em] text-balance uppercase">
            Shaping the <span className="font-normal text-secondary-fixed">Future</span>, Together.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-12 font-body font-light leading-relaxed tracking-wide">
            Nurturing the next generation of innovators through world-class infrastructure and a legacy of academic rigor. Join Coimbatore's premier education hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/courses">
              <button className="bg-secondary text-white px-10 py-3 rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-secondary-container transition-all flex items-center justify-center gap-4 group w-full sm:w-auto">
                Explore Programs
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </Link>
            <Link href="/campus">
              <button className="border border-white/30 text-white px-10 py-3 rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all w-full sm:w-auto">
                Virtual Tour
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 px-8 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 shadow-2xl">
          <div className="bg-white p-12 flex flex-col items-center text-center group hover:bg-primary transition-colors duration-700">
            <span className="text-4xl font-headline font-light text-primary mb-3 group-hover:text-white transition-colors tracking-tighter">15,000+</span>
            <span className="text-on-surface-variant font-medium uppercase tracking-[0.3em] text-[10px] group-hover:text-slate-300 transition-colors">Alumni Network</span>
          </div>
          <div className="bg-white p-12 flex flex-col items-center text-center group hover:bg-primary transition-colors duration-700">
            <span className="text-4xl font-headline font-light text-primary mb-3 group-hover:text-white transition-colors tracking-tighter">120+</span>
            <span className="text-on-surface-variant font-medium uppercase tracking-[0.3em] text-[10px] group-hover:text-slate-300 transition-colors">Academic Programs</span>
          </div>
          <div className="bg-white p-12 flex flex-col items-center text-center group hover:bg-primary transition-colors duration-700">
            <span className="text-4xl font-headline font-light text-primary mb-3 group-hover:text-white transition-colors tracking-tighter">98%</span>
            <span className="text-on-surface-variant font-medium uppercase tracking-[0.3em] text-[10px] group-hover:text-slate-300 transition-colors">Placement Rate</span>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="px-8 py-32 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-8 leading-tight uppercase tracking-[0.2em]">Our Premier Institutions</h2>
              <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide">
                A multi-disciplinary ecosystem designed to foster specialized expertise while encouraging cross-domain innovation.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-[1px] bg-secondary"></div>
              <div className="w-8 h-[1px] bg-slate-200"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-4 flex flex-col items-start border-l border-slate-100 group hover:border-secondary transition-colors duration-500">
              <div className="mb-10 text-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl font-light">engineering</span>
              </div>
              <h3 className="text-lg font-headline font-medium text-primary mb-6 uppercase tracking-widest">Engineering & Tech</h3>
              <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 tracking-wide">
                Empowering future engineers with cutting-edge labs, industry certifications, and hands-on research opportunities in AI, Robotics, and Core Engineering.
              </p>
              <a className="mt-auto text-[10px] font-headline font-bold uppercase tracking-[0.3em] text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="/colleges/engineering">
                Learn More <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
            <div className="p-4 flex flex-col items-start border-l border-slate-100 group hover:border-secondary transition-colors duration-500">
              <div className="mb-10 text-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl font-light">palette</span>
              </div>
              <h3 className="text-lg font-headline font-medium text-primary mb-6 uppercase tracking-widest">Arts & Science</h3>
              <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 tracking-wide">
                A vibrant community dedicated to liberal arts, commerce, and pure sciences, fostering critical thinking and creative expression in every student.
              </p>
              <a className="mt-auto text-[10px] font-headline font-bold uppercase tracking-[0.3em] text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="/colleges/arts">
                Learn More <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
            <div className="p-4 flex flex-col items-start border-l border-slate-100 group hover:border-secondary transition-colors duration-500">
              <div className="mb-10 text-secondary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl font-light">medical_services</span>
              </div>
              <h3 className="text-lg font-headline font-medium text-primary mb-6 uppercase tracking-widest">Paramedical Sciences</h3>
              <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed mb-10 tracking-wide">
                Bridging the gap in healthcare with advanced training in clinical care, laboratory technology, and patient management at our state-of-the-art facilities.
              </p>
              <a className="mt-auto text-[10px] font-headline font-bold uppercase tracking-[0.3em] text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" href="/programs">
                Learn More <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            </div>
          </div>

          {/* New Section: Explore More */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/about" className="group">
              <div className="bg-white p-8 border border-slate-100 hover:border-secondary transition-all h-full flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl font-light">help_outline</span>
                <h4 className="text-xs font-headline font-medium text-primary uppercase tracking-widest group-hover:text-secondary transition-colors">Why Study World</h4>
              </div>
            </Link>
            <Link href="/campus" className="group">
              <div className="bg-white p-8 border border-slate-100 hover:border-secondary transition-all h-full flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl font-light">potted_plant</span>
                <h4 className="text-xs font-headline font-medium text-primary uppercase tracking-widest group-hover:text-secondary transition-colors">Our Campus Life</h4>
              </div>
            </Link>
            <Link href="/campus#event" className="group">
              <div className="bg-white p-8 border border-slate-100 hover:border-secondary transition-all h-full flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl font-light">event</span>
                <h4 className="text-xs font-headline font-medium text-primary uppercase tracking-widest group-hover:text-secondary transition-colors">Our Events</h4>
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="bg-white p-8 border border-slate-100 hover:border-secondary transition-all h-full flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl font-light">newspaper</span>
                <h4 className="text-xs font-headline font-medium text-primary uppercase tracking-widest group-hover:text-secondary transition-colors">Latest News & Blogs</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Study World Section */}
      <section id="why-study-world" className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block mb-4 text-secondary text-xs font-light tracking-[0.4em] uppercase font-headline">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-6 leading-tight uppercase tracking-[0.2em]">Why Study World?</h2>
            <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide max-w-2xl">
              We go beyond academics. Study World is built on a foundation of innovation, mentorship, and a commitment to shaping leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "star", title: "Legacy of Excellence", desc: "Over two decades of producing graduates who lead in industry, research, and public service." },
              { icon: "group", title: "Expert Faculty", desc: "Learn from industry veterans and research scholars dedicated to your personal and academic growth." },
              { icon: "hub", title: "Industry Connections", desc: "Strong MoUs with top companies ensuring real-world exposure, internships, and placement support." },
            ].map((item) => (
              <div key={item.title} className="p-6 border-l border-slate-100 hover:border-secondary transition-colors duration-500">
                <span className="material-symbols-outlined text-secondary text-3xl font-light mb-6 block">{item.icon}</span>
                <h4 className="text-sm font-headline font-medium text-primary uppercase tracking-widest mb-3">{item.title}</h4>
                <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campus Life Section */}
      <section id="campus-life" className="px-8 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block mb-4 text-secondary text-xs font-light tracking-[0.4em] uppercase font-headline">Experience</span>
            <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-6 leading-tight uppercase tracking-[0.2em]">Our Campus Life</h2>
            <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide max-w-2xl">
              Life at Study World is vibrant and dynamic. From sports to cultural fests, our campus buzzes with energy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "sports_soccer", label: "Sports & Athletics" },
              { icon: "music_note", label: "Cultural Festivals" },
              { icon: "volunteer_activism", label: "Social Initiatives" },
              { icon: "science", label: "Innovation Clubs" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 flex flex-col items-center text-center border border-slate-100 hover:border-secondary hover:shadow-md transition-all duration-500">
                <span className="material-symbols-outlined text-secondary text-3xl font-light mb-4">{item.icon}</span>
                <p className="text-xs font-headline font-medium text-primary uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section id="our-events" className="px-8 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block mb-4 text-secondary text-xs font-light tracking-[0.4em] uppercase font-headline">Happenings</span>
            <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-6 leading-tight uppercase tracking-[0.2em]">Our Events</h2>
            <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide max-w-2xl">
              From national-level technical symposiums to inter-collegiate cultural meets — our calendar is always full.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "emoji_events", title: "Annual Tech Fest", desc: "A national symposium bringing together innovators, researchers, and industry leaders.", badge: "Technical" },
              { icon: "theater_comedy", title: "Kaleidoscope", desc: "Our flagship cultural extravaganza celebrating art, music, and talent from across Tamil Nadu.", badge: "Cultural" },
              { icon: "handshake", title: "Industry Connect Day", desc: "Companies meet students for seminars, networking, and on-campus interview drives.", badge: "Placement" },
            ].map((event) => (
              <div key={event.title} className="border border-slate-100 hover:border-secondary transition-all duration-500">
                <div className="p-8">
                  <span className="inline-block text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-secondary border border-secondary px-3 py-1 mb-6">{event.badge}</span>
                  <span className="material-symbols-outlined text-primary text-3xl font-light mb-4 block">{event.icon}</span>
                  <h4 className="text-sm font-headline font-medium text-primary uppercase tracking-widest mb-3">{event.title}</h4>
                  <p className="text-sm text-on-surface-variant font-body font-light leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Blogs Section */}
      <section id="news-blogs" className="px-8 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block mb-4 text-secondary text-xs font-light tracking-[0.4em] uppercase font-headline">Updates</span>
            <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-6 leading-tight uppercase tracking-[0.2em]">Latest News & Blogs</h2>
            <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide max-w-2xl">
              Stay updated with news, announcements, and insights from the Study World community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: "March 2025", tag: "News", title: "Study World Engineering Achieves 98% Placement Record", desc: "Our Engineering batch of 2025 achieved a historic placement record with top MNCs." },
              { date: "February 2025", tag: "Blog", title: "How to Choose the Right Engineering Branch", desc: "Our academic counsellors share insights on selecting the right specialization for your career goals." },
              { date: "January 2025", tag: "News", title: "New MoU Signed with Leading IT Companies", desc: "Study World has signed partnership agreements with five new companies for campus placement drives." },
            ].map((post) => (
              <div key={post.title} className="bg-white border border-slate-100 hover:border-secondary transition-all duration-500">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-secondary border border-secondary px-3 py-1">{post.tag}</span>
                    <span className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">{post.date}</span>
                  </div>
                  <h4 className="text-sm font-headline font-medium text-primary mb-3 leading-relaxed tracking-wide">{post.title}</h4>
                  <p className="text-xs text-on-surface-variant font-body font-light leading-relaxed">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-5/12 relative">
            <div className="aspect-[16/10] rounded-none overflow-hidden relative z-10">
              <img
                alt="Student Life"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3uSg3ED5KgJduoeRTi0Wgy6TRFSvUnX4D8seURuIIbHZ27nkzTzOsq4dKdKvHuIUQZURSG7ispjhkLMlEi4vkFFptFH4g0TdOpS-koZivYtbGd51U8Hc7VDACSuo2urMoBMS1KftGF88Y39iU9Ll5Ac5l9JC_BSJrlIzjKDB_YnWuAuHlXhLI0iAGDJp3OIEw6IAhkyp1m2NsMGtjzjxqoV93JVH9Zp2R5rtQeEOM4WceTJP-zd0Q7jYluj2wH6seXMfc7OWZSE4"
              />
            </div>
            <div className="absolute -top-10 -left-10 bg-primary p-10 z-20">
              <span className="text-white font-headline font-light text-2xl uppercase tracking-[0.2em]">Coimbatore</span>
              <p className="text-secondary-fixed text-[10px] font-bold tracking-[0.4em] uppercase mt-2">Innovation Hub</p>
            </div>
          </div>
          <div className="lg:w-7/12">
            <h2 className="text-2xl md:text-3xl font-headline font-light text-primary mb-8 leading-tight uppercase tracking-[0.15em]">Your Journey to Excellence Starts Here.</h2>
            <p className="text-base text-on-surface-variant mb-12 font-body font-light leading-loose tracking-wide">
              At Study World, we don't just teach. We mentor. Our holistic approach ensures that every student graduates not just with a degree, but with a vision.
            </p>
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div className="border-l border-slate-100 pl-6">
                <span className="block text-secondary font-headline font-light text-3xl mb-2 tracking-tighter">Global</span>
                <span className="text-on-surface-variant text-[10px] uppercase font-medium tracking-[0.2em]">Partnerships & MoUs</span>
              </div>
              <div className="border-l border-slate-100 pl-6">
                <span className="block text-secondary font-headline font-light text-3xl mb-2 tracking-tighter">Modern</span>
                <span className="text-on-surface-variant text-[10px] uppercase font-medium tracking-[0.2em]">E-Learning Systems</span>
              </div>
            </div>
            <Link href="/contact">
              <button className="bg-primary text-white px-12 py-4 rounded-none font-headline font-medium text-xs uppercase tracking-[0.3em] hover:bg-secondary transition-colors duration-500 w-full sm:w-auto">
                Apply for Admissions 2024
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
