import React from 'react';

export default function InstitutionsHub() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section: Monograph Style */}
      <section className="relative w-full h-[614px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Campus Architecture" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLLS45IGjFoa7OL0iEbaQN9N0tQAUVlsSGOjeIXNbv-ZziNVYAVB86A3H3Z5ac0bmBaxTNnCW-t_5eXGZQ29lHezATgBziB8jydSMtZRi50d9xmfM_hrYL7owVmF-xxWZvOfYIj4ymCRNIV8GKQljQQM8v4uoBSYrWBwT5BCbndTLJzKa1rPS1XTcUeJs3-RaToDZmb0cwdz9Jx0MnDdjod_ODqlRMwjsRhpNYPSy28wKvInZqNTV2vSo-njdDLP_tlSJ28wgkJLEz"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6 rounded-sm font-body">Foundations of Excellence</span>
            <h1 className="font-headline text-5xl md:text-7xl text-white leading-tight mb-6">Three Premier Institutions. One Shared Legacy.</h1>
            <p className="text-secondary-fixed text-xl max-w-xl font-light leading-relaxed italic font-headline">
              Forging the leaders of tomorrow through rigorous scholarship and creative ambition across three distinct pillars of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Institutions Grid Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Sidebar Narrative */}
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="font-headline text-4xl text-primary mb-8">Our Academic Pillars</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>At Study World Group, our institutions are more than just places of learning; they are curated ecosystems designed to foster mastery.</p>
              <p>Each college maintains its own distinct identity while contributing to a collective vision of global progress and ethical leadership.</p>
              <div className="pt-8">
                <div className="h-px bg-outline-variant/30 w-16 mb-4"></div>
                <span className="font-headline italic text-primary text-xl tracking-tight">"Where tradition meets the frontier of innovation."</span>
              </div>
            </div>
          </div>

          {/* Main Content: Institutional Cards */}
          <div className="lg:col-span-8 space-y-24">
            {/* College 1: Engineering */}
            <article className="group">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg bg-surface-container shadow-sm">
                <img 
                  alt="Engineering Innovation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_NjrqHHn0monS03nfj0A9qs0kVMzqFyjueIsUK2TFwbYI6fQRDSHiAovlI8UgDRLoePbmjSHwWgpAfPmmBz-VMk4035pQauJuin_kH9ijyfSg8gSv6H5Y8LP9whGYE41fs4FnLaDPnemr4xObEI3gzGdV-dQo7kOmorXdlvihoDO_kWM6a_4EYByFgJHuDTUEHLbAIFCsvpzydrDpbQCKg9ND_QBGSD4qPvO3eWMZioKRy2HXmocIunV9Ac9w8c9Qip5CeNSBl7B"
                />
                <div className="absolute top-6 left-6 bg-gradient-to-br from-[#e9c176] to-[#b08d48] px-4 py-2 text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase shadow-lg font-body">
                  Engineering Innovation
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-12">
                  <h3 className="font-headline text-3xl text-primary mb-4">College of Advanced Engineering</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-body">
                    Pioneering the next generation of infrastructure, sustainable energy, and digital intelligence. Our labs are at the forefront of global research, bridging the gap between theoretical physics and applied technology.
                  </p>
                  <a href="/colleges/engineering" className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/btn font-body">
                    LEARN MORE 
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform font-normal">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>

            {/* College 2: Arts */}
            <article className="group">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg bg-surface-container shadow-sm">
                <img 
                  alt="Creative Excellence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc698crHUptVyiXDE-mn8OG6oX4ej_yRZ5zcmP7deONj9zWnwSqYroIczDXjNKYhSk5KibwCFFZnHQIgvsl5WETQ3eMNypNJlXvZ3DUTt3oFTkQYgHJyBuGfo-O5BD88oWp29UycIGb4bkZEMY3LwfGezmttfVpctJtQzLZXvS0jXeJvoZuZ2_3i6qfElMxa--K79dsZ3F1M9nYKM0BxWWdm8fxaB1-EqAekqfj4J7K4GT6wpk2KKac5yv5JRwYPUfQbGUI1PSzOKK"
                />
                <div className="absolute top-6 left-6 bg-gradient-to-br from-[#e9c176] to-[#b08d48] px-4 py-2 text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase shadow-lg font-body">
                  Creative Excellence
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-12">
                  <h3 className="font-headline text-3xl text-primary mb-4">Institute of Liberal Arts &amp; Design</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-body">
                    Cultivating the voices that shape culture. From classical philosophy to modern digital media, our curriculum encourages critical thinking and aesthetic mastery in an ever-changing world.
                  </p>
                  <a href="/colleges/arts" className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/btn font-body">
                    LEARN MORE 
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform font-normal">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>

            {/* College 3: Paramedical */}
            <article className="group">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg bg-surface-container shadow-sm">
                <img 
                  alt="Healthcare Leadership" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3zeMK2KrSH11bbmtXQ-GYiL44W6WS9ODgPztahKYine_VycQpsg7d4G1CR3dvhfutbVyzLhM021DrNatfNN1DnySLWFordvy1Jps9AiawUBAo5tFN11Uv4ARb-47sCEvI4u6cqSmA54CbXeMNZz3MkHu9aieP_-npmO0fxn_Ru1GCPJL09zbvuNynpHs6LusO2PRq-eHFr1gojnUP5nng0H0Dm4TrxmbLXwMhOBYbUMs1uyLBC-c6PV16Jx37WRcYuoHYqi7bx2S"
                />
                <div className="absolute top-6 left-6 bg-gradient-to-br from-[#e9c176] to-[#b08d48] px-4 py-2 text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase shadow-lg font-body">
                  Healthcare Leadership
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-12">
                  <h3 className="font-headline text-3xl text-primary mb-4">Academy of Paramedical Sciences</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-body">
                    Empowering the backbone of the healthcare system. Our intensive clinical programs and modern simulation centers prepare students for high-impact roles in patient care and medical technology.
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold tracking-wide group/btn font-body">
                    LEARN MORE 
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform font-normal">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section: Tonal Transition */}
      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="font-headline text-4xl text-primary mb-2">15,000+</div>
            <div className="text-on-surface-variant text-sm tracking-widest uppercase font-semibold font-body">Alumni Worldwide</div>
          </div>
          <div>
            <div className="font-headline text-4xl text-primary mb-2">120+</div>
            <div className="text-on-surface-variant text-sm tracking-widest uppercase font-semibold font-body">Degree Programs</div>
          </div>
          <div>
            <div className="font-headline text-4xl text-primary mb-2">85+</div>
            <div className="text-on-surface-variant text-sm tracking-widest uppercase font-semibold font-body">Research Patents</div>
          </div>
          <div>
            <div className="font-headline text-4xl text-primary mb-2">32</div>
            <div className="text-on-surface-variant text-sm tracking-widest uppercase font-semibold font-body">Global Partners</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 text-center bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl text-primary mb-6">Begin Your Journey Today</h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed font-body">
            Applications for the next academic cycle are now open. Explore our campuses or connect with an admissions advisor to find your path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-DEFAULT hover:opacity-90 active:scale-[0.99] transition-all font-bold font-body">
              Download Prospectus
            </button>
            <button className="border border-outline-variant text-primary px-8 py-4 rounded-DEFAULT hover:bg-surface-container transition-all font-bold font-body">
              Book a Campus Tour
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
