import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Users, MousePointerClick, CheckCircle2, 
  ArrowRight, Star, Send, Award, PlayCircle, Image as ImageIcon,
  ChevronRight, Phone, Mail, MoveHorizontal, Monitor,
  Briefcase, GraduationCap, Tv, TerminalSquare, Menu, X, 
  Download, MessageCircle, Maximize2, Calculator, Calendar,
  Globe, Laptop, MonitorSmartphone, FileText, Newspaper,
  ShieldAlert, BarChart3, Smartphone, Film, ExternalLink,
  BookOpen, Cpu, DownloadCloud, AtSign, Contact,
  Moon, Sun, ArrowLeft, Loader2, MessageSquare
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

const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const ShieldCheck = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const SiameseCatSVG = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 15C8 9 13 8 20 8C27 8 32 10 32 15C32 19 27 19 20 19C13 19 8 19 8 15Z" fill="#FDF5E6"/>
    <path d="M6 15C3 15 1 12 1 8" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 17V22" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 17V21" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M25 17V21" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M29 17V22" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M30 11C30 7 33 6 36 6C39 6 40 9 40 12C40 15 37 16 34 16C31 16 30 14 30 11Z" fill="#3A2A22"/>
    <path d="M31 7L32 2L35 6" fill="#3A2A22"/>
    <path d="M36 6L39 2L39 7" fill="#3A2A22"/>
    <circle cx="35" cy="10" r="1.2" fill="#00BFFF"/>
    <circle cx="38" cy="10" r="1.2" fill="#00BFFF"/>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  brand: {
    name: "ME digital",
    headline: "Overwhelmed by the algorithm?",
    subheadline: "I engineer brilliant social media strategies and high-converting digital marketing systems that turn your audience into loyal customers on autopilot.",
    contact: {
      email: "hello@markespinosa.com",
      whatsapp: "https://wa.me/639209062796", 
      calendarUrl: "https://calendar.app.google/2aixwBAXDDJpNRxV8"
    }
  },
  brands: [
    { name: "ZBNI", fb: "https://www.facebook.com/ZBNIofficial", logo: "/logos/zbni.webp" },
    { name: "A2Z", fb: "https://www.facebook.com/A2ZChannel11", logo: "/logos/A2Z_Channel_11_Logo.png" },
    { name: "Light TV", fb: "https://www.facebook.com/LightTVGodsChannelofBlessings", logo: "/logos/Light_TV_Logo_2025.webp" },
    { name: "TOCA", fb: "https://www.facebook.com/TOCA", logo: "/logos/TOCA_SalonGroup_Logo.png" },
    { name: "Domes Canadian Glamping", fb: "https://www.facebook.com/domescanadianglamping", logo: "/logos/domes-cg.png" },
    { name: "Yates Clinic", fb: "https://www.facebook.com/yatesnaturopathic", logo: "/logos/yates.png" },
    { name: "Bold BBQ Pit", fb: "https://www.facebook.com/BoldBBQPit", logo: "/logos/logo-bold-bbq-pit_grad-2.png" },
    { name: "CrossFit Wylie", fb: "https://www.facebook.com/CrossFitWylie", logo: "/logos/cropped-Crossfit_Wylie_Texasblackpng.png" },
    { name: "OMG Creamery", fb: "https://www.facebook.com/OMGCreamery", logo: "/logos/omg-cream-and-fried-pies.png" },
    { name: "Black Meta Agency", fb: "https://www.facebook.com/blackmetaagency", logo: "/logos/BMA.webp" },
    { name: "The 216 Scoop", fb: "https://www.facebook.com/the216scoop", logo: "/logos/landscape_The_216_Scoop_-_Horizontal_-_Solid.avif" },
    { name: "Americans Health", fb: "https://www.facebook.com/AmericansHealth", logo: "/logos/AH.png" },
    { name: "Live Music In Cleveland", fb: "https://www.facebook.com/LMIC", logo: "/logos/LMIC.avif" },
    { name: "Woodcreek Family Dental", website: "https://www.yourmurphydoctor.com", logo: "/logos/woodcreek.png" }
  ],
  caseStudy: {
    hook: "How we generated 5.47M organic reach and grew link clicks by 1,566%.",
    metrics: [
      { 
        label: "Post Reach (+145%)", value: 5.47, prefix: "", suffix: "M", decimals: 2, icon: Users,
        details: { problem: "Lacked a tailored approach to reach specific target market effectively.", strategy: "Deep target audience research and curated highly-tailored content.", result: "5.47 million organic impressions (+145%)." }
      },
      { 
        label: "Engagements (+235%)", value: 918, prefix: "", suffix: "k", decimals: 0, icon: TrendingUp,
        details: { problem: "Struggled to build an active, engaged community around content.", strategy: "Distributed content designed for engagement and virality.", result: "918,220 engagements (+235%)." }
      },
      { 
        label: "Link Clicks", value: 1566, prefix: "+", suffix: "%", decimals: 0, icon: MousePointerClick,
        details: { problem: "Followers passively consuming content without visiting external links.", strategy: "Funneled engaged community toward specific brand links naturally.", result: "1,566% surge in link clicks." }
      }
    ]
  },
  portfolio: {
    graphics: [
      "/Sample-Graphics/sample1.png", "/Sample-Graphics/sample2.png", 
      "/Sample-Graphics/sample3.png", "/Sample-Graphics/sample4.png", 
      "/Sample-Graphics/sample5.png", "/Sample-Graphics/sample6.png", 
    ],
    verticalVideos: [
      { title: "TikTok Campaign 1", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
      { title: "IG Reel Strategy", img: "https://images.unsplash.com/photo-1588624108865-c49156b6279f?auto=format&fit=crop&q=80&w=800" },
      { title: "Short-form Ad", img: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?auto=format&fit=crop&q=80&w=800" }
    ],
    viralHooks: [
      { title: "Viral Hook 1", img: "/ViralHooks/dogdancing-thumb1.png", link: "https://drive.google.com/file/d/1rsnrAqbMVSF4qz3ocXi_9NEfMiXFAOuB/view?usp=sharing" },
      { title: "Viral Hook 2", img: "/ViralHooks/kidfalling-thumb2.png", link: "https://drive.google.com/file/d/1WNw_gmuitmdBpz2o9Q6kNE39_dKaOPyF/view?usp=sharing" },
      { title: "Viral Hook 3", img: "/ViralHooks/iloveit-thumb3.png", link: "https://drive.google.com/file/d/1VWUrZ5nDiaLuJiNL_GMr_UqRhD7LP0eU/view?usp=sharing" }
    ],
    websites: [
      { title: "ZBNI Architecture", img: "/Websites/zbniwebsite.png", link: "https://www.zbni.ph" },
      { title: "Kevin Paige E-Commerce", img: "/Websites/kevinpaigeartwebsite.png", link: "https://www.kevinpaigeart.com" }
    ],
    writing: {
      articles: [
        { title: "From Storyboards to the Big Screen", snippet: "Anak TV Sinebata Workshop...", link: "#" },
        { title: "₱200 Wage Hike Approved", snippet: "Kamara, inaprubahan ang wage hike...", link: "#" }
      ],
      newsletters: [
        { title: "Live Music in Cleveland", snippet: "Weekend Gig Guide: Dec 27th - 29th...", link: "#" },
        { title: "Americans Health Insights", snippet: "New brain imaging method spots...", link: "#" }
      ]
    }
  },
  insights: [],
  reviews: [
    { 
      text: "Produces copy fast! I have no regrets working with Mark! The workflow automations saved our team dozens of hours.", 
      author: "Mateo V.", title: "Operations Manager", business: "Black Meta Agency", 
      photo: "https://i.pravatar.cc/150?u=mateo", logo: "/logos/BMA.webp" 
    },
    { 
      text: "The best social media guy! Saved me hours of work with AI integration and strategic content planning.", 
      author: "Seth Y.", title: "Founder", business: "OMG Creamery", 
      photo: "https://i.pravatar.cc/150?u=seth", logo: "/logos/omg-cream-and-fried-pies.png" 
    },
    { 
      text: "Easy to collaborate with and a fast learner! Mark took our scattered digital presence and built a cohesive architecture.", 
      author: "Madelyn N.", title: "Marketing Director", business: "Yates Clinic", 
      photo: "https://i.pravatar.cc/150?u=madelyn", logo: "/logos/yates.png" 
    },
    { 
      text: "Mark's digital strategy completely transformed our engagement. We saw a massive spike in organic reach within weeks.", 
      author: "Lucas R.", title: "CEO", business: "The 216 Scoop", 
      photo: "https://i.pravatar.cc/150?u=lucas", logo: "/logos/landscape_The_216_Scoop_-_Horizontal_-_Solid.avif" 
    },
    { 
      text: "Seamless integration of systems into a creative workflow. He doesn't just make things look good; he makes them convert.", 
      author: "Sarah K.", title: "Owner", business: "Domes Canadian Glamping", 
      photo: "https://i.pravatar.cc/150?u=sarah", logo: "/logos/domes-cg.png" 
    }
  ]
};

const CV_DATA = {
  profile: {
    name: "Mark Joseph Espinosa",
    title: "Digital & Social Media Strategist",
    email: "hello@markespinosa.com",
    phone: "+63 920 906 2796",
    image: "/me/markespinosa.jpg",
    cvDownloadLink: "https://drive.google.com/file/d/1g08_2g4dlGtmROYdyneFeJteoRXq7rPT/view" 
  },
  socials: {
    facebook: "https://facebook.com/markespinosa627",
    instagram: "https://instagram.com/markespinosa627",
    threads: "https://threads.com/markespinosa627",
    linkedin: "https://www.linkedin.com/in/markespinosa627/",
    blinq: "https://s.blinq.me/cmgufwl1g04was60m6q7mp208?bs=icl"
  },
  appearances: [
    { show: "THE 700 CLUB ASIA", title: "I WILL NEVER ABANDON YOU", network: "CBN ASIA / GMA", img: "/Interviews/700club.png", link: "https://www.youtube.com/watch?v=NXK8BjsB4x4&t=1s" },
    { show: "ROADTRIP REFUELED", title: "PAINS OF LIFE", network: "LIGHT TV", img: "/Interviews/roadtrip.png", link: "https://www.facebook.com/LightTVGCoB/videos/943905975988813" },
    { show: "#PTVNEWSTONIGHT", title: "UNESCO MEDIA WORKSHOP", network: "PTV", img: "/Interviews/PTV.png", link: "https://www.facebook.com/watch/?v=5837386186340729" }
  ],
  experience: [
    { role: "Head for Online Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "January 2025 - Present", description: "Spearheaded the network's digital frontier, providing executive leadership for all online media verticals. Orchestrated the synergy between content creation, social media strategy, and emerging technologies (Al, app/web/software development) to expand the digital footprint, drive technological innovation, and redefine audience engagement in a rapidly evolving market." },
    { role: "Unit Head for New Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "November 2022 - January 2025", description: "Spearheaded the network's digital frontier, providing executive leadership for all online media verticals. Orchestrated the synergy between content creation, social media strategy, and emerging technologies (Al, app/web/software development) to expand the digital footprint, drive technological innovation, and redefine audience engagement in a rapidly evolving market." },
    { role: "Copy Writer & Al Development Researcher", company: "The 216 Scoop (Cleveland, USA)", period: "August 2024 - July 2025", description: "Pioneered a hybrid role at the intersection of creative content and emerging technology. Developed compelling, brand-aligned copy while concurrently researching and analyzing the practical integration of Al tools for content generation, workflow optimization, and identifying new avenues for audience engagement." },
    { role: "Communications Director", company: "Black Meta Agency (District of Columbia, USA)", period: "February 2023 - December 2024", description: "Directed the agency's comprehensive communications strategy, shaping a cohesive brand narrative across all internal and external channels. Drove brand equity and achieved strategic goals by developing and executing impactful campaigns, overseeing public relations, and managing multi-platform media outreach for a diverse portfolio of clients." },
    { role: "Copy Writer", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "November 2020 - November 2022", description: "Operated as a versatile content specialist, blending creative copywriting with data-driven strategy. Leveraged analytics and in-depth research to craft compelling, high-engagement online content. Played a key production role in conceptualizing, developing, and launching new online shows, contributing to the initial growth of the network's digital presence." },
    { role: "Subject Matter Expert & Customer Specialist", company: "Alorica Philippines", period: "March 2018 - August 2019", description: "Served as a key escalation point and knowledge leader, blending deep subject matter expertise with advanced customer relations skills. Championed customer satisfaction and retention by resolving complex inquiries, de-escalating critical situations, and providing expert-level support and coaching to both clients and internal teams." }
  ],
  education: [
    { degree: "Mastering Content Creation & Social Media Production", school: "The Next Academy by iAcademy Makati", year: "Class of 2025", description: "A specialized program focused on advanced techniques in digital content development, production workflows, and social media strategy." },
    { degree: "DepEd - ALS (HS Graduate)", school: "DepEd Mandaluyong", year: "Class of 2017", description: "Highschool level proficiency as accredited by the Department of Education's ALS A&E Program." }
  ],
  skills: [
    { category: "Leadership & Strategy", items: ["Executive Leadership & Team Management", "Digital Strategy & Transformation", "Strategic Planning & Execution", "Department Building & Scaling", "C-Suite Level Reporting"] },
    { category: "Digital Media & Content", items: ["Content Strategy & Development", "Social Media Management & Audience Growth", "Creative Copywriting & Brand Narrative"] },
    { category: "Technology & Innovation", items: ["Automation & System Integrations", "Web, App, & Software Development Oversight", "Data Analytics & Audience Tracking"] },
    { category: "Communication & Relations", items: ["Comprehensive Communications Strategy", "Advanced Customer Relations & De-escalation", "Client & Stakeholder Management", "Coaching & Team Mentoring"] }
  ],
  certifications: [
    { title: "Data Analytics/Science", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/gylzxcrn9n" },
    { title: "Retail & Activations Strategy", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/loyuqwa7py" },
    { title: "Digital Advertising", issuer: "HubSpot Academy", date: "Jun 2023", link: "https://app.hubspot.com/academy/achievements/wdpblkhk/en/1/mark-joseph-espinosa/digital-advertising" },
    { title: "Foundations of Digital Marketing and E-Commerce", issuer: "Google", date: "Jun 2023", link: "https://coursera.org/verify/V3JKREQVTERZ" }
  ]
};

const GOOGLE_SHEETS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// ============================================================================
// 🚀 UTILITY COMPONENTS
// ============================================================================
const LazyImage = ({ src, alt, className, onError }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy" 
      decoding="async"
      onLoad={() => setLoaded(true)} 
      onError={onError}
      className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} 
    />
  );
};

const MagneticWrapper = ({ children, className, onClick, href, target, rel, type, disabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25; 
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  const Tag = href ? 'a' : 'button';
  return (
    <Tag 
      type={type}
      disabled={disabled}
      href={href} target={target} rel={rel} onClick={onClick}
      onMouseMove={handleMouse} onMouseLeave={reset}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
};

const TiltCard = ({ children, className, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; 
    const y = -(e.clientY - top - height / 2) / 25;
    setTilt({ x, y });
  };
  return (
    <div 
      onMouseMove={handleMouse} onMouseLeave={() => setTilt({x: 0, y: 0})} onClick={onClick}
      style={{ transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

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

const CountUp = ({ end, prefix = "", suffix = "", decimals = 0 }) => {
  const [count, useStateCount] = useState(0);
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
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      useStateCount(progress * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end]);
  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

const BrandLogo = ({ client }) => {
  const [hasError, setHasError] = useState(false);
  if (hasError || !client.logo) {
    return (
      <span className="font-black text-2xl md:text-3xl tracking-tighter text-stone-300 dark:text-stone-700 group-hover:text-stone-900 dark:group-hover:text-white transition-colors uppercase whitespace-nowrap px-4">
        {client.name}
      </span>
    );
  }
  return (
    <LazyImage 
      src={client.logo} 
      alt={client.name} 
      className="h-10 md:h-14 w-auto min-w-[80px] object-contain grayscale opacity-40 dark:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
      onError={() => setHasError(true)}
    />
  );
};

// ============================================================================
// 🚀 DYNAMIC INTAKE MODAL
// ============================================================================
const ContactModal = ({ isOpen, onClose, initialStep = 'select', initialService = null }) => {
  const [step, setStep] = useState(initialStep); 
  const [service, setService] = useState(initialService);

  const servicesList = [
    { id: 'web', label: "I need help with my Website", icon: Laptop },
    { id: 'social', label: "I need help with Social Media", icon: Smartphone },
    { id: 'ghl', label: "GoHighLevel Management & Setup", icon: TrendingUp },
    { id: 'other', label: "Other Services", icon: MonitorSmartphone },
    { id: 'call', label: "Schedule a Call", icon: Calendar },
  ];

  useEffect(() => {
    if (isOpen) {
      setStep(initialStep);
      setService(initialService);
    }
  }, [isOpen, initialStep, initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep('sending');
    // ... form logic
    setTimeout(() => { setStep('sent'); setTimeout(onClose, 2500); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-stone-900/40 dark:bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-[#FAFAF9] dark:bg-[#0d0d0f] rounded-[22px] p-8 max-w-md w-full shadow-2xl border border-stone-200 dark:border-white/10 relative overflow-hidden" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer z-10"><X size={24}/></button>
        
        {step === 'select' && (
          <div className="animate-fade-in relative z-10">
            <h3 className="text-3xl font-black text-stone-900 dark:text-white mb-2 pr-8 tracking-tight">Let's build.</h3>
            <p className="text-stone-500 dark:text-stone-400 mb-8">How can I help you dominate your market?</p>
            <div className="flex flex-col gap-3">
              {servicesList.map((svc) => {
                const SvcIcon = svc.icon;
                return (
                  <button 
                    key={svc.id} 
                    onClick={() => { setService(svc); setStep(svc.id === 'call' ? 'call' : 'form'); }}
                    className="w-full bg-white dark:bg-[#1d1d1f] border border-stone-100 dark:border-white/5 hover:border-[#bf5af2] dark:hover:border-[#bf5af2] text-stone-700 dark:text-stone-300 p-4 rounded-[16px] flex items-center gap-4 transition-all group hover:bg-stone-50 dark:hover:bg-[#252527] cursor-pointer"
                  >
                    <div className="bg-stone-50 dark:bg-[#050505] p-2 rounded-xl group-hover:bg-[#bf5af2]/10 transition-colors">
                      <SvcIcon size={20} className="text-stone-900 dark:text-white group-hover:text-[#bf5af2]" />
                    </div>
                    <span className="font-bold text-sm text-left flex-1">{svc.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:text-[#bf5af2] transition-opacity" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'call' && (
          <div className="animate-fade-in text-center py-6">
            <button onClick={() => setStep('select')} className="absolute top-6 left-6 text-xs font-bold text-stone-400 hover:text-stone-900 dark:hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer"><ArrowLeft size={14}/> Back</button>
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
              <Calendar size={32} className="text-[#0a84ff]" />
            </div>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Book Your Session</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8">
              You will be redirected to my official Google Calendar portal. It will automatically detect your time zone and send us a Google Meet link.
            </p>
            <MagneticWrapper href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="w-full bg-gradient-to-r from-[#0a84ff] via-[#bf5af2] to-[#ff375f] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer border-none block">
              Open Booking Portal <ExternalLink size={16} />
            </MagneticWrapper>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 HYBRID CHATBOT WIDGET (Local "Choose Your Own Adventure" Ichigo)
// ============================================================================
const fireChickenRain = () => {
  const emojis = ['🍗', '🐔', '🍗'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.position = 'fixed';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.top = '-50px';
    c.style.zIndex = '999999';
    c.style.pointerEvents = 'none';
    c.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    c.style.animation = `fall-chicken ${Math.random() * 2 + 2}s linear forwards`;
    c.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000); 
  }
};

const getBotResponse = (text) => {
  text = text.toLowerCase();
  if (text.includes('chicken')) {
    return { text: "*eyes dilate* DID YOU SAY CHICKEN?! IT'S RAINING CHICKEN! 🍗🐔🐾", trigger: "CHICKEN_RAIN", suggestions: ["Book a Call"] };
  }
  return { text: "Meow! Need digital strategy? Mark is your guy. 🐾", actions: [{ id: 'call', label: "Schedule Call", icon: Calendar }] };
};

const IchigoChatWidget = ({ onTriggerContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Meow! I'm Ichigo. How can we help you today? 🐾", isBot: true, suggestions: ["Give Ichigo chicken 🍗", "Book a Call"] }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");
    setTimeout(() => {
      const res = getBotResponse(input);
      if (res.trigger === "CHICKEN_RAIN") fireChickenRain();
      setMessages(prev => [...prev, { text: res.text, isBot: true, suggestions: res.suggestions, actions: res.actions }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      <style dangerouslySetInnerHTML={{__html: `@keyframes fall-chicken { 0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`}} />
      <div className={`bg-white dark:bg-[#0d0d0f] rounded-3xl shadow-2xl border border-stone-200 dark:border-white/10 w-[90vw] sm:w-[380px] h-[550px] flex flex-col pointer-events-auto transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="p-4 border-b border-stone-100 dark:border-white/10 flex justify-between items-center bg-[#FAFAF9] dark:bg-[#050505] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 dark:border-stone-700 relative">
              <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Ichigo" className="w-full h-full object-cover" />
            </div>
            <div><h4 className="font-black text-sm text-stone-900 dark:text-white uppercase tracking-widest">Ichigo</h4></div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={20}/></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF9] dark:bg-[#050505]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${m.isBot ? 'bg-white dark:bg-[#1d1d1f] text-stone-700 dark:text-stone-300 shadow-sm border border-stone-100 dark:border-white/5' : 'bg-gradient-to-r from-[#0a84ff] to-[#bf5af2] text-white shadow-md'}`}>
                {m.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSend} className="p-3 border-t border-stone-100 dark:border-white/10 bg-[#FAFAF9] dark:bg-[#050505] rounded-b-3xl flex gap-2">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type here..." className="flex-1 bg-white dark:bg-[#1d1d1f] border border-stone-200 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none" />
          <button type="submit" className="bg-[#bf5af2] text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0 cursor-pointer border-none"><Send size={16} /></button>
        </form>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={`pointer-events-auto w-16 h-16 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all overflow-hidden border-4 border-white dark:border-[#0d0d0f] relative group cursor-pointer ${isOpen ? 'scale-0 opacity-0 hidden' : 'scale-100 opacity-100'}`}>
        <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Chat with Ichigo" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

// ============================================================================
// 🚀 REVIEW CAROUSEL - UPGRADED PREMIUM APPLE DESIGN
// ============================================================================
const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const reviews = FUNNEL_DATA.reviews;
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -clientWidth : clientWidth, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true); setStartX(e.pageX - scrollRef.current.offsetLeft); setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return; e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft; scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div 
        ref={scrollRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto snap-x snap-mandatory flex gap-6 pb-8 hide-scrollbar px-6 md:px-0 scroll-smooth touch-pan-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        {reviews.map((review, idx) => (
          <div key={idx} className="w-[85vw] md:w-[450px] snap-center flex-shrink-0">
            <div className="bg-[#FAFAF9] dark:bg-[#0d0d0f] p-8 md:p-10 rounded-[22px] border border-stone-100 dark:border-white/10 shadow-sm h-full flex flex-col justify-between relative overflow-hidden group pointer-events-none transition-transform duration-500">
              
              {/* Premium Gradient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a84ff]/5 via-[#bf5af2]/5 to-[#ff375f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-left">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-[#bf5af2] fill-[#bf5af2]" size={14} />)}
                </div>
                <p className="text-lg md:text-xl font-medium text-stone-800 dark:text-stone-200 leading-relaxed text-left tracking-tight">"{review.text}"</p>
              </div>

              <div className="mt-8 flex items-center justify-between text-left relative z-10 pt-6 border-t border-stone-100 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200 dark:border-stone-800 shrink-0 shadow-sm bg-stone-100 dark:bg-stone-900">
                    <LazyImage src={review.photo} alt={review.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">{review.author}</p>
                    <p className="text-xs font-medium text-stone-500 dark:text-stone-400">{review.title} <span className="mx-1">•</span> {review.business}</p>
                  </div>
                </div>
                {review.logo && (
                  <div className="w-10 h-10 shrink-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                    <LazyImage src={review.logo} alt={review.business} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-4 mt-4 pointer-events-auto">
        <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-[#1d1d1f] shadow-md border border-stone-200 dark:border-white/10 hover:border-[#0a84ff] text-stone-900 dark:text-white transition-colors cursor-pointer"><ArrowLeft size={20} /></button>
        <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-[#1d1d1f] shadow-md border border-stone-200 dark:border-white/10 hover:border-[#bf5af2] text-stone-900 dark:text-white transition-colors cursor-pointer"><ArrowRight size={20} /></button>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 MAIN APP
// ============================================================================
export default function App() {
  const [activePage, setActivePage] = useState('home'); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [contactModalState, setContactModalState] = useState({ isOpen: false, step: 'select', service: null });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname.replace('/', '') || 'home';
      setActivePage(newPath);
    };
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('popstate', handlePopState); };
  }, []);

  const navigateTo = (page, e = null) => { 
    if (e) e.preventDefault();
    setIsTransitioning(true);
    setIsMobileMenuOpen(false); 
    setTimeout(() => {
      try { window.history.pushState({}, '', `/${page === 'home' ? '' : page}`); } catch(e){}
      setActivePage(page); 
      window.scrollTo({ top: 0, behavior: 'instant' }); 
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#050505] text-[#f5f5f7]' : 'bg-[#FAFAF9] text-[#1d1d1f]'} font-sans flex flex-col transition-colors duration-300 relative`}>
      
      {/* Premium Apple-style Background Grain & Glow */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
      <div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#bf5af2]/10 to-[#ff375f]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { width: 10px; background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${darkMode ? '#292524' : '#d6d3d1'}; border-radius: 10px; border: 2px solid ${darkMode ? '#050505' : '#FAFAF9'}; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .gradient-text { background: linear-gradient(115deg, #0a84ff 0%, #bf5af2 52%, #ff375f 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
      `}} />

      <ContactModal isOpen={contactModalState.isOpen} onClose={() => setContactModalState(prev => ({ ...prev, isOpen: false }))} initialStep={contactModalState.step} initialService={contactModalState.service} />
      
      {/* 🧭 NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-[#050505]/70 shadow-sm border-b border-stone-200 dark:border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative z-10">
          <button onClick={(e) => navigateTo('home', e)} className="font-black text-2xl tracking-tighter cursor-pointer flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0a84ff] via-[#bf5af2] to-[#ff375f] flex items-center justify-center text-white text-xs tracking-tight">ME</span>
            digital<span className="text-[#bf5af2]">.</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={(e) => navigateTo('home', e)} className={`text-sm font-semibold tracking-tight transition-colors cursor-pointer ${activePage === 'home' ? 'text-[#0a84ff]' : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'}`}>Works</button>
            <button onClick={(e) => navigateTo('about', e)} className={`text-sm font-semibold tracking-tight transition-colors cursor-pointer ${activePage === 'about' ? 'text-[#bf5af2]' : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'}`}>About & CV</button>
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
            <MagneticWrapper href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer border-none shadow-sm">
              Book a call
            </MagneticWrapper>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">{darkMode ? <Sun size={24} /> : <Moon size={24} />}</button>
            <button className="cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </nav>

      <IchigoChatWidget onTriggerContact={(step, svc) => setContactModalState({ isOpen: true, step, service: svc })} />

      <main className={`flex-1 transition-opacity duration-500 ease-in-out relative z-10 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        
        {activePage === 'home' && (
          <div className="overflow-x-hidden">
            <section className="pt-48 pb-20 px-6 text-center min-h-[85vh] flex flex-col justify-center relative">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1d1d1f] border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 font-medium text-xs tracking-wide mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse"></span> Now booking new projects
                </div>
                <p className="font-mono text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-[0.14em] mb-6">Digital Marketing — AI Automation — CRM</p>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-bold leading-[1.05] tracking-[-0.03em] max-w-5xl mx-auto mb-8">
                  {FUNNEL_DATA.brand.headline}<br/>
                  <span className="gradient-text block mt-2">Leave the digital to ME.</span>
                </h1>
                <p className="text-lg md:text-[19px] text-stone-500 dark:text-stone-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  {FUNNEL_DATA.brand.subheadline}
                </p>
                <MagneticWrapper onClick={() => setContactModalState({ isOpen: true, step: 'select', service: null })} className="group bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-8 py-4 rounded-full font-semibold text-[15px] shadow-xl hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-all cursor-pointer border-none w-fit mx-auto">
                  Book a strategy call
                </MagneticWrapper>
              </Reveal>
            </section>

            <section className="py-12 border-y border-stone-200 dark:border-white/10 overflow-hidden flex items-center bg-white dark:bg-[#050505]">
              <div className="relative flex w-full">
                <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-scroll { display: flex; width: max-content; animation: scroll 40s linear infinite; }`}</style>
                <div className="animate-scroll items-center">
                  {[...FUNNEL_DATA.brands, ...FUNNEL_DATA.brands].map((client, idx) => (
                    <div key={idx} className="mx-10 md:mx-16 flex items-center justify-center group flex-shrink-0"><BrandLogo client={client} /></div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-32">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="font-mono text-[12px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-[0.14em] block mb-4">Client Success</span>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Verdict.</h2>
                </Reveal>
                <Reveal delay={100}><ReviewCarousel /></Reveal>
              </div>
            </section>
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-40 pb-32">
            <section className="max-w-6xl mx-auto px-6">
              <Reveal className="flex flex-col items-center text-center mb-24">
                 <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border border-stone-200 dark:border-stone-800 shadow-lg p-1 bg-gradient-to-br from-[#0a84ff] to-[#ff375f]">
                  <LazyImage src={CV_DATA.profile.image} alt="Profile" className="w-full h-full object-cover rounded-full border-[4px] border-[#FAFAF9] dark:border-[#050505]" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">{CV_DATA.profile.name}</h1>
                <h2 className="text-sm font-bold text-stone-500 dark:text-stone-400 mb-8 uppercase tracking-[0.2em]">{CV_DATA.profile.title}</h2>
              </Reveal>
            </section>
          </div>
        )}

      </main>

      {/* CATS MISSION BANNER - Keeping exact filename requested */}
      <div className="bg-[#050505] text-white py-16 px-6 border-t border-white/10 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a84ff]/10 to-[#bf5af2]/10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left relative z-10">
          <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 rounded-[22px] overflow-hidden border border-white/20 shadow-2xl">
            <img src="/Ichigo-Haru-Anko-Yuzu.png" alt="Mark, Partner, and 4 Cats" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The Real Masterminds 🐾</h3>
            <p className="text-stone-400 text-lg md:text-xl leading-relaxed mb-8">
              Powered by high-converting systems, premium coffee, and a lot of chicken. Every project helps feed our 4 cats and the strays we meet!
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-[#050505] py-16 px-6 text-center border-t border-stone-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <button onClick={(e) => navigateTo('home', e)} className="font-black text-2xl tracking-tighter mb-8 cursor-pointer flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0a84ff] via-[#bf5af2] to-[#ff375f] flex items-center justify-center text-white text-xs tracking-tight">ME</span>
            digital<span className="text-[#bf5af2]">.</span>
          </button>
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-stone-400">
            <a href={CV_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors"><LinkedInIcon size={24} /></a>
            <button onClick={() => setContactModalState({isOpen:true, step:'select', service:null})} className="hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"><Mail size={24} /></button>
          </div>
          <p className="font-semibold text-xs text-stone-500 uppercase tracking-widest">© {new Date().getFullYear()} Mark Joseph Espinosa</p>
        </div>
      </footer>
    </div>
  );
}