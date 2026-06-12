"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const images = [
  "/images/home/images/IMG_0515 1.png",
  "/images/home/images/Group 175.png",
  "/images/home/images/fifth slide third image.png",
  "/images/home/images/IMG_0252 1.png",
  "/images/home/images/fifth slide fifth img.png",
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

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden perspective-distant">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">

        {/* Top Images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "50px" }}
          className="flex flex-wrap gap-4 md:gap-8 justify-center mb-16"
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              className="shrink-0 z-10 hover:z-50"
            >
              <div
                className={`w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border-2 border-[#111] overflow-hidden shadow-xl cursor-pointer relative group transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${idx % 2 === 0 ? 'hover:rotate-6 hover:z-50' : 'hover:-rotate-6 hover:z-50'}`}
              >
                <img
                  src={src}
                  alt="Agency showcase"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-125"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.div
          style={{ y: mobile ? 0 : textY, rotateX }}
          className="transform-gpu"
        >
          <motion.h2
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.8 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: false, margin: "50px" }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            className="text-center font-serif text-[26px] md:text-[38px] lg:text-[44px] leading-[1.2] uppercase text-black max-w-5xl mb-20"
          >
            Voted top digital marketing agency <br />
            scaling <motion.span className="font-bold inline-block transition-colors duration-300">contractors, brokers,</motion.span> <br />
            <span className="font-bold">property management, retail, and boat</span> <br />
            <span className="font-bold">tours companies across the nation</span>
          </motion.h2>
        </motion.div>

        {/* Map */}
        <motion.div
          style={{ y: mobile ? 0 : mapY }}
          className="w-full mb-24 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateZ: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            whileHover={{ scale: 1.05, rotateZ: 2, filter: "drop-shadow(0px 30px 40px rgba(13, 148, 136, 0.4))" }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 1.2, type: "spring", stiffness: 40 }}
            className="relative cursor-pointer group drop-shadow-2xl w-full max-w-3xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-teal-400/30 blur-[100px] rounded-full -z-10"
            ></motion.div>
            <img src="/images/home/images/fifthe slide map img.png" alt="Map of USA highlighting nationwide clients" className="w-full h-auto object-contain transition-transform duration-700" />
          </motion.div>
        </motion.div>

        {/* Logo at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          className="flex items-center justify-center"
        >
          <img src="/images/home/images/fifth slide logo.png" alt="LA Creative Marketing Logo" className="h-16 md:h-20 lg:h-24 w-auto object-contain" />
        </motion.div>
      </div>
    </section>
  );
}