import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5 font-body">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline text-lg font-light text-white mb-8 tracking-[0.2em] uppercase">Study World</div>
          <p className="text-sm font-light leading-loose text-slate-400 mb-8 tracking-wide">
            Engineering excellence in global education through rigorous standards and industry integration.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="text-secondary-fixed text-[10px] font-bold mb-8 font-headline uppercase tracking-[0.3em]">Institutions</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/colleges/engineering">Engineering & Tech</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/colleges/arts">Arts & Science</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/colleges/allied-health">Paramedical Sciences</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-secondary-fixed text-[10px] font-bold mb-8 font-headline uppercase tracking-[0.3em]">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/about">About Us</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/admissions">Admissions</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-all text-xs font-light tracking-wide" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-secondary-fixed text-[10px] font-bold mb-8 font-headline uppercase tracking-[0.3em]">Connect</h4>
          <div className="flex space-x-6 mb-8">
            <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
            <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-lg">share</span></a>
            <a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-lg">mail</span></a>
          </div>
          <p className="text-slate-400 text-xs font-light tracking-wide mb-2">admissions@studyworld.edu</p>
          <p className="text-slate-400 text-xs font-light tracking-wide">+91 99449 11955</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body text-[10px] font-light text-slate-500 uppercase tracking-widest">© 2024 Study World Group. Engineering the Future.</p>
        <div className="flex space-x-12">
          <Link className="text-[10px] font-light text-slate-500 hover:text-white uppercase tracking-widest" href="/privacy">Privacy</Link>
          <Link className="text-[10px] font-light text-slate-500 hover:text-white uppercase tracking-widest" href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
