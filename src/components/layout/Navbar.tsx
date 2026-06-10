"use client";

import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Modalidades", href: "#modalidades" },
  { name: "Estrutura", href: "#estrutura" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Professores", href: "#professores" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental grátis.");
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 bg-background border-b border-white/10 w-full transition-all duration-300">
        <div className="grid grid-cols-12 h-full w-full items-center">
          
          <div className="col-span-9 lg:col-span-2 h-full flex items-center px-6 md:px-10 lg:px-4 border-r border-white/10">
            <a
              href="#"
              className="flex items-center gap-2 font-syne font-extrabold text-xl lg:text-2xl tracking-wider text-text-primary focus-visible:outline focus-visible:outline-accent uppercase"
            >
              LEGACY<span className="text-accent">.</span>
            </a>
          </div>

          <div className="col-span-8 h-full hidden lg:flex items-center justify-center border-r border-white/10 px-4">
            <nav className="flex items-center gap-3 xl:gap-6 justify-center w-full h-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-space text-[10px] xl:text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors py-2 relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-2 h-full hidden lg:flex items-stretch">
            <button
              onClick={handleWhatsAppClick}
              className="h-full w-full flex items-center justify-center gap-3 bg-accent hover:bg-white hover:text-black text-white font-space text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
              aria-label="Falar com a recepção no WhatsApp"
            >
              <Phone size={12} />
              <span>Aula Grátis</span>
            </button>
          </div>

          <div className="col-span-3 h-full flex lg:hidden items-stretch border-l border-white/10">
            <button
              onClick={toggleMenu}
              className="h-full w-full flex items-center justify-center text-text-primary hover:text-accent transition-colors focus-visible:outline focus-visible:outline-accent cursor-pointer"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background flex lg:hidden"
          >
            <div className="grid grid-cols-12 w-full h-full">
              
              <div className="hidden md:flex col-span-5 h-full border-r border-white/10 flex-col justify-between p-12 bg-surface">
                <span className="font-syne font-extrabold text-2xl tracking-wider text-text-primary">
                  LEGACY<span className="text-accent">.</span>
                </span>
                
                <div className="font-syne font-black text-7xl text-white/[0.02] tracking-tighter leading-none select-none pointer-events-none rotate-270 origin-left translate-y-24 translate-x-4">
                  LEGADO
                </div>
                
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors text-[10px] font-space font-bold uppercase tracking-widest">
                    Instagram
                  </a>
                  <span className="w-1.5 h-1.5 bg-accent" />
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors text-[10px] font-space font-bold uppercase tracking-widest">
                    Youtube
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7 h-full flex flex-col justify-between p-8 md:p-12 relative bg-background">
                <div className="flex justify-between items-center">
                  <span className="md:hidden font-syne font-extrabold text-xl tracking-wider text-text-primary">
                    LEGACY<span className="text-accent">.</span>
                  </span>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-6 p-3 bg-white/5 hover:bg-accent border border-white/10 text-text-primary hover:text-white rounded-none transition-colors cursor-pointer"
                    aria-label="Fechar menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 md:gap-8 my-auto pt-16">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="font-syne font-bold text-2xl sm:text-3xl tracking-tight text-text-secondary hover:text-accent transition-colors flex items-baseline gap-4 uppercase"
                    >
                      <span className="font-space text-[10px] text-accent font-bold tracking-widest">0{idx + 1}</span>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleWhatsAppClick();
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white py-4 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border border-accent"
                  >
                    <Phone size={14} />
                    <span>Agendar Aula Grátis</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
