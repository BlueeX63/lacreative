"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP, FaYoutube, FaTiktok, FaXTwitter, FaArrowRight } from "react-icons/fa6";

function MagneticSocialIcon({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.5);
    y.set(distanceY * 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="#"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
      style={{ x: springX, y: springY }}
      className="relative w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 overflow-hidden cursor-pointer shadow-lg group/social"
    >
      {/* Liquid background fill */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-teal-500 to-blue-500 rounded-full"
        initial={{ y: "100%", scale: 0.8 }}
        animate={{ 
          y: isHovered ? "0%" : "100%",
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />
      
      {/* Inner Parallax Icon */}
      <motion.div 
        style={{ x: useTransform(springX, (v) => v * 0.5), y: useTransform(springY, (v) => v * 0.5) }}
        className="relative z-10 flex items-center justify-center text-white/80 group-hover/social:text-white transition-colors duration-300"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

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
    <footer className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-900/20 blur-[150px] pointer-events-none rounded-[100%]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 lg:gap-8 relative z-10"
      >
        
        {/* Left Column: Logo & Socials */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start space-y-8 lg:w-1/3">
          
          {/* Custom Logo */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#41196E] via-[#6533A8] to-[#12797e] flex items-center justify-center shadow-[0_0_30px_rgba(101,51,168,0.3)] group-hover:shadow-[0_0_50px_rgba(101,51,168,0.6)] group-hover:scale-110 transition-all duration-500 rounded-lg">
              <span className="text-white text-2xl font-black italic tracking-tighter">LA</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-widest uppercase leading-none text-white group-hover:text-teal-400 transition-colors duration-300">Creative</span>
              <span className="text-[10px] tracking-[0.3em] uppercase leading-none mt-1 text-white/80 group-hover:text-white transition-colors duration-300">Marketing</span>
              <div className="h-px w-full bg-gradient-to-r from-teal-500 to-purple-600 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
          {[
              { icon: <FaInstagram size={17} /> },
              { icon: <FaFacebookF size={16} /> },
              { icon: <FaLinkedinIn size={17} /> },
              { icon: <FaPinterestP size={17} /> },
              { icon: <FaYoutube size={18} /> },
              { icon: <FaTiktok size={17} /> },
              { icon: <FaXTwitter size={16} /> },
            ].map((social, idx) => (
              <MagneticSocialIcon key={idx}>
                {social.icon}
              </MagneticSocialIcon>
            ))}
          </div>

          <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-light">
            FOLLOW US | @LACREATIVEMARKETING
          </p>
        </motion.div>

        {/* Center Column: Newsletter */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:w-[40%] text-center lg:text-left space-y-8">
          <div className="space-y-3">
            <h4 className="text-[13px] tracking-[0.2em] uppercase text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400">
              STAY CONNECTED
            </h4>
            <p className="text-sm text-white/60 font-light max-w-sm mx-auto lg:mx-0">
              Join our newsletter for the latest insights, exclusive content, and creative marketing strategies.
            </p>
          </div>
          
          <form className="w-full max-w-md relative group" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex items-center w-full h-[60px] rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 focus-within:bg-white/10 focus-within:border-teal-500/50 hover:border-white/30 shadow-[0_0_0_rgba(0,0,0,0)] focus-within:shadow-[0_0_30px_rgba(30,139,140,0.2)]">
              
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-full bg-transparent text-white px-6 outline-none text-[13px] placeholder:text-white/30"
                required
              />
              
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-white text-black font-bold tracking-[0.1em] text-[10px] uppercase overflow-hidden group/btn flex items-center justify-center gap-2 hover:text-white transition-colors duration-300">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 hidden sm:block">Subscribe</span>
                <span className="relative z-10 w-5 h-5 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    className="flex items-center absolute"
                    initial={{ x: 0 }}
                    whileHover={{ x: 30 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <FaArrowRight size={12} />
                  </motion.div>
                  <motion.div 
                    className="flex items-center absolute -translate-x-[30px]"
                    initial={{ x: -30 }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <FaArrowRight size={12} />
                  </motion.div>
                </span>
              </button>

            </div>
            
            {/* Animated Underline Effect */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"
              initial={{ width: "0%", x: "-50%", opacity: 0 }}
              whileInView={{ width: "80%", opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            />
          </form>
        </motion.div>

        {/* Right Column: Contact Details */}
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start lg:w-1/4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2">
                Phone
              </h4>
              <p className="text-[14px] font-medium text-white hover:text-teal-400 transition-colors cursor-pointer group flex items-center gap-2 justify-center lg:justify-start">
                (504) 214-0552
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2">
                Email
              </h4>
              <p className="text-[14px] font-medium text-white hover:text-purple-400 transition-colors cursor-pointer group flex items-center gap-2 justify-center lg:justify-start">
                grow@lacreativemarketing.com
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">↗</span>
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2 mt-4">
                Location
              </h4>
              <p className="text-[13px] text-white/80 font-light">
                New Orleans, LA
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
