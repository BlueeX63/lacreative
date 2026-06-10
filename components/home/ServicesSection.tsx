"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Branding",
    description: "We craft cohesive brand identities that capture your vision and connect with your audience.",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Branding Service",
  },
  {
    title: "Graphic Design",
    description: "From logos to marketing materials, we design visuals that make your message impossible to ignore.",
    imageSrc: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Graphic Design Service",
  },
  {
    title: "Web Design",
    description: "We design modern, user-friendly websites that blend creativity with performance.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Web Design Service",
  },
  {
    title: "Photography",
    description: "We produce high-quality content that tells your story, sparks emotion, and drives engagement.",
    imageSrc: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Photography Service",
  },
  {
    title: "Videography",
    description: "We produce high-quality content that tells your story, sparks emotion, and drives engagement.",
    imageSrc: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Videography Service",
  },
  {
    title: "Email & Social Media Marketing",
    description: "We create campaigns that spark conversations, build loyalty, and keep your audience engaged.",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Email & Social Media Marketing Service",
  },
];

const seoService = {
  title: "SEO",
  description: "We boost your visibility with strategies that improve rankings, drive traffic, and connect you with the right audience.",
  imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  imageAlt: "SEO Service",
};

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Decorative blurred spots */}
      <div className="absolute top-[10%] left-[-10%] w-125 h-125 bg-purple-200/50 rounded-full blur-2xl pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-150 h-150 bg-teal-100/50 rounded-full blur-2xl pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 perspective-[1000px]">
          <motion.div 
            initial={{ opacity: 0, rotateX: -45, y: 50 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="lg:w-1/2 transform-gpu"
          >
            <h2 className="text-[#3b125b] font-serif text-[50px] md:text-[70px] lg:text-[90px] leading-[0.9] tracking-tight uppercase drop-shadow-lg">
              WHAT WE<br />
              <motion.span 
                animate={{ color: ["#3b125b", "#248991", "#3b125b"] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block"
              >
                HAVE <span className="lowercase italic font-serif">to</span> OFFER
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="lg:w-1/2 lg:pl-12"
          >
            <p className="text-[#171717] font-semibold text-[15px] md:text-[17px] leading-[1.8]">
              From eye-catching design to strategic marketing, we bring together the tools your brand needs to shine. Our services are built to spark engagement, drive growth, and make your business unforgettable.
            </p>
          </motion.div>
        </div>

        {/* First Grid (6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-20 perspective-[2000px]">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              {...service}
              delay={idx * 0.15}
            />
          ))}
        </div>

        {/* Centered SEO Section */}
        <div className="flex justify-center mt-32 perspective-[2000px]">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <ServiceCard 
              {...seoService}
              delay={0.2}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
