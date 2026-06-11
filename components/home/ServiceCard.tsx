"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkHref?: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  linkHref = "#",
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      className="flex flex-col h-full transform-gpu bg-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5"
    >
      {/* Image Container */}
      <div className="w-full aspect-4/5 relative mb-8 shadow-2xl cursor-pointer group/img overflow-hidden transition-all duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-[0.96] hover:rounded-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover/img:bg-black/0 transition-colors duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] z-10" />
        {/* Premium Glass Sheen Effect */}
        <div className="absolute inset-0 translate-x-[-150%] group-hover/img:translate-x-[150%] transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 skew-x-12 pointer-events-none"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col grow px-6 pb-6">
        <h3 className="text-[#3b125b] font-serif text-3xl lg:text-4xl mb-4 tracking-wide uppercase transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#171717]/80 text-[15px] leading-[1.8] font-light mb-10 grow">
          {description}
        </p>

        {/* Button */}
        <MagneticButton href={linkHref} />
      </div>
    </motion.div>
  );
}

function MagneticButton({ href }: { href: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: any) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX * 0.3);
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={href} className="mt-auto inline-block relative z-10 w-fit">
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: mouseXSpring, y: mouseYSpring }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group/btn cursor-pointer relative flex items-center gap-3 px-8 py-4 bg-white text-[#171717] font-bold tracking-[0.2em] text-[11px] uppercase overflow-hidden border border-black/10 transition-shadow duration-500 hover:border-transparent hover:shadow-[0_15px_40px_rgba(30,139,140,0.3)] w-fit rounded-full"
      >
        <motion.span 
          animate={{ x: ["-100%", "200%"] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }} 
          className="absolute inset-0 w-full h-full bg-[#1e8b8c]/10 skew-x-[45deg] z-0"
        ></motion.span>
        <div className="absolute inset-0 bg-linear-to-r from-[#3b125b] to-[#1e8b8c] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0" />
        <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500">Learn More</span>
        <div className="relative z-10 w-8 h-8 rounded-full bg-[#171717]/5 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors duration-500">
          <ArrowRight size={16} strokeWidth={2} className="group-hover/btn:text-white transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:rotate-45" />
        </div>
      </motion.div>
    </Link>
  );
}
