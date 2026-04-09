import React, { useState, useEffect, useRef } from 'react';
import {
  TrendingUp, Users, MousePointerClick, CheckCircle2,
  ArrowRight, Star, Send, Award, PlayCircle, Image as ImageIcon,
  ChevronRight, Phone, Mail, MoveHorizontal, Monitor,
  Briefcase, GraduationCap, Tv, TerminalSquare, Menu, X,
  Download, MessageCircle, Maximize2, Calculator, Calendar,
  Globe, Laptop, MonitorSmartphone, FileText, Newspaper,
  ShieldAlert, BarChart3, Smartphone, Film, ExternalLink,
  Linkedin, BookOpen, Cpu, DownloadCloud
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

const ShieldCheck = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const Lock = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  brand: {
    name: "ME digital",
    headline: "Stop blending in. Start dominating.",
    subheadline: "I engineer simple, human, and high-converting digital systems that turn your audience into loyal customers on autopilot.",
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
    { name: "Live Music In Cleveland", fb: "https://www.facebook.com/LMIC", logo: "/logos/LMIC.avif" }
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
      "/Sample-Graphics/sample1.png",
      "/Sample-Graphics/sample2.png",
      "/Sample-Graphics/sample3.png",
      "/Sample-Graphics/sample4.png",
      "/Sample-Graphics/sample5.png",
      "/Sample-Graphics/sample6.png",
    ],
    verticalVideos: [
      { title: "TikTok Campaign 1", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
      { title: "IG Reel Strategy", img: "https://images.unsplash.com/photo-1588624108865-c49156b6279f?auto=format&fit=crop&q=80&w=800" },
      { title: "Short-form Ad", img: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?auto=format&fit=crop&q=80&w=800" }
    ],
    horizontalVideos: [
      { title: "Brand Documentary", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" },
      { title: "YouTube Pre-Roll", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200" }
    ],
    websites: [
      { title: "ZBNI Architecture", img: "/Websites/zbniwebsite.png", link: "https://www.zbni.ph" },
      { title: "Kevin Paige E-Commerce", img: "/Websites/kevinpaigeartwebsite.png", link: "https://www.kevinpaigeart.com" }
    ],
    videoEditing: {
      before: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    },
    writing: {
      articles: [
        {
          title: "From Storyboards to the Big Screen",
          snippet: "Anak TV Sinebata Workshop Batch 1 empowers children to declare 'Hear My Voice'...",
          link: "https://anaktv.ph/from-storyboards-to-the-big-screen-anak-tv-sinebata-workshop-batch-1-empowers-children-to-declare-hear-my-voice/"
        },
        {
          title: "₱200 Wage Hike Approved",
          snippet: "Kamara, inaprubahan ang wage hike para sa mga minimum wage earners...",
          link: "https://zbni.ph/2025/06/04/%E2%82%B1200-na-dagdag-sahod-bawat-araw-kamara-inaprubahan-ang-wage-hike-para-sa-mga-minimum-wage-earners/"
        }
      ],
      newsletters: [
        {
          title: "Live Music in Cleveland",
          snippet: "Weekend Gig Guide: Dec 27th - 29th. The best live music events happening around the city...",
          link: "https://livemusicincleveland.com/p/dec-27th-29th"
        },
        {
          title: "Americans Health Insights",
          snippet: "New brain imaging method spots Alzheimer's-linked protein in latest medical breakthrough...",
          link: "https://americanshealth.beehiiv.com/p/first-name-new-brain-imaging-method-spots-alzheimer-s-linked-protein?_bhlid=6f81ea42c863486b848c764176d6e7de4bf6c8c0&last_resource_guid=Post%3Ab108cde5-e89e-4ab9-b71b-fb65efc695c8&jwt_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJzY3JpYmVyX2lkIjoiOWQxMmE4ZDktMjY4OC00OTU0LWIwNjEtNGEyNGRlZmNhNDAzIiwicHVibGljYXRpb25faWQiOiJjZWQyZTgxNS05MjFlLTQ0MWItYmQ1Zi01MDAzMDc2ODkwMmQiLCJhY2Nlc3NfdHlwZSI6InJlYWQtb25seSIsImV4cCI6MTc3MzU4Njk2NywiaXNzIjoiaHR0cHM6Ly9hcHAuYmVlaGlpdi5jb20iLCJpYXQiOjE3NzM0MTQxNjd9.MX9qNhUyfedaOU6-G-yrk9dHo2tX3soRkeqxd1woz2w"
        }
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
    title: "Digital Strategist and AI Engineer",
    email: "markespinosaofficial@gmail.com",
    phone: "+63 920 906 2796",
    linkedin: "linkedin.com/in/markespinosa627",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    cvDownloadLink: "https://drive.google.com/file/d/1g08_2g4dlGtmROYdyneFeJteoRXq7rPT/view"
  },
  appearances: [
    { show: "THE 700 CLUB ASIA", title: "I WILL NEVER ABANDON YOU", network: "CBN ASIA / GMA", img: "/Interviews/700club.png", videoUrl: "https://www.youtube.com/embed/NXK8BjsB4x4" },
    { show: "ROADTRIP REFUELED", title: "PAINS OF LIFE", network: "LIGHT TV", img: "/Interviews/roadtrip.png", videoUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLightTVGCoB%2Fvideos%2F943905975988813&show_text=false" },
    { show: "#PTVNEWSTONIGHT", title: "UNESCO MEDIA WORKSHOP", network: "PTV", img: "/Interviews/PTV.png", videoUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPTVph%2Fvideos%2F5837386186340729&show_text=false" }
  ],
  experience: [
    { role: "Head for Online Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "Jan 2025 – Present", description: "Spearheaded the network's digital frontier, providing executive leadership for all online media verticals. Orchestrated the synergy between content creation, social media strategy, and emerging technologies (AI, app/web/software development) to expand the digital footprint and redefine audience engagement." },
    { role: "Unit Head for New Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "Nov 2022 – Jan 2025", description: "Provided executive leadership for all online media verticals. Orchestrated the synergy between content creation, social media strategy, and emerging technologies to drive technological innovation in a rapidly evolving market." },
    { role: "Copy Writer & AI Development Researcher", company: "The 216 Scoop (Cleveland, USA)", period: "Aug 2024 – Jul 2025", description: "Pioneered a hybrid role at the intersection of creative content and emerging technology. Developed compelling, brand-aligned copy while concurrently researching and analyzing the practical integration of AI tools for content generation and workflow optimization." },
    { role: "Communications Director", company: "Black Meta Agency (DC, USA)", period: "Feb 2023 – Dec 2024", description: "Directed the agency's comprehensive communications strategy, shaping a cohesive brand narrative across all internal and external channels. Drove brand equity by developing and executing impactful campaigns and managing multi-platform media outreach." },
    { role: "Copy Writer", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "Nov 2020 – Nov 2022", description: "Operated as a versatile content specialist, blending creative copywriting with data-driven strategy. Conceptualized, developed, and launched new online shows, contributing to the initial growth of the network's digital presence." },
    { role: "Subject Matter Expert & Customer Specialist", company: "Alorica Philippines", period: "Mar 2018 – Aug 2019", description: "Served as a key escalation point and knowledge leader, blending deep subject matter expertise with advanced customer relations skills. Championed customer satisfaction and retention by resolving complex inquiries." }
  ],
  education: [
    { degree: "Mastering Content Creation & Social Media Production", school: "The Next Academy by iAcademy Makati", year: "Class of 2025", description: "A specialized program focused on advanced techniques in digital content development, production workflows, and social media strategy." },
    { degree: "DepEd - ALS (HS Graduate)", school: "DepEd Mandaluyong", year: "Class of 2017", description: "Highschool level proficiency as accredited by the Department of Education's ALS A&E Program." }
  ],
  skills: [
    { category: "Leadership & Strategy", items: ["Executive Leadership & Team Management", "Digital Strategy & Transformation", "Strategic Planning & Execution", "Department Building & Scaling", "C-Suite Level Reporting"] },
    { category: "Digital Media & Content", items: ["Content Strategy & Development", "Social Media Management & Audience Growth", "Creative Copywriting & Brand Narrative"] },
    { category: "Technology & Innovation", items: ["AI Strategy & Development Research", "Web, App, & Software Development Oversight", "Data Analytics & Emerging Technologies"] },
    { category: "Communication & Relations", items: ["Comprehensive Communications Strategy", "Advanced Customer Relations & De-escalation", "Client & Stakeholder Management", "Coaching & Team Mentoring"] }
  ],
  certifications: [
    { title: "AI-Powered Data Analytics/Science", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/gylzxcrn9n" },
    { title: "Retail & Activations in the Age of AI", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/loyuqwa7py" },
    { title: "Digital Advertising", issuer: "HubSpot Academy", date: "Jun 2023", link: "https://app.hubspot.com/academy/achievements/wdpblkhk/en/1/mark-joseph-espinosa/digital-advertising" },
    { title: "Foundations of Digital Marketing and E-Commerce", issuer: "Google", date: "Jun 2023", link: "https://coursera.org/verify/V3JKREQVTERZ" },
    { title: "Google My Business", issuer: "Udemy", date: "Jun 2023", link: "#" },
    { title: "Master Course of Facebook Training", issuer: "Udemy", date: "Jun 2023", link: "#" },
    { title: "Digital Marketing", issuer: "HubSpot Academy", date: "Mar 2022", link: "https://app.hubspot.com/academy/achievements/5k9br9f4/en/1/mark-joseph-espinosa/digital-marketing" },
    { title: "Content Marketing", issuer: "HubSpot Academy", date: "Nov 2021", link: "#" },
    { title: "Social Media Marketing Certification", issuer: "HubSpot Academy", date: "Nov 2021", link: "https://app.hubspot.com/academy/achievements/h4ltxrc4/en/1/mark-joseph-espinosa/social-media-marketing-certification-course" },
    { title: "Viral Marketing", issuer: "Shaw Academy", date: "May 2021", link: "#" },
    { title: "Social Media Marketing", issuer: "eMarketing Institute", date: "Jan 2021", link: "https://www.emarketinginstitute.org/certificate/social-media-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Content Marketing", issuer: "eMarketing Institute", date: "Jan 2021", link: "https://www.emarketinginstitute.org/certificate/content-marketing-course-and-certification-free-mark-joseph-f-espinosa/" },
    { title: "Brand Building and Digital Marketing", issuer: "Google", date: "Jun 2021", link: "#" }
  ]
};

// ============================================================================
// 🚀 UTILITY COMPONENTS
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

const CountUp = ({ end, prefix = "", suffix = "", decimals = 0 }) => {
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
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(progress * end);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end]);
  return <span ref={ref}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

// ============================================================================
// 🚀 BRAND LOGO FALLBACK COMPONENT
// ============================================================================
const BrandLogo = ({ client }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !client.logo) {
    return (
      <span className="font-black text-2xl md:text-3xl tracking-tighter text-stone-300 group-hover:text-stone-900 transition-colors uppercase whitespace-nowrap px-4">
        {client.name}
      </span>
    );
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      className="h-10 md:h-14 w-auto min-w-[80px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      onError={() => setHasError(true)}
    />
  );
};

// ============================================================================
// 🚀 WHATSAPP CAT WIDGET
// ============================================================================
const WhatsAppWidget = () => {
  const [stage, setStage] = useState('hidden');
  useEffect(() => {
    const typingTimer = setTimeout(() => setStage('typing'), 4000);
    const visibleTimer = setTimeout(() => setStage('visible'), 6500);
    return () => { clearTimeout(typingTimer); clearTimeout(visibleTimer); };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      {stage === 'typing' && (
        <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-stone-100 animate-bounce flex items-center gap-2 pointer-events-auto">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-stone-800 rounded-full animate-pulse"></span>
            <span className="w-1.5 h-1.5 bg-stone-800 rounded-full animate-pulse delay-75"></span>
            <span className="w-1.5 h-1.5 bg-stone-800 rounded-full animate-pulse delay-150"></span>
          </div>
          <span className="text-xs font-bold text-stone-800">Supervisor is typing...</span>
        </div>
      )}
      
      {stage === 'visible' && (
        <div className="bg-white p-5 rounded-2xl shadow-2xl border border-stone-100 max-w-[280px] animate-scale-up pointer-events-auto relative">
          <button onClick={() => setStage('hidden')} className="absolute -top-2 -right-2 bg-stone-900 text-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform"><X size={12}/></button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-100 flex items-center justify-center border border-stone-200 shrink-0">
              <img
                src="/WhatsappImage/Ichigo.JPG"
                alt="Siamese Boss"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1513245533418-297f299b6190?auto=format&fit=crop&q=80&w=200';
                }}
              />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-stone-900 tracking-widest">Mark's Supervisor 🐾</p>
              <p className="text-[9px] text-green-600 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Waiting for Treats</p>
            </div>
          </div>
          <p className="text-sm font-medium text-stone-600 leading-relaxed text-left">
            Meow! I'm Mark's boss. If you hire him, he can buy me more treats. 🍖 How can he help you today?
          </p>
        </div>
      )}

      <a href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group pointer-events-auto flex items-center justify-center">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

// ============================================================================
// 🚀 COOKIE BANNER
// ============================================================================
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('me_cookie_consent');
    if (!consent) setTimeout(() => setIsVisible(true), 2000);
  }, []);

  const handleConsent = (type) => {
    localStorage.setItem('me_cookie_consent', type);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-[#432818] text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-white/10 p-4 rounded-2xl"><ShieldCheck size={32} className="text-[#DDA15E]"/></div>
        <div className="flex-1 text-left">
          <h4 className="font-black text-lg mb-1 tracking-tight text-white">Your privacy, our priority.</h4>
          <p className="text-sm text-white/70 font-medium leading-relaxed">
            We use cookies to analyze site traffic, personalize content, and provide a high-conversion browsing experience. By clicking "Accept All", you agree to our data usage policy.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button onClick={() => handleConsent('declined')} className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/20 text-sm font-bold hover:bg-white/5 transition-colors text-white">Decline</button>
          <button onClick={() => handleConsent('accepted')} className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#D97706] text-white text-sm font-black uppercase tracking-widest hover:bg-[#B45309] transition-all shadow-lg active:scale-95">Accept All</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 SOCIAL AUDIT TOOL WITH LEAD CAPTURE
// ============================================================================
const SocialAuditTool = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { q: "How consistent is your current posting schedule?", options: [{ text: "Daily / Automated", points: 25 }, { text: "3-4 times a week", points: 15 }, { text: "Random / Spontaneous", points: 5 }, { text: "Non-existent", points: 0 }] },
    { q: "What is your primary goal for Social Media?", options: [{ text: "Direct Sales / Conversions", points: 25 }, { text: "Brand Awareness", points: 20 }, { text: "Customer Support", points: 15 }, { text: "Just Staying Relevant", points: 10 }] },
    { q: "How do you respond to comments and messages?", options: [{ text: "Instant / AI-Assisted", points: 25 }, { text: "Manually within 24h", points: 15 }, { text: "Occasionally", points: 5 }, { text: "I rarely reply", points: 0 }] },
    { q: "Do you use data to drive your content pillars?", options: [{ text: "Always (Analytics First)", points: 25 }, { text: "I check occasionally", points: 15 }, { text: "I follow trends only", points: 10 }, { text: "I just post what I like", points: 0 }] }
  ];

  const handleAnswer = (points) => {
    setScore(prev => prev + points);
    setStep(prev => prev + 1);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowResult(true);
    }
  };

  const getAuditResult = () => {
    if (score >= 90) return { label: "OPTIMIZED", color: "text-green-600", advice: "Your systems are elite. You're ready to scale reach using AI-driven automation." };
    if (score >= 60) return { label: "MODERATE", color: "text-amber-600", advice: "You have a foundation, but you're losing 60% of potential leads to manual friction." };
    return { label: "CRITICAL", color: "text-red-600", advice: "Your digital presence is leaking revenue. A complete strategy overhaul is recommended." };
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-200 relative overflow-hidden min-h-[400px] flex flex-col justify-center max-w-3xl mx-auto">
      {/* Question Steps */}
      {step < questions.length && (
        <div className="animate-fade-in text-left">
          <div className="flex justify-between items-center mb-8">
            <span className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">Step {step + 1} of {questions.length}</span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-amber-600' : 'bg-stone-100'}`}></div>
              ))}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-stone-900 mb-10 leading-tight">{questions[step].q}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[step].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt.points)} className="bg-stone-50 border border-stone-200 text-stone-700 p-5 rounded-2xl font-bold text-left hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all active:scale-95 group flex items-center justify-between">
                {opt.text}
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Email Capture Step */}
      {step === questions.length && !showResult && (
        <div className="animate-scale-up text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-amber-600" size={32} />
          </div>
          <h3 className="text-2xl font-black text-stone-900 mb-4">Audit Complete!</h3>
          <p className="text-stone-500 font-medium mb-8">Enter your email below to instantly reveal your Growth Grade and custom strategy.</p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your best email..."
              className="w-full px-6 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:border-stone-900 outline-none font-medium text-center"
            />
            <button type="submit" className="w-full py-4 rounded-xl font-black text-white bg-stone-900 hover:bg-amber-600 transition-all uppercase tracking-widest text-sm">
              Reveal My Results
            </button>
          </form>
        </div>
      )}

      {/* Results Step */}
      {showResult && (
        <div className="animate-scale-up text-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <BarChart3 className="text-amber-600" size={40} />
          </div>
          <h3 className="text-stone-400 font-mono text-xs uppercase tracking-[0.3em] mb-2 font-bold">Your Growth Grade</h3>
          <p className={`text-5xl md:text-6xl font-black mb-6 ${getAuditResult().color}`}>{getAuditResult().label}</p>
          <p className="text-stone-600 text-lg font-medium mb-10 max-w-md mx-auto leading-relaxed">{getAuditResult().advice}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { setStep(0); setScore(0); setEmail(''); setShowResult(false); }} className="text-stone-400 font-bold text-sm hover:text-stone-900 transition-colors">
              Retake Audit
            </button>
            <button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="bg-stone-900 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg hover:bg-amber-600 transition-all hover:-translate-y-1">
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 🚀 REVIEW CAROUSEL (5 Second Interval, Single Slide, No Indicators)
// ============================================================================
const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const reviews = FUNNEL_DATA.reviews;
  
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => prev === reviews.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 overflow-hidden">
      <div className="overflow-hidden pb-12 pt-4">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="min-w-full flex-shrink-0 px-2 md:px-4">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between group hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div>
                  <div className="flex gap-1 mb-8 text-left">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-amber-400 fill-amber-400" size={16} />)}
                  </div>
                  <p className="text-xl md:text-2xl font-medium text-stone-800 leading-relaxed tracking-tight text-left">"{review.text}"</p>
                </div>
                <div className="mt-10 pt-6 border-t border-stone-50 flex items-center justify-between text-left">
                  <p className="text-sm font-bold text-stone-900 uppercase tracking-widest">{review.author}</p>
                  <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:text-amber-600 transition-colors">
                    <Users size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 BEFORE/AFTER SLIDER
// ============================================================================
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
// 🚀 MAIN APP
// ============================================================================

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-900 font-sans flex flex-col selection:bg-amber-600 selection:text-white">
      
      {/* 🧭 NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="font-black text-2xl tracking-tighter text-stone-900">
            ME<span className="text-amber-600">digital</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('home')} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${activePage === 'home' ? 'text-amber-600' : 'text-stone-400 hover:text-stone-900'}`}>Works</button>
            <button onClick={() => navigateTo('about')} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${activePage === 'about' ? 'text-amber-600' : 'text-stone-400 hover:text-stone-900'}`}>About & CV</button>
            <button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="bg-stone-900 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-600 transition-all shadow-sm">Book Call</button>
          </div>

          <button className="md:hidden p-2 text-stone-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[49] bg-white flex flex-col p-8 space-y-8 md:hidden pt-32 animate-fade-in">
          <button onClick={() => navigateTo('home')} className="text-4xl font-black text-left text-stone-900">Works</button>
          <button onClick={() => navigateTo('about')} className="text-4xl font-black text-left text-stone-900">About & CV</button>
          <button onClick={() => { navigateTo('home'); setTimeout(() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-4xl font-black text-amber-600 text-left">Book Call</button>
        </div>
      )}

      {/* MODALS */}
      {videoUrl && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setVideoUrl(null)}>
          <button className="absolute top-8 right-8 text-stone-900"><X size={32}/></button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"><iframe src={videoUrl} className="w-full h-full" allowFullScreen></iframe></div>
        </div>
      )}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-8 right-8 text-stone-900"><X size={32}/></button>
          <img src={lightboxImg} className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-stone-200" alt="Full View" />
        </div>
      )}

      {/* RENDER THE WHATSAPP CAT WIDGET */}
      <WhatsAppWidget />
      <CookieBanner />

      {/* 🚀 MAIN CONTENT */}
      <main className="flex-1">
        {activePage === 'home' ? (
          <div className="animate-fade-in overflow-x-hidden">
            
            {/* HERO */}
            <section className="pt-48 pb-20 px-6 text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-500 font-semibold text-[10px] uppercase tracking-[0.2em] mb-8 border border-stone-200">
                  AI Automation & Strategy
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 leading-[1.05] tracking-tighter max-w-5xl mx-auto mb-8">
                  Stop blending in.<br/>Start dominating.
                </h1>
                <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                  {FUNNEL_DATA.brand.subheadline}
                </p>
                <button onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl flex items-center gap-3 mx-auto hover:bg-amber-600 transition-all hover:-translate-y-1">
                  Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Reveal>
            </section>

            {/* MARQUEE BRANDS */}
            <section className="py-12 border-y border-stone-200 bg-white overflow-hidden flex items-center">
              <div className="relative flex w-full">
                <style>{`
                  @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                  .animate-scroll { display: flex; width: max-content; animation: scroll 40s linear infinite; }
                  .animate-scroll:hover { animation-play-state: paused; }
                `}</style>
                <div className="animate-scroll items-center">
                  {[...FUNNEL_DATA.brands, ...FUNNEL_DATA.brands].map((client, idx) => (
                    <a key={idx} href={client.fb} target="_blank" rel="noopener noreferrer" className="mx-10 md:mx-16 flex items-center justify-center group flex-shrink-0">
                      <BrandLogo client={client} />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* INTERACTIVE SOCIAL AUDIT (LEAD CAPTURE) */}
            <section className="py-32 bg-[#FAFAF9]">
              <div className="max-w-5xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-amber-600 font-bold font-mono text-[10px] uppercase tracking-widest block mb-4">Interactive Audit</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-stone-900">Is your strategy failing?</h2>
                  <p className="text-stone-500 text-lg max-w-2xl mx-auto">Most brands post without a system. Use this quick audit to find your biggest growth bottleneck.</p>
                </Reveal>
                <Reveal delay={200}><SocialAuditTool /></Reveal>
              </div>
            </section>

            {/* PROOF METRICS */}
            <section className="py-24 bg-white border-y border-stone-200">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Proven Results</p>
                  <h3 className="text-2xl md:text-3xl font-black text-stone-900 max-w-2xl mx-auto leading-tight">{FUNNEL_DATA.caseStudy.hook}</h3>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                  {FUNNEL_DATA.caseStudy.metrics.map((m, i) => {
                    const MIcon = m.icon;
                    return (
                      <Reveal key={i} delay={i*100} className="text-center p-8 rounded-2xl border border-stone-100 bg-stone-50">
                        <MIcon className="text-stone-300 mb-6 mx-auto" size={32} />
                        <p className="text-3xl font-bold text-stone-900 mb-2 tracking-tight">
                          <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                        </p>
                        <p className="text-stone-500 font-semibold text-[10px] uppercase tracking-widest">{m.label}</p>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* COMPREHENSIVE PORTFOLIO SECTION */}
            <section className="py-32 bg-[#FAFAF9]">
              <div className="max-w-6xl mx-auto px-6">
                
                {/* Graphics */}
                <Reveal className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <ImageIcon className="text-stone-300" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">Sample Graphics</h3>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {FUNNEL_DATA.portfolio.graphics.map((img, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-200 cursor-pointer group bg-white" onClick={() => setLightboxImg(img)}>
                        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Graphic" />
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Vertical Videos (TikTok/Reels) */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="text-stone-300" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">Vertical Content (Reels/TikTok)</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {FUNNEL_DATA.portfolio.verticalVideos.map((vid, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-sm border-4 border-stone-100 relative bg-stone-900">
                          <img src={vid.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={vid.title} />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle size={48} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                          </div>
                        </div>
                        <p className="font-bold text-sm mt-4 text-center text-stone-900 group-hover:text-amber-600">{vid.title}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Horizontal Videos */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Film className="text-stone-300" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">Cinematic 16:9 Video</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {FUNNEL_DATA.portfolio.horizontalVideos.map((vid, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-stone-200 relative bg-stone-900">
                          <img src={vid.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={vid.title} />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle size={48} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                          </div>
                        </div>
                        <p className="font-bold text-base mt-4 text-stone-900 group-hover:text-amber-600">{vid.title}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Web Architecture */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <Monitor className="text-stone-300" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 tracking-tight">Digital Architectures</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                    {FUNNEL_DATA.portfolio.websites.map((s, i) => (
                      <Reveal key={i} className="group cursor-pointer text-left" onClick={() => setLightboxImg(s.img)}>
                        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm relative aspect-[4/3] bg-white">
                          <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={s.title} />
                        </div>
                        <div className="flex justify-between items-center mt-6">
                           <p className="font-bold text-lg text-stone-900 group-hover:text-amber-600 transition-colors">{s.title}</p>
                           {s.link && (
                             <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-stone-900 flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                               Visit Site <ExternalLink size={12}/>
                             </a>
                           )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>

                {/* WRITTEN STRATEGY */}
                <div className="grid md:grid-cols-2 gap-16 pt-20 border-t border-stone-200">
                  <Reveal>
                    <div className="flex items-center gap-3 mb-8">
                      <FileText className="text-stone-400" size={24} />
                      <h4 className="text-xl font-black text-stone-900">Articles & Copy</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.articles.map((art, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 last:border-0">
                          <a href={art.link} className="block">
                            <h5 className="font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">{art.title}</h5>
                            <p className="text-sm text-stone-500 mb-3">{art.snippet}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Read Sample →</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={100}>
                    <div className="flex items-center gap-3 mb-8">
                      <Newspaper className="text-stone-400" size={24} />
                      <h4 className="text-xl font-black text-stone-900">Newsletters</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.newsletters.map((news, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 last:border-0">
                          <a href={news.link} className="block">
                            <h5 className="font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">{news.title}</h5>
                            <p className="text-sm text-stone-500 mb-3">{news.snippet}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">View Campaign →</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                {/* VIDEO / AFTER SLIDER */}
                 <Reveal className="mb-16 flex flex-col items-center pt-20 border-t border-stone-200">
                  <PlayCircle className="text-stone-300 mb-4" size={32}/>
                  <h3 className="text-3xl font-black text-stone-900 tracking-tight">Visual Engineering</h3>
                </Reveal>
                <Reveal><BeforeAfterSlider beforeImage={FUNNEL_DATA.portfolio.videoEditing.before} afterImage={FUNNEL_DATA.portfolio.videoEditing.after} /></Reveal>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-32 bg-white border-y border-stone-200">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-amber-600 font-bold font-mono text-[10px] uppercase tracking-widest block mb-4">The Verdict</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900">Client Success</h2>
                </Reveal>
                
                <Reveal delay={100}><ReviewCarousel /></Reveal>
              </div>
            </section>

            {/* LEAD CAPTURE */}
            <section id="lead-capture" className="py-32 bg-[#FAFAF9]">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <Reveal>
                  <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-stone-900">Ready to amplify?</h2>
                  <p className="text-stone-500 text-lg mb-12">Find a time on my calendar to discuss your digital transformation.</p>
                  <a href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-amber-600 transition-all hover:-translate-y-1">
                    Schedule Session
                  </a>
                </Reveal>
              </div>
            </section>
          </div>
        ) : (
          /* ==================================================================== */
          /* 📄 ABOUT & CV PAGE (Minimalist Layout)                             */
          /* ==================================================================== */
          <div className="animate-fade-in pt-40 pb-32 bg-[#FAFAF9]">
            <section className="max-w-6xl mx-auto px-6">
              
              {/* Header Profile */}
              <Reveal className="flex flex-col items-center text-center mb-24">
                 <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border border-stone-200 shadow-sm">
                  <img src={CV_DATA.profile.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Profile" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-stone-900">{CV_DATA.profile.name}</h1>
                <h2 className="text-sm font-bold text-stone-500 mb-8 uppercase tracking-[0.2em]">{CV_DATA.profile.title}</h2>
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                  <a href={`mailto:${CV_DATA.profile.email}`} className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-medium text-sm"><Mail size={16} /> Email Me</a>
                  <a href={`tel:${CV_DATA.profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-medium text-sm"><Phone size={16} /> {CV_DATA.profile.phone}</a>
                  <a href={`https://${CV_DATA.profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors font-medium text-sm"><Linkedin size={16} /> LinkedIn</a>
                </div>
                <a href={CV_DATA.profile.cvDownloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-amber-600 transition-all hover:-translate-y-1">
                  <DownloadCloud size={16} /> Download Full CV
                </a>
              </Reveal>

              <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="md:col-span-7">
                  {/* EXP */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <Briefcase className="text-stone-300" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 tracking-tight">Experience</h3>
                    </Reveal>
                    <div className="space-y-12 border-l border-stone-200 pl-8 ml-4">
                      {CV_DATA.experience.map((job, i) => (
                        <Reveal key={i} className="relative">
                          <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-stone-300 border-2 border-[#FAFAF9]"></div>
                          <h4 className="font-bold text-xl text-stone-900">{job.role}</h4>
                          <p className="text-amber-600 font-bold text-xs mb-3 uppercase tracking-widest mt-1">{job.company} <span className="text-stone-300 mx-2">|</span> {job.period}</p>
                          <p className="text-stone-600 text-sm leading-relaxed">{job.description}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <BookOpen className="text-stone-300" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 tracking-tight">Education</h3>
                    </Reveal>
                    <div className="space-y-10 border-l border-stone-200 pl-8 ml-4">
                      {CV_DATA.education.map((edu, i) => (
                        <Reveal key={i} className="relative">
                          <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-stone-300 border-2 border-[#FAFAF9]"></div>
                          <h4 className="font-bold text-xl text-stone-900">{edu.degree}</h4>
                          <p className="text-amber-600 font-bold text-xs mb-3 uppercase tracking-widest mt-1">{edu.school} <span className="text-stone-300 mx-2">|</span> {edu.year}</p>
                          <p className="text-stone-600 text-sm leading-relaxed">{edu.description}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-5">
                  {/* SKILLS */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <Cpu className="text-stone-300" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 tracking-tight">Capabilities</h3>
                    </Reveal>
                    <div className="space-y-10">
                      {CV_DATA.skills.map((skillGroup, i) => (
                        <Reveal key={i} delay={i * 50}>
                          <h4 className="font-bold text-xs text-stone-900 uppercase tracking-widest mb-4 border-b border-stone-200 pb-2">{skillGroup.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, j) => (
                              <span key={j} className="bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* APPEARANCES */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <Tv className="text-stone-300" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 tracking-tight">Interviews</h3>
                    </Reveal>
                    <div className="grid grid-cols-1 gap-6">
                      {CV_DATA.appearances.map((item, i) => (
                        <Reveal key={i} delay={i * 100} className="group cursor-pointer flex gap-4 items-center bg-white p-3 rounded-2xl border border-stone-100 shadow-sm hover:border-amber-600 transition-colors" onClick={() => setVideoUrl(item.videoUrl)}>
                          <div className="w-24 aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-stone-200 relative bg-stone-900 shrink-0">
                            <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={item.title} />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <PlayCircle size={20} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-stone-900 group-hover:text-amber-600 transition-colors leading-tight mb-1.5">{item.title}</h4>
                            <p className="text-[9px] text-stone-400 uppercase tracking-widest">{item.show} <br/> {item.network}</p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* CERTIFICATIONS */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <Award className="text-stone-300" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 tracking-tight">Certifications</h3>
                    </Reveal>
                    <div className="space-y-3">
                      {CV_DATA.certifications.map((cert, i) => (
                        <Reveal key={i} delay={i * 30} className="border border-stone-100 bg-white p-4 rounded-xl shadow-sm group hover:border-amber-600 transition-colors">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-4">
                            <div>
                              <h4 className="font-bold text-sm text-stone-900 group-hover:text-amber-600 transition-colors leading-tight">{cert.title}</h4>
                              <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-1.5">{cert.issuer} • {cert.date}</p>
                            </div>
                            <ExternalLink size={16} className="text-stone-300 group-hover:text-amber-600 shrink-0" />
                          </a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-16 px-6 text-center border-t border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <button onClick={() => navigateTo('home')} className="font-black text-2xl tracking-tighter text-stone-900 mb-6">
            ME<span className="text-amber-600">digital</span>
          </button>
          <div className="flex gap-6 mb-10 text-stone-400">
            <a href="#" className="hover:text-stone-900 transition-colors"><InstagramIcon size={20} /></a>
            <a href={`mailto:${CV_DATA.profile.email}`} className="hover:text-stone-900 transition-colors"><Mail size={20} /></a>
          </div>
          <p className="font-semibold text-[10px] text-stone-400 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Mark Joseph Espinosa • Engineered for Conversion</p>
        </div>
      </footer>

    </div>
  );
}
