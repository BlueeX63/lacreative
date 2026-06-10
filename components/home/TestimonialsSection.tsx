"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Ship, Wind, Users } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    logo: <Ship className="w-8 h-8 text-blue-600" />,
    text: "Working with LA Creative Marketing was a game-changer for our business. Their team took the time to understand our vision and brought it to life with creativity, professionalism, and attention to detail. From branding to social media, every step of the process was seamless—and the results have been incredible.",
    author: "-BOAT TOURS AT\nTHE WHARF",
    isMiddle: false,
  },
  {
    logo: (
      <div className="flex text-red-600 space-x-1">
        <Wind className="w-8 h-8 text-red-600" />
        <Wind className="w-8 h-8 text-blue-600" />
      </div>
    ),
    text: "We've worked with LA Creative Marketing Agency for years, and they've been an incredible partner in growing our business. They handle our social media, photography, videography, branding, ads, SEO, and website, helping us reach over 12,000 followers on Facebook and consistently bring in new leads.",
    author: "- OPTIMUM AIR\nSOLUTIONS",
    isMiddle: true,
  },
  {
    logo: <Users className="w-8 h-8 text-black" />,
    text: "L.A. Creative Marketing's videos are awesome, and they really listen to what a customer wants to promote. They do a great job capturing the exact message in their mini videos while also making everything look professional and engaging. Their work has helped us connect with our audience in a more personal way, and we've been very happy with the results.",
    author: "-FOUR COLUMNS",
    isMiddle: false,
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yGlow1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const yGlow2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const cardVariants = {
    hidden: { opacity: 0, y: 150, rotateX: 45, scale: 0.8 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: idx * 0.2,
        duration: 0.8,
        type: "spring" as const,
        bounce: 0.4
      }
    })
  } as any;

  return (
    <section ref={sectionRef} className="w-full bg-[#111111] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden perspective-[2000px]">
      {/* Top Right Cyan Glow (Animated Parallax) */}
      <motion.div 
        style={{ y: yGlow1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-[2%] right-[15%] w-62.5 h-62.5 bg-[#3fd5d3]/20 rounded-full blur-2xl pointer-events-none"
      ></motion.div>
      
      {/* Bottom Left Subtle Glow (Animated Parallax) */}
      <motion.div 
        style={{ y: yGlow2 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-15%] left-[-5%] w-175 h-100 bg-[#3fd5d3]/10 rounded-full blur-2xl pointer-events-none"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-24 flex justify-center"
        >
          <h2 className="text-center font-serif text-[40px] md:text-[65px] lg:text-[75px] leading-[1.15] text-white uppercase tracking-wide">
            WHAT OUR CLIENTS<br />
            <motion.span 
              initial={{ color: "#ffffff", textShadow: "0px 0px 0px rgba(63,213,211,0)" }}
              whileInView={{ color: "#3fd5d3", textShadow: "0px 0px 20px rgba(63,213,211,0.5)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1 }}
              className="inline-block"
            >
              HAVE TO SAY
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.05, 
                y: -20, 
                rotateY: idx === 1 ? 0 : (idx === 0 ? 5 : -5),
                boxShadow: "0px 30px 60px rgba(63, 213, 211, 0.25)"
              }}
              viewport={{ once: false, amount: 0.2 }}
              key={idx}
              className={`bg-[#fcfcfc] flex flex-col shadow-2xl transition-colors duration-500 hover:bg-white cursor-pointer relative overflow-hidden group ${
                testimonial.isMiddle 
                  ? "py-24 px-10 md:py-28 z-10 relative" 
                  : "py-16 px-10"
              }`}
            >
              {/* Animated Inner Border on Hover */}
              <motion.div className="absolute inset-0 border-2 border-teal-400 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500 z-0"></motion.div>

              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center mb-10 bg-white mx-auto shadow-inner relative z-10"
              >
                {testimonial.logo}
              </motion.div>
              
              <p className="text-[#333] text-[13px] md:text-[14px] leading-[1.8] mb-12 grow text-left relative z-10 group-hover:text-black transition-colors duration-300">
                {testimonial.text}
              </p>
              
              <h4 className="text-[#111] font-bold text-[12px] md:text-[13px] tracking-widest uppercase mt-auto text-left whitespace-pre-line relative overflow-hidden z-10">
                <span className="relative z-10">{testimonial.author}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-teal-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.8 + idx * 0.2, duration: 0.8 }}
                  style={{ width: "100%" }}
                ></motion.span>
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
