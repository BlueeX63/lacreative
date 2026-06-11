"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceFeatureSectionProps {
  number: string;
  title: string;
  subHeading: string;
  description: React.ReactNode;
  imageSrc: string;
  isReversed?: boolean;
  backgroundColor: string;
  textColor: string;
  subHeadingIconColor: string;
  buttonLabel?: string;
  buttonColor: string; // e.g. "border-[#3b477b] text-[#3b477b]"
  buttonHoverBg: string; // e.g. "from-[#3b477b] to-[#2ca59f]"
}

// Custom Asterisk Icon component
const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 6v12M17.196 9L6.804 15M6.804 9l10.392 6" />
  </svg>
);

export default function ServiceFeatureSection({
  number,
  title,
  subHeading,
  description,
  imageSrc,
  isReversed = false,
  backgroundColor,
  textColor,
  subHeadingIconColor,
  buttonLabel = "BOOK NOW",
  buttonColor,
  buttonHoverBg
}: ServiceFeatureSectionProps) {
  
  // Magnetic Image Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Lower stiffness, higher damping, and more mass creates an ultra-smooth, heavy floating feeling 
  // that completely eliminates the initial jerk.
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20, mass: 1 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className={`w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden ${backgroundColor}`}>
      <div className={`max-w-6xl mx-auto flex flex-col gap-16 lg:gap-32 items-center ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 flex flex-col justify-center ${textColor}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-7xl md:text-[100px] font-serif italic font-light tracking-widest">{number}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-[54px] font-bold uppercase tracking-[0.1em] mt-2 mb-12 leading-[1.1]"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-start gap-4 mb-8"
          >
            <Asterisk className={`w-7 h-7 mt-0.5 shrink-0 ${subHeadingIconColor}`} />
            <p className="font-bold uppercase tracking-wider text-[13px] md:text-[14px] leading-relaxed max-w-[420px]">
              {subHeading}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <hr className={`border-t border-black/30 w-full max-w-[480px] mb-8`} />
            
            <div className="font-medium leading-[1.8] text-[13px] md:text-[14px] mb-8 space-y-6 max-w-[480px] opacity-80">
              {description}
            </div>

            <hr className={`border-t border-black/30 w-full max-w-[480px] mb-12`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/contact">
              <button className={`cursor-pointer group relative flex items-center gap-4 px-8 py-4 bg-transparent border-2 ${buttonColor} text-[11px] tracking-[0.2em] uppercase font-bold overflow-hidden transition-colors duration-500 hover:border-transparent w-fit`}>
                {/* Premium Liquid Fill */}
                <div className={`absolute inset-0 bg-gradient-to-r ${buttonHoverBg} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0`} />
                
                {/* Cinematic Text Reveal */}
                <div className="relative z-10 overflow-hidden h-4 flex items-center">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] tracking-[0.2em]">{buttonLabel}</span>
                  <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] tracking-[0.2em] text-white">{buttonLabel}</span>
                </div>
                
                <span className="text-lg leading-none relative z-10 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2 group-hover:text-white">→</span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Content with Magnetic 3D Effect */}
        <div 
          className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] perspective-[1000px] z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="w-full h-full relative group"
          >
            <div className="absolute inset-0 w-full h-full shadow-2xl overflow-hidden group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.3)] transition-shadow duration-500">
              <div className="absolute inset-0 w-full h-full scale-[1.05] group-hover:scale-[1.1] transition-transform duration-700 ease-out">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              {/* Soft Lighting Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out mix-blend-overlay pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
