import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Users, MousePointerClick, CheckCircle2, 
  ArrowRight, Star, Send, Award, PlayCircle, Image as ImageIcon,
  ChevronRight, ChevronLeft, Phone, Mail, MoveHorizontal, Monitor,
  Briefcase, GraduationCap, Tv, TerminalSquare, Menu, X, 
  Download, MessageCircle, Maximize2, Calculator, Calendar,
  Share2, Heart, MessageSquare, BarChart3, Zap, ShieldAlert,
  ExternalLink, Building2, ShieldCheck, Lock, Sparkles,
  Database, LineChart, Cat, FileText, Newspaper, PenTool
} from 'lucide-react';

// ============================================================================
// 🎨 CUSTOM ICONS & UTILS
// ============================================================================
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  brand: {
    name: "ME digital",
    headline: "Stop blending in. Start dominating with data-driven design.",
    subheadline: "I engineer simple, human, and high-converting digital systems that turn your audience into loyal customers on autopilot.",
    contact: {
      email: "hello@markespinosa.com",
      whatsapp: "https://wa.me/639209062796", 
      calendarUrl: "https://calendar.app.google/2aixwBAXDDJpNRxV8" 
    }
  },
  brands: [
    { name: "ZBNI", fb: "https://www.facebook.com/ZBNIofficial" },
    { name: "A2Z", fb: "https://www.facebook.com/A2ZChannel11" },
    { name: "Light TV", fb: "https://www.facebook.com/LightTVGodsChannelofBlessings" },
    { name: "TOCA", fb: "https://www.facebook.com/TOCA" },
    { name: "Domes Canadian Glamping", fb: "https://www.facebook.com/domescanadianglamping" },
    { name: "Yates Clinic", fb: "https://www.facebook.com/yatesnaturopathic" },
    { name: "Bold BBQ Pit", fb: "https://www.facebook.com/BoldBBQPit" },
    { name: "CrossFit Wylie", fb: "https://www.facebook.com/CrossFitWylie" },
    { name: "OMG Creamery", fb: "https://www.facebook.com/OMGCreamery" },
    { name: "Black Meta Agency", fb: "https://www.facebook.com/blackmetaagency" },
    { name: "The 216 Scoop", fb: "https://www.facebook.com/the216scoop" },
    { name: "Americans Health", fb: "https://www.facebook.com/AmericansHealth" }
  ],
  caseStudy: {
    hook: "How we generated 1,566% more link clicks for a client.",
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
    },
    logoAnimations: [
      { title: "Network Refresh", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
      { title: "Agency Identity", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=800" }
    ],
    writing: {
      articles: [
        { title: "The Future of AI in Local Small Business", snippet: "How automation is leveling the playing field for mom-and-pop shops...", link: "#" },
        { title: "Data-Driven Design vs. Aesthetic Guesses", snippet: "Why your beautiful website might be killing your conversion rate...", link: "#" }
      ],
      newsletters: [
        { title: "The Strategy Weekly", snippet: "Issue #42: Scaling Reach without Scaling Ad Spend...", link: "#" },
        { title: "ME Digital Insights", snippet: "How ZBNI transformed their online media Vertical...", link: "#" }
      ]
    }
  },
  reviews: [
    { text: "Produces copy fast! I have no regrets working with Mark!", author: "Mateo V." },
    { text: "The best social media guy! Saved me hours of work with AI!", author: "Seth Y." },
    { text: "Easy to collaborate with and a fast learner!", author: "Madelyn N." },
    { text: "Mark's digital strategy completely transformed our engagement.", author: "Lucas R." },
    { text: "Seamless integration of AI into a creative workflow.", author: "Sarah K." }
  ]
};

