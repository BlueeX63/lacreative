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
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: idx * 0.15,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  } as any;

  return (
    <section ref={sectionRef} className="w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Top Right Cyan Glow */}
      <div 
        className="absolute top-[5%] right-[15%] w-[250px] h-[250px] bg-[#3fd5d3]/25 rounded-full blur-[25px] pointer-events-none opacity-40"
      ></div>
      
      {/* Bottom Left Subtle Glow */}
      <div 
        className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[400px] bg-[#3fd5d3]/25 rounded-full blur-[70px] pointer-events-none opacity-30"
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex justify-center"
        >
          <h2 className="text-center font-serif text-[40px] md:text-[65px] lg:text-[75px] leading-[1.15] text-white uppercase tracking-wide">
            WHAT OUR CLIENTS<br />
            <motion.span 
              initial={{ color: "#ffffff", filter: "blur(5px)" }}
              whileInView={{ color: "#3fd5d3", filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              className="inline-block"
            >
              HAVE TO SAY
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }}
              viewport={{ once: false, amount: 0 }}
              key={idx}
              className={`flex flex-col relative overflow-hidden group rounded-md bg-[#111] border border-white/5 transition-all duration-700 hover:border-white/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer ${
                testimonial.isMiddle 
                  ? "py-20 px-8 md:py-24 z-10 relative md:scale-105 bg-[#141414]" 
                  : "py-16 px-8"
              }`}
            >
              {/* Sophisticated Sheen Hover Effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-0 skew-x-12 pointer-events-none"></div>

              <div 
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-10 bg-black/50 mx-auto relative z-10 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-inner"
              >
                {testimonial.logo}
              </div>
              
              <p className="text-zinc-400 font-light text-[14px] md:text-[15px] leading-relaxed mb-12 grow text-center relative z-10 group-hover:text-zinc-200 transition-colors duration-700">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto text-center relative z-10">
                <div className="h-px w-8 bg-white/10 mx-auto mb-6 group-hover:w-16 group-hover:bg-teal-500/50 transition-all duration-700 ease-out"></div>
                <h4 className="text-white/90 font-semibold text-[10px] md:text-[11px] tracking-[0.25em] uppercase whitespace-pre-line group-hover:text-white transition-colors duration-700">
                  {testimonial.author}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
