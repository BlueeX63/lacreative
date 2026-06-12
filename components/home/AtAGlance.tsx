"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const images = [
  { src: "/images/home/images/second page.png", alt: "New Orleans Superdome", style: { objectPosition: "left" } },
  { src: "/images/home/images/second slide middle image.png", alt: "Laken Alexandra", style: { objectPosition: "center" } },
  { src: "/images/home/images/second page.png", alt: "French Quarter Balcony", style: { objectPosition: "right" } },
];

export default function AtAGlance() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transforms = [
    mobile ? 0 : y1, 
    mobile ? 0 : y2, 
    mobile ? 0 : y3
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden perspective-[1500px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8 relative">
          
          <div className="lg:absolute lg:z-10 lg:mt-8 lg:-ml-8 xl:-ml-16 mb-6 lg:mb-0 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, x: -100, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="text-[#3b125b] font-serif text-[50px] sm:text-[70px] lg:text-[100px] leading-[0.9] tracking-tight uppercase drop-shadow-2xl"
            >
              AT A<br />
              <motion.span 
                animate={{ color: ["#3b125b", "#248991", "#3b125b"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                GLANCE
              </motion.span>
            </motion.h2>
          </div>

          {/* Images Grid */}
          <div className="w-full flex flex-col md:flex-row gap-6 lg:gap-8 relative z-0 mt-8 lg:mt-0 lg:ml-32 xl:ml-40">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, delay: idx * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 0.95, 
                  rotateZ: idx === 1 ? -1 : 1, 
                  y: -5,
                  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
                }}
                className={`group cursor-pointer relative w-full overflow-hidden shadow-2xl transition-shadow duration-700 hover:shadow-[0_30px_60px_rgba(36,137,145,0.3)] ${
                  idx === 1 ? "md:w-[40%] z-10" : "md:w-[25%]"
                }`}
                style={{ aspectRatio: idx === 1 ? "379 / 571" : "260 / 571" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 ease-out z-10 pointer-events-none"
                ></motion.div>
                
                {/* Premium Glass Sheen Effect */}
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 skew-x-12 pointer-events-none"></div>

                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={img.style}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text and Button Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="max-w-4xl mx-auto mt-32 text-center flex flex-col items-center relative"
        >
          <div className="absolute inset-0 bg-teal-500/5 blur-[80px] -z-10"></div>
          <p className="text-[#171717] text-[15px] md:text-[17px] leading-[1.8] font-light">
            L.A. Creative Marketing is a digital marketing agency established by entrepreneur, business
            strategist, and proud New Orleans resident Laken Alexandra. The brand is a pinnacle of Laken&apos;s experience in vast industries ranging
            from beauty, fashion, software development, retail, property management, and more. The brand is more than a business venture, it&apos;s a
            passion to help others transform dreams into reality through effective data-driven content strategies that promote growth.
          </p>

          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-12"
          >
            <button className="cursor-pointer group relative flex items-center gap-4 px-8 py-4 rounded-full bg-white text-[#171717] font-bold tracking-[0.2em] text-[12px] uppercase overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-black/5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,139,140,0.4)] hover:-translate-y-2">
              <motion.span 
                animate={{ x: ["-100%", "200%"] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }} 
                className="absolute inset-0 w-full h-full bg-teal-500/10 skew-x-45 z-0"
              ></motion.span>
              <div className="absolute inset-0 bg-linear-to-r from-[#3b125b] to-[#1e8b8c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 group-hover:tracking-[0.25em]">Meet The Team</span>
              <ArrowRight size={18} strokeWidth={2} className="relative z-10 group-hover:text-white transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-45" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
