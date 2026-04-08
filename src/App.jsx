import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Users, MousePointerClick, CheckCircle2, 
  ArrowRight, Star, Send, Award, PlayCircle, Image as ImageIcon,
  ChevronRight, ChevronLeft, Phone, Mail, MoveHorizontal, Monitor,
  Briefcase, GraduationCap, Tv, TerminalSquare, Menu, X, 
  Download, MessageCircle, Maximize2, Calculator, Calendar,
  Share2, Heart, MessageSquare, BarChart3, Zap, ShieldAlert,
  ExternalLink, Building2, ShieldCheck, Lock, Sparkles,
  Database, LineChart, Cat
} from 'lucide-react';

// ============================================================================
// 🎨 CUSTOM ICON COMPONENTS (Bypasses missing lucide exports)
// ============================================================================
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  seo: {
    title: "ME digital | AI Automation & Digital Strategy",
    description: "Mark Joseph Espinosa crafts AI-driven digital experiences for brands.",
  },
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
    { name: "TOCA Salon Group", fb: "https://www.facebook.com/TOCASalonGroup" },
    { name: "Domes Canadian Glamping", fb: "https://www.facebook.com/domescanadianglamping" },
    { name: "Yates Naturopathic Clinic", fb: "https://www.facebook.com/yatesnaturopathic" },
    { name: "Doc Yates", fb: "https://www.facebook.com/DocYates" },
    { name: "All Pest Solutions", fb: "https://www.facebook.com/allpestsolutions" },
    { name: "Bold BBQ Pit", fb: "https://www.facebook.com/BoldBBQPit" },
    { name: "CrossFit Wylie", fb: "https://www.facebook.com/CrossFitWylie" },
    { name: "Napoli's Italian", fb: "https://www.facebook.com/NapolisItalian" },
    { name: "OMG Creamery", fb: "https://www.facebook.com/OMGCreamery" },
    { name: "Woodcreek Dental", fb: "https://www.facebook.com/woodcreekfamilydental" },
    { name: "Great Scott Marketing", fb: "https://www.facebook.com/GreatScottMarketing" },
    { name: "PPC Precision", fb: "https://www.facebook.com/PrecisionPowderCoating" },
    { name: "Black Meta Agency", fb: "https://www.facebook.com/blackmetaagency" },
    { name: "One Community USA", fb: "https://www.facebook.com/OneCommunityUSA" },
    { name: "The 216 Scoop", fb: "https://www.facebook.com/the216scoop" },
    { name: "Americans Health", fb: "https://www.facebook.com/AmericansHealth" },
    { name: "Live Music Cleveland", fb: "https://www.facebook.com/livemusicincleveland" },
    { name: "Go Green Cleaners", fb: "https://www.facebook.com/GoGreenCleaners" },
    { name: "Definitive Formulas", fb: "https://www.facebook.com/DefinitiveFormulas" }
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
    }
  },
  reviews: [
    { text: "Produces copy fast! I have no regrets working with Mark!", author: "Mateo V." },
    { text: "The best social media guy! Saved me hours of work with the power of AI!", author: "Seth Y." },
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
    { role: "Head for Online Media", company: "ZBNI", period: "January 2025 – Present", description: "Spearheaded the network's digital frontier and AI app/web/software development." },
    { role: "Unit Head for New Media", company: "ZBNI", period: "2022 – 2025", description: "Executive leadership for all online media verticals." },
    { role: "Copy Writer & AI Researcher", company: "The 216 Scoop", period: "2024 – 2025", description: "Intersection of creative content and emerging technology." },
  ],
  skills: [
    { category: "Leadership & Strategy", items: ["Executive Leadership", "Digital Transformation", "Strategic Planning"] },
    { category: "Tech & AI", items: ["AI Integration", "Web Dev Oversight", "Prompt Engineering"] }
  ],
  education: [
    { degree: "Mastering Content Creation", school: "iAcademy Makati", year: "2025" },
    { degree: "ALS High School Graduate", school: "DepEd Mandaluyong", year: "2017" }
  ],
  certifications: [
    { title: "AI-Powered Data Analytics", issuer: "CDM", category: "AI & Data", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/gylzxcrn9n", primary: true },
    { title: "Retail & Activations in AI", issuer: "CDM", category: "AI & Data", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/loyuqwa7py", primary: true },
    { title: "Digital Marketing & E-Commerce", issuer: "Google", category: "Strategy", date: "Jun 2023", link: "https://coursera.org/verify/V3JKREQVTERZ", primary: true },
    { title: "AI/Strategy Masterclass", issuer: "Udemy", category: "AI & Data", date: "2024", link: "https://www.udemy.com/certificate/UC-248ef0c2-6c73-49b0-b8b1-e0d0a4326b27/" },
    { title: "Data-Driven Marketing", issuer: "Udemy", category: "Strategy", date: "2024", link: "https://www.udemy.com/certificate/UC-415308e9-5292-492f-882b-02828047d515/" },
    { title: "Digital Marketing", issuer: "HubSpot", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/5k9br9f4/en/1/mark-joseph-espinosa/digital-marketing" },
    { title: "Digital Advertising", issuer: "HubSpot", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/wdpblkhk/en/1/mark-joseph-espinosa/digital-advertising" },
    { title: "Social Media Marketing", issuer: "HubSpot", category: "Marketing", date: "2024", link: "https://app.hubspot.com/academy/achievements/h4ltxrc4/en/1/mark-joseph-espinosa/social-media-marketing-certification-course" },
    { title: "Social Media Marketing", issuer: "eMarketing Institute", category: "Marketing", date: "2021", link: "https://www.emarketinginstitute.org/certificate/social-media-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Content Marketing", issuer: "eMarketing Institute", category: "Marketing", date: "2021", link: "https://www.emarketinginstitute.org/certificate/social-media-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Diploma in Social Media Marketing", issuer: "Shaw Academy", category: "Marketing", date: "2020", link: "https://www.shawacademy.com/public/module-certificate/?form_id=nGM7MfJU&response_id=41nyiy2k0k03co7sj41nyicmlzkiuho7" }
  ],
  appearances: [
    { show: "THE 700 CLUB ASIA", title: `"I WILL NEVER ABANDON YOU"`, network: "CBN ASIA / GMA", img: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=800", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { show: "ROADTRIP REFUELED", title: "PAINS OF LIFE", network: "LIGHT TV", img: "https://images.unsplash.com/photo-1516280440502-861f1c7128cb?auto=format&fit=crop&q=80&w=800", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { show: "#PTVNEWSTONIGHT", title: "UNESCO MEDIA WORKSHOP", network: "PTV", img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
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

// ============================================================================
// 🚀 WHATSAPP WIDGET
// ============================================================================
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
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FDE6D5] flex items-center justify-center border-2 border-[#D97706]">
              <img src="https://images.unsplash.com/photo-1513245533418-297f299b6190?auto=format&fit=crop&q=80&w=200" alt="Siamese Supervisor" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-[#D97706] tracking-widest">Mark's Supervisor 🐾</p>
              <p className="text-[9px] text-green-500 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Waiting for Treats</p>
            </div>
          </div>
          <p className="text-sm font-bold text-[#432818] leading-relaxed">Meow! I'm Mark's boss. If you hire him, he can buy me more treats. 🍖 How can he help you today?</p>
        </div>
      )}
      <a href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group pointer-events-auto border-4 border-white"><MessageCircle size={32} /></a>
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
        <div className="flex-1 text-left"><h4 className="font-black text-lg mb-1 tracking-tight">Your privacy, our priority.</h4><p className="text-sm text-white/70 font-medium leading-relaxed">We use cookies to analyze site traffic and provide a high-conversion experience. By clicking "Accept All", you agree to our usage policy.</p></div>
        <div className="flex gap-3 w-full md:w-auto"><button onClick={() => handleConsent('declined')} className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/20 text-sm font-bold hover:bg-white/5 transition-colors">Decline</button><button onClick={() => handleConsent('accepted')} className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#D97706] text-white text-sm font-black uppercase tracking-widest hover:bg-[#B45309] transition-all shadow-lg active:scale-95">Accept All</button></div>
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
    if (score >= 90) return { label: "OPTIMIZED", color: "text-green-400", advice: "Your systems are elite. You're ready to scale using AI-driven automation." };
    if (score >= 60) return { label: "MODERATE", color: "text-amber-400", advice: "You have a foundation, but manual friction is slowing you down." };
    return { label: "CRITICAL", color: "text-red-400", advice: "Your digital presence is leaking revenue. An overhaul is recommended." };
  };
  return (
    <div className="bg-[#432818] rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_40px_rgba(217,119,6,0.15)] border border-[#78350F] relative overflow-hidden min-h-[450px] flex flex-col justify-center text-left">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {!completed ? (
          <div className="animate-fade-in text-left">
            <div className="flex justify-between items-center mb-8"><span className="text-[#DDA15E] font-mono text-xs uppercase tracking-widest">Question {step + 1} of 4</span><div className="flex gap-1">{[0, 1, 2, 3].map(i => (<div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-[#D97706]' : 'bg-[#2C1A0F]'}`}></div>))}</div></div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight">{questions[step].q}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button key={idx} onClick={() => handleAnswer(opt.points)} className="bg-[#2C1A0F] border border-[#5c3a25] text-[#FDE6D5] p-5 rounded-2xl font-bold text-left hover:bg-[#D97706] hover:text-white transition-all active:scale-95 group flex items-center justify-between">
                  {opt.text}<ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-scale-up">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl text-[#D97706] flex items-center justify-center"><BarChart3 size={40} /></div>
            <h3 className="text-[#DDA15E] font-mono text-sm uppercase tracking-[0.3em] mb-2">Audit Complete</h3>
            <p className={`text-5xl md:text-6xl font-black mb-6 ${getAuditResult().color}`}>{getAuditResult().label}</p>
            <p className="text-[#FDE6D5] text-lg font-medium mb-10 max-w-md mx-auto leading-relaxed">{getAuditResult().advice}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"><button onClick={() => { setStep(0); setScore(0); setCompleted(false); }} className="text-[#DDA15E] font-bold text-sm underline hover:text-white transition-colors">Restart Audit</button><button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#432818] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-[#D97706] hover:text-white transition-all">Book Call</button></div>
          </div>
        )}
      </div>
    </div>
  );
};

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const reviews = FUNNEL_DATA.reviews;
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => prev === reviews.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 text-center">
      <div className="overflow-hidden rounded-[2.5rem]">
        <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {reviews.map((review, idx) => (
            <div key={idx} className="min-w-full flex justify-center p-4">
              <div className="w-full bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-[#F5F5F4] flex flex-col items-center text-center transform transition-transform duration-500">
                <div className="flex gap-1 mb-8">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-[#D97706] fill-[#D97706]" size={24} />)}</div>
                <p className="text-xl md:text-3xl font-bold text-[#432818] leading-relaxed mb-10 italic">"{review.text}"</p>
                <div className="flex items-center gap-4"><div className="h-1 w-8 bg-[#D97706] rounded-full"></div><p className="text-base md:text-lg font-black text-[#78350F] uppercase tracking-[0.2em]">{review.author}</p><div className="h-1 w-8 bg-[#D97706] rounded-full"></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-10">{reviews.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} className={`h-2 transition-all duration-500 rounded-full ${current === i ? 'w-10 bg-[#D97706]' : 'w-3 bg-[#DDA15E]/40'}`} />))}</div>
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
    <div ref={containerRef} className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none bg-slate-200 shadow-2xl border-4 border-white" onMouseMove={handleMove} onTouchMove={handleMove}>
      <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">AFTER</div>
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}><img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" /></div>
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none">BEFORE</div>
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#432818]"><MoveHorizontal size={16} /></div></div>
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
          <button onClick={() => navigateTo('home')} className="font-black text-2xl tracking-tighter text-[#432818]">ME<span className="text-[#D97706]">digital</span></button>
          <div className="hidden md:flex items-center gap-8"><button onClick={() => navigateTo('home')} className={`font-bold transition-colors ${activePage === 'home' ? 'text-[#D97706]' : 'text-[#78350F] hover:text-[#D97706]'}`}>Works</button><button onClick={() => navigateTo('about')} className={`font-bold transition-colors ${activePage === 'about' ? 'text-[#D97706]' : 'text-[#78350F] hover:text-[#D97706]'}`}>About & CV</button><button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="bg-[#432818] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#D97706] transition-all text-sm uppercase tracking-widest">Book Call</button></div>
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
          <div className="animate-fade-in text-center">
            {/* HERO */}
            <section className="relative pt-16 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FDE6D5] rounded-full mix-blend-multiply filter blur-[80px] -z-10 animate-pulse"></div>
              <Reveal><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE6D5] text-[#D97706] font-bold text-sm mb-8 font-mono border border-[#D97706]/30 uppercase tracking-widest"><TerminalSquare size={16} /> AI Automation & Digital Strategy</div></Reveal>
              <Reveal delay={100}><h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight max-w-5xl mx-auto mb-8">{FUNNEL_DATA.brand.headline}</h1></Reveal>
              <Reveal delay={200}><p className="text-xl md:text-2xl text-[#78350F] font-medium max-w-3xl mx-auto mb-12 leading-relaxed">{FUNNEL_DATA.brand.subheadline}</p></Reveal>
              <Reveal delay={300}><div className="flex justify-center"><button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#432818] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#D97706] transition-all duration-300 shadow-xl flex items-center gap-3">Start Project <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/></button></div></Reveal>
            </section>

            {/* AUDIT */}
            <section className="py-24 bg-white relative">
              <div className="max-w-5xl mx-auto px-6">
                <Reveal className="mb-16"><span className="text-[#D97706] font-bold font-mono tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2 text-[#D97706]"><ShieldAlert size={16} /> Social Media Audit</span><h2 className="text-4xl md:text-5xl font-black mb-6 text-[#432818]">Is your strategy failing?</h2><p className="text-[#78350F] text-lg font-medium max-w-2xl mx-auto text-center">Find your growth bottleneck and see how AI can fix it.</p></Reveal>
                <Reveal delay={200}><SocialAuditTool /></Reveal>
              </div>
            </section>

            {/* BENTO CERTIFICATIONS */}
            <section className="py-32 bg-[#FAFAF9] border-y border-[#F5F5F4] text-left">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="mb-20">
                   <span className="text-[#D97706] font-black font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block text-left">Credential Hierarchy</span>
                   <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-left text-[#432818]">Trust the Implementation</h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Reveal className="md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {CV_DATA.certifications.filter(c => c.primary).map((cert, idx) => (
                        <a key={idx} href={cert.link} target="_blank" className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F5F5F4] hover:shadow-2xl hover:border-[#D97706] transition-all duration-500 relative overflow-hidden">
                           <div className="p-4 bg-orange-50 text-[#D97706] rounded-2xl w-fit mb-8 group-hover:bg-[#D97706] group-hover:text-white transition-colors"><Award size={28}/></div>
                           <h4 className="font-black text-2xl mb-2 leading-tight group-hover:text-[#D97706] transition-colors">{cert.title}</h4>
                           <p className="text-sm font-bold text-[#78350F] uppercase tracking-widest">{cert.issuer}</p>
                           <ExternalLink size={18} className="absolute bottom-8 right-8 text-[#E5E5E5] group-hover:text-[#D97706] transition-colors" />
                        </a>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal delay={200} className="bg-white/40 p-8 rounded-[2.5rem] border border-[#F5F5F4] flex flex-col justify-center">
                    <h5 className="font-black text-xs uppercase tracking-[0.3em] text-[#DDA15E] mb-8">Accreditation</h5>
                    <div className="space-y-6">
                      {CV_DATA.certifications.slice(3, 7).map((cert, idx) => (
                        <a key={idx} href={cert.link} target="_blank" className="flex items-center justify-between group py-2 border-b border-black/5 last:border-0">
                          <div><p className="font-black text-sm group-hover:text-[#D97706] transition-colors">{cert.title}</p><p className="text-[10px] font-bold text-[#78350F] opacity-60">{cert.issuer}</p></div>
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all text-[#D97706] -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      ))}
                    </div>
                    <button onClick={() => navigateTo('about')} className="mt-10 text-[10px] font-black uppercase tracking-widest text-[#D97706] hover:underline">View all certs →</button>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* BRANDS MARQUEE */}
            <section className="py-24 bg-white overflow-hidden text-center">
              <div className="max-w-6xl mx-auto px-6 mb-16 text-center"><Reveal><span className="text-[#D97706] font-black font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Track Record</span><h2 className="text-3xl font-black text-[#432818]">Brands He Has Worked With</h2></Reveal></div>
              <div className="relative flex overflow-x-hidden">
                <div className="animate-scroll whitespace-nowrap flex items-center">
                  {[...FUNNEL_DATA.brands, ...FUNNEL_DATA.brands].map((client, idx) => (
                    <a key={idx} href={client.fb} target="_blank" className="mx-12 flex flex-col items-center group grayscale hover:grayscale-0 transition-all duration-500">
                      <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#432818] group-hover:text-[#D97706]">{client.name}</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-[#D97706] transition-all duration-500 rounded-full mt-1"></div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* RESULTS */}
            <section className="py-24 bg-[#432818] text-white relative">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                  {FUNNEL_DATA.caseStudy.metrics.map((metric, idx) => (
                    <Reveal key={idx} delay={idx * 150} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 group flex flex-col items-center">
                      <metric.icon className="text-[#DDA15E] mb-6" size={48} />
                      <p className="text-6xl font-black mb-2"><CountUp end={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} /></p>
                      <p className="text-[#DDA15E] font-bold text-lg uppercase tracking-widest">{metric.label}</p>
                    </Reveal>
                  ))}
              </div>
            </section>

            {/* PORTFOLIO */}
            <section className="py-24 bg-white text-left">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="mb-16"><div className="flex items-center gap-3 mb-4"><Monitor className="text-[#D97706]" size={28} /><h3 className="text-3xl font-black">Digital Architectures</h3></div><div className="h-1.5 w-24 bg-[#FDE6D5] rounded-full"></div></Reveal>
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                  {FUNNEL_DATA.portfolio.websites.map((site, idx) => (
                    <Reveal key={idx} delay={idx * 100} className="group cursor-pointer" onClick={() => setLightboxImg(site.img)}>
                      <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-[#F5F5F4] aspect-[4/3]"><img src={site.img} alt={site.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"><Maximize2 className="text-white" size={48} /></div></div>
                      <p className="text-center font-black text-2xl mt-8">{site.title}</p>
                    </Reveal>
                  ))}
                </div>
                <Reveal className="mb-16"><div className="flex items-center gap-3 mb-4"><PlayCircle className="text-[#D97706]" size={28} /><h3 className="text-3xl font-black">Visual Engineering</h3></div><div className="h-1.5 w-24 bg-[#FDE6D5] rounded-full"></div></Reveal>
                <Reveal><BeforeAfterSlider beforeImage={FUNNEL_DATA.portfolio.videoEditing.before} afterImage={FUNNEL_DATA.portfolio.videoEditing.after} /></Reveal>
              </div>
            </section>

            {/* REVIEWS */}
            <section className="py-32 bg-[#FDE6D5]">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-20"><h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-[#432818]">The Verdict</h2><p className="text-lg text-[#78350F] font-medium text-center">What brands say about Mark's systems.</p></Reveal>
                <Reveal delay={100}><ReviewCarousel /></Reveal>
              </div>
            </section>

            {/* LEAD CAPTURE */}
            <section id="lead-capture" className="py-32 bg-white relative overflow-hidden flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                  <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">Ready to AMPLIFY?</h2>
                  <div className="bg-[#FAFAF9] p-12 md:p-20 rounded-[4rem] shadow-2xl border-4 border-[#FDE6D5] relative flex flex-col items-center">
                    <div className="absolute -top-10 bg-white p-4 rounded-full shadow-lg border border-[#FDE6D5]"><Calendar className="text-[#D97706]" size={40}/></div>
                    <h3 className="text-3xl font-black mb-10 text-[#432818]">Book a Strategy Session</h3>
                    <p className="text-xl text-[#78350F] mb-12 font-medium max-w-md">Find a time on my calendar to discuss your digital transformation.</p>
                    <a href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" className="inline-flex bg-[#432818] text-white px-12 py-6 rounded-3xl font-black text-xl gap-4 shadow-2xl hover:bg-[#D97706] transition-all hover:scale-105 active:scale-95">Schedule Your Call <ArrowRight /></a>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* CV PAGE */}
        {activePage === 'about' && (
          <div className="animate-fade-in bg-[#FAFAF9] text-left">
             <section className="bg-[#432818] text-white pt-24 pb-32 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-[#5c3a25] rounded-full mix-blend-screen filter blur-[100px] opacity-50 pointer-events-none"></div>
              <Reveal className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl"><img src={CV_DATA.profile.image} alt={CV_DATA.profile.name} className="w-full h-full object-cover" /></div>
                <div className="flex-1">
                  <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">{CV_DATA.profile.name}</h1>
                  <h2 className="text-xl md:text-3xl text-[#DDA15E] font-bold mb-8 uppercase tracking-[0.3em]">{CV_DATA.profile.title}</h2>
                  <div className="flex flex-wrap gap-8 text-slate-300 font-bold"><span className="flex items-center gap-2"><Mail size={20} className="text-[#DDA15E]"/> {CV_DATA.profile.email}</span><span className="flex items-center gap-2"><InstagramIcon size={20} className="text-[#DDA15E]"/> @markespinosa627</span></div>
                </div>
              </Reveal>
            </section>

            <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-20">
              <div className="md:col-span-7">
                <Reveal className="flex items-center gap-3 mb-12"><Briefcase className="text-[#D97706]" size={32} /><h3 className="text-4xl font-black text-[#432818]">Experience</h3></Reveal>
                <div className="space-y-16 relative border-l-4 border-[#FDE6D5] pl-10">
                  {CV_DATA.experience.map((job, idx) => (
                    <Reveal key={idx} className="relative group">
                       <div className="absolute -left-[54px] top-0 w-8 h-8 rounded-full bg-white border-4 border-[#D97706] shadow-lg group-hover:scale-110 transition-transform"></div>
                       <h4 className="font-black text-2xl mb-1">{job.role}</h4>
                       <p className="text-[#D97706] font-bold text-lg mb-4">{job.company} <span className="text-[#A8A29E] font-medium mx-2">/</span> {job.period}</p>
                       <p className="text-[#78350F] text-lg font-medium leading-relaxed">{job.description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 space-y-20">
                <Reveal>
                  <div className="flex items-center gap-3 mb-10"><Award className="text-[#D97706]" size={32} /><h3 className="text-3xl font-black text-[#432818]">Authority</h3></div>
                  {['AI & Data', 'Strategy', 'Marketing'].map((cat, i) => (
                    <div key={i} className="mb-12">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DDA15E] mb-6 border-b border-black/5 pb-2">{cat}</h4>
                       <div className="space-y-4">
                          {CV_DATA.certifications.filter(c => c.category === cat).map((cert, idx) => (
                            <a key={idx} href={cert.link} target="_blank" className="flex items-start gap-4 group">
                               <div className="p-2 bg-white rounded-lg border border-[#F5F5F4] group-hover:border-[#D97706] group-hover:text-[#D97706] transition-all"><Award size={16}/></div>
                               <div><p className="font-black text-sm group-hover:text-[#D97706] transition-colors">{cert.title}</p><p className="text-[10px] font-bold text-[#A8A29E]">{cert.issuer}</p></div>
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

        {/* PRIVACY POLICY */}
        {activePage === 'privacy' && (
          <div className="animate-fade-in bg-white pt-32 pb-24 text-left">
            <section className="max-w-4xl mx-auto px-6">
              <Reveal><h1 className="text-5xl font-black mb-8 tracking-tight flex items-center gap-4 text-[#432818]"><Lock size={48} className="text-[#D97706]"/> Privacy Policy</h1></Reveal>
              <div className="prose prose-lg text-[#432818] font-medium space-y-8 leading-relaxed">
                 <p>Last updated: April 09, 2026. Your privacy is critically important. At ME digital, we are committed to protecting any personal information you provide when visiting markespinosa.com.</p>
                 <h3 className="font-black text-2xl mt-12 mb-4 text-[#432818]">1. Data We Collect</h3>
                 <p>We collect information such as your name, email address, and business insights solely to provide tailored strategy advice.</p>
                 <h3 className="font-black text-2xl mt-12 mb-4 text-[#432818]">2. Cookies</h3>
                 <p>We use essential cookies for site traffic analysis to improve Mark Joseph Espinosa's digital strategy workflows.</p>
                 <p className="italic bg-[#FDE6D5] p-6 rounded-3xl border border-[#D97706]/20">By using this website, you agree to these terms. Contact: hello@markespinosa.com.</p>
              </div>
              <div className="mt-20"><button onClick={() => navigateTo('home')} className="text-[#D97706] font-black underline flex items-center gap-2 hover:translate-x-2 transition-transform"><ArrowRight size={20} className="rotate-180"/> Back to Home</button></div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-[#432818] py-20 px-6 text-center text-white/40 border-t border-[#5c3a25] flex flex-col items-center">
        <button onClick={() => navigateTo('home')} className="font-black text-3xl tracking-tighter text-white mb-6">ME<span className="text-[#D97706]">digital</span></button>
        <div className="flex flex-wrap justify-center gap-8 mb-12 font-bold text-sm uppercase tracking-widest text-white/70">
          <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Works</button>
          <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">About & CV</button>
          <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
        </div>
        <div className="flex gap-8 mb-12 text-white/70"><a href="#" className="hover:text-white transition-colors"><InstagramIcon size={24} /></a><a href={`mailto:${CV_DATA.profile.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a></div>
        <p className="font-bold text-xs uppercase tracking-[0.3em] text-white/40">© {new Date().getFullYear()} Mark Joseph Espinosa • All Rights Reserved</p>
      </footer>
    </div>
  );
}