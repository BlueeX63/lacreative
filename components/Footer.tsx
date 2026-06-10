"use client";

import { motion } from "framer-motion";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h3" />
    <path d="M7 20V9" />
    <path d="M4 12h7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.25z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 5a9.5 9.5 0 0 0-9-5.5c4.75 2.25 7-7 7-7" />
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 20l4-9" />
    <path d="M10.7 14c.4 3 2.5 3 3.5 2 1.3-1.3 1.8-4.5-1.5-5.5-2.5-.8-4.2.7-4 2.5.3 2 1.8 1.5 1.8 1.5" />
  </svg>
);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <footer className="w-full bg-[#111111] text-white py-16 md:py-20 px-6 md:px-12 lg:px-24 border-t border-[#333]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8"
      >
        
        {/* Left Column: Logo & Socials */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start space-y-8 lg:w-1/3">
          
          {/* Custom Logo */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="relative w-12 h-12 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
               <div className="absolute inset-0 bg-linear-to-br from-[#1b3b64] to-[#3a1d5c] -skew-x-12 transform scale-y-[1.2]"></div>
               <div className="absolute inset-0 flex items-center justify-center space-x-1 z-10 text-white font-sans">
                 <span className="text-3xl font-black italic -ml-1">L</span>
                 <span className="text-3xl font-light italic">A</span>
               </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-widest uppercase leading-none text-white">Creative</span>
              <span className="text-[10px] tracking-[0.3em] uppercase leading-none mt-1 text-white/80">Marketing</span>
              <div className="h-px w-full bg-teal-500 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
          {[
              { icon: <InstagramIcon /> },
              { icon: <FacebookIcon /> },
              { icon: <LinkedinIcon /> },
              { icon: <PinterestIcon /> },
              { icon: <YoutubeIcon /> },
              { icon: <TikTokIcon /> },
              { icon: <TwitterIcon /> },
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href="#"
                whileHover={{ scale: 1.15, y: -3, backgroundColor: "#ffffff", color: "#111111" }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-white text-[#111] flex items-center justify-center transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-[11px] tracking-widest text-white/70 uppercase">
            FOLLOW US | @LACREATIVEMARKETING
          </p>
        </motion.div>

        {/* Center Column: Newsletter */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:w-1/3 text-center lg:text-left space-y-6">
          <h4 className="text-[11px] tracking-widest uppercase text-white/90 font-semibold mb-2">
            STAY CONNECTED WITH L.A. CREATIVE MARKETING'S BLOGS!
          </h4>
          
          <form className="flex w-full max-w-md shadow-2xl relative group/form overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <motion.div 
              className="absolute inset-0 bg-teal-500/20 -translate-x-full group-hover/form:animate-[shimmer_2s_infinite] pointer-events-none"
            ></motion.div>
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-white text-black px-4 py-3 outline-none text-xs"
              required
            />
            <button className="bg-[#248991] hover:bg-[#1a666d] text-white px-6 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors flex items-center">
              SUBSCRIBE
            </button>
            <button className="bg-[#2ebab7] hover:bg-[#249694] text-white px-4 py-3 transition-colors flex items-center justify-center">
              →
            </button>
          </form>
        </motion.div>

        {/* Right Column: Contact Details */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start lg:w-1/4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#333] pt-8 lg:pt-0">
          <div className="space-y-4 text-center lg:text-left">
            <h4 className="text-[11px] tracking-widest uppercase text-white font-semibold">
              CONTACT DETAILS
            </h4>
            <p className="text-xs text-white/80 hover:text-teal-400 transition-colors cursor-pointer">
              (504) 214-0552
            </p>
            <p className="text-xs text-white/80 hover:text-teal-400 transition-colors cursor-pointer">
              grow@lacreativemarketing.com
            </p>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
