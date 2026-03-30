import React from 'react';
import Link from 'next/link';

export default function CampusLife() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section: The Monograph Header */}
      <header className="relative w-full h-[716px] flex items-end px-8 pb-16 overflow-hidden">
        <img 
          alt="Main Campus Library" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgjjqJhtIxF75zRZjt_ldY2D1FGiq3QoD6EtjmoXcoHJeMn_LP-fY60fyVHIY8hOhwenHSESy-sfoUFkgEuWTpTIG0DtDLMJlVwj75FQ6D3nuwI9mIW_nsopeJ1DrOKeiGyUchRgO038C1mm3xjklB4OMPeBBzXjQm6sQDSC7GH6iO92P0xfhl8ta1XTMo-y2fsyvhiLKPzl4to0eQsNKkyBCt9XP1kPzDJnd70pde6ypnYo-mh3wbriSvoT0N6Pa1VxUD-u3hOY1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-label text-tertiary-fixed-dim tracking-[0.2em] uppercase text-sm mb-4">A Legacy of Excellence</p>
          <h1 className="font-headline text-white text-5xl md:text-7xl leading-tight max-w-3xl">
            Where Heritage Meets <br/> <span className="italic font-normal">Modern Innovation.</span>
          </h1>
        </div>
      </header>

      {/* World-Class Infrastructure Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-primary text-4xl md:text-5xl mb-6">World-Class Infrastructure</h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Our campuses are architectural testaments to academic rigor. From the silence of our centuries-old libraries to the high-frequency hum of our quantum labs, we provide environments that do more than house students—they inspire them.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-[1px] bg-outline-variant mb-3"></div>
            <span className="font-label text-xs uppercase tracking-widest text-outline">Section 01 / 03</span>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-12 gap-6">
          {/* Large Feature Card */}
          <div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-1 shadow-sm">
            <div className="relative group overflow-hidden">
              <img 
                alt="Advanced Research Lab" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAikxTRlDfhAHXJCkKsHvt7NRiTpJ4HiKFB8szZGk2Fur1Px0tCZwEqoTaSzN5d-a48RkLiML_QsI0YkHj-eWyW6leXFxvPK2JbbOy7nchdw5F6sfXBZs7gB3ZYvMdiDDjA7WWIpeExeZLY8X9U20t5SnK1Za5bwj2VQiYp1EFjLH-HLFo8N8aPBsQvHVUCdh1uXLo15Z8LVYeYuKHtr3wVcHtP7vAYL2R8KOWvGJ-J_LT0SHliRaehj-PBqvx31-D7N6cWvnWM5EzA"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
                <h3 className="font-headline text-white text-2xl">The Quantum Research Hub</h3>
                <p className="text-white/80 font-body text-sm mt-2">State-of-the-art facilities for theoretical physics and computation.</p>
              </div>
            </div>
          </div>

          {/* Tall Secondary Card */}
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-1 shadow-sm">
            <div className="relative group overflow-hidden h-full min-h-[400px]">
              <img 
                alt="Lecture Hall" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm_2sbPfqEVl0rfYLcsJ9mQ0bA7oIFva0PJaz9hVDE8pbSvQJJuidfthmXXjDZOFoW_byuy2PQVoMU3OWL9PKxlZqIx5zQ4mwlvk1WAlpbfIPfLPevagIm_j1xxivsKr3Gj11kW8PZaKSBcA13Z4ihRXmvKgJQmy-QDCDlsuKREDuKkuCtOOAe8AqLStajy2yt3fPSoIiYiC01r6EeeMKie38rKLx8xlRcRII0SGUt5Y2gPAuyrsrkwaBFwbJhMOy0kKVIZGJDz7UK"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-5xl font-normal">visibility</span>
              </div>
            </div>
          </div>

          {/* Small Grid Items */}
          <div className="col-span-12 md:col-span-4 bg-surface-container-low p-6 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-4 font-normal">menu_book</span>
              <h4 className="font-headline text-primary text-xl mb-2">The Central Archive</h4>
              <p className="font-body text-on-surface-variant text-sm">Housing over 2.4 million volumes and digital manuscripts.</p>
            </div>
            <Link className="text-primary font-bold text-xs uppercase tracking-widest mt-8 flex items-center hover:gap-2 transition-all font-body" href="#">
              Explore Collection <span className="material-symbols-outlined text-sm ml-1 font-normal">arrow_forward</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-1 shadow-sm">
            <img 
              alt="Sports Complex" 
              className="w-full h-[250px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXcGBFxz8A0cReJKcLwmuEjQ5dRRYkFz-CFHTvkUWtq-LhG9kUnStQF3yxM3gaI2RDVkzM_iPWK_V62uPFRLoetZzIXekdcVu30OAZWQtJSbkCf0hVugPE-O97KCD06kSL8NGiK1NmuTSZVuX4RlMCF_zIlO5unX5NOLad5KT7HdLa8s1TeGEvWhM8UZFuRwGwDXguIzwUsOXR6VdwXMLkDQGO6uBzbnPuQtw_elK7qcdatjwZM8tMflzQaXvMO67e8vVLm9PHV9bo"
            />
          </div>

          <div className="col-span-12 md:col-span-4 bg-primary text-white p-8">
            <h4 className="font-headline text-2xl mb-4">Sustainability First</h4>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              90% of our campus energy is sourced from on-site solar arrays and geothermal heat pumps, making us a leader in green education.
            </p>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-high relative z-10 p-1 shadow-2xl">
                <img 
                  alt="Students Collaborating" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChHoNCtw8Vv7U0rJMkG5w08V6k0VfmkowM1yih_nq1oVM-Mri3SyH1XDaxDBYZVQXTqhbc2t3nt2zus1jRD_bEXutm1B__dSMIDl88_dbIpw7nZMi8f2vJG28CLJkQQ53OrD3tGToYGUdOl40icp_f6JGqi-Ey5Jg6_mHlNAVTzlNyiG-o7EFHf3kKrrISg_YN8LeWpKa2drNOqRMGsnrB08qPBNoA9tjoHFoPIXUFc8uOdC0jk8f9TwLe_IH1DVLjeBX606IxqKml"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary-fixed-dim/20 -z-0"></div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 origin-center hidden lg:block">
                <span className="font-label text-outline text-[10px] tracking-[0.5em] uppercase whitespace-nowrap">Academic Excellence 2024</span>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="font-headline text-primary text-4xl md:text-5xl">Student Achievements</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-tertiary-fixed-dim pl-6 py-2">
                  <h5 className="font-headline text-xl text-primary">Rhodes Scholars 2024</h5>
                  <p className="font-body text-on-surface-variant text-sm mt-2">Four of our postgraduate researchers awarded the prestigious scholarship for global leadership.</p>
                </div>
                <div className="border-l-2 border-outline-variant pl-6 py-2">
                  <h5 className="font-headline text-xl text-primary">Global Innovation Prize</h5>
                  <p className="font-body text-on-surface-variant text-sm mt-2">The Engineering faculty secured first place at the International Robotics Summit in Singapore.</p>
                </div>
                <div className="border-l-2 border-outline-variant pl-6 py-2">
                  <h5 className="font-headline text-xl text-primary">Sustainability Grant</h5>
                  <p className="font-body text-on-surface-variant text-sm mt-2">$2.4M federal grant awarded to our student-led 'Clean Oceans' initiative.</p>
                </div>
              </div>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-DEFAULT font-medium hover:bg-primary/90 transition-all flex items-center gap-3 font-body">
                View Honor Roll
                <span className="material-symbols-outlined text-sm font-normal">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Galleries */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-primary text-4xl mb-4">Campus Galleries</h2>
          <div className="w-16 h-[1px] bg-tertiary-fixed-dim mx-auto mb-6"></div>
          <p className="font-body text-on-surface-variant">A visual journey through the spaces that define our academic identity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gallery Item 1 */}
          <div className="group cursor-pointer">
            <div className="border-[12px] border-surface-container p-1 overflow-hidden transition-all group-hover:border-primary-container">
              <img 
                alt="Historical Wing" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOtiM5l6xJ1Kt4mEir6thHqZDqFzKHB4OnnzPxh_kgjJ5YEWadWC75wWrPfFA-8QFynwBvoKHA4GYpAcnEUGRyIDmbm8ubh1kxouZ-ykKkSOP8IMBdAS-WvpE0478Mwl6VpNe7OzdF2NnjSaalODWKlmnJQnD90ZpSRCZVZovvnHYNuJ3c22FHrhqsxv6aVGOyUfszSWrpulIL9x9U3OuOIHBdz3U2thwZlxvhuxLHFsBhRItRVx4sMgASa0aAaPZkIc1M9XTTxk3g"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-headline text-lg text-primary">The Heritage Quarter</span>
              <span className="font-label text-xs text-outline font-body">24 Photos</span>
            </div>
          </div>
          
          {/* Gallery Item 2 */}
          <div className="group cursor-pointer">
            <div className="border-[12px] border-surface-container p-1 overflow-hidden transition-all group-hover:border-primary-container">
              <img 
                alt="Student Commons" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKptlsehuqP7_zage6kV2oV0YVXIGzh8jIxVgAhOTXBT_ZNUc2r5BiLDn84qBcbwDii0fi3QxAmemYI1H5veAjxomvHrh2ugbHhHX5PWp3oJ6ryz3VJjmiMl1sH39dVjXGk5sUef5jKmhkQ3L4aKfHz5XKAT7UWGh0CyCs_t_i0SmdtEMiCqWOQKKq30U2aAg7AwsjGlIT2jqKvruii744--XwJGM47-r-_UnzCkUC4iyKBaOuCJAvO4-NIllQoDkpqR-KlMnrGa0E"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-headline text-lg text-primary">Social Spaces</span>
              <span className="font-label text-xs text-outline font-body">18 Photos</span>
            </div>
          </div>
          
          {/* Gallery Item 3 */}
          <div className="group cursor-pointer">
            <div className="border-[12px] border-surface-container p-1 overflow-hidden transition-all group-hover:border-primary-container">
              <img 
                alt="Digital Arts Studio" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFmdokcDKI9yTGlA3-dDHtmYI2bhkt55pu9Hm_Vj5vm-a23XkNaJsA50SYblv_pUdgDyUJdkDswB2xVjnU1OZIQAuqYaaLFA-RhODsPpaG8GCclpaODgd5fv1iclVSrKLeO0FU100IXigLA5YevZ6w3GSFqhg3KFLOslzoBDVDKvYUpk9MlZ-EeAYHWsLXXbvEUoPla5EmRW2OPsO0O_6CP9k_7gC4C6SSk8IfGLn8ae8ytti0ZUOrQUbGhJPKdUYbV5GzZegd2i78"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-headline text-lg text-primary">Innovation Labs</span>
              <span className="font-label text-xs text-outline font-body">32 Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="bg-primary-container py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary-fixed-dim rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-fixed rounded-full blur-[120px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-headline text-white text-4xl md:text-5xl mb-8">Begin Your Academic Legacy</h2>
          <p className="font-body text-on-primary-container text-lg mb-12 max-w-2xl mx-auto">
            Applications for the Fall 2025 semester are now open. Join a community of scholars dedicated to shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold hover:brightness-110 transition-all rounded-DEFAULT font-body">
              Start Your Application
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/10 transition-all rounded-DEFAULT font-body">
              Request a Prospectus
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
