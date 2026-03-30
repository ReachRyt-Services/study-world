"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const courseData: Record<string, any> = {
  "be-cse": {
    title: "B.E. Computer Science and Engineering",
    college: "Engineering",
    duration: "4 Years",
    description: "Our B.E. in Computer Science and Engineering offers a rigorous curriculum that blends theoretical foundations with practical expertise in software development, artificial intelligence, and cybersecurity.",
    outcomes: [
      "Proficiency in advanced programming languages and paradigms.",
      "Expertise in designing and deploying scalable cloud architectures.",
      "Deep understanding of machine learning algorithms and data science.",
      "Solid foundation in cybersecurity and network protocols."
    ],
    curriculum: [
      "Data Structures & Algorithms",
      "Operating Systems & Architecture",
      "Artificial Intelligence & Neural Networks",
      "Cloud Computing & DevOps",
      "Cybersecurity & Blockchain"
    ]
  },
  "be-mech": {
    title: "B.E. Mechanical Engineering",
    college: "Engineering",
    duration: "4 Years",
    description: "The Mechanical Engineering program at Study World focuses on precision engineering, robotics, and sustainable manufacturing systems, preparing students for the 4th Industrial Revolution.",
    outcomes: [
      "Design and analysis of complex mechanical systems.",
      "Expertise in CAD/CAM and digital manufacturing.",
      "Knowledge of sustainable energy resources.",
      "Hands-on experience with industrial robotics."
    ],
    curriculum: [
      "Thermodynamics & Fluid Mechanics",
      "Mechatronics & Robotics",
      "Computer Aided Design (CAD)",
      "Manufacturing Technology",
      "Vibration & Structural Dynamics"
    ]
  },
  "be-ece": {
    title: "B.E. Electronics and Communication",
    college: "Engineering",
    duration: "4 Years",
    description: "Explore the core of modern communication and electronics, from semiconductor physics to 5G networks and VLSI design.",
    outcomes: [
      "Design of high-performance integrated circuits.",
      "Analysis of wireless and satellite communication systems.",
      "Proficiency in signal processing and embedded systems.",
      "Competence in IoT and smart system design."
    ],
    curriculum: [
      "Digital Signal Processing",
      "VLSI Design & Fabrication",
      "Wireless Communications",
      "Embedded Systems & RTOS",
      "Antennas & Wave Propagation"
    ]
  },
  "be-ai-ds": {
    title: "B.E. Artificial Intelligence & Data Science",
    college: "Engineering",
    duration: "4 Years",
    description: "This specialized program bridges the gap between data-driven insights and intelligent systems, focusing on deep learning, big data, and cognitive computing.",
    outcomes: [
      "Deployment of deep learning models in production.",
      "Big data processing using Hadoop and Spark.",
      "Ethics and governance in AI systems.",
      "Advanced predictive analytics and visualization."
    ],
    curriculum: [
      "Deep Learning & Computer Vision",
      "Natural Language Processing",
      "Big Data Analytics",
      "Reinforcement Learning",
      "Statistical Modeling for AI"
    ]
  },
  "bsc-cs": {
    title: "B.Sc. Computer Science",
    college: "Arts & Science",
    duration: "3 Years",
    description: "A comprehensive foundation in computer science, focusing on programming, database management, and web technologies.",
    outcomes: [
      "Strong coding skills in multiple languages.",
      "Database design and optimization.",
      "Full-stack web development proficiency.",
      "Understanding of computational mathematics."
    ],
    curriculum: [
      "Programming in C/C++/Java",
      "Database Management Systems",
      "Web Technologies (React/Node)",
      "Software Engineering Principles",
      "Discrete Mathematics"
    ]
  },
  "ba-english": {
    title: "B.A. English Literature",
    college: "Arts & Science",
    duration: "3 Years",
    description: "An intensive study of global literature, linguistics, and critical theory, fostering analytical thinking and creative expression.",
    outcomes: [
      "Critical analysis of literary texts across eras.",
      "Advanced proficiency in written and spoken English.",
      "Deep understanding of cultural and literary history.",
      "Creative and technical writing expertise."
    ],
    curriculum: [
      "British & American Literature",
      "Literary Theory & Criticism",
      "Linguistics & Phonetics",
      "Creative Writing Workshop",
      "Post-Colonial Studies"
    ]
  },
  "bcom-general": {
    title: "B.Com. General",
    college: "Arts & Science",
    duration: "3 Years",
    description: "Preparing students for careers in finance, accounting, and business management with a focus on modern commerce practices.",
    outcomes: [
      "Expertise in financial and cost accounting.",
      "Knowledge of corporate laws and taxation.",
      "Understanding of banking and financial services.",
      "Business analytics and auditing competence."
    ],
    curriculum: [
      "Financial Accounting",
      "Corporate Laws",
      "Business Mathematics & Statistics",
      "Income Tax Law & Practice",
      "E-Commerce & Digital Banking"
    ]
  }
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courseData[slug] || courseData["be-cse"]; // Fallback to CSE if slug not found

  return (
    <main className="min-h-screen bg-white pt-24 uppercase">
      {/* Banner */}
      <section className="bg-primary py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-0 animate-slow-pan"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-secondary font-black tracking-[.4em] text-[10px] mb-6 block animate-fade-in-up">STUDY WORLD INSTITUTIONS // {course.college}</span>
          <h1 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tighter leading-tight mb-8 animate-fade-in-up delay-100">
            {course.title}
          </h1>
          <div className="flex gap-4 animate-fade-in-up delay-200">
            <span className="bg-white/10 text-white px-6 py-2 text-[10px] font-bold tracking-widest backdrop-blur-md">{course.duration} PROGRAM</span>
            <span className="bg-secondary text-primary px-6 py-2 text-[10px] font-black tracking-widest">ENROLLMENT OPEN</span>
          </div>
        </div>
        {/* Subtle bg texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
           <div className="w-[800px] h-[800px] border-[50px] border-white/20 rounded-full animate-ping duration-[10000ms]"></div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-2xl font-black text-primary mb-6 border-l-4 border-secondary pl-6">OVERVIEW</h2>
              <p className="text-slate-600 text-lg leading-relaxed normal-case font-medium">
                {course.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-primary mb-8 border-l-4 border-secondary pl-6 animate-fade-in-up">LEARNING PATHWAY</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum.map((item: string, index: number) => (
                  <div key={index} className="bg-slate-50 p-6 flex items-center gap-4 group hover:bg-primary transition-colors duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 400}ms` }}>
                    <span className="text-3xl font-black text-primary/10 group-hover:text-white/20">0{index + 1}</span>
                    <span className="text-primary font-bold text-xs tracking-wide group-hover:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-primary mb-8 border-l-4 border-secondary pl-6">PROSPECTIVE OUTCOMES</h2>
              <div className="space-y-4">
                 {course.outcomes.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-slate-100 hover:border-secondary transition-colors group">
                     <span className="material-symbols-outlined text-secondary text-xl group-hover:scale-125 transition-transform">verified</span>
                     <p className="text-slate-500 text-sm normal-case group-hover:text-primary transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 bg-primary p-10 text-white shadow-2xl space-y-8">
              <div className="p-4 border border-white/20 bg-white/5 backdrop-blur-sm">
                 <h3 className="text-xl font-bold mb-4 text-secondary">ADMISSIONS 2026</h3>
                 <p className="text-xs text-white/60 mb-6 normal-case leading-relaxed">Secure your position in one of our most sought-after programs. Admissions are evaluated on academic merit and creative potential.</p>
                 <Link href="/admissions" className="block w-full bg-secondary text-primary py-4 text-center font-black text-[10px] tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
                    APPLY NOW
                 </Link>
              </div>

              <div className="space-y-4">
                 <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border-l-2 border-secondary text-[10px] font-bold tracking-widest">
                    BROCHURE <span className="material-symbols-outlined">download</span>
                 </button>
                 <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border-l-2 border-transparent hover:border-secondary transition-all text-[10px] font-bold tracking-widest">
                    FEE STRUCTURE <span className="material-symbols-outlined">payments</span>
                 </button>
                 <button className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border-l-2 border-transparent hover:border-secondary transition-all text-[10px] font-bold tracking-widest">
                    SCHOLARSHIPS <span className="material-symbols-outlined">redeem</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
