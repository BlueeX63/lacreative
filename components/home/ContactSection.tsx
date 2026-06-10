"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const formItemVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 50 } 
    }
  };

  return (
    <section ref={sectionRef} className="w-full relative py-24 md:py-32 px-6 md:px-12 lg:px-24 flex justify-center items-center overflow-hidden bg-linear-to-br from-[#f0f4f8] via-[#e3f0f2] to-[#eaddf5]">
      {/* Abstract Gradient Background (Animated Parallax) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: bgY1, rotate: rotate1 }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-teal-300/40 rounded-full blur-[120px] mix-blend-multiply"
        ></motion.div>
        <motion.div 
          style={{ y: bgY2, rotate: rotate1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-400/30 rounded-full blur-[120px] mix-blend-multiply"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-purple-400/40 rounded-full blur-[150px] mix-blend-multiply"
        ></motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 150, rotateX: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        className="max-w-6xl w-full mx-auto relative z-10 bg-[#ebe3f2]/90 backdrop-blur-2xl shadow-[0_40px_80px_rgba(59,18,91,0.15)] flex flex-col md:flex-row border border-white/50"
      >
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-12 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#a07cba]/30 relative overflow-hidden group">
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="relative z-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", bounce: 0.5, duration: 1 }}
              className="text-[#3b125b] font-serif text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] mb-8 transform-gpu"
            >
              We do things<br />
              <motion.span 
                animate={{ color: ["#3b125b", "#248991", "#3b125b"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="uppercase font-black inline-block tracking-tight"
              >
                DIFFERENT
              </motion.span><br />
              around here
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="text-[#333] text-[15px] leading-[1.6] mb-12 max-w-md"
            >
              Let's shake things up together. At LA Creative Marketing, we believe bold ideas deserve bold execution—and we're here to make that happen. Whether you're ready to start a new project or just want to explore the possibilities, reach out today and let's create something unforgettable.
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05, letterSpacing: "0.25em" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="bg-linear-to-r from-[#2a4569] to-[#248991] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-4 px-8 hover:shadow-[0_10px_30px_rgba(36,137,145,0.4)] transition-all flex items-center gap-4 w-fit overflow-hidden relative group/btn"
            >
              <motion.span 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
                  className="absolute inset-0 w-full h-full bg-white/20 skew-x-45 z-0"
              ></motion.span>
              <span className="relative z-10">GET STARTED</span>
              <motion.span 
                whileHover={{ x: 8 }}
                className="text-lg leading-none relative z-10"
              >→</motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-12 md:p-16 lg:p-24 flex flex-col justify-center bg-white/30 backdrop-blur-md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h3 
              variants={formItemVariants}
              className="text-[#3b125b] font-serif text-[40px] md:text-[50px] mb-12"
            >
              Let's Chat
            </motion.h3>
            
            <form className="space-y-8 flex flex-col relative" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={formItemVariants} className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1 border-b border-[#a07cba] pb-2 relative group/input">
                  <input type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-[#333] placeholder-[#333] text-sm peer relative z-10" />
                  <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
                </div>
                <div className="flex-1 border-b border-[#a07cba] pb-2 relative group/input">
                  <input type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-[#333] placeholder-[#333] text-sm peer relative z-10" />
                  <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
                </div>
              </motion.div>
              
              <motion.div variants={formItemVariants} className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1 border-b border-[#a07cba] pb-2 relative group/input">
                  <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-[#333] placeholder-[#333] text-sm peer relative z-10" />
                  <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
                </div>
                <div className="flex-1 border-b border-[#a07cba] pb-2 relative group/input">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none text-[#333] placeholder-[#333] text-sm peer relative z-10" />
                  <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
                </div>
              </motion.div>

              <motion.div variants={formItemVariants} className="flex items-center border-b border-[#a07cba] pb-2 pt-4 relative group/input">
                <span className="text-sm text-[#333] mr-2">Message |</span>
                <select className="flex-1 outline-none text-[#333] text-sm appearance-none cursor-pointer font-bold bg-[#d6ccdf] px-2 py-1 rounded-sm w-max peer relative z-10 hover:bg-[#c9bcd5] transition-colors">
                  <option value="" disabled selected>Choose Service</option>
                  <option value="branding">Branding</option>
                  <option value="web-design">Web Design</option>
                  <option value="seo">SEO</option>
                </select>
                <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
              </motion.div>

              <motion.div variants={formItemVariants} className="border-b border-[#a07cba] pb-2 pt-12 relative group/input">
                <textarea 
                  rows={1}
                  className="w-full bg-transparent outline-none text-[#333] placeholder-[#666] text-sm resize-none peer relative z-10"
                ></textarea>
                <motion.div className="absolute -bottom-px left-0 h-0.5 bg-[#248991] w-0 peer-focus:w-full transition-all duration-500 ease-out z-20"></motion.div>
              </motion.div>

              <motion.button 
                variants={formItemVariants}
                whileHover={{ scale: 1.05, letterSpacing: "0.25em" }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="bg-linear-to-r from-[#3b125b] to-[#248991] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-4 px-8 mt-8 hover:shadow-[0_15px_40px_rgba(59,18,91,0.5)] transition-all flex items-center gap-4 w-fit overflow-hidden relative group/btn"
              >
                <motion.span 
                  animate={{ x: ["-100%", "200%"] }} 
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }} 
                  className="absolute inset-0 w-full h-full bg-white/20 skew-x-45 z-0"
                ></motion.span>
                <span className="relative z-10">SUBMIT</span>
                <motion.span 
                  whileHover={{ x: 8 }}
                  className="text-lg leading-none relative z-10"
                >→</motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
