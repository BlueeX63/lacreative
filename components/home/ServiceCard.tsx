"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      whileHover={{ y: -15, scale: 1.02 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
      className="flex flex-col h-full group/card cursor-pointer transform-gpu"
    >
      {/* Image Container */}
      <div className="w-full aspect-4/5 overflow-hidden relative mb-8 shadow-2xl rounded-sm">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-1000 group-hover/card:scale-110"
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/40 transition-colors duration-500 z-10" />
        
        {/* Hover reveal text in image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20 translate-y-4 group-hover/card:translate-y-0">
          <span className="text-white font-bold tracking-[0.3em] uppercase text-sm border border-white/50 px-6 py-3 backdrop-blur-sm">View Details</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col grow px-2">
        <h3 className="text-[#3b125b] font-serif text-3xl lg:text-4xl mb-4 tracking-wide uppercase group-hover/card:text-[#248991] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#171717]/80 text-[15px] leading-[1.8] font-light mb-10 grow">
          {description}
        </p>

        {/* Button */}
        <Link href={linkHref} className="mt-auto inline-block relative">
          <div className="group/btn relative flex items-center gap-3 px-8 py-4 bg-white text-[#171717] font-bold tracking-[0.2em] text-[11px] uppercase overflow-hidden border border-black/10 transition-all duration-500 hover:border-transparent hover:shadow-[0_15px_40px_rgba(30,139,140,0.3)] hover:-translate-y-1 w-fit">
            <motion.span 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }} 
              className="absolute inset-0 w-full h-full bg-[#1e8b8c]/10 skew-x-45 z-0"
            ></motion.span>
            <div className="absolute inset-0 bg-linear-to-r from-[#3b125b] to-[#1e8b8c] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 z-0" />
            <span className="relative z-10 group-hover/btn:text-white transition-colors duration-500 group-hover/btn:tracking-[0.25em]">Learn More</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-[#171717]/5 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors duration-500">
              <ArrowRight size={16} strokeWidth={2} className="group-hover/btn:text-white transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:rotate-45" />
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