const CV_DATA = {
  profile: {
    name: "Mark Joseph Espinosa",
    title: "Digital Strategist & AI Engineer",
    email: "markespinosaofficial@gmail.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    cvDownloadLink: "#" 
  },
  experience: [
    { role: "Head for Online Media", company: "ZBNI", period: "January 2025 – Present", description: "Spearheaded the network's digital frontier and AI development." },
    { role: "Unit Head for New Media", company: "ZBNI", period: "2022 – 2025", description: "Executive leadership for all online media verticals." },
    { role: "Copy Writer & AI Researcher", company: "The 216 Scoop", period: "2024 – 2025", description: "Intersection of creative content and emerging technology." },
  ],
  certifications: [
    { title: "AI-Powered Data Analytics", issuer: "CDM", category: "AI & Data", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/gylzxcrn9n", primary: true },
    { title: "Retail & Activations in AI", issuer: "CDM", category: "AI & Data", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/loyuqwa7py", primary: true },
    { title: "Digital Marketing & E-Commerce", issuer: "Google", category: "Strategy", date: "Jun 2023", link: "https://coursera.org/verify/V3JKREQVTERZ", primary: true },
    { title: "AI/Strategy Masterclass", issuer: "Udemy", category: "AI & Data", date: "2024", link: "https://www.udemy.com/certificate/UC-248ef0c2-6c73-49b0-b8b1-e0d0a4326b27/", primary: true },
    { title: "Data-Driven Marketing", issuer: "Udemy", category: "Strategy", date: "2024", link: "https://www.udemy.com/certificate/UC-415308e9-5292-492f-882b-02828047d515/" },
    { title: "Digital Marketing", issuer: "HubSpot Academy", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/5k9br9f4/en/1/mark-joseph-espinosa/digital-marketing" },
    { title: "Digital Advertising", issuer: "HubSpot Academy", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/wdpblkhk/en/1/mark-joseph-espinosa/digital-advertising" },
    { title: "Social Media Marketing", issuer: "HubSpot Academy", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/h4ltxrc4/en/1/mark-joseph-espinosa/social-media-marketing-certification-course" },
    { title: "Social Media Marketing", issuer: "eMarketing Institute", category: "Marketing", date: "2021", link: "https://www.emarketinginstitute.org/certificate/social-media-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Content Marketing", issuer: "eMarketing Institute", category: "Marketing", date: "2021", link: "https://www.emarketinginstitute.org/certificate/content-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Diploma in Social Media Marketing", issuer: "Shaw Academy", category: "Marketing", date: "2020", link: "https://www.shawacademy.com/public/module-certificate/?form_id=nGM7MfJU&response_id=41nyiy2k0k03co7sj41nyicmlzkiuho7" }
  ]
};

// ============================================================================
// 🚀 UTILITY COMPONENTS
// ============================================================================

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
};

const CountUp = ({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } });
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

const WhatsAppWidget = () => {
  const [stage, setStage] = useState('hidden'); 
  useEffect(() => {
    const typingTimer = setTimeout(() => setStage('typing'), 3000);
    const visibleTimer = setTimeout(() => setStage('visible'), 5500);
    return () => { clearTimeout(typingTimer); clearTimeout(visibleTimer); };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3 pointer-events-none text-left">
      {stage === 'typing' && (
        <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-[#F5F5F4] animate-bounce flex items-center gap-2 pointer-events-auto">
          <div className="flex gap-1"><span className="w-1.5 h-1.5 bg-[#432818] rounded-full animate-pulse"></span><span className="w-1.5 h-1.5 bg-[#432818] rounded-full animate-pulse delay-75"></span><span className="w-1.5 h-1.5 bg-[#432818] rounded-full animate-pulse delay-150"></span></div>
          <span className="text-xs font-bold text-[#432818]">Supervisor is typing...</span>
        </div>
      )}
      {stage === 'visible' && (
        <div className="bg-white p-5 rounded-2xl shadow-2xl border border-[#F5F5F4] max-w-[260px] animate-scale-up pointer-events-auto relative">
          <button onClick={() => setStage('hidden')} className="absolute -top-2 -right-2 bg-[#432818] text-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform"><X size={12}/></button>
          <div className="flex items-center gap-3 mb-3 text-left">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FDE6D5] flex items-center justify-center border-2 border-[#D97706]">
              <img src="<a href="https://ibb.co/HTcxnxCn"><img src="https://i.ibb.co/HTcxnxCn/IMG-6996.jpg" alt="IMG-6996" border="0"></a>" alt="Supervisor" className="w-full h-full object-cover" />
            </div>
            <div><p className="text-[10px] font-black uppercase text-[#D97706] tracking-widest">Mark's Supervisor 🐾</p><p className="text-[9px] text-green-500 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Waiting for Treats</p></div>
          </div>
          <p className="text-sm font-bold text-[#432818] leading-relaxed">Meow! I'm Mark's boss. If you hire him, he can buy me more treats. 🍖 How can he help you today?</p>
        </div>
      )}
      <a href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 border-4 border-white pointer-events-auto"><MessageCircle size={32} /></a>
    </div>
  );
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { if (!localStorage.getItem('me_cookie_consent')) setTimeout(() => setIsVisible(true), 2000); }, []);
  const handleConsent = (type) => { localStorage.setItem('me_cookie_consent', type); setIsVisible(false); };
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-[#432818] text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-white/10 p-4 rounded-2xl"><ShieldCheck size={32} className="text-[#DDA15E]"/></div>
        <div className="flex-1 text-left"><h4 className="font-black text-lg mb-1 tracking-tight text-white">Your privacy, our priority.</h4><p className="text-sm text-white/70 font-medium leading-relaxed">We use cookies to analyze site traffic and improve performance. By clicking "Accept All", you agree to our usage policy.</p></div>
        <div className="flex gap-3 w-full md:w-auto"><button onClick={() => handleConsent('declined')} className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/20 text-sm font-bold hover:bg-white/5 transition-colors text-white">Decline</button><button onClick={() => handleConsent('accepted')} className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#D97706] text-white text-sm font-black uppercase tracking-widest hover:bg-[#B45309] transition-all shadow-lg active:scale-95">Accept All</button></div>
      </div>
    </div>
  );
};

const SocialAuditTool = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const questions = [
    { q: "How consistent is your current posting schedule?", options: [{ text: "Daily / Automated", points: 25 }, { text: "3-4 times a week", points: 15 }, { text: "Random / Spontaneous", points: 5 }, { text: "Non-existent", points: 0 }] },
    { q: "What is your primary goal for Social Media?", options: [{ text: "Direct Sales / Conversions", points: 25 }, { text: "Brand Awareness", points: 20 }, { text: "Customer Support", points: 15 }, { text: "Just Staying Relevant", points: 10 }] },
    { q: "How do you respond to comments and messages?", options: [{ text: "Instant / AI-Assisted", points: 25 }, { text: "Manually within 24h", points: 15 }, { text: "Occasionally", points: 5 }, { text: "I rarely reply", points: 0 }] },
    { q: "Do you use data to drive your content pillars?", options: [{ text: "Always (Analytics First)", points: 25 }, { text: "I check occasionally", points: 15 }, { text: "I follow trends only", points: 10 }, { text: "I just post what I like", points: 0 }] }
  ];
  const handleAnswer = (points) => {
    const newScore = score + points;
    if (step < questions.length - 1) { setScore(newScore); setStep(step + 1); } 
    else { setScore(newScore); setCompleted(true); }
  };
  const getAuditResult = () => {
    if (score >= 90) return { label: "OPTIMIZED", color: "text-green-400", advice: "Your systems are elite. Ready to scale reach using AI-driven automation." };
    if (score >= 60) return { label: "MODERATE", color: "text-amber-400", advice: "You have a foundation, but manual friction is slowing you down." };
    return { label: "CRITICAL", color: "text-red-400", advice: "Digital presence leaking revenue. Overhaul recommended." };
  };
  return (
    <div className="bg-[#432818] rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_rgba(217,119,6,0.15)] border border-[#78350F] relative overflow-hidden min-h-[450px] flex flex-col justify-center text-left">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {!completed ? (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-8"><span className="text-[#DDA15E] font-mono text-xs uppercase tracking-widest text-white">Question {step + 1} of 4</span><div className="flex gap-1">{[0, 1, 2, 3].map(i => (<div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-[#D97706]' : 'bg-[#2C1A0F]'}`}></div>))}</div></div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight">{questions[step].q}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button key={idx} onClick={() => handleAnswer(opt.points)} className="bg-[#2C1A0F] border border-[#5c3a25] text-[#FDE6D5] p-5 rounded-2xl font-bold text-left hover:bg-[#D97706] hover:text-white transition-all group flex items-center justify-between">
                  {opt.text}<ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-scale-up">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl text-[#D97706]"><BarChart3 size={40} /></div>
            <h3 className="text-[#DDA15E] font-mono text-sm uppercase tracking-[0.3em] mb-2 text-white">Audit Complete</h3>
            <p className={`text-5xl md:text-6xl font-black mb-6 ${getAuditResult().color}`}>{getAuditResult().label}</p>
            <p className="text-[#FDE6D5] text-lg font-medium mb-10 max-w-md mx-auto leading-relaxed">{getAuditResult().advice}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => { setStep(0); setScore(0); setCompleted(false); }} className="text-[#DDA15E] font-bold text-sm underline hover:text-white transition-colors">Restart Audit</button>
              <button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#432818] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-[#D97706] hover:text-white transition-all">Book Call</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 THINNER RESPONSIVE REVIEW CAROUSEL
// ============================================================================
const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const reviews = FUNNEL_DATA.reviews;
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => prev === reviews.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-4"
          style={{ transform: `translateX(calc(-${current * 100}% - ${current * 16}px))` }} 
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="min-w-full md:min-w-[calc(33.333%-11px)] flex-shrink-0">
              {/* padding reduced to p-6 for a thinner look */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#F5F5F4] h-full flex flex-col justify-between text-left">
                <div>
                  <div className="flex gap-1 mb-4 text-left">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-[#D97706] fill-[#D97706]" size={14} />)}</div>
                  <p className="text-sm md:text-base font-bold text-[#432818] leading-relaxed mb-4 italic text-left">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <div className="h-0.5 w-4 bg-[#D97706] rounded-full"></div>
                  <p className="text-[10px] font-black text-[#78350F] uppercase tracking-widest text-left">{review.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-10">{reviews.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`h-1.5 transition-all duration-500 rounded-full ${current === i ? 'w-8 bg-[#D97706]' : 'w-1.5 bg-[#DDA15E]/40'}`} />))}</div>
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
    setSliderPosition(Math.max(0, Math.min(100, (x / width) * 100)));
  };
  return (
    <div ref={containerRef} className="relative w-full aspect-video rounded-[3rem] overflow-hidden cursor-ew-resize select-none touch-none bg-slate-200 shadow-2xl border-4 border-white" onMouseMove={handleMove} onTouchMove={handleMove}>
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-black pointer-events-none">AFTER</div>
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}><img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" /></div>
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-black pointer-events-none">BEFORE</div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] pointer-events-none" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#432818]"><MoveHorizontal size={24} /></div></div>
    </div>
  );
};

// ============================================================================
// 🚀 MAIN APPLICATION
// ============================================================================
export default function App() {
  const [activePage, setActivePage] = useState('home'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); 
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const navigateTo = (page) => { setActivePage(page); setIsMobileMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#432818] font-sans selection:bg-[#D97706] selection:text-white pb-20 md:pb-0 relative flex flex-col text-left">
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { display: flex; width: fit-content; animation: scroll 40s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
      `}</style>

      {/* 🧭 NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || activePage !== 'home' ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#F5F5F4] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-left">
          <div className="flex items-center gap-4 text-left">
            <button onClick={() => navigateTo('home')} className="font-black text-2xl tracking-tighter text-[#432818]">ME<span className="text-[#D97706]">digital</span></button>
            <div className="hidden md:flex items-center gap-2 bg-green-100 border border-green-200 px-3 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] text-green-700 font-mono tracking-widest uppercase font-bold">Accepting Clients</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[#432818] font-bold">
            <button onClick={() => navigateTo('home')} className={`transition-colors ${activePage === 'home' ? 'text-[#D97706]' : 'hover:text-[#D97706]'}`}>Works</button>
            <button onClick={() => navigateTo('about')} className={`transition-colors ${activePage === 'about' ? 'text-[#D97706]' : 'hover:text-[#D97706]'}`}>About & CV</button>
            <button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="bg-[#432818] text-white px-6 py-2.5 rounded-full hover:bg-[#D97706] transition-all text-sm uppercase tracking-widest">Book Call</button>
          </div>
          <button className="md:hidden p-2 text-[#432818]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      <WhatsAppWidget />
      <CookieBanner />

      {/* MODALS */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 text-white p-2 hover:scale-110 transition-transform"><X size={32} /></button>
          <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        </div>
      )}
      {videoUrl && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12" onClick={() => setVideoUrl(null)}>
          <button className="absolute top-6 right-6 text-white p-2 hover:scale-110 transition-transform"><X size={32} /></button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"><iframe src={videoUrl} title="Video Player" className="w-full h-full" allowFullScreen></iframe></div>
        </div>
      )}

      <main className="pt-24 flex-1">
        {activePage === 'home' && (
          <div className="animate-fade-in">
            {/* HERO */}
            <section className="relative pt-16 pb-20 md:pt-40 md:pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FDE6D5] rounded-full mix-blend-multiply filter blur-[100px] -z-10 animate-pulse"></div>
              <Reveal><div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FDE6D5] text-[#D97706] font-black text-xs border border-[#D97706]/30 uppercase tracking-[0.2em] mb-12 text-[#D97706]"><TerminalSquare size={16} /> AI Automation & Digital Strategy</div></Reveal>
              <Reveal delay={100}><h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[1] tracking-tighter max-w-6xl mx-auto mb-10 text-[#432818]">{FUNNEL_DATA.brand.headline}</h1></Reveal>
              <Reveal delay={200}><p className="text-xl md:text-2xl text-[#78350F] font-medium max-w-3xl mx-auto mb-16 leading-relaxed text-[#78350F]">{FUNNEL_DATA.brand.subheadline}</p></Reveal>
              <Reveal delay={300}><div className="flex justify-center"><button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#432818] text-white px-12 py-6 rounded-full font-black text-lg hover:bg-[#D97706] transition-all duration-300 shadow-2xl flex items-center gap-4 text-white">Start Your Project <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/></button></div></Reveal>
            </section>

            {/* STRATEGIC PARTNERSHIPS */}
            <section className="py-24 bg-white overflow-hidden text-center">
              <div className="max-w-6xl mx-auto px-6 mb-16 text-center"><Reveal><span className="text-[#D97706] font-black font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block text-[#D97706]">Track Record</span><h2 className="text-3xl font-black text-[#432818]">Brands He Has Worked With</h2></Reveal></div>
              <div className="relative flex overflow-x-hidden text-center"><div className="animate-scroll whitespace-nowrap flex items-center text-center">{[...FUNNEL_DATA.brands, ...FUNNEL_DATA.brands].map((client, idx) => (<a key={idx} href={client.fb} target="_blank" rel="noopener noreferrer" className="mx-16 flex flex-col items-center group grayscale hover:grayscale-0 transition-all duration-700 opacity-40 hover:opacity-100"><span className="text-2xl md:text-3xl font-black tracking-tighter text-[#432818] group-hover:text-[#D97706] text-center">{client.name}</span></a>))}</div></div>
            </section>

            {/* RESULTS (Normal Sized Bold Numbers) */}
            <section className="py-32 bg-[#432818] text-white relative text-center">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                  {FUNNEL_DATA.caseStudy.metrics.map((metric, idx) => {
                    const MIcon = metric.icon;
                    return (
                      <Reveal key={idx} delay={idx * 150} className="flex flex-col items-center text-center">
                        <MIcon className="text-[#DDA15E] mb-6 opacity-30 mx-auto" size={32} />
                        <p className="text-3xl font-bold mb-2 text-white"><CountUp end={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} /></p>
                        <p className="text-[#DDA15E] font-black text-sm uppercase tracking-[0.4em]">{metric.label}</p>
                      </Reveal>
                    );
                  })}
              </div>
            </section>

            {/* VISUAL PORTFOLIO */}
            <section className="py-32 bg-white text-left">
              <div className="max-w-6xl mx-auto px-6 text-left">
                <Reveal className="mb-20 text-left"><div className="flex items-center gap-4 mb-4 text-left"><ImageIcon className="text-[#D97706]" size={32} /><h3 className="text-4xl font-black text-[#432818]">Sample Graphics</h3></div><div className="h-1.5 w-24 bg-[#FDE6D5] rounded-full text-left"></div></Reveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-40 text-left">
                  {FUNNEL_DATA.portfolio.graphics.map((img, idx) => (
                    <Reveal key={idx} delay={idx * 50} className="aspect-square rounded-3xl overflow-hidden shadow-lg group cursor-pointer text-left" onClick={() => setLightboxImg(img)}>
                      <img src={img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Graphic" />
                    </Reveal>
                  ))}
                </div>

                <Reveal className="mb-20 text-left"><div className="flex items-center gap-4 mb-4 text-left"><PlayCircle className="text-[#D97706]" size={32} /><h3 className="text-4xl font-black text-[#432818]">Video Engineering</h3></div><div className="h-1.5 w-24 bg-[#FDE6D5] rounded-full text-left"></div></Reveal>
                <Reveal className="mb-40 text-left"><BeforeAfterSlider beforeImage={FUNNEL_DATA.portfolio.videoEditing.before} afterImage={FUNNEL_DATA.portfolio.videoEditing.after} /></Reveal>

                <Reveal className="mb-20 text-left"><div className="flex items-center gap-4 mb-4 text-left"><Zap className="text-[#D97706]" size={32} /><h3 className="text-4xl font-black text-[#432818]">Logo Animation</h3></div><div className="h-1.5 w-24 bg-[#FDE6D5] rounded-full text-left"></div></Reveal>
                <div className="grid md:grid-cols-2 gap-16 mb-40 text-left">
                  {FUNNEL_DATA.portfolio.logoAnimations.map((anim, idx) => (
                    <Reveal key={idx} delay={idx * 100} className="text-left">
                      <div className="relative overflow-hidden rounded-[3rem] shadow-xl border border-[#F5F5F4] aspect-video bg-white flex items-center justify-center"><img src={anim.img} className="w-full h-full object-cover" alt={anim.title}/><div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"><PlayCircle size={64} className="text-white drop-shadow-xl"/></div></div>
                      <p className="font-black text-xl mt-6 text-[#432818] text-left">{anim.title}</p>
                    </Reveal>
                  ))}
                </div>

                {/* WRITTEN CONTENT SECTION */}
                <div className="grid md:grid-cols-2 gap-20">
                  <div>
                    <Reveal className="mb-12"><div className="flex items-center gap-4 mb-4 text-left"><FileText className="text-[#D97706]" size={32} /><h3 className="text-3xl font-black text-[#432818]">Article Writing</h3></div><div className="h-1 w-16 bg-[#FDE6D5] rounded-full"></div></Reveal>
                    <div className="space-y-10">
                      {FUNNEL_DATA.portfolio.writing.articles.map((art, idx) => (
                        <Reveal key={idx} className="group text-left">
                          <h4 className="font-black text-xl mb-3 group-hover:text-[#D97706] transition-colors">{art.title}</h4>
                          <p className="text-[#78350F] text-sm mb-4 leading-relaxed">{art.snippet}</p>
                          <a href={art.link} className="text-xs font-black uppercase tracking-widest text-[#D97706] underline underline-offset-4">Read Sample</a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Reveal className="mb-12 text-left"><div className="flex items-center gap-4 mb-4 text-left"><Newspaper className="text-[#D97706]" size={32} /><h3 className="text-3xl font-black text-[#432818]">Newsletters</h3></div><div className="h-1 w-16 bg-[#FDE6D5] rounded-full"></div></Reveal>
                    <div className="space-y-10">
                      {FUNNEL_DATA.portfolio.writing.newsletters.map((news, idx) => (
                        <Reveal key={idx} className="group text-left">
                          <h4 className="font-black text-xl mb-3 group-hover:text-[#D97706] transition-colors">{news.title}</h4>
                          <p className="text-[#78350F] text-sm mb-4 leading-relaxed">{news.snippet}</p>
                          <a href={news.link} className="text-xs font-black uppercase tracking-widest text-[#D97706] underline underline-offset-4">View Campaign</a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AUTHORITY WALL */}
            <section className="py-32 bg-[#FAFAF9] border-y border-[#F5F5F4] text-left">
              <div className="max-w-6xl mx-auto px-6 text-left">
                <Reveal className="mb-24 text-left">
                   <div className="h-px w-24 bg-[#D97706] mb-8"></div>
                   <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-[#432818]">Premium Certification Stack</h2>
                   <p className="text-xl text-[#78350F] font-medium max-w-2xl text-left leading-relaxed">Rigorous technical training from industry-leading institutes ensures data-backed implementation.</p>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 text-left">
                  {CV_DATA.certifications.slice(0, 4).map((cert, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-8 py-8 border-b border-black/5 hover:border-[#D97706] transition-all duration-500 text-left">
                         <div className="text-4xl font-black text-[#E5E5E5] group-hover:text-[#D97706] transition-colors font-mono">0{idx+1}</div>
                         <div className="flex-1 text-left">
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#DDA15E] mb-2">{cert.issuer}</p>
                            <h4 className="text-2xl font-black text-[#432818] mb-4 group-hover:text-[#D97706] transition-colors">{cert.title}</h4>
                            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#78350F] opacity-40 group-hover:opacity-100 transition-opacity">Verify Credential <ExternalLink size={12}/></span>
                         </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
                <div className="mt-20 flex justify-center"><button onClick={() => navigateTo('about')} className="bg-[#432818] text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#D97706] transition-all text-white">Full Authority Profile (11)</button></div>
              </div>
            </section>

            {/* REVIEWS */}
            <section className="py-32 bg-[#FDE6D5] text-center overflow-hidden">
              <div className="max-w-6xl mx-auto px-6 mb-20 text-center"><Reveal className="text-center"><h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#432818]">The Verdict</h2><p className="text-xl text-[#78350F] font-medium text-center">What brands say about Mark's systems.</p></Reveal></div>
              <Reveal delay={100} className="text-center"><ReviewCarousel /></Reveal>
            </section>

            {/* LEAD CAPTURE */}
            <section id="lead-capture" className="py-40 bg-white relative overflow-hidden flex flex-col items-center">
              <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                  <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-12 text-[#432818]">Ready to engineer<br/>your growth?</h2>
                  <div className="bg-[#FAFAF9] p-12 md:p-24 rounded-[4rem] shadow-2xl border-4 border-[#FDE6D5] relative flex flex-col items-center">
                    <div className="absolute -top-12 bg-white p-6 rounded-full shadow-2xl border-4 border-[#FDE6D5]"><Calendar className="text-[#D97706]" size={48}/></div>
                    <h3 className="text-4xl font-black mb-10 text-[#432818]">Book a private session</h3>
                    <p className="text-2xl text-[#78350F] mb-12 font-medium max-w-lg text-center leading-relaxed">Find a time on my calendar to discuss your digital overhaul.</p>
                    <a href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#432818] text-white px-14 py-7 rounded-full font-black text-xl gap-4 shadow-2xl hover:bg-[#D97706] transition-all hover:scale-105 text-white">Schedule Call <ArrowRight /></a>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* ABOUT / CV PAGE */}
        {activePage === 'about' && (
          <div className="animate-fade-in bg-[#FAFAF9] text-left">
             <section className="bg-[#432818] text-white pt-32 pb-40 relative overflow-hidden text-left">
              <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-[#5c3a25] rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none text-left"></div>
              <Reveal className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-20 text-left">
                <div className="w-64 h-64 md:w-96 md:h-96 shrink-0 rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl relative text-left"><img src={CV_DATA.profile.image} alt={CV_DATA.profile.name} className="w-full h-full object-cover" /></div>
                <div className="flex-1 text-left">
                  <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-white leading-none">{CV_DATA.profile.name}</h1>
                  <h2 className="text-2xl md:text-4xl text-[#DDA15E] font-bold mb-10 uppercase tracking-[0.4em]">{CV_DATA.profile.title}</h2>
                  <div className="flex flex-wrap gap-10 text-slate-300 font-bold text-lg"><span className="flex items-center gap-3"><Mail size={24} className="text-[#DDA15E]"/> {CV_DATA.profile.email}</span><span className="flex items-center gap-3"><InstagramIcon size={24} className="text-[#DDA15E]"/> @markespinosa627</span></div>
                </div>
              </Reveal>
            </section>

            <section className="py-32 max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-24 text-left">
              <div className="md:col-span-7 text-left">
                <Reveal className="flex items-center gap-4 mb-16 text-left"><Briefcase className="text-[#D97706]" size={40} /><h3 className="text-5xl font-black text-[#432818]">Experience</h3></Reveal>
                <div className="space-y-20 relative border-l-4 border-[#FDE6D5] pl-12 text-left">
                  {CV_DATA.experience.map((job, idx) => (
                    <Reveal key={idx} className="relative group text-left">
                       <div className="absolute -left-[62px] top-0 w-10 h-10 rounded-full bg-white border-4 border-[#D97706] shadow-xl group-hover:scale-125 transition-transform text-[#D97706]"></div>
                       <h4 className="font-black text-3xl mb-2 text-[#432818]">{job.role}</h4>
                       <p className="text-[#D97706] font-black text-xl mb-6">{job.company} <span className="text-[#A8A29E] font-medium mx-3">/</span> {job.period}</p>
                       <p className="text-[#78350F] text-xl font-medium leading-relaxed">{job.description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 space-y-24 text-left">
                <Reveal className="text-left">
                  <div className="flex items-center gap-4 mb-12 text-left text-left"><Award className="text-[#D97706]" size={40} /><h3 className="text-5xl font-black text-[#432818]">Authority</h3></div>
                  {['AI & Data', 'Strategy', 'Marketing'].map((cat, i) => (
                    <div key={i} className="mb-16 text-left">
                       <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#DDA15E] mb-8 border-b border-black/5 pb-4">{cat}</h4>
                       <div className="space-y-6 text-left">
                          {CV_DATA.certifications.filter(c => c.category === cat).map((cert, idx) => (
                            <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group text-left">
                               <div className="p-3 bg-white rounded-2xl border border-[#F5F5F4] group-hover:border-[#D97706] group-hover:text-[#D97706] transition-all text-[#D97706] shadow-sm"><Award size={20}/></div>
                               <div className="text-left"><p className="font-black text-lg group-hover:text-[#D97706] transition-colors text-[#432818]">{cert.title}</p><p className="text-xs font-bold text-[#A8A29E] mt-1">{cert.issuer}</p></div>
                            </a>
                          ))}
                       </div>
                    </div>
                  ))}
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* PRIVACY POLICY PAGE */}
        {activePage === 'privacy' && (
          <div className="animate-fade-in bg-white pt-32 pb-40 text-left">
            <section className="max-w-4xl mx-auto px-6 text-left">
              <Reveal><h1 className="text-6xl font-black mb-12 tracking-tighter text-[#432818] flex items-center gap-6"><Lock size={64} className="text-[#D97706]"/> Privacy Policy</h1></Reveal>
              <div className="prose prose-xl text-[#432818] font-medium space-y-12 leading-relaxed text-left">
                 <p>Last updated: April 09, 2026. Your privacy is critically important. At ME digital, we are committed to protecting information you provide when visiting markespinosa.com.</p>
                 <div><h3 className="font-black text-3xl mb-6 text-[#432818]">1. Data Collection</h3><p>We collect insights through our social audit tool and capture form solely to provide strategy advice. We do not sell your data.</p></div>
                 <p className="italic bg-[#FDE6D5] p-10 rounded-[3rem] border border-[#D97706]/20">Contact: hello@markespinosa.com.</p>
              </div>
              <div className="mt-20"><button onClick={() => navigateTo('home')} className="text-[#D97706] font-black underline flex items-center gap-3 hover:translate-x-3 transition-transform"><ArrowRight size={24} className="rotate-180"/> Back to Home</button></div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-[#432818] py-32 px-6 text-center text-white/40 border-t border-[#5c3a25] flex flex-col items-center">
        <button onClick={() => navigateTo('home')} className="font-black text-5xl tracking-tighter text-white mb-10 transition-colors hover:text-[#D97706] text-white">ME<span className="text-[#D97706]">digital</span></button>
        <div className="flex flex-wrap justify-center gap-12 mb-16 font-black text-xs uppercase tracking-[0.4em] text-white/70">
          <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Works</button>
          <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">About & CV</button>
          <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
        </div>
        <div className="flex gap-12 mb-16 text-white/70"><a href="#" className="hover:text-white transition-all hover:scale-125"><InstagramIcon size={32} /></a><a href={`mailto:${CV_DATA.profile.email}`} className="hover:text-white transition-all hover:scale-125"><Mail size={32} /></a></div>
        <p className="font-black text-[10px] uppercase tracking-[0.5em] text-white/30">© {new Date().getFullYear()} Mark Joseph Espinosa • All Rights Reserved</p>
      </footer>
    </div>
  );
}