import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import { scrollToSection } from "./utils/scrollToSection";

// Simple icon components (no external UI libs needed)
const Check = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Globe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Truck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M10 17h4V5H2v12h2" />
    <path d="M14 7h5l3 4v6h-2" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default function AtlasSolutionsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* NAVBAR */}
      <NavBar />

        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-[#0f1722] via-[#121b28] to-[#0f1722] text-slate-100"
        >
          {/* subtle spotlight glow behind the logo */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-28 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full
                            bg-[radial-gradient(ellipse_at_center,rgba(174,182,193,0.14),transparent_60%)]
                            blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
            <div className="flex flex-col items-center text-center">
              
              <motion.img
                src="/images/atlas-logo-large.png"
                alt="Atlas Solutions"
                width={880}
                height={260}
                className="w-[18rem] sm:w-[24rem] md:w-[30rem] lg:w-[36rem] h-auto object-contain
                          drop-shadow-[0_0_25px_rgba(174,182,193,0.25)]"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                style={{
                  WebkitMaskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%)',
                  maskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 100%)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  mixBlendMode: 'lighten',
                }}
              />

              <motion.h1
                className="mt-8 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AEB6C1] to-[#6B7684]">
                  Smarter Sourcing
                </span>{" "}
                for a Material World
              </motion.h1>

              <motion.p
                className="mt-5 max-w-2xl text-slate-300 text-base sm:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                High-grade materials, vetted suppliers, compliant logistics. From RFQ to
                on-time delivery - certainty at scale.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href="#contact"
                  onClick={(e)=>scrollToSection(e, "contact")}
                  className="rounded-2xl px-5 py-3 bg-gradient-to-r from-[#AEB6C1] to-[#6B7684]
                            text-slate-900 font-semibold shadow-lg"
                >
                  Request Pricing
                </a>
                <a
                  href="#materials"
                  onClick={(e)=>scrollToSection(e, "materials")}
                  className="rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5"
                >
                  Explore Materials
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      {/* TRUST */}
      <section className="border-y border-white/10 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-80">
            {['On‑time Delivery','ISO‑Aligned QA','Customs Expertise','Secure Payments','Multi‑Vendor Bids'].map((k) => (
              <span key={k} className="text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                <Shield className="h-4 w-4"/> {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="h-6 w-6"/>,
              title: 'Global Sourcing',
              desc: 'Vet suppliers, negotiate contracts, and secure availability across metals, chemicals, and specialty materials.'
            },
            {
              icon: <Truck className="h-6 w-6"/>,
              title: 'Logistics & Incoterms',
              desc: 'Freight, insurance, and customs. We optimize routes and terms from EXW to DDP.'
            },
            {
              icon: <Shield className="h-6 w-6"/>,
              title: 'Compliance & QA',
              desc: 'Documentation, CoA/CoC, REACH/ROHS, and vendor audits - handled by default.'
            }
          ].map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 border border-white/10 text-slate-100">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Materials We Source</h2>
          <a
            href="#contact"
            onClick={(e)=>scrollToSection(e, "contact")}
            className="text-sm underline underline-offset-4 hover:text-cyan-300"
          >
            Don’t see yours? Ask us →
          </a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Aluminum Powders & Pastes',
              img: '/images/aluminum-powder.jpg',
              desc: 'Used across coatings, construction, and advanced manufacturing — sourced from trusted global producers.'
            },
            {
              title: 'Engineering Plastics & Resins',
              img: '/images/resin.jpg',
              desc: 'High-performance polymers for automotive, packaging, and industrial applications — tailored to your production needs.'
            },
            {
              title: 'Specialty Chemicals',
              img: '/images/chemicals.jpg',
              desc: 'Industrial chemicals and additives for formulations, surface treatments, and manufacturing processes.'
            },
            {
              title: 'Metals & Alloys',
              img: '/images/metals.jpg',
              desc: 'Ferrous and non-ferrous metals in various forms — supporting fabrication, machining, and production industries.'
            },
            {
              title: 'Coatings & Additives',
              img: '/images/coating.jpg',
              desc: 'Pigments, binders, and performance enhancers for paints, inks, and industrial finishes.'
            },
            {
              title: 'Packaging & Industrial Inputs',
              img: '/images/transport.jpg',
              desc: 'Industrial containers, protective films, and consumables for safe, efficient shipment and storage.'
            }
          ].map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition scale-105 group-hover:scale-110 group-hover:opacity-90"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold">{c.title}</p>
                <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
                <p className="mt-3 text-xs text-slate-400">Specs and documentation available on request. MOQ flexible.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-left sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#AEB6C1] to-[#6B7684]">
            How We Work
          </h2>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {[
              { title: "Inquiry", desc: "You tell us what you need — materials, specifications, and delivery targets." },
              { title: "Sourcing", desc: "We identify the right producers and negotiate the most competitive terms." },
              { title: "Quality Assurance", desc: "We ensure every product meets international standards and full compliance." },
              { title: "Logistics", desc: "We coordinate freight, insurance, and customs to deliver on time, every time." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#AEB6C1] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>

                {/* Connector Arrow (not for last card) */}
                { i < 3 && (
                  <svg
                    className="pointer-events-none hidden md:block absolute right-[-70px] top-1/2 -translate-y-1/2"
                    width="100"
                    height="60"
                    viewBox="0 0 100 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#67e8f9" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                      <marker id={`head-${i}`} viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M0,0 L10,5 L0,10 z" fill="#818cf8" />
                      </marker>
                      <filter id={`glow-${i}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#67e8f9" floodOpacity="0.25" />
                      </filter>
                    </defs>

                    <path
                      d={
                        i % 2 === 0
                          ? "M5,30 C40,10 60,10 95,30"   // gentler top curve
                          : "M5,30 C40,50 60,50 95,30"   // gentler bottom curve
                      }
                      stroke={`url(#grad-${i})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter={`url(#glow-${i})`}
                      markerEnd={`url(#head-${i})`}
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(174,182,193,0.10),transparent_70%)]" />
      </section>





      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold">Built by Operators, Not Just Brokers</h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300">
              Atlas Solutions was founded to fix the real‑world frictions of cross‑border procurement. We combine hands‑on
              logistics expertise with rigorous vendor vetting and transparent pricing. Our playbook is simple: speed, certainty, and compliance.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300"/> Supplier network across EU, US, and APAC</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300"/> REACH/ROHS familiarity; MSDS workflows</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300"/> Post‑order QA and on‑time delivery tracking</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1600&auto=format&fit=crop" 
                alt="Warehouse and containers" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Tell us what you need</h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base">Share a quick brief and we’ll come back with options, pricing, and lead times.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-300"/> Email: <a className="underline hover:text-cyan-300" href="mailto:hello@atlas-solutions.co">AlonSarfati3@gmail.com</a></p>
                <p className="flex items-center gap-2"><Truck className="h-5 w-5 text-cyan-300"/> WhatsApp: <a className="underline hover:text-cyan-300" href="https://wa.me/00000000000">+972-509901348</a></p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
            <p>© {new Date().getFullYear()} Atlas Solutions — All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-cyan-300">Privacy</a>
              <a href="#" className="hover:text-cyan-300">Terms</a>
              <a href="#" className="hover:text-cyan-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
