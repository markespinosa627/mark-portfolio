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
    {/* Tail */}
    <path d="M9 14C5 14 2 11 2 7" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Back Legs */}
    <path d="M12 16V21C12 21.5 12.5 22 13 22C13.5 22 14 21.5 14 21V17" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 16V20C16 20.5 16.5 21 17 21C17.5 21 18 20.5 18 20V17" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Front Legs */}
    <path d="M24 16V20C24 20.5 24.5 21 25 21C25.5 21 26 20.5 26 20V17" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M28 16V21C28 21.5 28.5 22 29 22C29.5 22 30 21.5 30 21V17" stroke="#3A2A22" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Body (Cream) */}
    <path d="M9 14C9 9 14 8 20 8C26 8 30 10 30 14C30 18 25 18 20 18C14 18 9 18 9 14Z" fill="#F3E5D8"/>
    {/* Head (Dark Brown) */}
    <circle cx="31" cy="10" r="4.5" fill="#3A2A22"/>
    {/* Ears */}
    <path d="M28 8L29 3L32 7L35 3L34 8" fill="#3A2A22"/>
  </svg>
);

// ============================================================================
// 📊 DATA CONFIGURATION
// ============================================================================
const FUNNEL_DATA = {
  brand: {
    name: "ME digital",
    headline: "Stop blending in. Start dominating.",
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
    { name: "Live Music In Cleveland", fb: "https://www.facebook.com/LMIC", logo: "/logos/LMIC.avif" }
  ],
  caseStudy: {
    hook: "How we generated 1,566% more link clicks for a client.",
    metrics: [
      {
        label: "Link Clicks", value: 1566, prefix: "+", suffix: "%", decimals: 0, icon: MousePointerClick,
        details: { problem: "The client suffered from severe ad fatigue and stagnant organic reach. Their posts were blending into the feed, leading to an extremely high Cost-Per-Click.", strategy: "We deployed generative AI to bulk-test 50+ hook variations and ad creatives in 48 hours, pinpointing the most emotionally resonant messaging to break pattern recognition.", result: "An immediate 1,566% surge in link clicks. Cost-Per-Click plummeted by 74%, directly transforming passive scrollers into highly qualified inbound traffic." }
      },
      {
        label: "Post Reach", value: 5.47, prefix: "", suffix: "m", decimals: 2, icon: Users,
        details: { problem: "Organic reach was heavily suppressed by shifting algorithm updates, making it impossible to scale brand awareness without pouring thousands into paid boosts.", strategy: "We implemented a data-driven short-form video framework that identified trending audio and optimal pacing specific to the client's exact niche.", result: "A massive viral expansion totaling 5.47 million organic impressions within 90 days, effectively establishing local market dominance without extra ad spend." }
      },
      {
        label: "Reactions", value: 489, prefix: "+", suffix: "%", decimals: 0, icon: TrendingUp,
        details: { problem: "High impressions but zero community engagement. The audience was seeing the content but feeling no motivation to interact or build brand affinity.", strategy: "Integrated a targeted conversational copy framework paired with automated ManyChat flows to instantly reward users for commenting and interacting.", result: "A 489% increase in community reactions and direct comments, triggering the algorithm to aggressively push content to lookalike audiences." }
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
        { title: "From Storyboards to the Big Screen", snippet: "Anak TV Sinebata Workshop Batch 1 empowers children to declare 'Hear My Voice'...", link: "https://anaktv.ph/from-storyboards-to-the-big-screen-anak-tv-sinebata-workshop-batch-1-empowers-children-to-declare-hear-my-voice/" },
        { title: "₱200 Wage Hike Approved", snippet: "Kamara, inaprubahan ang wage hike para sa mga minimum wage earners...", link: "https://zbni.ph/2025/06/04/%E2%82%B1200-na-dagdag-sahod-bawat-araw-kamara-inaprubahan-ang-wage-hike-para-sa-mga-minimum-wage-earners/" }
      ],
      newsletters: [
        { title: "Live Music in Cleveland", snippet: "Weekend Gig Guide: Dec 27th - 29th. The best live music events happening around the city...", link: "https://livemusicincleveland.com/p/dec-27th-29th" },
        { title: "Americans Health Insights", snippet: "New brain imaging method spots Alzheimer's-linked protein in latest medical breakthrough...", link: "https://americanshealth.beehiiv.com/p/first-name-new-brain-imaging-method-spots-alzheimer-s-linked-protein?_bhlid=6f81ea42c863486b848c764176d6e7de4bf6c8c0&last_resource_guid=Post%3Ab108cde5-e89e-4ab9-b71b-fb65efc695c8&jwt_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJzY3JpYmVyX2lkIjoiOWQxMmE4ZDktMjY4OC00OTU0LWIwNjEtNGEyNGRlZmNhNDAzIiwicHVibGljYXRpb25faWQiOiJjZWQyZTgxNS05MjFlLTQ0MWItYmQ1Zi01MDAzMDc2ODkwMmQiLCJhY2Nlc3NfdHlwZSI6InJlYWQtb25seSIsImV4cCI6MTc3MzU4Njk2NywiaXNzIjoiaHR0cHM6Ly9hcHAuYmVlaGlpdi5jb20iLCJpYXQiOjE3NzM0MTQxNjd9.MX9qNhUyfedaOU6-G-yrk9dHo2tX3soRkeqxd1woz2w" }
      ]
    }
  },
  insights: [
    {
      id: "storyboards-to-big-screen",
      title: "From Storyboards to the Big Screen",
      date: "March 2026", readTime: "4 min read",
      snippet: "Anak TV Sinebata Workshop Batch 1 empowers children to declare 'Hear My Voice'...",
      content: "Empowering the next generation of storytellers is paramount. In this immersive workshop, children were taught how to translate their raw imaginations into compelling visual storyboards, ultimately giving them the confidence to declare, 'Hear My Voice.' The integration of accessible digital tools proved that premium storytelling is no longer gatekept by high-end studio budgets.",
      externalLink: "https://anaktv.ph/from-storyboards-to-the-big-screen-anak-tv-sinebata-workshop-batch-1-empowers-children-to-declare-hear-my-voice/"
    },
    {
      id: "wage-hike-approved",
      title: "₱200 Wage Hike Approved",
      date: "June 2025", readTime: "3 min read",
      snippet: "Kamara, inaprubahan ang wage hike para sa mga minimum wage earners...",
      content: "In a pivotal legislative move, the chamber officially approved a ₱200 daily wage increase for minimum wage earners. This shift not only impacts the local economy but directly influences consumer purchasing power, changing how digital marketers must approach ad spend and targeting strategies in the coming fiscal year.",
      externalLink: "https://zbni.ph/2025/06/04/%E2%82%B1200-na-dagdag-sahod-bawat-araw-kamara-inaprubahan-ang-wage-hike-para-sa-mga-minimum-wage-earners/"
    },
    {
      id: "live-music-cleveland",
      title: "Live Music in Cleveland",
      date: "December 2025", readTime: "5 min read",
      snippet: "Weekend Gig Guide: Dec 27th - 29th. The best live music events happening around the city...",
      content: "Building localized digital communities requires hyper-specific content. The Weekend Gig Guide for Cleveland serves as a perfect case study in capturing localized search intent. By curating the city's top live music events, we established a recurring, high-engagement digital property that drives consistent returning traffic.",
      externalLink: "https://livemusicincleveland.com/p/dec-27th-29th"
    }
  ],
  reviews: [
    { text: "Produces copy fast! I have no regrets working with Mark!", author: "Mateo V." },
    { text: "The best social media guy! Saved me hours of work with AI!", author: "Seth Y." },
    { text: "Easy to collaborate with and a fast learner!", author: "Madelyn N." },
    { text: "Mark's digital strategy completely transformed our engagement.", author: "Lucas R." },
    { text: "Seamless integration of systems into a creative workflow.", author: "Sarah K." }
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
    { role: "Lead Digital & Social Media Strategist", company: "ME digital", period: "Jan 2025 – Present", description: "Directing comprehensive social media strategies, audience growth, and full-funnel marketing campaigns to drive measurable conversions and brand authority." },
    { role: "Head for Online Media", company: "Zoe Broadcasting Network Inc. (ZBNI)", period: "Nov 2022 – Jan 2025", description: "Spearheaded the network's digital frontier, providing executive leadership for all online media verticals. Orchestrated the synergy between content creation and social media strategy to expand the digital footprint." },
    { role: "Copy Writer & Development Researcher", company: "The 216 Scoop (Cleveland, USA)", period: "Aug 2024 – Jul 2025", description: "Pioneered a hybrid role at the intersection of creative content and emerging technology. Developed compelling, brand-aligned copy while optimizing digital workflows." },
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
    { category: "Technology & Innovation", items: ["Automation & System Integrations", "Web, App, & Software Development Oversight", "Data Analytics & Audience Tracking"] },
    { category: "Communication & Relations", items: ["Comprehensive Communications Strategy", "Advanced Customer Relations & De-escalation", "Client & Stakeholder Management", "Coaching & Team Mentoring"] }
  ],
  certifications: [
    { title: "Data Analytics/Science", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/gylzxcrn9n" },
    { title: "Retail & Activations Strategy", issuer: "Certified Digital Marketer", date: "Nov 2025", link: "https://cdm-learningportal.thinkific.com/certificates/loyuqwa7py" },
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
// 🚀 BEFORE/AFTER SLIDER
// ============================================================================
const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const handleMove = (e) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - left;
    setSliderPosition(Math.max(0, Math.min(100, (x / width) * 100)));
  };
  return (
    <div ref={containerRef} className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none shadow-sm border border-stone-200 dark:border-stone-800" onMouseMove={handleMove} onTouchMove={handleMove}>
      <LazyImage src={afterImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="After" />
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <LazyImage src={beforeImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none" alt="Before" />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-sm pointer-events-none" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md border border-stone-100 flex items-center justify-center text-stone-400"><MoveHorizontal size={14} /></div>
      </div>
    </div>
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

    const formData = new FormData(e.target);
    const web3FormData = new FormData();
    for (const [key, value] of formData.entries()) { web3FormData.append(key, value); }
    web3FormData.append("access_key", "b87ec373-ca5d-408c-b4ce-c131877257c6");
    web3FormData.append("subject", `New Lead: ${service.label}`);
    web3FormData.append("from_name", "ME digital Intake");
    web3FormData.append("Service_Requested", service.label);

    const sheetFormData = new FormData();
    sheetFormData.append("Date", new Date().toLocaleString());
    sheetFormData.append("Source", "Intake Form");
    sheetFormData.append("Name", formData.get("name") || "");
    sheetFormData.append("Email", formData.get("email") || "");
    sheetFormData.append("Phone", formData.get("phone") || "");
    sheetFormData.append("Location", formData.get("location") || "");
    sheetFormData.append("Service", service.label);
    sheetFormData.append("Message", formData.get("message") || "");

    try {
      await fetch("https://api.web3forms.com/submit", { method: "POST", body: web3FormData });
      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL.includes("script.google.com")) {
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, { method: "POST", body: sheetFormData, mode: "no-cors" });
      }
      setStep('sent');
      setTimeout(() => { onClose(); }, 2500);
    } catch (error) {
      console.error("Submission error:", error);
      setStep('form');
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-stone-900/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer z-10"><X size={24}/></button>
        
        {step === 'select' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-black text-stone-900 dark:text-white mb-2 pr-8">Let's build.</h3>
            <p className="text-stone-500 dark:text-stone-400 mb-8">How can I help you dominate your market?</p>
            <div className="flex flex-col gap-3">
              {servicesList.map((svc) => {
                const SvcIcon = svc.icon;
                return (
                  <button
                    key={svc.id}
                    onClick={() => { setService(svc); setStep(svc.id === 'call' ? 'call' : 'form'); }}
                    className="w-full bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 hover:border-amber-600 dark:hover:border-amber-500 text-stone-700 dark:text-stone-300 p-4 rounded-2xl flex items-center gap-4 transition-all group hover:bg-stone-900 dark:hover:bg-amber-600 hover:text-white cursor-pointer"
                  >
                    <div className="bg-white dark:bg-stone-900 p-2 rounded-xl group-hover:bg-white/20 transition-colors">
                      <SvcIcon size={20} className="text-stone-900 dark:text-white group-hover:text-white" />
                    </div>
                    <span className="font-bold text-sm text-left flex-1">{svc.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'call' && (
          <div className="animate-fade-in text-center py-6">
            <button onClick={() => setStep('select')} className="absolute top-6 left-6 text-xs font-bold text-stone-400 hover:text-stone-900 dark:hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer"><ArrowLeft size={14}/> Back</button>
            <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
              <Calendar size={32} className="text-amber-600" />
            </div>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Book Your Session</h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-8">
              You will be redirected to my official Google Calendar portal. It will automatically detect your time zone, capture your details, and instantly email both of us a Google Meet link.
            </p>
            <MagneticWrapper href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 cursor-pointer border-none block">
              Open Booking Portal <ExternalLink size={16} />
            </MagneticWrapper>
          </div>
        )}

        {(step === 'form' || step === 'sending') && (
          <div className="animate-fade-in">
            <button onClick={() => setStep('select')} className="text-xs font-bold text-stone-400 hover:text-stone-900 dark:hover:text-white uppercase tracking-widest flex items-center gap-1 mb-6 transition-colors cursor-pointer"><ArrowLeft size={14}/> Back</button>
            <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-6 leading-tight">{service?.label}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-1.5">Name</label>
                  <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:border-amber-600 outline-none transition-colors text-sm" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-1.5">Email</label>
                  <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:border-amber-600 outline-none transition-colors text-sm" placeholder="jane@co.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-1.5">Phone</label>
                  <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:border-amber-600 outline-none transition-colors text-sm" placeholder="+1 234 567" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-1.5">Location</label>
                  <input required type="text" name="location" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:border-amber-600 outline-none transition-colors text-sm" placeholder="City, Country" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-900 dark:text-white uppercase tracking-widest mb-1.5">Project Details</label>
                <textarea required rows={3} name="message" className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white focus:border-amber-600 outline-none transition-colors resize-none text-sm" placeholder="Tell me about your goals..." />
              </div>
              
              <button type="submit" disabled={step === 'sending'} className="w-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-amber-600 dark:hover:bg-amber-500 transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer border-none">
                {step === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {step === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        )}

        {step === 'sent' && (
          <div className="py-12 flex flex-col items-center justify-center animate-scale-up">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <p className="font-bold text-xl text-stone-900 dark:text-white mb-2">Inquiry Received!</p>
            <p className="text-stone-500 dark:text-stone-400 text-sm text-center">I've received your request for {service?.label}. I'll be in touch shortly.</p>
          </div>
        )}

      </div>
    </div>
  );
};

// ============================================================================
// 🚀 CASE STUDY MODAL
// ============================================================================
const CaseStudyModal = ({ activeStudy, onClose }) => {
  if (!activeStudy) return null;
  const Icon = activeStudy.icon;
  return (
    <div className="fixed inset-0 z-[99999] bg-stone-900/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-stone-900 rounded-[2rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={24}/></button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center shrink-0">
            <Icon size={32} className="text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">{activeStudy.label}</p>
            <p className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">{activeStudy.prefix}{activeStudy.value.toLocaleString()}{activeStudy.suffix}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-stone-50 dark:bg-stone-950 p-6 rounded-2xl border border-stone-100 dark:border-stone-800">
            <p className="text-[10px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-2">The Problem</p>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-medium">{activeStudy.details.problem}</p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20">
            <p className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-2">AI Strategy Applied</p>
            <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed font-medium">{activeStudy.details.strategy}</p>
          </div>
          <div className="bg-stone-900 dark:bg-stone-800 p-6 rounded-2xl">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">The Result</p>
            <p className="text-sm text-white leading-relaxed font-medium">{activeStudy.details.result}</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full mt-8 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-stone-200 dark:hover:bg-stone-700 transition-all cursor-pointer">Close Breakdown</button>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 HYBRID CHATBOT WIDGET (Local "Choose Your Own Adventure" Ichigo)
// ============================================================================
const getBotResponse = (userInput) => {
  const text = userInput.toLowerCase();
  
  if (text.includes('who is mark') || text.includes('background') || text.includes('experience') || text.includes('resume')) {
    return "Mark is my absolute favorite human! 🐾 He's a brilliant Social Media Strategist and Digital Marketer. He knows exactly how to grow brands and build digital systems that convert. (And he gives the best chin scratches!)";
  }
  if (text.includes('what do you do') || text.includes('service') || text.includes('help')) {
    return "We build powerful social media strategies, manage GoHighLevel, and create stunning websites. Mark handles all the marketing magic, and I provide the emotional support! 🐈 Click a service button below to get started.";
  }
  if (text.includes('result') || text.includes('portfolio') || text.includes('work') || text.includes('show me')) {
    return "Oh, we get amazing results! Like +1,566% link clicks and millions in organic reach. Mark works very hard on these. Check out the 'Works' page to see all the pretty numbers! 📈";
  }
  if (text.includes('price') || text.includes('cost') || text.includes('budget') || text.includes('rate')) {
    return "Quality work needs a proper budget! Mark tailors his rates based on your specific goals. You should book a strategy call with him so he can give you the best options! 🐟";
  }
  if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('whatsapp')) {
    return "The fastest way to reach him is the big green WhatsApp button at the top! Or you can email hello@markespinosa.com. Just don't email during my nap time! 💤";
  }
  if (text.includes('book') || text.includes('call') || text.includes('schedule') || text.includes('meeting')) {
    return `Yay! Mark loves talking strategy. Use this link to get on his calendar: ${FUNNEL_DATA.brand.contact.calendarUrl} or click the WhatsApp button up top!`;
  }
  if (text.includes('cat') || text.includes('kitty') || text.includes('tuna') || text.includes('cute') || text.includes('meow')) {
    return "*purrs loudly* You're so sweet! I love a good head pat. But enough about me, let's talk about growing your brand! 🐈";
  }
  
  return "*tilts head and blinks* I'm just a cat, so I didn't quite catch that. Try asking about Mark's experience, our services, or just tell me you want to book a call! 🐾";
};

const IchigoChatWidget = ({ onTriggerContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Meow! I'm Ichigo, Mark's furry assistant. He's busy building killer social media strategies and high-converting systems so he can buy me premium tuna. How can we help you today? 🐾", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const conversationStarters = [
    "Who is Mark?",
    "What do you do?",
    "Show me results.",
    "Book a Call"
  ];

  const quickActions = [
    { id: 'web', label: "Website", icon: Laptop },
    { id: 'social', label: "Social Media", icon: Smartphone },
    { id: 'ghl', label: "GoHighLevel", icon: TrendingUp },
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const processMessage = (userText) => {
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    setIsLoading(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const botResponse = getBotResponse(userText);
      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      setIsLoading(false);
    }, 1200);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userText = input;
    setInput("");
    processMessage(userText);
  };

  const formatBotMessage = (text) => {
    if (typeof text !== 'string') return text;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest mt-3 mb-2 hover:bg-amber-600 transition-colors shadow-md w-max border border-amber-400 no-underline cursor-pointer">
            <ExternalLink size={14} /> Open Link
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Custom Keyframes for Running Cat */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes run-cat {
          0% { left: -40px; transform: scaleX(1); }
          45% { left: calc(100% + 10px); transform: scaleX(1); }
          50% { left: calc(100% + 10px); transform: scaleX(-1); }
          95% { left: -40px; transform: scaleX(-1); }
          100% { left: -40px; transform: scaleX(1); }
        }
        .running-cat {
          position: absolute;
          top: -24px;
          animation: run-cat 12s linear infinite;
          z-index: 10;
          filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.15));
        }
      `}} />

      {/* Chat Window */}
      <div className={`bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 w-[90vw] sm:w-[380px] h-[550px] max-h-[75vh] flex flex-col pointer-events-auto transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} relative`}>
        
        {/* Animated Cat */}
        {isOpen && <div className="running-cat pointer-events-none"><SiameseCatSVG /></div>}

        {/* Header */}
        <div className="p-4 border-b border-stone-100 dark:border-stone-800 flex justify-between items-center bg-stone-50 dark:bg-stone-950 rounded-t-3xl shrink-0 z-20 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-200 dark:border-stone-700 relative">
              <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Ichigo" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></span>
            </div>
            <div>
              <h4 className="font-black text-sm text-stone-900 dark:text-white uppercase tracking-widest leading-none">Ichigo</h4>
              <p className="text-[10px] text-amber-600 font-bold mt-1">Feline Happiness Manager</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={20}/></button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF9] dark:bg-stone-950 hide-scrollbar z-10">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed flex flex-col ${m.isBot ? 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 rounded-tl-sm shadow-sm' : 'bg-stone-900 text-white rounded-tr-sm shadow-md'}`}>
                {m.isBot ? formatBotMessage(m.text) : m.text}
              </div>
            </div>
          ))}
          
          {/* Conversation Starters (Only show at the beginning) */}
          {messages.length === 1 && !isLoading && (
            <div className="flex flex-wrap gap-2 mt-2">
              {conversationStarters.map((starter, i) => (
                <button
                  key={i}
                  onClick={() => processMessage(starter)}
                  className="bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold px-3 py-2 rounded-full hover:bg-amber-600 hover:text-white dark:hover:bg-amber-500 dark:hover:text-stone-900 transition-colors cursor-pointer text-left"
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions for Modal Injection */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto hide-scrollbar shrink-0 bg-white dark:bg-stone-900 pt-2 border-t border-stone-100 dark:border-stone-800 z-10">
          {quickActions.map(action => {
            const ActionIcon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => {
                  setIsOpen(false);
                  const mockService = { id: action.id, label: `I need help with ${action.label}` };
                  onTriggerContact('form', mockService);
                }}
                type="button"
                className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <ActionIcon size={12} /> {action.label} Form
              </button>
            );
          })}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 rounded-b-3xl flex gap-2 shrink-0 z-10">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-2 text-sm text-stone-900 dark:text-white focus:border-amber-600 dark:focus:border-amber-500 outline-none transition-colors"
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="bg-amber-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0 hover:bg-amber-700 transition-colors disabled:opacity-50 cursor-pointer border-none">
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Floating Trigger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className={`pointer-events-auto w-16 h-16 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all overflow-hidden border-4 border-white dark:border-stone-800 relative group cursor-pointer ${isOpen ? 'scale-0 opacity-0 hidden' : 'scale-100 opacity-100'}`}>
        <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Chat with Ichigo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-amber-600/20 group-hover:bg-amber-600/40 transition-colors"></div>
        <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </button>

    </div>
  );
};

// ============================================================================
// 🚀 REVIEW CAROUSEL WITH MANUAL + NATIVE SCROLL
// ============================================================================
const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const reviews = FUNNEL_DATA.reviews;
  
  // Drag to scroll logic for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto snap-x snap-mandatory flex gap-6 pb-8 hide-scrollbar px-6 md:px-0 scroll-smooth touch-pan-x ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
      >
        {reviews.map((review, idx) => (
          <div key={idx} className="w-[85vw] md:w-[400px] snap-center flex-shrink-0">
            <div className="bg-[#FAFAF9] dark:bg-stone-950 p-8 md:p-10 rounded-[2rem] border border-stone-100 dark:border-stone-800 shadow-sm h-full flex flex-col justify-between pointer-events-none">
              <div>
                <div className="flex gap-1 mb-6 text-left">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="text-amber-500 fill-amber-500" size={14} />)}
                </div>
                <p className="text-lg md:text-xl font-medium text-stone-800 dark:text-white leading-relaxed text-left">"{review.text}"</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-left">
                <p className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-widest">— {review.author}</p>
                <div className="w-10 h-10 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-stone-300 dark:text-stone-600 transition-colors">
                  <Users size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop / Manual Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4 pointer-events-auto">
        <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-stone-900 shadow-md border border-stone-200 dark:border-stone-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-stone-900 dark:text-white transition-colors cursor-pointer">
          <ArrowLeft size={20} />
        </button>
        <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-stone-900 shadow-md border border-stone-200 dark:border-stone-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-stone-900 dark:text-white transition-colors cursor-pointer">
          <ArrowRight size={20} />
        </button>
      </div>
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
    <div className="fixed bottom-0 left-0 w-full z-[9999] p-4 md:p-6 animate-fade-in-up pointer-events-none">
      <div className="max-w-4xl mx-auto bg-[#432818] text-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6 pointer-events-auto">
        <div className="bg-white/10 p-4 rounded-2xl"><ShieldCheck size={32} className="text-[#DDA15E]"/></div>
        <div className="flex-1 text-left">
          <h4 className="font-black text-lg mb-1 tracking-tight text-white">Your privacy, our priority.</h4>
          <p className="text-sm text-white/70 font-medium leading-relaxed">
            We use cookies to analyze site traffic, personalize content, and provide a high-conversion browsing experience. By clicking "Accept All", you agree to our data usage policy.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button onClick={() => handleConsent('declined')} className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-white/20 text-sm font-bold hover:bg-white/5 transition-colors text-white cursor-pointer">Decline</button>
          <button onClick={() => handleConsent('accepted')} className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#D97706] text-white text-sm font-black uppercase tracking-widest hover:bg-[#B45309] transition-all shadow-lg active:scale-95 cursor-pointer">Accept All</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 SOCIAL AUDIT TOOL WITH LEAD CAPTURE
// ============================================================================
const SocialAuditTool = ({ onTriggerContact }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const getAuditResult = () => {
    if (score >= 90) return { label: "OPTIMIZED", color: "text-green-600", advice: "Your systems are elite. You're ready to scale reach using AI-driven automation." };
    if (score >= 60) return { label: "MODERATE", color: "text-amber-600", advice: "You have a foundation, but you're losing 60% of potential leads to manual friction." };
    return { label: "CRITICAL", color: "text-red-600", advice: "Your digital presence is leaking revenue. A complete strategy overhaul is recommended." };
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      const web3FormData = new FormData();
      web3FormData.append("access_key", "b87ec373-ca5d-408c-b4ce-c131877257c6");
      web3FormData.append("subject", "New Lead from Social Audit Tool");
      web3FormData.append("from_name", "Interactive Audit");
      web3FormData.append("email", email);
      web3FormData.append("Audit Score", score.toString());
      web3FormData.append("Audit Grade", getAuditResult().label);

      const sheetFormData = new FormData();
      sheetFormData.append("Date", new Date().toLocaleString());
      sheetFormData.append("Source", "Social Audit");
      sheetFormData.append("Name", "N/A");
      sheetFormData.append("Email", email);
      sheetFormData.append("Message", `Audit Score: ${score} | Grade: ${getAuditResult().label}`);

      try {
        await fetch("https://api.web3forms.com/submit", { method: "POST", body: web3FormData });
        if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL.includes("script.google.com")) {
          await fetch(GOOGLE_SHEETS_SCRIPT_URL, { method: "POST", body: sheetFormData, mode: "no-cors" });
        }
      } catch (err) { console.error("Form submission error", err); }
      
      setIsSubmitting(false);
      setShowResult(true);
    }
  };

  return (
    <div className="bg-white dark:bg-stone-900 rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-200 dark:border-stone-800 relative overflow-hidden min-h-[400px] flex flex-col justify-center max-w-3xl mx-auto transition-colors">
      {step < questions.length && (
        <div className="animate-fade-in text-left">
          <div className="flex justify-between items-center mb-8">
            <span className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">Step {step + 1} of {questions.length}</span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-amber-600' : 'bg-stone-100 dark:bg-stone-800'}`}></div>
              ))}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-stone-900 dark:text-white mb-10 leading-tight">{questions[step].q}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[step].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt.points)} className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 p-5 rounded-2xl font-bold text-left hover:bg-stone-900 dark:hover:bg-amber-600 hover:text-white dark:hover:text-white hover:border-stone-900 dark:hover:border-amber-600 transition-all active:scale-95 group flex items-center justify-between cursor-pointer">
                {opt.text}
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}
      {step === questions.length && !showResult && (
        <div className="animate-scale-up text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-amber-600 dark:text-amber-500" size={32} />
          </div>
          <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Audit Complete!</h3>
          <p className="text-stone-500 dark:text-stone-400 font-medium mb-8">Enter your email below to instantly reveal your Growth Grade and custom strategy.</p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your best email..." className="w-full px-6 py-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:border-amber-600 outline-none font-medium text-center text-stone-900 dark:text-white transition-colors" />
            <MagneticWrapper type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl font-black text-white bg-stone-900 dark:bg-white dark:text-stone-900 hover:bg-amber-600 dark:hover:bg-amber-500 transition-all uppercase tracking-widest text-sm flex justify-center items-center gap-2 cursor-pointer border-none">
              {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
              {isSubmitting ? 'Processing...' : 'Reveal My Results'}
            </MagneticWrapper>
          </form>
        </div>
      )}
      {showResult && (
        <div className="animate-scale-up text-center">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
            <BarChart3 className="text-amber-600 dark:text-amber-500" size={40} />
          </div>
          <h3 className="text-stone-400 font-mono text-xs uppercase tracking-[0.3em] mb-2 font-bold">Your Growth Grade</h3>
          <p className={`text-5xl md:text-6xl font-black mb-6 ${getAuditResult().color}`}>{getAuditResult().label}</p>
          <p className="text-stone-600 dark:text-stone-300 text-lg font-medium mb-10 max-w-md mx-auto leading-relaxed">{getAuditResult().advice}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { setStep(0); setScore(0); setEmail(''); setShowResult(false); }} className="text-stone-400 font-bold text-sm hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer">Retake Audit</button>
            <MagneticWrapper onClick={() => onTriggerContact('select', null)} className="bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-lg hover:bg-amber-600 dark:hover:bg-amber-500 transition-all cursor-pointer border-none">Book Strategy Call</MagneticWrapper>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 🚀 MAIN APP
// ============================================================================

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activePost, setActivePost] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Modals & Exits
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const exitIntentTriggered = useRef(false);

  // Centralized Contact Modal State
  const [contactModalState, setContactModalState] = useState({ isOpen: false, step: 'select', service: null });

  const handleTriggerContact = (step = 'select', service = null) => {
    setContactModalState({ isOpen: true, step, service });
  };

  // Floating Section Tracker
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'audit', 'metrics', 'portfolio', 'reviews', 'lead-capture'];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '') || 'home';
    if (['home', 'about', 'privacy', 'ai-use', 'insights'].includes(path)) {
      setActivePage(path);
    }

    const handlePopState = () => {
      const newPath = window.location.pathname.replace('/', '') || 'home';
      setActivePage(newPath);
      setActivePost(null);
    };
    window.addEventListener('popstate', handlePopState);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);

    const handleMouseMove = (e) => {
      if (e.clientY < 15 && !exitIntentTriggered.current) {
        setShowExitIntent(true);
        exitIntentTriggered.current = true;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-section]').forEach(sec => observer.observe(sec));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('popstate', handlePopState);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const titles = {
      home: "ME digital | Digital Strategy & AI Automation",
      about: "Mark Espinosa | Digital Strategist & AI Engineer",
      privacy: "Privacy Policy | ME digital",
      'ai-use': "AI Ethics & Usage | ME digital",
      insights: activePost ? `${activePost.title} | ME digital` : "Insights & Strategy | ME digital"
    };
    document.title = titles[activePage] || titles.home;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = activePost ? activePost.snippet : FUNNEL_DATA.brand.subheadline;
  }, [activePage, activePost]);

  const navigateTo = (page, e = null) => {
    if (e) e.preventDefault();
    setIsTransitioning(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
      setActivePage(page);
      setActivePost(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 400);
  };

  const openPost = (post, e) => {
    if (e) e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      window.history.pushState({}, '', `/insights`);
      setActivePage('insights');
      setActivePost(post);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-stone-950 text-stone-900 dark:text-white font-sans flex flex-col selection:bg-amber-600 selection:text-white transition-colors duration-300">
      
      {/* 🚀 GLOBAL CSS OVERRIDES */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { width: 10px; background: transparent; }
        ::-webkit-scrollbar-track { background: ${darkMode ? '#0c0a09' : '#f5f5f4'}; }
        ::-webkit-scrollbar-thumb { background: ${darkMode ? '#292524' : '#d6d3d1'}; border-radius: 10px; border: 2px solid ${darkMode ? '#0c0a09' : '#f5f5f4'}; }
        ::-webkit-scrollbar-thumb:hover { background: #d97706; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* 🚀 SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-1 bg-amber-600 z-[99999] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

      {/* 🚀 MODALS */}
      <ContactModal
        isOpen={contactModalState.isOpen}
        onClose={() => setContactModalState(prev => ({ ...prev, isOpen: false }))}
        initialStep={contactModalState.step}
        initialService={contactModalState.service}
      />
      <CaseStudyModal activeStudy={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
      
      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 z-[99999] bg-stone-900/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowExitIntent(false)}>
          <div className="bg-white dark:bg-stone-900 rounded-[2rem] p-10 max-w-lg text-center shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowExitIntent(false)} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={24}/></button>
            <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-6"><TrendingUp size={32} className="text-amber-600" /></div>
            <h3 className="text-4xl font-black text-stone-900 dark:text-white mb-4 tracking-tight">Leaving so soon?</h3>
            <p className="text-stone-500 dark:text-stone-400 mb-8">Don't leave your digital growth to chance. Let's map out a custom AI strategy for your brand—completely free.</p>
            <MagneticWrapper onClick={() => { setShowExitIntent(false); handleTriggerContact('select', null); }} className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-stone-900 dark:hover:bg-white dark:hover:text-stone-900 transition-all cursor-pointer border-none">Claim Strategy Session</MagneticWrapper>
            <button onClick={() => setShowExitIntent(false)} className="mt-4 text-xs font-bold text-stone-400 hover:text-stone-900 dark:hover:text-white uppercase tracking-widest cursor-pointer">No thanks, I hate growth</button>
          </div>
        </div>
      )}

      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-white/95 dark:bg-stone-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-8 right-8 text-stone-900 dark:text-white cursor-pointer"><X size={32}/></button>
          <img src={lightboxImg} className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800" alt="Full View" />
        </div>
      )}

      {/* FLOATING SECTION TRACKER (Home Page Only) */}
      {activePage === 'home' && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col gap-4">
          {sections.map(sec => (
            <div
              key={sec}
              onClick={() => document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' })}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${activeSection === sec ? 'bg-amber-600 scale-150' : 'bg-stone-300 dark:bg-stone-700 hover:bg-stone-400'}`}
              title={sec.replace('-', ' ').toUpperCase()}
            />
          ))}
        </div>
      )}

      {/* 🧭 NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-stone-950/90 backdrop-blur-md shadow-sm border-b border-stone-100 dark:border-stone-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button onClick={(e) => navigateTo('home', e)} className="font-black text-2xl tracking-tighter text-stone-900 dark:text-white cursor-pointer">
            ME<span className="text-amber-600">digital</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={(e) => navigateTo('home', e)} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer ${activePage === 'home' ? 'text-amber-600' : 'text-stone-400 hover:text-stone-900 dark:hover:text-white'}`}>Works</button>
            <button onClick={(e) => navigateTo('about', e)} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer ${activePage === 'about' ? 'text-amber-600' : 'text-stone-400 hover:text-stone-900 dark:hover:text-white'}`}>About & CV</button>
            <button onClick={(e) => navigateTo('insights', e)} className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer ${activePage === 'insights' ? 'text-amber-600' : 'text-stone-400 hover:text-stone-900 dark:hover:text-white'}`}>Insights</button>
            
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer" aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* ✅ FIXED TOP NAV BUTTON -> DIRECT WHATSAPP */}
            <MagneticWrapper href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1DA851] transition-all shadow-sm flex items-center gap-2 cursor-pointer border-none">
              <MessageSquare size={14} /> WhatsApp Me
            </MagneticWrapper>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-900 dark:text-white cursor-pointer">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="text-stone-900 dark:text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[49] bg-white dark:bg-stone-950 flex flex-col p-8 space-y-8 md:hidden pt-32 animate-fade-in">
          <button onClick={(e) => navigateTo('home', e)} className="text-4xl font-black text-left text-stone-900 dark:text-white cursor-pointer">Works</button>
          <button onClick={(e) => navigateTo('about', e)} className="text-4xl font-black text-left text-stone-900 dark:text-white cursor-pointer">About & CV</button>
          <button onClick={(e) => navigateTo('insights', e)} className="text-4xl font-black text-left text-stone-900 dark:text-white cursor-pointer">Insights</button>
          {/* ✅ FIXED MOBILE MENU BUTTON -> DIRECT WHATSAPP */}
          <a href={FUNNEL_DATA.brand.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-4xl font-black text-[#25D366] text-left cursor-pointer flex items-center gap-4">
            <MessageSquare size={36}/> WhatsApp Me
          </a>
        </div>
      )}

      <IchigoChatWidget onTriggerContact={handleTriggerContact} />
      <CookieBanner />

      {/* 🚀 MAIN CONTENT WITH SMOOTH TRANSITION */}
      <main className={`flex-1 transition-all duration-400 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        
        {/* ==================================================================== */}
        {/* 📄 HOME PAGE                                                         */}
        {/* ==================================================================== */}
        {activePage === 'home' && (
          <div className="overflow-x-hidden">
            
            {/* HERO */}
            <section id="hero" data-section className="pt-48 pb-20 px-6 text-center min-h-[85vh] flex flex-col justify-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 font-semibold text-[10px] uppercase tracking-[0.2em] mb-8 border border-stone-200 dark:border-stone-800">
                  AI Automation & Strategy
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-stone-900 dark:text-white leading-[1.05] tracking-tighter max-w-5xl mx-auto mb-8 transition-colors">
                  Stop blending in.<br/>Start dominating.
                </h1>
                <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
                  {FUNNEL_DATA.brand.subheadline}
                </p>
                <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="group bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl flex items-center gap-3 mx-auto hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-white transition-all cursor-pointer border-none w-fit">
                  Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </MagneticWrapper>
              </Reveal>
            </section>

            {/* MARQUEE BRANDS */}
            <section className="py-12 border-y border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 overflow-hidden flex items-center">
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
            <section id="audit" data-section className="py-32 bg-[#FAFAF9] dark:bg-stone-950">
              <div className="max-w-5xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-amber-600 font-bold font-mono text-[10px] uppercase tracking-widest block mb-4">Interactive Audit</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-stone-900 dark:text-white">Is your strategy failing?</h2>
                  <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">Most brands post without a system. Use this quick audit to find your biggest growth bottleneck.</p>
                </Reveal>
                <Reveal delay={200}><SocialAuditTool onTriggerContact={handleTriggerContact} /></Reveal>
              </div>
            </section>

            {/* PROOF METRICS (DEEP DIVE MODALS ADDED) */}
            <section id="metrics" data-section className="py-32 bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <p className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Proven Results</p>
                  <h3 className="text-2xl md:text-3xl font-black text-stone-900 dark:text-white max-w-2xl mx-auto leading-tight">{FUNNEL_DATA.caseStudy.hook}</h3>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                  {FUNNEL_DATA.caseStudy.metrics.map((m, i) => {
                    const MIcon = m.icon;
                    return (
                      <Reveal key={i} delay={i*100}>
                        <TiltCard className="text-center p-8 rounded-2xl border border-stone-100 dark:border-stone-800 bg-[#FAFAF9] dark:bg-stone-950 shadow-sm hover:shadow-xl hover:border-amber-600 transition-all cursor-pointer group" onClick={() => setActiveCaseStudy(m)}>
                          <MIcon className="text-stone-300 dark:text-stone-600 mb-6 mx-auto group-hover:text-amber-600 transition-colors duration-500" size={32} />
                          <p className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-2 tracking-tight group-hover:scale-105 transition-transform duration-500">
                            <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                          </p>
                          <p className="text-stone-500 dark:text-stone-400 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                            {m.label} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                          </p>
                        </TiltCard>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* COMPREHENSIVE PORTFOLIO SECTION */}
            <section id="portfolio" data-section className="py-32 bg-[#FAFAF9] dark:bg-stone-950">
              <div className="max-w-6xl mx-auto px-6">
                
                {/* Graphics */}
                <Reveal className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <ImageIcon className="text-stone-300 dark:text-stone-600" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Sample Graphics</h3>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {FUNNEL_DATA.portfolio.graphics.map((img, i) => (
                      <TiltCard key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 cursor-pointer group bg-white dark:bg-stone-900" onClick={() => setLightboxImg(img)}>
                        <LazyImage src={img} alt="Graphic" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </TiltCard>
                    ))}
                  </div>
                </Reveal>

                {/* Vertical Videos */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="text-stone-300 dark:text-stone-600" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Vertical Content (Reels/TikTok)</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {FUNNEL_DATA.portfolio.verticalVideos.map((vid, i) => (
                      <TiltCard key={i} className="group cursor-pointer">
                        <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-sm border-4 border-stone-100 dark:border-stone-800 relative bg-stone-900">
                          <LazyImage src={vid.img} alt={vid.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle size={48} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                          </div>
                        </div>
                        <p className="font-bold text-sm mt-4 text-center text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500">{vid.title}</p>
                      </TiltCard>
                    ))}
                  </div>
                </Reveal>

                {/* Horizontal Videos */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-3 mb-6">
                    <Film className="text-stone-300 dark:text-stone-600" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Cinematic 16:9 Video</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {FUNNEL_DATA.portfolio.horizontalVideos.map((vid, i) => (
                      <TiltCard key={i} className="group cursor-pointer">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 relative bg-stone-900">
                          <LazyImage src={vid.img} alt={vid.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle size={48} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"/>
                          </div>
                        </div>
                        <p className="font-bold text-base mt-4 text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500">{vid.title}</p>
                      </TiltCard>
                    ))}
                  </div>
                </Reveal>

                {/* Web Architecture */}
                <Reveal className="mb-12 pt-16 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-3 mb-6">
                    <Monitor className="text-stone-300 dark:text-stone-600" size={32}/>
                    <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Digital Architectures</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12">
                    {FUNNEL_DATA.portfolio.websites.map((s, i) => (
                      <Reveal key={i}>
                        <TiltCard className="group cursor-pointer text-left" onClick={() => setLightboxImg(s.img)}>
                          <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm relative aspect-[4/3] bg-white dark:bg-stone-900">
                            <LazyImage src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="flex justify-between items-center mt-6 px-2">
                            <p className="font-bold text-lg text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{s.title}</p>
                            {s.link && (
                              <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-stone-900 dark:hover:text-white flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                Visit Site <ExternalLink size={12}/>
                              </a>
                            )}
                          </div>
                        </TiltCard>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>

                {/* WRITTEN STRATEGY */}
                <div className="grid md:grid-cols-2 gap-16 pt-20 border-t border-stone-200 dark:border-stone-800">
                  <Reveal>
                    <div className="flex items-center gap-3 mb-8">
                      <FileText className="text-stone-400 dark:text-stone-500" size={24} />
                      <h4 className="text-xl font-black text-stone-900 dark:text-white">Articles & Copy</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.articles.map((art, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 dark:border-stone-800 last:border-0">
                          <a href={art.link} target="_blank" rel="noopener noreferrer" className="block">
                            <h5 className="font-bold text-stone-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{art.title}</h5>
                            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">{art.snippet}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Read Sample →</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={100}>
                    <div className="flex items-center gap-3 mb-8">
                      <Newspaper className="text-stone-400 dark:text-stone-500" size={24} />
                      <h4 className="text-xl font-black text-stone-900 dark:text-white">Newsletters</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.newsletters.map((news, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 dark:border-stone-800 last:border-0">
                          <a href={news.link} target="_blank" rel="noopener noreferrer" className="block">
                            <h5 className="font-bold text-stone-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{news.title}</h5>
                            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">{news.snippet}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">View Campaign →</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                {/* VIDEO / AFTER SLIDER */}
                 <Reveal className="mb-16 flex flex-col items-center pt-20 border-t border-stone-200 dark:border-stone-800">
                  <PlayCircle className="text-stone-300 dark:text-stone-600 mb-4" size={32}/>
                  <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Visual Engineering</h3>
                </Reveal>
                <Reveal><BeforeAfterSlider beforeImage={FUNNEL_DATA.portfolio.videoEditing.before} afterImage={FUNNEL_DATA.portfolio.videoEditing.after} /></Reveal>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section id="reviews" data-section className="py-32 bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="text-amber-600 font-bold font-mono text-[10px] uppercase tracking-widest block mb-4">The Verdict</span>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 dark:text-white">Client Success</h2>
                </Reveal>
                
                <Reveal delay={100}><ReviewCarousel /></Reveal>
              </div>
            </section>

            {/* LEAD CAPTURE */}
            <section id="lead-capture" data-section className="py-32 bg-[#FAFAF9] dark:bg-stone-950">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <Reveal>
                  <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-stone-900 dark:text-white">Ready to amplify?</h2>
                  <p className="text-stone-500 dark:text-stone-400 text-lg mb-12">Message me directly to discuss your digital transformation.</p>
                  <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="inline-flex items-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-white transition-all cursor-pointer border-none w-fit mx-auto">
                    Send Message <Send size={16} />
                  </MagneticWrapper>
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* ==================================================================== */}
        {/* 📄 ABOUT & CV PAGE                                                   */}
        {/* ==================================================================== */}
        {activePage === 'about' && (
          <div className="pt-40 pb-32 bg-[#FAFAF9] dark:bg-stone-950">
            <section className="max-w-6xl mx-auto px-6">
              
              {/* Header Profile */}
              <Reveal className="flex flex-col items-center text-center mb-24">
                 <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border border-stone-200 dark:border-stone-800 shadow-lg">
                  <LazyImage src={CV_DATA.profile.image} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter text-stone-900 dark:text-white">{CV_DATA.profile.name}</h1>
                <h2 className="text-sm font-bold text-stone-500 dark:text-stone-400 mb-8 uppercase tracking-[0.2em]">{CV_DATA.profile.title}</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <button onClick={() => handleTriggerContact('select', null)} className="flex items-center gap-2 bg-white dark:bg-stone-900 px-6 py-3 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-all font-bold text-xs uppercase tracking-widest shadow-sm cursor-pointer"><Mail size={16} /> Email Me</button>
                  <a href={CV_DATA.socials.blinq} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-stone-900 px-6 py-3 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-all font-bold text-xs uppercase tracking-widest shadow-sm cursor-pointer"><Contact size={16} /> Digital Card</a>
                  <a href={CV_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-stone-900 px-6 py-3 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 transition-all font-bold text-xs uppercase tracking-widest shadow-sm cursor-pointer"><LinkedInIcon size={16} /> LinkedIn</a>
                </div>
                <MagneticWrapper href={CV_DATA.profile.cvDownloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-white transition-all cursor-pointer">
                  <DownloadCloud size={16} /> Download Full CV
                </MagneticWrapper>
              </Reveal>

              <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="md:col-span-7">
                  {/* EXP */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <Briefcase className="text-stone-300 dark:text-stone-600" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Experience</h3>
                    </Reveal>
                    <div className="space-y-12 border-l border-stone-200 dark:border-stone-800 pl-8 ml-4">
                      {CV_DATA.experience.map((job, i) => (
                        <Reveal key={i} className="relative">
                          <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600 border-2 border-[#FAFAF9] dark:border-stone-950"></div>
                          <h4 className="font-bold text-xl text-stone-900 dark:text-white">{job.role}</h4>
                          <p className="text-amber-600 dark:text-amber-500 font-bold text-xs mb-3 uppercase tracking-widest mt-1">{job.company} <span className="text-stone-300 dark:text-stone-700 mx-2">|</span> {job.period}</p>
                          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{job.description}</p>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  {/* EDUCATION */}
                  <div className="mb-24">
                    <Reveal className="mb-10 flex items-center gap-3">
                      <BookOpen className="text-stone-300 dark:text-stone-600" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Education</h3>
                    </Reveal>
                    <div className="space-y-10 border-l border-stone-200 dark:border-stone-800 pl-8 ml-4">
                      {CV_DATA.education.map((edu, i) => (
                        <Reveal key={i} className="relative">
                          <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-stone-300 dark:bg-stone-600 border-2 border-[#FAFAF9] dark:border-stone-950"></div>
                          <h4 className="font-bold text-xl text-stone-900 dark:text-white">{edu.degree}</h4>
                          <p className="text-amber-600 dark:text-amber-500 font-bold text-xs mb-3 uppercase tracking-widest mt-1">{edu.school} <span className="text-stone-300 dark:text-stone-700 mx-2">|</span> {edu.year}</p>
                          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{edu.description}</p>
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
                      <Cpu className="text-stone-300 dark:text-stone-600" size={32} />
                      <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">Capabilities</h3>
                    </Reveal>
                    <div className="space-y-10">
                      {CV_DATA.skills.map((skillGroup, i) => (
                        <Reveal key={i} delay={i * 50}>
                          <h4 className="font-bold text-xs text-stone-900 dark:text-white uppercase tracking-widest mb-4 border-b border-stone-200 dark:border-stone-800 pb-2">{skillGroup.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, j) => (
                              <span key={j} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm">
                                {item}
                              </span>
                            ))}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FULL-WIDTH APPEARANCES / INTERVIEWS SECTION */}
              <div className="mt-12 pt-24 border-t border-stone-200 dark:border-stone-800">
                <Reveal className="mb-16 flex flex-col items-center text-center">
                  <Tv className="text-stone-300 dark:text-stone-600 mb-4" size={48} />
                  <h3 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight mb-4">Interviews & Appearances</h3>
                  <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl">Media features and thought leadership across national television networks.</p>
                </Reveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {CV_DATA.appearances.map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer bg-white dark:bg-stone-900 rounded-[2rem] p-5 border border-stone-100 dark:border-stone-800 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-amber-600 dark:hover:border-amber-500 transition-all duration-500">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-800 relative bg-stone-900 mb-6">
                          <LazyImage src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full group-hover:bg-amber-600 group-hover:scale-110 transition-all duration-300 border border-white/30">
                              <PlayCircle size={32} className="text-white drop-shadow-md"/>
                            </div>
                          </div>
                        </div>
                        <div className="px-2 pb-2 text-center">
                          <h4 className="font-black text-xl text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-tight mb-3">{item.title}</h4>
                          <div className="inline-flex items-center gap-2 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <p className="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">{item.show} • {item.network}</p>
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* FULL-WIDTH CERTIFICATIONS SECTION */}
              <div className="mt-12 pt-24 border-t border-stone-200 dark:border-stone-800">
                <Reveal className="mb-16 flex flex-col items-center text-center">
                  <Award className="text-stone-300 dark:text-stone-600 mb-4" size={48} />
                  <h3 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight mb-4">Certifications</h3>
                  <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl">Continuous learning and professional accreditation in strategy and technology.</p>
                </Reveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {CV_DATA.certifications.map((cert, i) => (
                    <Reveal key={i} delay={i * 30} className="h-full">
                      <TiltCard>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer bg-white dark:bg-stone-900 rounded-[2rem] p-5 border border-stone-100 dark:border-stone-800 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-amber-600 dark:hover:border-amber-500 transition-all duration-500 h-full flex flex-col">
                          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-800 relative bg-stone-50 dark:bg-stone-950 mb-6 flex flex-col items-center justify-center group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 transition-colors">
                            <Award size={48} className="text-stone-300 dark:text-stone-700 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-500 group-hover:scale-110" />
                          </div>
                          <div className="px-2 pb-2 text-center flex-1 flex flex-col justify-between">
                            <h4 className="font-black text-lg text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors leading-tight mb-4">{cert.title}</h4>
                            <div className="inline-flex items-center justify-center gap-2 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 px-4 py-2 rounded-full mx-auto w-fit">
                              <p className="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">{cert.issuer}</p>
                            </div>
                          </div>
                        </a>
                      </TiltCard>
                    </Reveal>
                  ))}
                </div>
              </div>

            </section>
          </div>
        )}

        {/* ==================================================================== */}
        {/* 📄 INSIGHTS & BLOG PAGE                                              */}
        {/* ==================================================================== */}
        {activePage === 'insights' && (
          <div className="pt-40 pb-32 bg-[#FAFAF9] dark:bg-stone-950 min-h-screen">
            {activePost ? (
              /* INDIVIDUAL POST VIEW */
              <article className="max-w-3xl mx-auto px-6">
                <Reveal>
                  <button onClick={(e) => navigateTo('insights', e)} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 dark:hover:text-white font-bold text-xs uppercase tracking-widest mb-12 transition-colors cursor-pointer">
                    <ArrowLeft size={16} /> Back to Feed
                  </button>
                  <div className="mb-12">
                    <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-4">{activePost.date} • {activePost.readTime}</p>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900 dark:text-white leading-tight mb-6">{activePost.title}</h1>
                    <p className="text-xl text-stone-500 dark:text-stone-400 font-medium leading-relaxed">{activePost.snippet}</p>
                  </div>
                  <div className="w-full h-px bg-stone-200 dark:bg-stone-800 mb-12"></div>
                  <div className="prose prose-stone dark:prose-invert max-w-none text-stone-600 dark:text-stone-300 leading-loose text-lg">
                    <p>{activePost.content}</p>
                    <div className="mt-12 p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl">
                      <p className="font-bold text-stone-900 dark:text-white mb-2">Want the full breakdown?</p>
                      <a href={activePost.externalLink} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 dark:hover:text-amber-500 font-bold flex items-center gap-2">
                        Read original publication <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </article>
            ) : (
              /* BLOG FEED VIEW */
              <section className="max-w-5xl mx-auto px-6">
                <Reveal>
                  <div className="flex items-center gap-4 mb-16">
                    <Newspaper size={48} className="text-amber-600" />
                    <div>
                      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white">Insights</h1>
                      <p className="text-stone-500 dark:text-stone-400 font-medium mt-2">Strategies, updates, and digital marketing breakdowns.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {FUNNEL_DATA.insights.map((post, i) => (
                      <Reveal key={i} delay={i * 100} className="h-full">
                        <TiltCard>
                          <div onClick={(e) => openPost(post, e)} className="group cursor-pointer bg-white dark:bg-stone-900 rounded-[2rem] p-8 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl hover:border-amber-600 dark:hover:border-amber-500 transition-all duration-500 h-full flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-center mb-6">
                                <p className="text-amber-600 font-bold text-[10px] uppercase tracking-widest bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">{post.readTime}</p>
                                <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">{post.date}</p>
                              </div>
                              <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4 group-hover:text-amber-600 transition-colors leading-tight">{post.title}</h3>
                              <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-8">{post.snippet}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-white uppercase tracking-widest group-hover:text-amber-600 transition-colors">
                              Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </TiltCard>
                      </Reveal>
                    ))}
                  </div>
                </Reveal>
              </section>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* 📄 PRIVACY POLICY PAGE                                               */}
        {/* ==================================================================== */}
        {activePage === 'privacy' && (
          <div className="pt-40 pb-32 bg-[#FAFAF9] dark:bg-stone-950">
            <section className="max-w-3xl mx-auto px-6">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <ShieldCheck size={48} className="text-amber-600" />
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white">Privacy Policy</h1>
                </div>
                
                <div className="text-stone-600 dark:text-stone-400">
                  <p className="text-lg font-medium mb-12">Last updated: April 2026. Your privacy is a priority at ME digital.</p>
                  
                  <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-12 mb-4">1. Data Collection</h3>
                  <p className="mb-6 leading-relaxed">When you use the Interactive Social Audit or book a strategy session, we may collect necessary contact information (such as your email address). We use this strictly to deliver the requested value, provide custom audit results, and follow up regarding our services.</p>
                  
                  <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-12 mb-4">2. Cookie Usage</h3>
                  <p className="mb-6 leading-relaxed">We use essential and analytics cookies to understand site traffic and optimize your browsing experience. You can opt out via the cookie consent banner at the bottom of the screen.</p>
                  
                  <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-12 mb-4">3. Data Sharing & Security</h3>
                  <p className="mb-6 leading-relaxed">Your data is never sold to third parties. It is kept secure and only accessed by ME digital personnel for standard business operations and correspondence.</p>

                  <div className="mt-16 p-8 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800">
                    <p className="font-bold text-stone-900 dark:text-white">Questions about your data?</p>
                    <p className="text-sm mt-2">Contact: <button onClick={() => handleTriggerContact('select', null)} className="text-amber-600 hover:underline cursor-pointer">hello@markespinosa.com</button></p>
                  </div>
                </div>
              </Reveal>
            </section>
          </div>
        )}

        {/* ==================================================================== */}
        {/* 📄 AI ETHICS & USAGE PAGE                                            */}
        {/* ==================================================================== */}
        {activePage === 'ai-use' && (
          <div className="pt-40 pb-32 bg-[#FAFAF9] dark:bg-stone-950">
            <section className="max-w-4xl mx-auto px-6">
              <Reveal>
                <div className="flex items-center gap-4 mb-10">
                  <Cpu size={48} className="text-amber-600" />
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white">AI Ethics & Usage</h1>
                </div>
                
                <div className="text-stone-600 dark:text-stone-400">
                  <p className="text-xl font-medium text-stone-800 dark:text-stone-300 mb-12 leading-relaxed">Transparency is a core value at ME digital. Here is how we leverage artificial intelligence to power growth strategies while preserving authentic human connection.</p>
                  
                  <div className="mt-8 bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Human-in-the-Loop Content</h3>
                    <p className="leading-relaxed">We leverage generative AI for ideation, drafting, and rapid prototyping. However, every piece of copy, graphic, and video is meticulously edited, refined, and approved by a human strategist to ensure brand safety, emotional resonance, and pinpoint accuracy.</p>
                  </div>

                  <div className="mt-8 bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Data-Driven Insights</h3>
                    <p className="leading-relaxed">We utilize advanced AI-powered analytics tools to rapidly process social media performance data, identify trends, and spot friction points in sales funnels. The AI organizes the raw data; our human expertise formulates the winning strategy.</p>
                  </div>

                  <div className="mt-8 bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4">Automation & Efficiency</h3>
                    <p className="leading-relaxed">AI agents (like our WhatsApp supervisor) and automated workflows are deployed to reduce response times and handle repetitive tasks. This efficiency frees up our human bandwidth for high-level creative problem-solving and strategic thinking.</p>
                  </div>
                </div>
              </Reveal>
            </section>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-stone-900 py-16 px-6 text-center border-t border-stone-100 dark:border-stone-800 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <button onClick={(e) => navigateTo('home', e)} className="font-black text-2xl tracking-tighter text-stone-900 dark:text-white mb-8 cursor-pointer">
            ME<span className="text-amber-600">digital</span>
          </button>

          {/* Page Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 text-stone-400 dark:text-stone-500">
            <button onClick={(e) => navigateTo('home', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Works</button>
            <button onClick={(e) => navigateTo('about', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">About & CV</button>
            <button onClick={(e) => navigateTo('insights', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Insights</button>
            <button onClick={(e) => navigateTo('privacy', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Privacy Policy</button>
            <button onClick={(e) => navigateTo('ai-use', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">AI Ethics</button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-stone-400 dark:text-stone-500">
            <a href={CV_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Facebook"><FacebookIcon size={24} /></a>
            <a href={CV_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Instagram"><InstagramIcon size={24} /></a>
            <a href={CV_DATA.socials.threads} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Threads"><AtSign size={24} /></a>
            <a href={CV_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon size={24} /></a>
            <a href={CV_DATA.socials.blinq} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Digital Calling Card"><Contact size={24} /></a>
            <button onClick={() => handleTriggerContact('select', null)} className="hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer" aria-label="Email"><Mail size={24} /></button>
          </div>
          <p className="font-semibold text-[10px] text-stone-400 dark:text-stone-600 uppercase tracking-[0.2em]">© {new Date().getFullYear()} Mark Joseph Espinosa • Engineered for Conversion</p>
        </div>
      </footer>

    </div>
  );
}
