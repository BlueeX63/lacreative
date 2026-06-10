"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LEFT_LINKS = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "WORK", href: "/work" },
  { name: "CAREERS", href: "/careers" },
];

const RIGHT_LINKS = [
  { name: "LOYALTY PROGRAM", href: "/loyalty-program" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "CONTACT US", href: "/contact-us" },
  { name: "BLOG", href: "/blog" },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  const mobileLinkVars = {
    initial: { y: "30vh", opacity: 0, transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as [number, number, number, number] } },
    open: { y: 0, opacity: 1, transition: { ease: [0, 0.55, 0.45, 1] as [number, number, number, number], duration: 0.7 } },
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="absolute top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="w-full px-8 lg:px-16 xl:px-24 h-[90px] flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {LEFT_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-purple-600 ${
                pathname === link.href ? "text-purple-600" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center">
          <div className="w-[90px] h-[90px] bg-gradient-to-br from-[#41196E] via-[#6533A8] to-[#12797e] flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-black italic tracking-tighter">LA</span>
          </div>
        </Link>

        {/* Right Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {RIGHT_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-purple-600 ${
                pathname === link.href ? "text-purple-600" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-black p-2 relative z-[60]"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} className="text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Full Screen Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black z-40 origin-top flex flex-col justify-center px-8"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col space-y-6"
            >
              {ALL_LINKS.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`text-4xl sm:text-5xl font-bold uppercase tracking-widest transition-colors ${
                        pathname === link.href ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400" : "text-white hover:text-purple-400"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-8 right-8 flex justify-between items-center text-white/50 text-[10px] tracking-widest uppercase"
            >
              <span>LA Creative Marketing</span>
              <span>© {new Date().getFullYear()}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
