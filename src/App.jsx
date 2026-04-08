import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Users, MousePointerClick, CheckCircle2, 
  ArrowRight, Star, Send, Award, PlayCircle, Image as ImageIcon,
  ChevronRight, Phone, Mail, MoveHorizontal, Monitor,
  Briefcase, GraduationCap, Tv, TerminalSquare, Menu, X, 
  Download, MessageCircle, Maximize2, Calculator, Calendar
} from 'lucide-react';

// Custom Instagram SVG component to bypass the missing export build error
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  seo: {
    title: "ME digital | AI Automation & Digital Strategy",
    description: "Mark Joseph Espinosa crafts AI-driven digital experiences for brands. Web design, social media growth, and automation.",
  },
  brand: {
    name: "ME digital",
    headline: "Stop blending in. Start dominating with data-driven design.",
    subheadline: "I engineer simple, human, and high-converting digital systems that turn your audience into loyal customers on autopilot.",
    contact: {
      email: "hello@markespinosa.com",
      phone: "+63 920-906-2796",
      socialHandle: "@markespinosa627",
      whatsapp: "https://wa.me/639209062796", 
      calendarUrl: "https://calendar.app.google/2aixwBAXDDJpNRxV8" // Replace with your Google Calendar link
    }
  },
  caseStudy: {
    hook: "How we generated 1,566% more link clicks for a client.",
    problem: "The client lacked a consistent brand identity and automation systems, causing their message to get lost in the noise.",
    solution: "We established strict brand guidelines, deployed AI-assisted audience research, and curated highly targeted content.",
    metrics: [
      { label: "Link Clicks", value: 1566, prefix: "+", suffix: "%", decimals: 0, icon: MousePointerClick },
      { label: "Post Reach", value: 5.47, prefix: "", suffix: "m", decimals: 2, icon: Users },
      { label: "Reactions", value: 489, prefix: "+", suffix: "%", decimals: 0, icon: TrendingUp }
    ]
  },
  portfolio: {
    graphics: [
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1516382772782-959fb0a2eb75?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200", 
    ],
    websites: [
      { title: "ZBNI Architecture", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
      { title: "Kevin Paige E-Commerce", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" }
    ],
    videoEditing: {
      before: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"  
    }
  },
  reviews: [
    { text: "Produces copy fast! I have no regrets working with Mark!", author: "Mateo V." },
    { text: "The best social media guy! Saved me hours of work with the power of AI and planning!", author: "Seth Y." },
    { text: "Easy to collaborate with and a fast learner!", author: "Madelyn N." }
  ]
};

const CV_DATA = {
  profile: {
    name: "Mark Joseph Espinosa",
    title: "Digital Strategist & AI Engineer",
    email: "markespinosaofficial@gmail.com",
    phone: "+63 920 906 2796",
    linkedin: "linkedin.com/in/markespinosa627",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    cvDownloadLink: "#" 
  },
  appearances: [
    { 
      show: "THE 700 CLUB ASIA", title: `"I WILL NEVER ABANDON YOU"`, network: "CBN ASIA / GMA", 
      img: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    { 
      show: "ROADTRIP REFUELED", title: "PAINS OF LIFE", network: "LIGHT TV", 
      img: "https://images.unsplash.com/photo-1516280440502-861f1c7128cb?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    { 
      show: "#PTVNEWSTONIGHT", title: "UNESCO MEDIA WORKSHOP", network: "PTV", 
      img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ],
  experience: [
    { role: "Head for Online Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "January 2025 – Present", description: "Spearheaded the network's digital frontier... Orchestrated the synergy between content creation, social media strategy, and emerging technologies (AI, app/web/software development)." },
    { role: "Unit Head for New Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "November 2022 – January 2025", description: "Spearheaded the network's digital frontier, providing executive leadership for all online media verticals." },
    { role: "Copy Writer & AI Development Researcher", company: "The 216 Scoop (Cleveland, USA)", period: "August 2024 – July 2025", description: "Pioneered a hybrid role at the intersection of creative content and emerging technology." },
    { role: "Communications Director", company: "Black Meta Agency (USA)", period: "February 2023 – December 2024", description: "Directed the agency's comprehensive communications strategy." },
  ],
  skills: [
    { category: "Leadership & Strategy", items: ["Executive Leadership", "Digital Strategy & Transformation", "Strategic Planning", "C-Suite Reporting"] },
    { category: "Digital Media", items: ["Content Strategy", "Social Media Management", "Creative Copywriting", "Data-Driven Content"] },
    { category: "Tech & AI", items: ["AI Strategy & Integration", "Web Development Oversight", "Data Analytics & Prompt Engineering"] }
  ],
  education: [
    { degree: "Mastering Content Creation & Social Media", school: "iAcademy Makati", year: "Class of 2025", description: "Advanced techniques in digital content and workflows." },
    { degree: "DepEd - ALS (HS Graduate)", school: "DepEd Mandaluyong", year: "Class of 2017", description: "Highschool level proficiency." }
  ],
  certifications: [
    { title: "AI-Powered Data Analytics", issuer: "Certified Digital Marketer", date: "Nov 2025" },
    { title: "Retail & Activations in AI", issuer: "Certified Digital Marketer", date: "Nov 2025" },
    { title: "Digital Advertising", issuer: "HubSpot", date: "Jun 2023" },
    { title: "Digital Marketing & E-Commerce", issuer: "Google", date: "Jun 2023" }
  ]
};

// ============================================================================
// 🚀 UTILITY COMPONENTS (Animations, Counter)
// ============================================================================

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const CountUp = ({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

// ============================================================================
// 🚀 THE INTERACTIVE ROI CALCULATOR COMPONENT
// ============================================================================
const ROICalculator = () => {
  const [visitors, setVisitors] = useState(5000);
  const [orderValue, setOrderValue] = useState(150);

  // Industry average vs ME digital optimized conversion rates
  const currentConvRate = 0.012; // 1.2%
  const optimizedConvRate = 0.035; // 3.5%

  const currentRevenue = visitors * currentConvRate * orderValue;
  const optimizedRevenue = visitors * optimizedConvRate * orderValue;
  const missedRevenue = optimizedRevenue - currentRevenue;

  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-[#432818] rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_rgba(217,119,6,0.15)] border border-[#78350F] relative overflow-hidden">
      {/* Tech Grid Background overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Controls */}
        <div className="w-full lg:w-1/2 space-y-8 text-left">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[#DDA15E] font-bold font-mono text-sm uppercase tracking-wider">Monthly Profile/Site Visitors</label>
              <span className="text-white font-black">{visitors.toLocaleString()}</span>
            </div>
            <input type="range" min="1000" max="50000" step="1000" value={visitors} onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full h-2 bg-[#78350F] rounded-lg appearance-none cursor-pointer accent-[#D97706]"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[#DDA15E] font-bold font-mono text-sm uppercase tracking-wider">Avg. Client / Order Value</label>
              <span className="text-white font-black">${orderValue}</span>
            </div>
            <input type="range" min="50" max="1000" step="50" value={orderValue} onChange={(e) => setOrderValue(Number(e.target.value))}
              className="w-full h-2 bg-[#78350F] rounded-lg appearance-none cursor-pointer accent-[#D97706]"
            />
          </div>
        </div>

        {/* Results Panel */}
        <div className="w-full lg:w-1/2 bg-[#2C1A0F] rounded-3xl p-8 border border-[#5c3a25] shadow-inner relative">
          <div className="absolute top-4 right-4 flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] text-green-500 font-mono tracking-widest uppercase">AI Engine Active</span>
          </div>

          <p className="text-[#A8A29E] font-medium mb-1">Your Current Est. Monthly Revenue (1.2% Conv.)</p>
          <p className="text-2xl font-bold text-white mb-6 opacity-70">{formatCurrency(currentRevenue)}</p>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#78350F] to-transparent mb-6"></div>

          <p className="text-[#DDA15E] font-bold mb-1">Optimized Revenue w/ ME digital (3.5% Conv.)</p>
          <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FDE6D5] to-[#D97706] mb-2">
            {formatCurrency(optimizedRevenue)}
          </p>
          
          <div className="mt-6 inline-block bg-[#D97706]/20 border border-[#D97706]/50 rounded-lg px-4 py-2">
            <p className="text-sm text-[#FDE6D5] font-medium">You are leaving <span className="font-black text-white">{formatCurrency(missedRevenue)}/mo</span> on the table.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = (event.touches ? event.touches[0].clientX : event.clientX) - left;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (event.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none bg-slate-200 shadow-2xl border-4 border-white focus:outline-none focus:ring-4 focus:ring-[#D97706]"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-valuenow={sliderPosition}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Image comparison slider. Use left and right arrow keys to adjust."
    >
      <img src={afterImage} alt="Final edited result showing nighttime transformation" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">AFTER</div>
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={beforeImage} alt="Original unedited daytime image" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">BEFORE</div>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#432818]">
          <MoveHorizontal size={16} />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  const [activePage, setActivePage] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Forms & Modals
  const [contactMode, setContactMode] = useState('message'); // 'message' or 'calendar'
  const [formStatus, setFormStatus] = useState('idle');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  
  useEffect(() => {
    document.title = activePage === 'home' ? FUNNEL_DATA.seo.title : "Mark Espinosa | CV";
    window.scrollTo(0, 0); 
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Prevent background scrolling for modals
  useEffect(() => {
    if (lightboxImg || videoUrl || isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [lightboxImg, videoUrl, isMobileMenuOpen]);

  const navigateTo = (page) => { setActivePage(page); setIsMobileMenuOpen(false); };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#432818] font-sans selection:bg-[#D97706] selection:text-white pb-20 md:pb-0 relative flex flex-col">
      
      {/* 🧭 NAVIGATION: Sticky Desktop Menu & Mobile Hamburger */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || activePage === 'about' ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#F5F5F4] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('home')} className="font-black text-2xl tracking-tighter text-[#432818] focus:outline-none">
              ME<span className="text-[#D97706]">digital</span>
            </button>
            {/* Tech Status Badge */}
            <div className="hidden md:flex items-center gap-2 bg-green-100 border border-green-200 px-3 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] text-green-700 font-mono tracking-widest uppercase font-bold">SYS: OPERATIONAL</span>
            </div>
          </div>
          
          {/* DESKTOP MENU (Visible on PC/Tablet) */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('home')} className={`font-bold transition-colors ${activePage === 'home' ? 'text-[#D97706]' : 'text-[#78350F] hover:text-[#D97706]'}`}>Works</button>
            <button onClick={() => navigateTo('about')} className={`font-bold transition-colors ${activePage === 'about' ? 'text-[#D97706]' : 'text-[#78350F] hover:text-[#D97706]'}`}>About & CV</button>
            <button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="flex items-center gap-2 bg-[#432818] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#D97706] transition-all shadow-[0_0_15px_rgba(217,119,6,0.3)] hover:shadow-[0_0_25px_rgba(217,119,6,0.5)]">
              Book Call <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE HAMBURGER ICON (Hidden on PC) */}
          <button className="md:hidden p-2 text-[#432818]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Floating Chat Widget */}
      <a href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="fixed z-40 bottom-[90px] md:bottom-8 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group">
        <MessageCircle size={28} />
      </a>

      {/* MODALS */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white p-2"><X size={32} /></button>
          <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {videoUrl && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12" onClick={() => setVideoUrl(null)}>
          <button className="absolute top-6 right-6 text-white p-2"><X size={32} /></button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe src={videoUrl} title="Video Player" className="w-full h-full" allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[45] bg-black/40 backdrop-blur-sm md:hidden animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-[#F5F5F4] flex flex-col p-6 space-y-4 animate-fade-in-down" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => navigateTo('home')} className={`text-left font-black text-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded ${activePage === 'home' ? 'text-[#D97706]' : 'text-[#432818]'}`}>Works</button>
            <button onClick={() => navigateTo('about')} className={`text-left font-black text-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded ${activePage === 'about' ? 'text-[#D97706]' : 'text-[#432818]'}`}>About & CV</button>
            <button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="w-full mt-4 flex justify-center items-center gap-2 bg-[#432818] text-white px-5 py-4 rounded-xl font-bold hover:bg-[#D97706] focus:outline-none focus:ring-4 focus:ring-[#D97706]/50">
              Let's Talk <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ======================================================================== */}
      {/* MAIN CONTENT AREA                                                        */}
      {/* ======================================================================== */}
      <main className="pt-24 flex-1">
        
        {/* === VIEW 1: HOME FUNNEL === */}
        {activePage === 'home' && (
          <div className="animate-fade-in">
            {/* HOOK */}
            <section className="relative pt-16 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FDE6D5] rounded-full mix-blend-multiply filter blur-[80px] -z-10 animate-pulse"></div>
              
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE6D5] text-[#D97706] font-bold text-sm mb-8 font-mono border border-[#D97706]/30">
                  <TerminalSquare size={16} /> AI Automation & Digital Strategy
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#432818] leading-[1.05] tracking-tight max-w-5xl mx-auto mb-8 text-center">
                  {FUNNEL_DATA.brand.headline}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xl md:text-2xl text-[#78350F] font-medium max-w-3xl mx-auto mb-12 leading-relaxed text-center">
                  {FUNNEL_DATA.brand.subheadline}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex justify-center">
                  <button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#432818] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#D97706] transition-all duration-300 shadow-xl flex items-center gap-3">
                    Start Your Project <ChevronRight size={20} />
                  </button>
                </div>
              </Reveal>
            </section>

            {/* THE NEW CALCULATOR SECTION */}
            <section className="py-24 bg-white relative">
              <div className="max-w-5xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-[#D97706] font-bold font-mono tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2">
                    <Calculator size={16} /> Digital Growth Estimator
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-[#432818] mb-6">See the revenue you're missing.</h2>
                  <p className="text-[#78350F] text-lg font-medium">Use the sliders below to see what an optimized digital strategy and AI integration can do for your bottom line.</p>
                </Reveal>
                
                <Reveal delay={200}>
                  <ROICalculator />
                </Reveal>
              </div>
            </section>

            {/* CASE STUDY WITH COUNTUP */}
            <section className="py-24 bg-[#432818] text-white relative">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-[#DDA15E] font-bold tracking-widest uppercase text-sm mb-4 block">Proven Results</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 max-w-3xl mx-auto leading-tight text-center">{FUNNEL_DATA.caseStudy.hook}</h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {FUNNEL_DATA.caseStudy.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <Reveal key={idx} delay={idx * 150} className="bg-[#5c3a25] p-8 rounded-3xl border border-[#7a4e33] transform hover:-translate-y-2 transition-transform duration-300 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D97706] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex flex-col items-center">
                          <Icon className="text-[#DDA15E] mb-6" size={40} />
                          <p className="text-5xl font-black text-white mb-2"><CountUp end={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} /></p>
                          <p className="text-[#DDA15E] font-bold text-lg">{metric.label}</p>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* VISUAL PROOF & LIGHTBOX */}
            <section className="py-24 bg-white border-y border-[#F5F5F4]">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-[#432818] mb-4">The Proof is in the Pixels</h2>
                  <p className="text-[#78350F] text-lg font-medium">Design that looks good and performs even better.</p>
                </Reveal>

                {/* Websites */}
                <div className="mb-24">
                  <Reveal className="flex items-center gap-3 mb-8">
                    <Monitor className="text-[#D97706]" size={28} />
                    <h3 className="text-2xl font-black text-[#432818]">Web & E-Commerce</h3>
                  </Reveal>
                  <div className="grid md:grid-cols-2 gap-12">
                    {FUNNEL_DATA.portfolio.websites.map((site, idx) => (
                      <Reveal key={idx} delay={idx * 100} className="group relative rounded-3xl bg-[#F5F5F4] p-8 pt-12 shadow-sm border border-[#E5E5E5] hover:border-[#D97706] transition-colors cursor-pointer" onClick={() => setLightboxImg(site.img)}>
                        <div className="absolute top-4 left-4 flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img src={site.img} alt={site.title} loading="lazy" className="w-full transform group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><Maximize2 className="text-white" size={32} /></div>
                        </div>
                        <p className="text-center font-bold text-[#78350F] mt-6">{site.title}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Graphics */}
                <div className="mb-24">
                  <Reveal className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <ImageIcon className="text-[#D97706]" size={28} />
                    <h3 className="text-2xl font-black text-[#432818]">Sample Graphics</h3>
                  </Reveal>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {FUNNEL_DATA.portfolio.graphics.map((img, idx) => (
                      <Reveal key={idx} delay={idx * 50} className="aspect-square rounded-2xl overflow-hidden bg-[#F5F5F4] group relative cursor-pointer" onClick={() => setLightboxImg(img)}>
                        <img src={img} alt={`Graphic sample ${idx}`} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-[#D97706]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]"><Maximize2 className="text-white drop-shadow-md" size={32} /></div>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Interactive Video/Photo Editing */}
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <PlayCircle className="text-[#D97706]" size={28} />
                    <h3 className="text-2xl font-black text-[#432818]">Video & Image Manipulation</h3>
                  </div>
                  <p className="text-[#78350F] mb-6 font-medium">Drag the slider or use Arrow Keys to see the Day to Night transformation.</p>
                  <BeforeAfterSlider beforeImage={FUNNEL_DATA.portfolio.videoEditing.before} afterImage={FUNNEL_DATA.portfolio.videoEditing.after} />
                </Reveal>
              </div>
            </section>

            {/* SOCIAL PROOF & REVIEWS */}
            <section className="py-24 bg-[#FDE6D5]">
              <div className="max-w-6xl mx-auto px-6 text-center">
                 <Reveal>
                   <h2 className="text-4xl md:text-5xl font-black text-[#432818] mb-16">Don't Just Take My Word For It</h2>
                 </Reveal>
                 <div className="grid md:grid-cols-3 gap-8 mb-16">
                   {FUNNEL_DATA.reviews.map((review, idx) => (
                     <Reveal key={idx} delay={idx * 100} className="bg-white p-8 rounded-3xl text-left shadow-sm">
                       <Star className="text-[#D97706] mb-4 fill-[#D97706]" size={24} />
                       <p className="text-[#432818] font-bold text-lg mb-6 leading-relaxed">"{review.text}"</p>
                       <p className="text-[#78350F] font-black">— {review.author}</p>
                     </Reveal>
                   ))}
                 </div>
                 <Reveal className="flex flex-wrap justify-center gap-4">
                   <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm font-bold text-[#432818]"><Award className="text-[#D97706]" size={20} /> Hubspot Certified</div>
                   <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm font-bold text-[#432818]"><Award className="text-[#D97706]" size={20} /> Digicon AI Certified</div>
                 </Reveal>
              </div>
            </section>

            {/* FORM & CALENDAR WIDGET */}
            <section id="lead-capture" className="py-24 bg-[#FAFAF9] relative overflow-hidden">
              <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
                <Reveal className="w-full md:w-1/2">
                  <span className="text-[#D97706] font-bold tracking-widest uppercase text-sm mb-4 block">Take The Next Step</span>
                  <h2 className="text-5xl md:text-6xl font-black text-[#432818] leading-[1.1] mb-6">Ready to AMPLIFY your brand?</h2>
                  <p className="text-[#78350F] text-xl font-medium mb-8">Book a direct strategy call to map out your digital infrastructure, or drop me a message below.</p>
                </Reveal>

                <Reveal delay={200} className="w-full md:w-1/2">
                  <div className="bg-white rounded-[2.5rem] shadow-2xl border border-[#F5F5F4] overflow-hidden">
                    
                    {/* Toggle Header */}
                    <div className="flex border-b border-[#F5F5F4]">
                      <button onClick={() => setContactMode('message')} className={`flex-1 py-5 font-bold text-sm uppercase tracking-wider transition-colors ${contactMode === 'message' ? 'bg-white text-[#D97706] border-b-2 border-[#D97706]' : 'bg-[#FAFAF9] text-[#A8A29E] hover:text-[#432818]'}`}>
                        Send Message
                      </button>
                      <button onClick={() => setContactMode('calendar')} className={`flex-1 py-5 font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${contactMode === 'calendar' ? 'bg-white text-[#D97706] border-b-2 border-[#D97706]' : 'bg-[#FAFAF9] text-[#A8A29E] hover:text-[#432818]'}`}>
                        <Calendar size={16} /> Book Call
                      </button>
                    </div>

                    <div className="p-8 md:p-12">
                      {contactMode === 'message' ? (
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                          <div><label className="block text-sm font-bold text-[#432818] mb-2 text-left">Name</label><input type="text" name="name" required className="w-full px-6 py-4 rounded-2xl bg-[#FAFAF9] focus:border-[#D97706] outline-none font-medium shadow-inner" placeholder="John Doe" /></div>
                          <div><label className="block text-sm font-bold text-[#432818] mb-2 text-left">Email</label><input type="email" name="email" required className="w-full px-6 py-4 rounded-2xl bg-[#FAFAF9] focus:border-[#D97706] outline-none font-medium shadow-inner" placeholder="john@example.com" /></div>
                          <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 bg-[#D97706] text-white hover:bg-[#B45309] shadow-lg hover:-translate-y-1 transition-all">
                            {formStatus === 'success' ? 'Sent!' : (formStatus === 'submitting' ? 'Sending...' : 'Send Request')}
                          </button>
                        </form>
                      ) : (
                        <div className="text-center py-8">
                          <div className="w-20 h-20 bg-orange-100 text-[#D97706] rounded-full flex items-center justify-center mx-auto mb-6"><Calendar size={40} /></div>
                          <h3 className="text-2xl font-black text-[#432818] mb-4">Schedule a Strategy Session</h3>
                          <p className="text-[#78350F] mb-8 font-medium">Find a time that works for you on my Google Calendar schedule to discuss your project.</p>
                          <a href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex py-5 px-8 rounded-2xl font-black text-lg items-center justify-center gap-2 bg-[#432818] text-white hover:bg-[#D97706] shadow-lg hover:-translate-y-1 transition-all">
                            Open Calendar <ArrowRight size={20}/>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* === VIEW 2: ABOUT / CV PAGE === */}
        {activePage === 'about' && (
          <div className="animate-fade-in bg-[#FAFAF9]">
            
            {/* Header / Bio Section */}
            <section className="bg-[#432818] text-white pt-12 pb-24 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-[#5c3a25] rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none"></div>
              
              <Reveal className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 mt-8">
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[2rem] overflow-hidden border-8 border-[#5c3a25] shadow-2xl bg-[#DDA15E]">
                  <img src={CV_DATA.profile.image} alt={CV_DATA.profile.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl md:text-6xl font-black mb-4">{CV_DATA.profile.name}</h1>
                  <h2 className="text-xl md:text-2xl text-[#DDA15E] font-bold mb-6 uppercase tracking-widest">{CV_DATA.profile.title}</h2>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium text-slate-300 justify-center md:justify-start mb-8">
                    <span className="flex items-center gap-2 justify-center"><Mail size={16} className="text-[#DDA15E]"/> {CV_DATA.profile.email}</span>
                    <span className="flex items-center gap-2 justify-center"><InstagramIcon size={16} className="text-[#DDA15E]"/> @markespinosa627</span>
                  </div>
                  
                  {/* CV DOWNLOAD BUTTON */}
                  <div className="flex justify-center md:justify-start">
                    <a href={CV_DATA.profile.cvDownloadLink} download className="inline-flex items-center gap-3 bg-white text-[#432818] px-6 py-3 rounded-xl font-bold hover:bg-[#DDA15E] hover:text-white transition-all shadow-lg active:scale-95">
                      <Download size={20} /> Download Full CV (PDF)
                    </a>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* Media Appearances (VIDEO MODAL TRIGGER) */}
            <section className="py-16 bg-[#FDE6D5] -mt-10 relative z-20 rounded-t-[3rem] shadow-xl border-b border-[#E5E5E5]">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                  <Tv className="text-[#D97706]" size={28} />
                  <h3 className="text-2xl font-black text-[#432818]">Television & Online Appearances</h3>
                </Reveal>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {CV_DATA.appearances.map((app, idx) => (
                    <Reveal key={idx} delay={idx * 150} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer group" onClick={() => setVideoUrl(app.videoUrl)}>
                      <div className="h-48 bg-slate-200 relative">
                        <img src={app.img} alt={app.show} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.6)] group-hover:scale-100 transition-transform"><PlayCircle size={32} /></div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-xs font-bold text-[#DDA15E] uppercase tracking-wider mb-1 text-left">{app.network}</p>
                          <h4 className="font-black leading-tight line-clamp-2 text-left">{app.title}</h4>
                        </div>
                      </div>
                      <div className="p-4 bg-[#432818] text-white flex justify-between items-center">
                        <p className="font-bold text-sm tracking-wide">{app.show}</p>
                        <span className="text-xs font-medium text-[#DDA15E]">Watch Now</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* CV Details */}
            <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <Reveal className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                  <Briefcase className="text-[#D97706]" size={28} />
                  <h3 className="text-3xl font-black text-[#432818]">Work Experience</h3>
                </Reveal>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#E5E5E5]">
                  {CV_DATA.experience.map((job, idx) => (
                    <Reveal key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-[#D97706] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow"></div>
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-[#F5F5F4] hover:shadow-md hover:border-[#D97706] transition-all text-left">
                        <h4 className="font-black text-xl text-[#432818] mb-1">{job.role}</h4>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                          <p className="text-[#78350F] font-bold text-sm">{job.company}</p>
                          <span className="text-xs font-bold bg-[#FDE6D5] text-[#D97706] px-3 py-1 rounded-full whitespace-nowrap">{job.period}</span>
                        </div>
                        <p className="text-[#57534E] text-sm leading-relaxed font-medium">{job.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 space-y-16">
                {/* Skills Summary */}
                <Reveal>
                  <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <TerminalSquare className="text-[#D97706]" size={24} />
                    <h3 className="text-2xl font-black text-[#432818]">Skills Summary</h3>
                  </div>
                  <div className="space-y-6 text-left">
                    {CV_DATA.skills.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-[#78350F] border-b-2 border-[#E5E5E5] pb-2 mb-3 uppercase text-sm tracking-wider">{skillGroup.category}</h4>
                        <ul className="space-y-2">
                          {skillGroup.items.map((item, i) => (
                            <li key={i} className="text-[#432818] font-medium text-sm flex gap-2">
                              <span className="text-[#D97706]">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Education */}
                <Reveal>
                  <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <GraduationCap className="text-[#D97706]" size={24} />
                    <h3 className="text-2xl font-black text-[#432818]">Education</h3>
                  </div>
                  <div className="space-y-6 text-left">
                    {CV_DATA.education.map((edu, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5F5F4]">
                        <h4 className="font-black text-lg text-[#432818] mb-1 leading-tight">{edu.degree}</h4>
                        <div className="flex justify-between items-center mb-3">
                          <p className="text-[#78350F] font-bold text-sm">{edu.school}</p>
                          <span className="text-xs font-bold text-[#A8A29E]">{edu.year}</span>
                        </div>
                        <p className="text-[#57534E] text-sm font-medium">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Certifications Map */}
                <Reveal>
                  <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <Award className="text-[#D97706]" size={24} />
                    <h3 className="text-2xl font-black text-[#432818]">Certifications</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {CV_DATA.certifications.map((cert, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-[#E5E5E5] hover:border-[#D97706] transition-colors flex gap-3 items-start">
                        <Award className="text-[#D97706] shrink-0 mt-1" size={16} />
                        <div>
                          <h4 className="font-bold text-[#432818] text-sm leading-tight mb-1">{cert.title}</h4>
                          <p className="text-xs text-[#78350F] font-medium">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#432818] text-center py-10 mt-auto border-t border-[#5c3a25]">
        <div className="font-black text-2xl tracking-tighter text-white/50 mb-4">
          ME<span className="text-[#DDA15E]/50">digital</span>
        </div>
        <p className="text-[#DDA15E]/60 font-bold text-sm">© {new Date().getFullYear()} Mark Joseph Espinosa.</p>
      </footer>
    </div>
  );
}