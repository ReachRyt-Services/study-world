import React from "react";

export default function AboutUs() {
  const pillars = [
    {
      title: "Academic Rigor",
      description: "Commitment to the highest international standards of teaching, research, and technical proficiency.",
      icon: "workspace_premium"
    },
    {
      title: "Global Outlook",
      description: "Fostering a diverse community that prepares students for a borderless professional landscape.",
      icon: "diversity_3"
    },
    {
      title: "Innovation First",
      description: "Continually evolving our curriculum to stay ahead of technological and industrial shifts.",
      icon: "rocket_launch"
    }
  ];

  const milestones = [
    { year: "2004", title: "The Foundation", description: "Inaugural campus opening with a vision to revolutionize technical education in the region." },
    { year: "2012", title: "Global Expansion", description: "Establishment of international partnerships and the launch of the Global Student Exchange Program." },
    { year: "2018", title: "Center of Excellence", description: "Opening of the multi-million dollar Advanced Engineering Research Center." },
    { year: "2024", title: "Engineering the Future", description: "Celebrating 20 years with the launch of AI-driven hybrid learning models." }
  ];

  const leadership = [
    {
      name: "Dr. Alexander Sterling",
      role: "Chancellor & Chairman",
      desc: "Former MIT Research Fellow with 30 years in global educational policy.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQNk6uWYLAgJvoACIK6muWy15DoHn64LGUa6lGiNGj49h10CS7C0SM4qqenIpvKL9aNIEAquk77Z5K1Ic_XW1nlf1i53P1LwYZXl9NHzoC7yj2a1M4QfdGrA14kLxFGqMTA3K9uN_-2BjFrQdowDpgDQQO8LaD6GvuG8sWeGwLdm6IFvGjyOmrhLY4D_WAYKyCofo-PFiNj3Z7Q5aqKMuKS4TIFgwGqGHpEvAZB_srrCfBOMDqaRLpDR0koKVyBqcmLjKJH9j4iICV"
    },
    {
      name: "Prof. Elena Vance",
      role: "Pro-Vice Chancellor",
      desc: "Expert in STEM pedagogy and former Director of Engineering Excellence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrPgcMwgUuy2AVRw03JZPZGkxl0zjqEfTH5BcG82KwZ113U6thWjW9-2nzp8HaowSp0QnV5ifXjWa6NEAEZRR25XzrhMj20hum1o3-kbmOPAIJ3e7vMIEICEFhqXSmyQZKCMTvTgqhd65uk2eusR0bV2Tjuj2A74M9eQYt3OWAZvavwzedeZqF21jPJhg5AOi8lyiMbEjS_5VPt5UKOVvSg4RSZQ8G1h6dVbjFvmZeSaCCIYN1HYs0T8613xp05vU5ozLummEfj3ig"
    },
    {
      name: "Marcus Chen",
      role: "Director of Global Operations",
      desc: "Leading strategic expansions and international campus integrations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFoTjx4JCvDVA2uhLGD6fm-AdD_ZnO2C9PZS4F--n-7V_g_qekao29KeXccr-wYyMP9c3TzMK4amK6tkbZO_zeqk4ytAFUY8CTQUJ_d6yXlbtx1wiMEYcpv66Y_artFiu8bIgIlqk_LU-8adX0NBUV4pn2jE-btnUKuTGzBtiyKdsKRWZiBxsWoayLiXA3tx02SVlDgZ6YKmakI8ja3V0zO48WoTWzBMwhg_nI2HzetYytKwCDbgNkdFbHobBmqYJM3lOsJvH0u1wg"
    },
    {
      name: "Dr. Sarah Jenkins",
      role: "Dean of Student Success",
      desc: "Dedicated to enhancing student experience and post-graduate career pathways.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe-vac_JHcX2WecXvLCpAlD6QCD_O8uBDe3IvzXEDVoKEVfWtYJeGw_Yxj0x02Tym5km0s1VpwsnUkxr6WJsrQTWOEOv18HUGGgg-GShyx3GaMU6HLsq3pWyN0wOcE9n-_s-DuD46U8IHjN6rviYZ0u2fJs_OlWOk4sjYVqx_sTV2SqhLtk9LMEyl7Eeg2K9o3G23C5ho_SB-XJ-cqmJwxVNjdlNnaRzHKGQ8hIV9WgE3xiYg4PDloOoShSm6Vp3E_uTSHeQT5RUc2"
    }
  ];

  return (
    <main className="bg-surface antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-20 flex gap-4 p-4">
          <div className="flex-1 grid grid-cols-2 gap-4 h-full">
            <img 
              className="w-full h-full object-cover rounded-none grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5ke384r3NDzLnq32wQZAxzc-uib29d_Msg3Qi-YrFrLhqq4AYOc96omHxnW5d1ZpPXpt_385zSdrFb9JcneRHOOW-KzUpEbBU0bI6v29LOkyI4cOZ7uAbzB1pVzZZWrq9Dz1ffRmNPEIlk-zGgHGrTGPYTtMv7tfMKqhM9War2obU-xuWgTwnXG3R15mEM-a2aBOKr2-MBWRYIQ-KB5gU3kHv1BjeEhuSCfU_JE2OhPGn7_LfF1AUMOfMa2ro02AG_he5oij2O01"
              alt="Campus heritage"
            />
            <img 
              className="w-full h-full object-cover rounded-none grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKvd9oWNfPMts1R8wXNf68TYhIADTh_sD3HOr-yopO1ALwcPGJEzmO2SJxUOySn0QFlowvS8vhmuAC-x7M0K1GxHjw_nuCb5G1KlNTDK-Q8k9YlHCQReN9MA7UJuWOx3sqczBgonOqTHkdA6CkQzZqUewUfGlzTnMwun3d5ZpezwWpuH0uM9zAa92WL93X358a_Bsevy_lkfPksQoqrso03bAiPDIwIA87LbQOKlTor3jrqwNXf91Z47mJgwGkalFalCd8WEes-fu0"
              alt="Students collaborating"
            />
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-6 rounded-none bg-secondary/30 text-white text-[10px] font-headline font-bold mb-10 tracking-[0.4em] uppercase">Our Heritage</span>
            <h1 className="font-headline text-white tracking-[0.1em] leading-[1.2] text-4xl md:text-6xl font-light mb-10 uppercase">
              A Tradition of <br/><span className="font-normal text-secondary-fixed">Excellence</span> Since 2004.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-loose font-body font-light mb-16 tracking-wide">
              Pioneering educational standards for two decades, bridging the gap between academic rigor and global industry demands.
            </p>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-headline font-light text-white tracking-tighter">20+</span>
                <span className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Years of Impact</span>
              </div>
              <div className="w-px h-16 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-headline font-light text-white tracking-tighter">50k+</span>
                <span className="text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Global Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-8 uppercase tracking-[0.2em] leading-tight">Our Core Pillars</h2>
              <p className="text-base text-on-surface-variant font-body font-light leading-loose tracking-wide">The guiding principles that drive our mission to engineer the future of global education and professional development.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-50 p-12 rounded-none group hover:bg-primary transition-all duration-700">
                <div className="w-12 h-12 rounded-none bg-secondary flex items-center justify-center text-white mb-10 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl font-light">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-headline font-medium text-primary group-hover:text-white mb-6 uppercase tracking-widest">{pillar.title}</h3>
                <p className="text-sm text-on-surface-variant group-hover:text-slate-300 font-body font-light leading-relaxed tracking-wide">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-surface px-8 lg:px-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-light text-primary mb-8 uppercase tracking-[0.2em]">Our Leadership</h2>
            <p className="text-base text-on-surface-variant max-w-2xl font-body font-light leading-loose tracking-wide">Guided by visionaries with deep experience in international education and institutional development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {leadership.map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-none grayscale hover:grayscale-0 transition-all duration-1000 bg-slate-100">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <h4 className="text-lg font-headline font-medium text-primary mb-2 uppercase tracking-widest">{leader.name}</h4>
                <p className="text-secondary font-headline font-bold text-[10px] uppercase tracking-[0.3em] mb-4">{leader.role}</p>
                <p className="text-xs text-on-surface-variant font-body font-light leading-relaxed tracking-wide italic">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-5xl mx-auto bg-primary py-24 px-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-headline font-light text-white mb-10 uppercase tracking-[0.2em] leading-tight">Be Part of Our Next Chapter</h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto mb-16 font-body font-light leading-loose tracking-wide">Whether you're an aspiring student, a researcher, or a potential partner, let's shape the future of education together.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-4 bg-white text-primary rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-secondary hover:text-white transition-all">Explore Campuses</button>
              <button className="px-12 py-4 border border-white/20 text-white rounded-none font-headline font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all">Contact Admissions</button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </main>
  );
}
