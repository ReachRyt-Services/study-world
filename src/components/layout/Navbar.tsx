"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    const colleges = [
        {
            name: "Study World Engineering",
            href: "/colleges/engineering",
            description: "Pioneering technical excellence and innovation.",
        },
        {
            name: "Study World Arts",
            href: "/colleges/arts",
            description: "Empowering minds through arts and scientific inquiry.",
        },
        {
            name: "Study World Paramedical",
            href: "/institutions",
            description: "Training the backbone of the healthcare system.",
        }
    ];

    const navSections = [
        {
            title: "About Us",
            href: "/about",
            items: ["The Group", "Promoters", "COO", "Principal", "Mission & Vision", "Testimonials", "Mandatory Disclosure", "Committee", "Downloads"]
        },
        {
            title: "Admissions",
            href: "/admissions",
            items: ["Eligibility Criteria", "Scholarships", "Admission Guidelines", "Accommodation & Mess", "PM Vidyalaxmi portal"]
        },
        {
            title: "Campus Life",
            href: "/campus",
            items: ["Womens Helpline", "Training & Placement", "Infrastructure", "Physical Education", "Library", "Associations", "Clubs", "Professional Bodies", "Event"]
        }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md dark:bg-slate-950/90 shadow-none">
            <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                <Link href="/" className="font-headline text-xl font-light text-white tracking-[0.2em] uppercase">
                    Study World
                </Link>

                <nav className="hidden md:flex items-center space-x-8 font-headline font-medium text-xs uppercase tracking-widest">
                    <Link 
                        href="/" 
                        className={isActive('/') ? "text-white border-b border-secondary pb-1" : "text-slate-300 hover:text-white transition-colors"}
                    >
                        Home
                    </Link>
                    
                    {/* Our Colleges Dropdown */}
                    <div className="relative group py-2">
                        <button className={`flex items-center gap-1 transition-colors ${isActive('/colleges') || isActive('/institutions') ? "text-white border-b border-secondary pb-1" : "text-slate-300 hover:text-white"}`}>
                            Institutions
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-900 shadow-2xl rounded-none border border-primary/5 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                            {colleges.map((college) => (
                                <div key={college.name} className="flex flex-col">
                                    <Link 
                                        href={college.href}
                                        className="flex items-start gap-4 px-6 py-4 hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors group/item"
                                    >
                                        <div className="p-2 bg-primary/5 rounded-none text-primary dark:text-primary-fixed group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                            <span className="material-symbols-outlined">school</span>
                                        </div>
                                        <div>
                                            <p className="text-primary dark:text-white font-bold text-sm tracking-tight mb-1 font-body">{college.name}</p>
                                            <p className="text-on-surface-variant dark:text-white/60 text-xs font-medium leading-tight font-body">{college.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link 
                        href="/campus" 
                        className={isActive('/campus') ? "text-white border-b border-secondary pb-1" : "text-slate-300 hover:text-white transition-colors"}
                    >
                        Campus Life
                    </Link>
                    <Link 
                        href="/about" 
                        className={isActive('/about') ? "text-white border-b border-secondary pb-1" : "text-slate-300 hover:text-white transition-colors"}
                    >
                        About Us
                    </Link>
                    <Link 
                        href="/contact" 
                        className={isActive('/contact') ? "text-white border-b border-secondary pb-1" : "text-slate-300 hover:text-white transition-colors"}
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center">
                    <Link href="/admissions" className="border border-secondary text-white px-8 py-2 rounded-none font-headline font-medium text-xs uppercase tracking-widest hover:bg-secondary transition-all duration-300 hidden sm:block">
                        Apply Now
                    </Link>
                    <button 
                        className="lg:hidden text-white p-2 ml-4"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-[30px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>
            
            <div className="bg-white/10 h-[1px] w-full self-end"></div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[90] overflow-y-auto p-6 flex flex-col gap-8 animate-in slide-in-from-right duration-300 font-body">
                    <Link href="/" className="text-primary font-bold text-sm uppercase tracking-widest border-b border-primary/5 pb-4">Home</Link>
                    
                    <div className="flex flex-col gap-4">
                        <p className="text-primary/40 font-bold text-[10px] uppercase tracking-[0.2em]">Institutions</p>
                        {colleges.map((college) => (
                            <Link key={college.name} href={college.href} className="flex items-center gap-3 bg-primary/5 p-4 rounded-sm">
                                <span className="material-symbols-outlined text-primary">school</span>
                                <span className="text-primary font-bold text-xs uppercase">{college.name}</span>
                            </Link>
                        ))}
                    </div>

                    {navSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-4">
                            <p className="text-primary/40 font-bold text-[10px] uppercase tracking-[0.2em]">{section.title}</p>
                            <div className="grid grid-cols-1 gap-2">
                                {section.items.slice(0, 5).map((item) => (
                                    <Link key={item} href={`${section.href}#${item.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} className="text-primary font-semibold text-xs py-1 opacity-70">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <Link href="/admissions" className="bg-primary text-white text-center font-bold text-xs uppercase tracking-widest py-4 rounded-sm mt-auto shadow-xl">
                        Apply Now
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
