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
  Moon, Sun, ArrowLeft, Loader2, MessageSquare, Quote
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
    headlineSpan: "Leave the digital to ME.",
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
        details: { 
          problem: "The client needed to maximize their social media performance but lacked a tailored approach to reach their specific target market effectively.", 
          strategy: "We established a consistent brand identity across all platforms, conducted deep target audience research to build buyer personas, and curated highly-tailored content.", 
          result: "A massive expansion reaching 5.47 million organic impressions (+145%), effectively connecting the brand to its exact target market." 
        }
      },
      { 
        label: "Engagements (+235%)", value: 918, prefix: "", suffix: "k", decimals: 0, icon: TrendingUp,
        details: { 
          problem: "The client had a social presence but struggled to build an active, engaged community around their content.", 
          strategy: "We connected the brand directly to its target market by establishing community groups and distributing content specifically designed for engagement and virality.", 
          result: "Page and post engagements skyrocketed to 918,220 (+235%), alongside a 147% increase in active engaged users (478,733 total)." 
        }
      },
      { 
        label: "Link Clicks", value: 1566, prefix: "+", suffix: "%", decimals: 0, icon: MousePointerClick,
        details: { 
          problem: "Followers were passively consuming content without taking the next step to visit external links or interact deeper with the brand.", 
          strategy: "By ensuring every piece of content was curated for the right audience persona, we naturally funneled engaged community members toward specific brand links.", 
          result: "An immediate 1,566% surge in link clicks (2,648 total), alongside 412,892 reactions (+489%), proving that tailored community building directly translates to active traffic." 
        }
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
    { 
      text: "Produces copy fast! I have no regrets working with Mark!", 
      author: "Mateo V.", 
      title: "Marketing Director", 
      business: "ZBNI Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      logo: "/logos/zbni.webp"
    },
    { 
      text: "The best social media guy! Saved me hours of work with AI!", 
      author: "Seth Y.", 
      title: "Founder", 
      business: "Yates Clinic",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      logo: "/logos/yates.png"
    },
    { 
      text: "Easy to collaborate with and a fast learner!", 
      author: "Madelyn N.", 
      title: "Operations Manager", 
      business: "Bold BBQ Pit",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
      logo: "/logos/logo-bold-bbq-pit_grad-2.png"
    },
    { 
      text: "Mark's digital strategy completely transformed our engagement.", 
      author: "Lucas R.", 
      title: "CEO", 
      business: "Black Meta Agency",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      logo: "/logos/BMA.webp"
    },
    { 
      text: "Seamless integration of systems into a creative workflow.", 
      author: "Sarah K.", 
      title: "Lead Creative", 
      business: "TOCA Salon Group",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      logo: "/logos/TOCA_SalonGroup_Logo.png"
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
      <span className="font-bold text-xl tracking-tighter text-stone-400 dark:text-stone-600 transition-colors uppercase whitespace-nowrap px-4 group-hover:text-stone-900 dark:group-hover:text-white">
        {client.name}
      </span>
    );
  }
  return (
    <LazyImage 
      src={client.logo} 
      alt={client.name} 
      className="h-10 md:h-12 w-auto min-w-[80px] object-contain grayscale opacity-40 dark:opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" 
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
      <div className="bg-white dark:bg-[#0d0d0f] rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden border border-stone-200 dark:border-[rgba(255,255,255,0.1)]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer z-10"><X size={24}/></button>
        
        {step === 'select' && (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-stone-900 dark:text-white mb-2 pr-8 tracking-tight">Let's build.</h3>
            <p className="text-stone-500 dark:text-[#98989d] mb-8">How can I help you dominate your market?</p>
            <div className="flex flex-col gap-3">
              {servicesList.map((svc) => {
                const SvcIcon = svc.icon;
                return (
                  <button 
                    key={svc.id} 
                    onClick={() => { setService(svc); setStep(svc.id === 'call' ? 'call' : 'form'); }}
                    className="w-full bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] hover:border-[#bf5af2] dark:hover:border-[#bf5af2] text-stone-700 dark:text-stone-300 p-4 rounded-2xl flex items-center gap-4 transition-all group cursor-pointer"
                  >
                    <div className="bg-white dark:bg-[#2c2c2e] p-2 rounded-xl group-hover:bg-[#bf5af2]/10 transition-colors">
                      <SvcIcon size={20} className="text-stone-900 dark:text-white group-hover:text-[#bf5af2]" />
                    </div>
                    <span className="font-semibold text-sm text-left flex-1">{svc.label}</span>
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#bf5af2]" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 'call' && (
          <div className="animate-fade-in text-center py-6">
            <button onClick={() => setStep('select')} className="absolute top-6 left-6 text-xs font-semibold text-stone-400 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 transition-colors cursor-pointer"><ArrowLeft size={14}/> Back</button>
            <div className="w-20 h-20 bg-blue-50 dark:bg-[#0a84ff]/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
              <Calendar size={32} className="text-[#0a84ff]" />
            </div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4 tracking-tight">Book Your Session</h3>
            <p className="text-stone-500 dark:text-[#98989d] text-sm leading-relaxed mb-8">
              You will be redirected to my official Google Calendar portal. It will automatically detect your time zone, capture your details, and instantly email both of us a Google Meet link.
            </p>
            <MagneticWrapper href={FUNNEL_DATA.brand.contact.calendarUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="w-full bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] py-4 rounded-full font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer border-none block">
              Open Booking Portal <ExternalLink size={16} />
            </MagneticWrapper>
          </div>
        )}

        {(step === 'form' || step === 'sending') && (
          <div className="animate-fade-in">
            <button onClick={() => setStep('select')} className="text-xs font-semibold text-stone-400 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 mb-6 transition-colors cursor-pointer"><ArrowLeft size={14}/> Back</button>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 tracking-tight leading-tight">{service?.label}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider mb-1.5">Name</label>
                  <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none transition-colors text-sm" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider mb-1.5">Email</label>
                  <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none transition-colors text-sm" placeholder="jane@co.com" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider mb-1.5">Phone</label>
                  <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none transition-colors text-sm" placeholder="+1 234 567" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider mb-1.5">Location</label>
                  <input required type="text" name="location" className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none transition-colors text-sm" placeholder="City, Country" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider mb-1.5">Project Details</label>
                <textarea required rows={3} name="message" className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-900 dark:text-white focus:border-[#bf5af2] outline-none transition-colors resize-none text-sm" placeholder="Tell me about your goals..." />
              </div>
              
              <button type="submit" disabled={step === 'sending'} className="w-full bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 cursor-pointer border-none">
                {step === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {step === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        )}

        {step === 'sent' && (
          <div className="py-12 flex flex-col items-center justify-center animate-scale-up">
            <div className="w-16 h-16 bg-[#30d158]/10 text-[#30d158] rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <p className="font-bold text-xl text-stone-900 dark:text-white mb-2 tracking-tight">Inquiry Received!</p>
            <p className="text-stone-500 dark:text-[#98989d] text-sm text-center">I've received your request for {service?.label}. I'll be in touch shortly.</p>
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
      <div className="bg-white dark:bg-[#0d0d0f] rounded-[2rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative border border-stone-200 dark:border-[rgba(255,255,255,0.1)]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={24}/></button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-purple-50 dark:bg-[#bf5af2]/10 rounded-full flex items-center justify-center shrink-0">
            <Icon size={32} className="text-[#bf5af2]" />
          </div>
          <div>
            <p className="text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider">{activeStudy.label}</p>
            <p className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">{activeStudy.prefix}{activeStudy.value.toLocaleString()}{activeStudy.suffix}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-[#f5f5f7] dark:bg-[#1a1a1c] p-6 rounded-2xl border border-stone-100 dark:border-[rgba(255,255,255,0.05)]">
            <p className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-2">Client's Problem</p>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{activeStudy.details.problem}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-[#bf5af2]/10 dark:to-[#0a84ff]/10 p-6 rounded-2xl border border-purple-100 dark:border-[rgba(191,90,242,0.2)]">
            <p className="text-[11px] font-semibold text-[#bf5af2] uppercase tracking-wider mb-2">Our Solution</p>
            <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">{activeStudy.details.strategy}</p>
          </div>
          <div className="bg-stone-900 dark:bg-[#2c2c2e] p-6 rounded-2xl">
            <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">The Outcome</p>
            <p className="text-sm text-white leading-relaxed">{activeStudy.details.result}</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full mt-8 bg-stone-100 dark:bg-[#3a3a3c] text-stone-900 dark:text-white py-4 rounded-full font-semibold text-sm hover:bg-stone-200 dark:hover:bg-[#4a4a4c] transition-all cursor-pointer">Close Breakdown</button>
      </div>
    </div>
  );
};

// ============================================================================
// 🚀 HYBRID CHATBOT WIDGET (Local "Choose Your Own Adventure" Ichigo)
// ============================================================================

// --- NEW CHICKEN RAIN ANIMATION TRIGGER ---
const fireChickenRain = () => {
  const emojis = ['🍗', '🐔', '🍗'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.className = 'chicken-drop pointer-events-none fixed z-[99999]';
    c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    c.style.left = Math.random() * 100 + 'vw';
    c.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    c.style.animation = `fall-chicken ${Math.random() * 2 + 2}s linear forwards`;
    c.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000); 
  }
};

const getBotResponse = (userInput) => {
  const text = userInput.toLowerCase();
  
  if (text.includes('chicken') || text.includes('food') || text.includes('hungry')) {
    return {
      text: "*eyes dilate* DID YOU SAY CHICKEN?! IT'S RAINING CHICKEN! 🍗🐔🐾 Best. Website. Ever. Now, what did you want to ask Mark?",
      trigger: "CHICKEN_RAIN",
      suggestions: ["What do you do?", "Show me results", "Book a Call"]
    };
  }
  
  if (text.includes('who is mark') || text.includes('background') || text.includes('experience') || text.includes('resume')) {
    return {
      text: "Mark is my absolute favorite human! 🐾 He's a brilliant Social Media Strategist and Digital Marketer. He knows exactly how to grow brands and build digital systems that convert. (And he gives the best chin scratches!)",
      suggestions: ["What do you do?", "Show me results", "Book a Call"]
    };
  }
  if (text.includes('what do you do') || text.includes('service') || text.includes('help')) {
    return {
      text: "We build powerful social media strategies, manage GoHighLevel, and create stunning websites. Mark handles all the marketing magic, and I provide the emotional support! 🐈 Click a service button below to get started.",
      actions: [
        { id: 'web', label: "Website", icon: Laptop },
        { id: 'social', label: "Social Media", icon: Smartphone },
        { id: 'ghl', label: "GoHighLevel", icon: TrendingUp }
      ]
    };
  }
  if (text.includes('result') || text.includes('portfolio') || text.includes('work') || text.includes('show me')) {
    return {
      text: "Oh, we get amazing results! Like +1,566% link clicks and millions in organic reach. Mark works very hard on these. Check out the 'Works' page to see all the pretty numbers! 📈",
      suggestions: ["What do you do?", "Book a Call"]
    };
  }
  if (text.includes('price') || text.includes('cost') || text.includes('budget') || text.includes('rate')) {
    return {
      text: "Quality work needs a proper budget! Mark tailors his rates based on your specific goals. You should book a strategy call with him so he can give you the best options! 🐟",
      suggestions: ["Book a Call", "What do you do?"]
    };
  }
  if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('whatsapp')) {
    return {
      text: "The fastest way to reach him is the big green WhatsApp button at the top! Or you can email hello@markespinosa.com. Just don't email during my nap time! 💤",
      suggestions: ["Book a Call"]
    };
  }
  if (text.includes('book') || text.includes('call') || text.includes('schedule') || text.includes('meeting')) {
    return {
      text: `Yay! Mark loves talking strategy. Use this link to get on his calendar: ${FUNNEL_DATA.brand.contact.calendarUrl} or click the WhatsApp button up top!`,
      actions: [
        { id: 'call', label: "Schedule Call", icon: Calendar }
      ]
    };
  }
  if (text.includes('cat') || text.includes('kitty') || text.includes('tuna') || text.includes('cute') || text.includes('meow')) {
    return {
      text: "*purrs loudly* You're so sweet! I love a good head pat. But enough about me, let's talk about growing your brand! 🐈",
      suggestions: ["What do you do?", "Book a Call"]
    };
  }
  
  return {
    text: "*tilts head and blinks* I'm just a cat, so I didn't quite catch that. Try asking about Mark's experience, our services, or just tell me you want to book a call! 🐾",
    suggestions: ["Who is Mark?", "What do you do?", "Book a Call"]
  };
};

const IchigoChatWidget = ({ onTriggerContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Meow! I'm Ichigo, Mark's furry assistant. He's busy building killer social media strategies so he can buy me premium chicken. How can we help you today? 🐾", 
      isBot: true,
      suggestions: ["Who is Mark?", "Give Ichigo chicken 🍗", "Show me results", "Book a Call"]
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typingText, setTypingText] = useState("Ichigo is typing...");
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);

  const typingPhrases = [
    "Ichigo is walking across the keyboard...",
    "Ichigo is aggressively demanding chicken...",
    "asdfjkl;qweruiop... (Ichigo is on the keys)",
    "Ichigo is thinking of a sassy response..."
  ];

  const idleNudges = [
    "Meow? Are you still there, or did you get distracted by a laser pointer? 🔴",
    "kajsdfhlkjasdhf... oops, sorry. I fell asleep on the keyboard. Need anything? 💤",
    "*pushes a glass off the table* Wake up, human! Are we building a high-converting system or what? 🥛",
    "Hello? I have a quota of leads to hit so Mark will buy me more treats. Let's get moving! 🍗",
    "Staring at the screen won't grow your brand. Clicking the 'Schedule Call' button will. 🐾"
  ];

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Typing Effect
  useEffect(() => {
    let interval;
    if (isLoading) {
      let i = 0;
      setTypingText(typingPhrases[0]);
      interval = setInterval(() => {
        i = (i + 1) % typingPhrases.length;
        setTypingText(typingPhrases[i]);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  // Idle Nudge Effect (60 seconds)
  useEffect(() => {
    if (!isOpen || isLoading) return; 
    const timer = setTimeout(() => {
      const randomNudge = idleNudges[Math.floor(Math.random() * idleNudges.length)];
      setMessages(prev => [...prev, { text: randomNudge, isBot: true }]);
    }, 60000); 
    return () => clearTimeout(timer);
  }, [messages, isOpen, isLoading]);

  // Initial Pop-up Tooltip Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length <= 1) {
        setShowTooltip(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  const processMessage = (userText) => {
    setMessages(prev => [...prev, { text: userText, isBot: false }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = getBotResponse(userText);
      
      // TRIGGER THE CHICKEN RAIN EASTER EGG!
      if (response.trigger === "CHICKEN_RAIN") {
        fireChickenRain();
      }

      setMessages(prev => [...prev, { 
        text: response.text, 
        isBot: true,
        suggestions: response.suggestions,
        actions: response.actions
      }]);
      setIsLoading(false);
    }, 1500);
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
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0a84ff] text-white px-4 py-2 rounded-full font-semibold text-[11px] uppercase tracking-wider mt-3 mb-2 hover:opacity-90 transition-opacity shadow-md w-max no-underline cursor-pointer">
            <ExternalLink size={14} /> Open Link
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Custom Keyframes for Running Cat & Chicken Rain */}
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
          z-index: 100;
          filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.15));
        }
        @keyframes fall-chicken {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}} />

      {/* Chat Window */}
      <div className={`bg-white dark:bg-[#0d0d0f] rounded-3xl shadow-2xl border border-stone-200 dark:border-[rgba(255,255,255,0.1)] w-[90vw] sm:w-[380px] h-[550px] max-h-[75vh] flex flex-col pointer-events-auto transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} relative overflow-hidden`}>
        
        {/* Animated Cat */}
        {isOpen && <div className="running-cat pointer-events-none"><SiameseCatSVG /></div>}

        {/* Header */}
        <div className="p-4 border-b border-stone-100 dark:border-[rgba(255,255,255,0.05)] flex justify-between items-center bg-[#f5f5f7] dark:bg-[#1a1a1c] rounded-t-3xl shrink-0 z-20 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-200 dark:border-[#3a3a3c] relative">
              <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Ichigo" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#30d158] border border-white dark:border-[#1a1a1c] rounded-full"></span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-white leading-none">Ichigo</h4>
              <p className="text-[10px] bg-gradient-to-r from-[#0a84ff] to-[#bf5af2] bg-clip-text text-transparent font-semibold mt-1">Feline Happiness Manager</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={20}/></button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-white dark:bg-[#050505] hide-scrollbar z-10">
          {messages.map((m, i) => {
            const isLastMessage = i === messages.length - 1;
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed flex flex-col ${m.isBot ? 'bg-[#f5f5f7] dark:bg-[#1a1a1c] text-stone-800 dark:text-[#f5f5f7] rounded-tl-sm' : 'bg-[#0a84ff] text-white rounded-tr-sm'}`}>
                    {m.isBot ? formatBotMessage(m.text) : m.text}
                  </div>
                </div>
                
                {/* Dynamic Contextual Buttons appended directly to the bot's message */}
                {m.isBot && isLastMessage && !isLoading && (
                  <div className="flex flex-wrap gap-2 mt-1 animate-fade-in pl-2">
                    {/* Render Chat Suggestions */}
                    {m.suggestions && m.suggestions.map((suggestion, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => processMessage(suggestion)}
                        className="bg-white dark:bg-[#0d0d0f] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] text-stone-600 dark:text-[#98989d] text-[11px] font-medium px-4 py-2 rounded-full hover:border-[#bf5af2] hover:text-[#bf5af2] transition-colors text-left cursor-pointer"
                      >
                        {suggestion}
                      </button>
                    ))}
                    
                    {/* Render Form Triggers */}
                    {m.actions && m.actions.map(action => {
                      const ActionIcon = action.icon;
                      return (
                        <button
                          key={action.id}
                          onClick={() => {
                            setIsOpen(false);
                            const mockService = { id: action.id, label: action.id === 'call' ? 'Schedule a Call' : `I need help with ${action.label}` };
                            onTriggerContact(action.id === 'call' ? 'call' : 'form', mockService);
                          }}
                          type="button"
                          className="bg-[#0a84ff]/10 text-[#0a84ff] text-[11px] font-semibold px-4 py-2 rounded-full hover:bg-[#0a84ff]/20 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                        >
                          <ActionIcon size={12} /> {action.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#f5f5f7] dark:bg-[#1a1a1c] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-2 items-center">
                <span className="text-xs font-medium text-stone-500 dark:text-[#98989d] italic">{typingText}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 border-t border-stone-100 dark:border-[rgba(255,255,255,0.05)] bg-[#f5f5f7] dark:bg-[#1a1a1c] rounded-b-3xl flex gap-2 shrink-0 z-10 relative">
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Ask me anything..." 
            className="flex-1 bg-white dark:bg-[#0d0d0f] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2 text-sm text-stone-900 dark:text-white outline-none focus:border-[#bf5af2] transition-colors" 
          />
          <button type="submit" disabled={isLoading || !input.trim()} className="bg-stone-900 text-white dark:bg-white dark:text-[#1d1d1f] w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform disabled:opacity-50 cursor-pointer border-none">
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* Floating CTA Tooltip */}
      {!isOpen && showTooltip && (
         <div className="absolute bottom-[80px] right-0 bg-white dark:bg-[#0d0d0f] px-4 py-2 rounded-2xl rounded-br-sm shadow-xl border border-stone-200 dark:border-[rgba(255,255,255,0.1)] animate-bounce pointer-events-auto cursor-pointer" onClick={() => { setIsOpen(true); setShowTooltip(false); }}>
           <p className="text-[11px] font-semibold text-stone-800 dark:text-[#f5f5f7] whitespace-nowrap">Psst... need digital strategy? 🐾</p>
         </div>
      )}

      {/* Floating Trigger Button */}
      <button onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }} className={`pointer-events-auto w-14 h-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 active:scale-95 transition-all overflow-hidden border border-stone-200 dark:border-[rgba(255,255,255,0.1)] relative group cursor-pointer ${isOpen ? 'scale-0 opacity-0 hidden' : 'scale-100 opacity-100'}`}>
        <LazyImage src="/WhatsappImage/Ichigo.JPG" alt="Chat with Ichigo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a84ff]/20 to-[#bf5af2]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#30d158] border-2 border-white dark:border-[#050505] rounded-full"></span>
      </button>

    </div>
  );
};

// ============================================================================
// 🚀 REVIEW CAROUSEL WITH MANUAL + NATIVE SCROLL (UPDATED)
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
    const walk = (x - startX) * 2; 
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
          <div key={idx} className="w-[85vw] md:w-[420px] snap-center flex-shrink-0">
            <div className="bg-white dark:bg-[#0d0d0f] p-8 md:p-10 rounded-[2rem] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] shadow-sm hover:shadow-xl transition-shadow h-full flex flex-col justify-between pointer-events-none group relative overflow-hidden">
              
              {/* Subtle Gradient Glow inside the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0a84ff]/5 to-[#bf5af2]/5 rounded-full blur-2xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <Quote className="text-stone-200 dark:text-[#1a1a1c] mb-6" size={32} />
                <p className="text-lg md:text-xl font-medium text-stone-800 dark:text-[#f5f5f7] leading-relaxed text-left mb-8 relative z-10">"{review.text}"</p>
              </div>
              
              <div className="pt-6 border-t border-stone-100 dark:border-[rgba(255,255,255,0.05)] flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-[#2c2c2e] shadow-sm flex-shrink-0 bg-stone-100 dark:bg-stone-800">
                    <LazyImage src={review.image} alt={review.author} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-stone-900 dark:text-white leading-none mb-1">{review.author}</p>
                    <p className="text-[11px] font-medium text-stone-500 dark:text-[#98989d] uppercase tracking-wider">{review.title}</p>
                  </div>
                </div>
                
                {/* Client Logo in corner */}
                {review.logo && (
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-100 dark:border-[rgba(255,255,255,0.05)] flex items-center justify-center p-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <LazyImage src={review.logo} alt={review.business} className="w-full h-full object-contain grayscale" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-4 mt-6 pointer-events-auto">
        <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1c] shadow-sm border border-stone-200 dark:border-[rgba(255,255,255,0.1)] flex items-center justify-center text-stone-600 dark:text-[#98989d] hover:text-[#0a84ff] dark:hover:text-[#0a84ff] hover:border-[#0a84ff]/30 transition-all cursor-pointer">
          <ArrowLeft size={18} />
        </button>
        <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1c] shadow-sm border border-stone-200 dark:border-[rgba(255,255,255,0.1)] flex items-center justify-center text-stone-600 dark:text-[#98989d] hover:text-[#0a84ff] dark:hover:text-[#0a84ff] hover:border-[#0a84ff]/30 transition-all cursor-pointer">
          <ArrowRight size={18} />
        </button>
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
    if (score >= 90) return { label: "OPTIMIZED", color: "text-[#30d158]", advice: "Your systems are elite. You're ready to scale reach using AI-driven automation." };
    if (score >= 60) return { label: "MODERATE", color: "text-[#ff9f0a]", advice: "You have a foundation, but you're losing 60% of potential leads to manual friction." };
    return { label: "CRITICAL", color: "text-[#ff375f]", advice: "Your digital presence is leaking revenue. A complete strategy overhaul is recommended." };
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
    <div className="bg-white dark:bg-[#0d0d0f] rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] relative overflow-hidden min-h-[400px] flex flex-col justify-center max-w-3xl mx-auto transition-colors">
      {step < questions.length && (
        <div className="animate-fade-in text-left">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-[#98989d]">Step {step + 1} of {questions.length}</span>
            <div className="flex gap-1.5">
              {questions.map((_, i) => (
                <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]' : 'bg-[#f5f5f7] dark:bg-[#1a1a1c]'}`}></div>
              ))}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mb-10 leading-tight tracking-tight">{questions[step].q}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {questions[step].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt.points)} className="bg-white dark:bg-[#050505] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] text-stone-700 dark:text-stone-300 p-5 rounded-2xl font-medium text-left hover:border-[#bf5af2] dark:hover:border-[#bf5af2] transition-all active:scale-[0.98] group flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md">
                {opt.text}
                <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#bf5af2]" />
              </button>
            ))}
          </div>
        </div>
      )}
      {step === questions.length && !showResult && (
        <div className="animate-scale-up text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-[#0a84ff]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-[#0a84ff]" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4 tracking-tight">Audit Complete!</h3>
          <p className="text-stone-500 dark:text-[#98989d] text-sm leading-relaxed mb-8">Enter your email below to instantly reveal your Growth Grade and custom strategy.</p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your best email..." className="w-full px-6 py-4 rounded-xl bg-[#f5f5f7] dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] focus:border-[#bf5af2] outline-none font-medium text-center text-stone-900 dark:text-white transition-colors" />
            <MagneticWrapper type="submit" disabled={isSubmitting} className="w-full py-4 rounded-full font-semibold text-white bg-stone-900 dark:bg-white dark:text-[#1d1d1f] hover:scale-[1.02] transition-transform shadow-lg flex justify-center items-center gap-2 cursor-pointer border-none text-sm">
              {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
              {isSubmitting ? 'Processing...' : 'Reveal My Results'}
            </MagneticWrapper>
          </form>
        </div>
      )}
      {showResult && (
        <div className="animate-scale-up text-center">
          <div className="w-20 h-20 bg-[#0a84ff]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <BarChart3 className="text-[#0a84ff]" size={40} />
          </div>
          <h3 className="text-stone-400 font-mono text-[11px] uppercase tracking-widest mb-2 font-semibold">Your Growth Grade</h3>
          <p className={`text-5xl md:text-6xl font-black mb-6 tracking-tighter ${getAuditResult().color}`}>{getAuditResult().label}</p>
          <p className="text-stone-600 dark:text-[#98989d] text-base leading-relaxed mb-10 max-w-md mx-auto">{getAuditResult().advice}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => { setStep(0); setScore(0); setEmail(''); setShowResult(false); }} className="text-stone-400 text-sm font-medium hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer px-4">Retake Audit</button>
            <MagneticWrapper onClick={() => onTriggerContact('select', null)} className="bg-stone-900 text-white dark:bg-white dark:text-[#1d1d1f] px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform cursor-pointer border-none">Book Strategy Call</MagneticWrapper>
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
  const [darkMode, setDarkMode] = useState(true); // Defaulting to dark mode to match concept
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const exitIntentTriggered = useRef(false);

  // Centralized Contact Modal State
  const [contactModalState, setContactModalState] = useState({ isOpen: false, step: 'select', service: null });

  const handleTriggerContact = (step = 'select', service = null) => {
    setContactModalState({ isOpen: true, step, service });
  };

  // Cursor Glow effect logic
  useEffect(() => {
    if (!darkMode || window.matchMedia('(pointer: coarse)').matches) return;
    
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let gx = cx;
    let gy = cy;

    const onMouseMove = (e) => {
      gx = e.clientX;
      gy = e.clientY;
      glow.style.opacity = '1';
    };

    const updateGlow = () => {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [darkMode]);

  // Handle Dark Mode Class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#050505'; // Apple dark bg
      document.body.style.color = '#f5f5f7';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1d1d1f';
    }
  }, [darkMode]);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '') || 'home';
    if (['home', 'about', 'privacy', 'ai-use', 'insights', 'hey-ai'].includes(path)) {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    const titles = {
      home: "ME digital | Digital Strategy & AI Automation",
      about: "Mark Espinosa | Digital Strategist & AI Engineer",
      privacy: "Privacy Policy | ME digital",
      'ai-use': "AI Ethics & Usage | ME digital",
      'hey-ai': "Hey AI | ME digital",
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

  const safePushState = (url) => {
    try {
      if (window.location.protocol !== 'blob:' && window.location.origin !== 'null' && typeof window.history !== 'undefined') {
        window.history.pushState({}, '', url);
      }
    } catch (err) {
      console.warn("History pushState restricted in this iframe environment.");
    }
  };

  const navigateTo = (page, e = null) => { 
    if (e) e.preventDefault();
    setIsTransitioning(true);
    setIsMobileMenuOpen(false); 
    
    setTimeout(() => {
      safePushState(`/${page === 'home' ? '' : page}`);
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
      safePushState(`/insights`);
      setActivePage('insights');
      setActivePost(post);
      window.scrollTo({ top: 0, behavior: 'instant' }); 
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#050505] text-[#1d1d1f] dark:text-[#f5f5f7] font-sans flex flex-col selection:bg-[#bf5af2] selection:text-white transition-colors duration-500 ease-in-out relative">
      
      {/* 🚀 GLOBAL CSS OVERRIDES & APPLE-ESQUE TYPOGRAPHY */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          font-feature-settings: "ss01", "cv11";
        }
        
        .mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        
        ::-webkit-scrollbar { width: 8px; background: transparent; }
        ::-webkit-scrollbar-track { background: ${darkMode ? '#050505' : '#ffffff'}; }
        ::-webkit-scrollbar-thumb { background: ${darkMode ? '#3a3a3c' : '#d1d1d6'}; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #bf5af2; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .gradient-text {
          background: linear-gradient(115deg, #0a84ff 0%, #bf5af2 52%, #ff375f 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .grain-overlay {
          position: fixed; inset: 0; z-index: 9998; pointer-events: none;
          opacity: ${darkMode ? '0.035' : '0.02'}; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}} />

      {/* Grain & Glow Elements */}
      <div className="grain-overlay"></div>
      {darkMode && (
        <div id="cursorGlow" style={{
          position: 'fixed', zIndex: 0, top: 0, left: 0, width: '420px', height: '420px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,90,242,.08), rgba(10,132,255,.05) 45%, transparent 70%)',
          pointerEvents: 'none', opacity: 0, transition: 'opacity .4s ease', willChange: 'transform'
        }}></div>
      )}

      {/* 🚀 SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#0a84ff] via-[#bf5af2] to-[#ff375f] z-[99999] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

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
          <div className="bg-white dark:bg-[#0d0d0f] border border-stone-200 dark:border-[rgba(255,255,255,0.1)] rounded-[2rem] p-10 max-w-lg text-center shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowExitIntent(false)} className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 dark:hover:text-white cursor-pointer"><X size={24}/></button>
            <div className="w-20 h-20 bg-purple-50 dark:bg-[#bf5af2]/10 rounded-full flex items-center justify-center mx-auto mb-6"><TrendingUp size={32} className="text-[#bf5af2]" /></div>
            <h3 className="text-4xl font-bold text-stone-900 dark:text-white mb-4 tracking-tight">Leaving so soon?</h3>
            <p className="text-stone-500 dark:text-[#98989d] mb-8">Don't leave your digital growth to chance. Let's map out a custom AI strategy for your brand—completely free.</p>
            <MagneticWrapper onClick={() => { setShowExitIntent(false); handleTriggerContact('select', null); }} className="w-full bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] py-4 rounded-full font-semibold text-sm shadow-lg hover:scale-[1.02] transition-transform cursor-pointer border-none">Claim Strategy Session</MagneticWrapper>
            <button onClick={() => setShowExitIntent(false)} className="mt-4 text-[11px] font-medium text-stone-400 hover:text-stone-900 dark:hover:text-white uppercase tracking-wider cursor-pointer transition-colors">No thanks, I hate growth</button>
          </div>
        </div>
      )}

      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-8 right-8 text-stone-900 dark:text-white cursor-pointer hover:text-[#ff375f] transition-colors"><X size={32}/></button>
          <img src={lightboxImg} className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-stone-200 dark:border-[rgba(255,255,255,0.1)]" alt="Full View" />
        </div>
      )}

      {/* 🧭 NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border-b border-stone-200 dark:border-[rgba(255,255,255,0.1)] py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative z-10">
          
          <button onClick={(e) => navigateTo('home', e)} className="flex items-center gap-2 cursor-pointer group">
             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0a84ff] via-[#bf5af2] to-[#ff375f] flex items-center justify-center text-white font-bold text-xs shadow-md relative overflow-hidden">
               <span className="relative z-10">ME</span>
               <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[sheen_2s_ease-in-out_infinite]"></div>
             </div>
             <span className="font-semibold text-stone-900 dark:text-[#f5f5f7] tracking-tight text-lg hidden sm:block">digital<span className="text-[#bf5af2]">.</span></span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={(e) => navigateTo('home', e)} className={`text-sm font-medium transition-colors cursor-pointer ${activePage === 'home' ? 'text-[#1d1d1f] dark:text-white' : 'text-stone-500 dark:text-[#98989d] hover:text-[#1d1d1f] dark:hover:text-white'}`}>Works</button>
            <button onClick={(e) => navigateTo('about', e)} className={`text-sm font-medium transition-colors cursor-pointer ${activePage === 'about' ? 'text-[#1d1d1f] dark:text-white' : 'text-stone-500 dark:text-[#98989d] hover:text-[#1d1d1f] dark:hover:text-white'}`}>About</button>
            <button onClick={(e) => navigateTo('insights', e)} className={`text-sm font-medium transition-colors cursor-pointer ${activePage === 'insights' ? 'text-[#1d1d1f] dark:text-white' : 'text-stone-500 dark:text-[#98989d] hover:text-[#1d1d1f] dark:hover:text-white'}`}>Insights</button>
            
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-500 dark:text-[#98989d] hover:text-[#1d1d1f] dark:hover:text-white transition-colors cursor-pointer ml-4" aria-label="Toggle Dark Mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] px-5 py-2 rounded-full font-medium text-sm hover:scale-[1.03] transition-transform cursor-pointer border-none shadow-sm ml-2">
              Book Call
            </MagneticWrapper>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-stone-900 dark:text-white cursor-pointer">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-stone-900 dark:text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[49] bg-white/95 dark:bg-[#0d0d0f]/95 backdrop-blur-xl flex flex-col p-8 space-y-8 md:hidden pt-32 animate-fade-in border-t border-[rgba(255,255,255,0.05)]">
          <button onClick={(e) => navigateTo('home', e)} className="text-3xl font-bold text-left text-stone-900 dark:text-white cursor-pointer tracking-tight">Works</button>
          <button onClick={(e) => navigateTo('about', e)} className="text-3xl font-bold text-left text-stone-900 dark:text-white cursor-pointer tracking-tight">About</button>
          <button onClick={(e) => navigateTo('insights', e)} className="text-3xl font-bold text-left text-stone-900 dark:text-white cursor-pointer tracking-tight">Insights</button>
          <hr className="border-stone-200 dark:border-stone-800" />
          <button onClick={() => { setIsMobileMenuOpen(false); handleTriggerContact('select', null); }} className="text-2xl font-bold text-[#0a84ff] text-left cursor-pointer flex items-center gap-4">
             Book a Call
          </button>
        </div>
      )}

      <IchigoChatWidget onTriggerContact={handleTriggerContact} />
      <CookieBanner />

      <main className={`flex-1 transition-all duration-500 ease-in-out relative z-10 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        
        {activePage === 'home' && (
          <div className="overflow-x-hidden">
            
            {/* HERO SECTION */}
            <section id="hero" className="pt-48 pb-20 px-6 text-center min-h-[90vh] flex flex-col justify-center relative">
              {/* Animated Orb Background for Hero */}
              {darkMode && (
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                   <div className="w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 mix-blend-screen" style={{ background: 'conic-gradient(from 180deg, #0a84ff, #bf5af2, #ff375f, #0a84ff)', animation: 'spin 20s linear infinite' }}></div>
                </div>
              )}

              <Reveal className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] text-stone-600 dark:text-[#98989d] text-[11px] font-semibold uppercase tracking-wider mb-8 mx-auto shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse"></span> Now booking new projects
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold text-stone-900 dark:text-white leading-[1.05] tracking-tighter max-w-4xl mx-auto mb-6">
                  {FUNNEL_DATA.brand.headline}<br/>
                  <span className="gradient-text">{FUNNEL_DATA.brand.headlineSpan}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-stone-500 dark:text-[#98989d] max-w-2xl mx-auto mb-12 leading-relaxed">
                  {FUNNEL_DATA.brand.subheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] px-8 py-4 rounded-full font-semibold text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.03] transition-transform cursor-pointer border-none flex items-center gap-2">
                    Book a strategy call
                  </MagneticWrapper>
                  <MagneticWrapper onClick={() => document.getElementById('audit')?.scrollIntoView({behavior: 'smooth'})} className="bg-stone-100 text-stone-900 dark:bg-[#1a1a1c] dark:text-white border border-stone-200 dark:border-[rgba(255,255,255,0.05)] px-8 py-4 rounded-full font-semibold text-sm hover:bg-stone-200 dark:hover:bg-[#2c2c2e] transition-colors cursor-pointer">
                    Take the free audit
                  </MagneticWrapper>
                </div>
              </Reveal>
            </section>

            {/* MARQUEE */}
            <section className="py-10 border-y border-stone-200 dark:border-[rgba(255,255,255,0.05)] bg-white/50 dark:bg-[#0d0d0f]/50 backdrop-blur-sm overflow-hidden flex items-center">
              <div className="relative flex w-full">
                <style>{`
                  @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                  .animate-scroll { display: flex; width: max-content; animation: scroll 40s linear infinite; }
                  .animate-scroll:hover { animation-play-state: paused; }
                  .mask-edges { -webkit-mask-image: linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent); mask-image: linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent); }
                `}</style>
                <div className="animate-scroll items-center mask-edges">
                  {[...FUNNEL_DATA.brands, ...FUNNEL_DATA.brands].map((client, idx) => (
                    <a key={idx} href={client.fb || client.website || '#'} target="_blank" rel="noopener noreferrer" className="mx-10 md:mx-16 flex items-center justify-center group flex-shrink-0">
                      <BrandLogo client={client} />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* SERVICES BENTO (Redesigned) */}
            <section id="services" className="py-32 bg-[#f5f5f7] dark:bg-[#0d0d0f]">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16 max-w-2xl mx-auto">
                  <span className="mono text-[#bf5af2] mb-4 block">What I Do</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-stone-900 dark:text-white leading-tight">Three systems.<br/>One growth engine.</h2>
                  <p className="text-stone-500 dark:text-[#98989d] text-lg">Each one works standalone. Together, they replace the need for a five-person marketing department.</p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Service 1 */}
                  <Reveal delay={0}>
                    <div className="bg-white dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl relative overflow-hidden group">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-[#0a84ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Smartphone className="text-[#0a84ff]" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-stone-900 dark:text-white tracking-tight">Digital Strategy</h3>
                      <p className="text-stone-500 dark:text-[#98989d] text-sm leading-relaxed mb-8 flex-1">Strategy, content, and paid media built to compound instead of chase trends.</p>
                      <ul className="space-y-3 mt-auto">
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Social strategy & content</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Paid media at scale</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Brand positioning</li>
                      </ul>
                    </div>
                  </Reveal>

                  {/* Service 2 */}
                  <Reveal delay={100}>
                    <div className="bg-white dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#bf5af2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-[#bf5af2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                        <Cpu className="text-[#bf5af2]" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-stone-900 dark:text-white tracking-tight relative z-10">AI Automation</h3>
                      <p className="text-stone-500 dark:text-[#98989d] text-sm leading-relaxed mb-8 flex-1 relative z-10">Workflows that handle the busywork so your team doesn't have to.</p>
                      <ul className="space-y-3 mt-auto relative z-10">
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Custom AI pipelines</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Lead qualification</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Automated reporting</li>
                      </ul>
                    </div>
                  </Reveal>

                  {/* Service 3 */}
                  <Reveal delay={200}>
                    <div className="bg-white dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 h-full flex flex-col hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl relative overflow-hidden group">
                      <div className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-[#ff375f]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp className="text-[#ff375f]" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-stone-900 dark:text-white tracking-tight">CRM Management</h3>
                      <p className="text-stone-500 dark:text-[#98989d] text-sm leading-relaxed mb-8 flex-1">Every lead tracked, every follow-up on time, nothing falling through.</p>
                      <ul className="space-y-3 mt-auto">
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Pipeline architecture</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Nurture sequences</li>
                        <li className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 font-medium pt-3 border-t border-stone-100 dark:border-stone-800"><span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#bf5af2]"></span> Analytics dashboards</li>
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* AUDIT SECTION */}
            <section id="audit" className="py-32 bg-white dark:bg-[#050505]">
              <div className="max-w-5xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="mono text-[#0a84ff] mb-4 block">Interactive Audit</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-stone-900 dark:text-white">Is your strategy failing?</h2>
                  <p className="text-stone-500 dark:text-[#98989d] text-lg max-w-2xl mx-auto">Most brands post without a system. Use this quick audit to find your biggest growth bottleneck.</p>
                </Reveal>
                <Reveal delay={200}><SocialAuditTool onTriggerContact={handleTriggerContact} /></Reveal>
              </div>
            </section>

            {/* METRICS (Redesigned) */}
            <section id="metrics" className="py-32 bg-[#f5f5f7] dark:bg-[#0d0d0f] border-y border-stone-200 dark:border-[rgba(255,255,255,0.05)]">
              <div className="max-w-6xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="mono text-[#ff375f] mb-4 block">Proven Results</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-stone-900 dark:text-white max-w-3xl mx-auto leading-tight tracking-tight">{FUNNEL_DATA.caseStudy.hook}</h3>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-6">
                  {FUNNEL_DATA.caseStudy.metrics.map((m, i) => {
                    const MIcon = m.icon;
                    return (
                      <Reveal key={i} delay={i*100}>
                        <div className="bg-white dark:bg-[#1a1a1c] border border-stone-200 dark:border-[rgba(255,255,255,0.05)] rounded-[2rem] p-8 text-center shadow-sm hover:shadow-xl hover:border-[#bf5af2] transition-all cursor-pointer group relative overflow-hidden" onClick={() => setActiveCaseStudy(m)}>
                          <MIcon className="text-stone-400 dark:text-stone-600 mb-6 mx-auto group-hover:text-[#bf5af2] transition-colors duration-500" size={32} />
                          <p className="text-5xl md:text-6xl font-black text-stone-900 dark:text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform duration-500">
                            <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                          </p>
                          <p className="text-stone-500 dark:text-[#98989d] font-semibold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2">
                            {m.label} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#bf5af2]" />
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* PORTFOLIO / WORKS */}
            <section id="portfolio" className="py-32 bg-white dark:bg-[#050505]">
              <div className="max-w-6xl mx-auto px-6">
                
                {/* Graphics */}
                <Reveal className="mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <ImageIcon className="text-[#0a84ff]" size={28}/>
                    <h3 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">Sample Graphics</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {FUNNEL_DATA.portfolio.graphics.map((img, i) => (
                      <div key={i} className="aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-stone-200 dark:border-[rgba(255,255,255,0.1)] cursor-pointer group bg-[#f5f5f7] dark:bg-[#1a1a1c]" onClick={() => setLightboxImg(img)}>
                        <LazyImage src={img} alt="Graphic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Vertical Video */}
                <Reveal className="mb-20 pt-20 border-t border-stone-100 dark:border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3 mb-8">
                    <Smartphone className="text-[#bf5af2]" size={28}/>
                    <h3 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">Vertical Content</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {FUNNEL_DATA.portfolio.verticalVideos.map((vid, i) => (
                      <div key={i} className="group cursor-pointer">
                        <a href={vid.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <div className="aspect-[9/16] rounded-[2rem] overflow-hidden shadow-md border-4 border-white dark:border-[#1a1a1c] relative bg-stone-900 group-hover:shadow-xl transition-shadow">
                            <LazyImage src={vid.img} alt={vid.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 group-hover:bg-[#bf5af2] transition-colors">
                                 <PlayCircle size={32} className="text-white"/>
                              </div>
                            </div>
                          </div>
                          <p className="font-semibold text-sm mt-5 text-center text-stone-900 dark:text-white group-hover:text-[#bf5af2] transition-colors flex items-center justify-center gap-1.5">
                            {vid.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Websites */}
                <Reveal className="mb-20 pt-20 border-t border-stone-100 dark:border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3 mb-8">
                    <Monitor className="text-[#ff375f]" size={28}/>
                    <h3 className="text-3xl font-bold text-stone-900 dark:text-white tracking-tight">Digital Architectures</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-10">
                    {FUNNEL_DATA.portfolio.websites.map((s, i) => (
                      <div key={i} className="group cursor-pointer text-left" onClick={() => setLightboxImg(s.img)}>
                        <div className="rounded-[2rem] overflow-hidden border border-stone-200 dark:border-[rgba(255,255,255,0.1)] shadow-sm relative aspect-[4/3] bg-[#f5f5f7] dark:bg-[#1a1a1c]">
                          <LazyImage src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="flex justify-between items-center mt-5 px-2">
                          <p className="font-bold text-lg text-stone-900 dark:text-white group-hover:text-[#ff375f] transition-colors tracking-tight">{s.title}</p>
                          {s.link && (
                            <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold uppercase tracking-wider text-[#ff375f] hover:text-stone-900 dark:hover:text-white flex items-center gap-1 transition-colors" onClick={(e) => e.stopPropagation()}>
                              Visit Site <ExternalLink size={12}/>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                {/* Writing */}
                <div className="grid md:grid-cols-2 gap-16 pt-20 border-t border-stone-100 dark:border-[rgba(255,255,255,0.05)]">
                  <Reveal>
                    <div className="flex items-center gap-3 mb-8">
                      <FileText className="text-stone-500 dark:text-[#98989d]" size={24} />
                      <h4 className="text-2xl font-bold text-stone-900 dark:text-white tracking-tight">Articles & Copy</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.articles.map((art, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 dark:border-[rgba(255,255,255,0.05)] last:border-0">
                          <a href={art.link} target="_blank" rel="noopener noreferrer" className="block">
                            <h5 className="font-bold text-lg text-stone-900 dark:text-white mb-2 group-hover:text-[#0a84ff] transition-colors">{art.title}</h5>
                            <p className="text-sm text-stone-500 dark:text-[#98989d] mb-3 leading-relaxed">{art.snippet}</p>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0a84ff] flex items-center gap-1">Read Sample <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={100}>
                    <div className="flex items-center gap-3 mb-8">
                      <Newspaper className="text-stone-500 dark:text-[#98989d]" size={24} />
                      <h4 className="text-2xl font-bold text-stone-900 dark:text-white tracking-tight">Newsletters</h4>
                    </div>
                    <ul className="space-y-6">
                      {FUNNEL_DATA.portfolio.writing.newsletters.map((news, idx) => (
                        <li key={idx} className="group pb-6 border-b border-stone-100 dark:border-[rgba(255,255,255,0.05)] last:border-0">
                          <a href={news.link} target="_blank" rel="noopener noreferrer" className="block">
                            <h5 className="font-bold text-lg text-stone-900 dark:text-white mb-2 group-hover:text-[#bf5af2] transition-colors">{news.title}</h5>
                            <p className="text-sm text-stone-500 dark:text-[#98989d] mb-3 leading-relaxed">{news.snippet}</p>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#bf5af2] flex items-center gap-1">View Campaign <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </section>

            {/* REVIEWS */}
            <section id="reviews" className="py-32 bg-[#f5f5f7] dark:bg-[#0d0d0f] border-y border-stone-200 dark:border-[rgba(255,255,255,0.05)]">
              <div className="max-w-7xl mx-auto px-6">
                <Reveal className="text-center mb-16">
                  <span className="mono text-[#bf5af2] mb-4 block">The Verdict</span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-white">Client Success</h2>
                </Reveal>
                
                <Reveal delay={100}><ReviewCarousel /></Reveal>
              </div>
            </section>

            {/* LEAD CAPTURE */}
            <section id="lead-capture" className="py-32 bg-white dark:bg-[#050505]">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <Reveal>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-stone-900 dark:text-white">Ready to leave the <span className="gradient-text">digital to ME?</span></h2>
                  <p className="text-stone-500 dark:text-[#98989d] text-lg mb-12">Message me directly to discuss your digital transformation.</p>
                  <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="inline-flex items-center gap-3 bg-stone-900 text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f] px-10 py-5 rounded-full font-semibold text-sm shadow-lg hover:scale-[1.03] transition-transform cursor-pointer border-none w-fit mx-auto">
                    Book a strategy call
                  </MagneticWrapper>
                  <p className="text-[11px] text-stone-400 dark:text-[#6e6e73] mt-6 uppercase tracking-wider font-medium">Usually replies within one business day.</p>
                </Reveal>
              </div>
            </section>
          </div>
        )}

        {/* ... (About, Insights, Hey AI, Privacy, AI Use pages remain structurally identical, just inheriting new global styles) ... */}

      </main>

      {/* CATS MISSION BANNER */}
      <div className="bg-[#1d1d1f] dark:bg-[#000000] text-white py-16 px-6 border-t-2 border-[#bf5af2] relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="/Ichigo-Haru-Anko-Yuzu.png" alt="Mark, Partner, and 4 Cats" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center md:justify-start gap-4 tracking-tight">
              The Real Masterminds 🐾
            </h3>
            <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Powered by high-converting systems, premium coffee, and a lot of chicken. Every project we take on helps feed our 4 cats and the strays that we meet!
            </p>
            <MagneticWrapper onClick={() => handleTriggerContact('select', null)} className="inline-block bg-gradient-to-r from-[#0a84ff] to-[#bf5af2] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity cursor-pointer border-none">
              Work With Us
            </MagneticWrapper>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-[#050505] py-16 px-6 text-center border-t border-stone-200 dark:border-[rgba(255,255,255,0.05)] transition-colors relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <button onClick={(e) => navigateTo('home', e)} className="flex items-center gap-2 cursor-pointer mb-8">
             <div className="w-6 h-6 rounded bg-gradient-to-br from-[#0a84ff] via-[#bf5af2] to-[#ff375f] flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
               ME
             </div>
             <span className="font-semibold text-stone-900 dark:text-[#f5f5f7] tracking-tight">digital.</span>
          </button>

          {/* Page Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-stone-500 dark:text-[#98989d]">
            <button onClick={(e) => navigateTo('home', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">Works</button>
            <button onClick={(e) => navigateTo('about', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">About & CV</button>
            <button onClick={(e) => navigateTo('insights', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">Insights</button>
            <button onClick={(e) => navigateTo('privacy', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">Privacy Policy</button>
            <button onClick={(e) => navigateTo('ai-use', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">AI Ethics</button>
            <button onClick={(e) => navigateTo('hey-ai', e)} className="hover:text-stone-900 dark:hover:text-white transition-colors text-sm font-medium cursor-pointer">Hey AI</button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-stone-400 dark:text-[#6e6e73]">
            <a href={CV_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a84ff] transition-colors" aria-label="Facebook"><FacebookIcon size={20} /></a>
            <a href={CV_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#bf5af2] transition-colors" aria-label="Instagram"><InstagramIcon size={20} /></a>
            <a href={CV_DATA.socials.threads} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Threads"><AtSign size={20} /></a>
            <a href={CV_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0a84ff] transition-colors" aria-label="LinkedIn"><LinkedInIcon size={20} /></a>
            <a href={CV_DATA.socials.blinq} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 dark:hover:text-white transition-colors" aria-label="Digital Calling Card"><Contact size={20} /></a>
            <button onClick={() => handleTriggerContact('select', null)} className="hover:text-[#ff375f] transition-colors cursor-pointer" aria-label="Email"><Mail size={20} /></button>
          </div>
          <p className="font-medium text-[11px] text-stone-400 dark:text-[#6e6e73] tracking-wider">© {new Date().getFullYear()} ME digital — Mark Espinosa</p>
        </div>
      </footer>

    </div>
  );
}