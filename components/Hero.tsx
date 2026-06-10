"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 bg-[#050505] flex flex-col justify-center px-8 lg:px-16 xl:px-24 pt-[180px] pb-10 relative overflow-hidden z-10">
        
        {/* Animated Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            style={{ perspective: 1000 }}
          >
            <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[56px] tracking-wider leading-[1.14] relative">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="block"
              >WE TURN</motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
              >VISIONARY</motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >IDEAS INTO</motion.span>
              <span className="block mt-4 font-serif font-bold text-[40px] sm:text-[50px] lg:text-[60px] tracking-normal leading-none text-white relative">
                <motion.span 
                  initial={{ backgroundPosition: "200% center" }}
                  animate={{ backgroundPosition: "-200% center" }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="relative z-10 bg-[linear-gradient(to_right,#fff,#3fd5d3,#a07cba,#fff)] bg-[length:200%_auto] text-transparent bg-clip-text"
                >ICONIC BRANDS</motion.span>
                <span className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-blue-900 to-purple-900 rounded-full blur-[50px] opacity-60 pointer-events-none" />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="mt-8 text-white/80 text-[17px] leading-[1.8] max-w-[450px] font-light"
          >
            At LA Creative Marketing, we don&apos;t just build brands—we craft bold
            visions, telling your story in a way that&apos;s fresh, fierce, and
            unforgettable. Let&apos;s make the extraordinary the standard. Your
            story. Our masterpiece.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5 }}
          className="mt-10 inline-block relative z-10"
        >
            <button className="cursor-pointer group relative flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-[0.2em] text-[12px] uppercase overflow-hidden shadow-[0_0_30px_rgba(30,139,140,0.2)] backdrop-blur-md transition-all duration-500 hover:border-transparent hover:shadow-[0_0_50px_rgba(30,139,140,0.6)] hover:scale-105 hover:-translate-y-2">
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0 bg-white/20 skew-x-[45deg] z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b125b] to-[#1e8b8c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 tracking-[0.25em] group-hover:tracking-[0.3em] transition-all duration-300">Get Started</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2 group-hover:bg-white/30 group-hover:rotate-45">
                <ArrowRight size={16} strokeWidth={2} />
              </div>
            </button>
          </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen overflow-hidden">
        <motion.div
          style={{ y: imageY, scale }}
          className="absolute inset-0 h-[120%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2000&auto=format&fit=crop"
            alt="Person wearing LAKEN ALEXANDER jacket"
            fill
            className="object-cover object-center"
            priority
          />
          {/* subtle overlay to match mood */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
