"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -25, y: 150 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 100 }
  }
} as any;

export default function NationwideSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const mapY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 0, -45]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden perspective-distant">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">
        
        {/* Top Images */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap gap-4 md:gap-8 justify-center mb-16"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              whileHover={{ scale: 1.15, rotate: idx % 2 === 0 ? 8 : -8, zIndex: 50, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 shrink-0 border-2 border-[#111] overflow-hidden shadow-xl cursor-pointer relative"
            >
              <motion.img 
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring" }}
                src={src} 
                alt="Agency showcase" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          style={{ y: textY, rotateX }}
          className="transform-gpu"
        >
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.8 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            className="text-center font-serif text-[26px] md:text-[38px] lg:text-[44px] leading-[1.2] uppercase text-black max-w-5xl mb-20"
          >
            Voted top digital marketing agency <br />
            scaling <motion.span whileHover={{ scale: 1.1, color: "#0d9488" }} className="font-bold inline-block transition-colors duration-300 cursor-pointer">contractors, brokers,</motion.span> <br />
            <span className="font-bold">property management, retail, and boat</span> <br />
            <span className="font-bold">tours companies across the nation</span>
          </motion.h2>
        </motion.div>

        {/* Map */}
        <motion.div
          style={{ y: mapY }}
          initial={{ opacity: 0, scale: 0.7, rotateZ: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          whileHover={{ scale: 1.05, rotateZ: 2, filter: "drop-shadow(0px 30px 40px rgba(13, 148, 136, 0.4))" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", stiffness: 40 }}
          className="w-full max-w-4xl mb-24 flex justify-center drop-shadow-2xl cursor-pointer relative group"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-teal-400/30 blur-[100px] rounded-full -z-10"
          ></motion.div>
          <img src="/us_map.png" alt="Map of USA highlighting nationwide clients" className="w-full max-w-3xl h-auto object-contain transition-transform duration-700" />
        </motion.div>

        {/* Logo at bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          className="flex items-center justify-center gap-6 group cursor-pointer"
        >
          <div className="relative w-16 h-16 flex items-center justify-center group-hover:rotate-12 transition-transform duration-700">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-40%] bg-linear-to-br from-teal-400/40 to-purple-600/40 blur-2xl rounded-full"
             ></motion.div>
             <div className="absolute inset-0 bg-linear-to-br from-[#1b3b64] to-[#3a1d5c] -skew-x-12 transform scale-y-[1.2] shadow-2xl group-hover:scale-125 transition-transform duration-500 ease-out"></div>
             <div className="absolute inset-0 flex items-center justify-center space-x-1 z-10 text-white font-sans">
               <motion.span whileHover={{ y: -10, rotate: -10 }} className="text-4xl font-black italic -ml-2 transition-transform">L</motion.span>
               <motion.span whileHover={{ y: 10, rotate: 10 }} className="text-4xl font-light italic transition-transform">A</motion.span>
             </div>
          </div>
          
          <div className="flex flex-col border-b-2 border-transparent group-hover:border-[#3a1d5c] transition-colors duration-500 pb-1 overflow-hidden relative">
            <motion.span 
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-2xl md:text-[28px] font-semibold tracking-widest text-[#111] uppercase leading-none group-hover:text-teal-700 transition-colors duration-500"
            >
              Creative
            </motion.span>
            <motion.span 
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="text-sm md:text-base tracking-[0.3em] text-[#111] uppercase leading-none mt-2 font-light group-hover:text-purple-700 transition-colors duration-500"
            >
              Marketing
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
