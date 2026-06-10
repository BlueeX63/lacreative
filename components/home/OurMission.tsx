"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export default function OurMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll parallax for container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const containerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const containerY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Motion values for the mouse position relative to the center of the card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map the spring values to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Glow position
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(59, 130, 246, 0.25) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#050510] py-32 px-6 overflow-hidden flex items-center justify-center perspective-[2000px]">
      {/* Background ambient light */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-linear-to-r from-blue-900/40 to-purple-900/40 blur-2xl pointer-events-none" 
      />

      <motion.div 
        style={{ scale: containerScale, y: containerY }}
        className="max-w-6xl w-full mx-auto relative z-10"
      >
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, rotateX: 45, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="relative w-full rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] p-8 md:p-16 lg:p-24 cursor-crosshair"
        >
          {/* Dynamic Glow Effect following mouse */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 mix-blend-screen"
            style={{
              background: glowBackground,
              opacity: isHovered ? 1 : 0,
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24" style={{ transform: "translateZ(80px)" }}>
            
            {/* Left side: Logo / Title Area */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0 lg:pr-16">
              <motion.div 
                style={{ transform: "translateZ(120px)" }}
                className="text-[120px] lg:text-[180px] font-serif leading-none tracking-tighter text-white/90 drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]"
              >
                LA
              </motion.div>
              <h2 className="text-white font-serif text-4xl lg:text-5xl mt-6 tracking-wide">
                <motion.span 
                  animate={{ color: ["#fff", "#3fd5d3", "#fff"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="block"
                >OUR</motion.span> 
                MISSION
              </h2>
            </div>

            {/* Right side: Text Content */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <motion.p 
                style={{ transform: "translateZ(60px)" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] font-light uppercase tracking-widest hover:text-white transition-colors"
              >
                We&apos;re always offering first-rate growth solutions for businesses in New Orleans and across the U.S. through top-of-the-line content, engaging video storytelling, strategic social media planning, and a focus on capturing what makes your business so special, we help your company thrive.
              </motion.p>
              
              <motion.p 
                style={{ transform: "translateZ(90px)" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white/80 text-[15px] md:text-[16px] leading-[1.8] font-light uppercase tracking-widest hover:text-white transition-colors"
              >
                But what makes us truly unique is our personalized client experiences, crafted through our dedication to authentic, human connections. By identifying the most distinctive aspects of your business, we can accurately deliver our comprehensive and customizable services, building out your luxury brand from start to finish.
              </motion.p>
              
              <motion.p 
                style={{ transform: "translateZ(120px)" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-teal-400 text-[15px] md:text-[16px] leading-[1.8] font-light uppercase tracking-widest"
              >
                Choosing L.A. Creative Marketing is more than a smart business decision; it&apos;s an act of professional self-care. When you value yourself, you value your services, and it shows!
              </motion.p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
