"use client";

import { motion } from "framer-motion";
const steps = [
  {
    icon: <img src="/images/service/images/first slide first img.png" className="w-16 h-16 mb-6 object-contain" alt="Contact" />,
    title: "CONTACT",
    description: "Reach out through our contact form or schedule a call so we can learn more about your goals."
  },
  {
    icon: <img src="/images/service/images/first slide 2 image.png" className="w-16 h-16 mb-6 object-contain" alt="Create" />,
    title: "CREATE",
    description: "We develop a custom strategy and creative assets tailored to your brand's vision."
  },
  {
    icon: <img src="/images/service/images/first slide img 3.png" className="w-16 h-16 mb-6 object-contain" alt="Launch" />,
    title: "LAUNCH",
    description: "Your project goes live with full support from our team—delivering results that make an impact."
  }
];

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className="w-full bg-[#fafafa] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-[#333] tracking-[0.2em] font-bold text-[13px] mb-4">OUR SERVICES</p>
          <h2 className="text-5xl md:text-7xl font-serif text-[#111] uppercase tracking-wider">
            <span className="italic font-light">HOW IT</span> WORKS
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Vertical dividers for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-black/80"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-black/80"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Premium Magnetic Hover Box */}
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, zIndex: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-[280px] aspect-square bg-[#0c1f44] flex flex-col items-center justify-center mb-10 shadow-lg group relative overflow-hidden cursor-pointer"
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 skew-x-12 pointer-events-none"></div>
                
                {step.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-[#111] tracking-wide mb-4 uppercase">{step.title}</h3>
              <p className="text-[#555] font-light leading-relaxed max-w-[280px]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
