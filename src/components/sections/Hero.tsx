"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Instagram, Youtube, Facebook, MapPin } from "lucide-react";

export default function Hero() {
  const handleWhatsAppClick = (messageText: string) => {
    const message = encodeURIComponent(messageText);
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-20 lg:pt-24 lg:pb-16">
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="absolute inset-4 sm:inset-6 border border-white/10 pointer-events-none z-30" />

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 items-center z-30 font-space text-[10px] font-bold tracking-[0.3em] text-text-muted rotate-90 origin-right whitespace-nowrap pointer-events-none uppercase">
        <span>CONTATO@LEGACYARTESMARCIAIS.COM.BR</span>
        <span className="w-1.5 h-1.5 bg-accent" />
        <span>+55 (11) 99999-9999</span>
      </div>

      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
          <div className="relative w-full">
            <div className="absolute -top-16 left-0 font-syne font-extrabold text-[12vw] text-white/[0.01] select-none pointer-events-none z-0 tracking-widest leading-none">
              LEGACY
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] xl:text-[4.6rem] text-text-primary tracking-tighter leading-[0.9] mb-4 relative z-10 uppercase"
            >
              O TATAME <br />
              NÃO MENTE.<br />
              FORJE SEU <br />
              <span className="text-stroke hover:text-accent transition-all duration-300">LEGADO</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-text-secondary font-space text-sm sm:text-base leading-relaxed max-w-lg mb-5 relative z-10"
          >
            Esqueça as desculpas e a monotonia das academias convencionais. Oferecemos treinos intensos, professores de elite e uma comunidade focada em alta performance física e mental. Do zero ao avançado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto relative z-10"
          >
            <button
              onClick={() => handleWhatsAppClick("Olá! Quero agendar minha aula experimental gratuita na Legacy.")}
              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-5 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-accent/10 border border-accent"
            >
              <span>Quero Treinar Grátis</span>
              <ChevronRight size={14} />
            </button>

            <button
              onClick={() => handleWhatsAppClick("Olá! Tenho dúvidas sobre os horários e gostaria de mais informações.")}
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 border border-white/15 text-text-primary px-8 py-5 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Phone size={14} className="text-accent" />
              <span>Falar no WhatsApp</span>
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[400px] xl:h-[440px] flex items-center justify-center z-20 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full h-full rounded-none overflow-hidden border border-white/10 shadow-2xl z-10 group/hero-img"
          >
            <div className="absolute top-8 left-8 font-syne font-extrabold text-7xl text-white/5 select-none pointer-events-none z-10 tracking-widest">
              LEGACY
            </div>

            <img
              src="/hero_bjj_grappling.png"
              alt="Treinamento de Jiu-Jitsu de alta intensidade na Legacy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/hero-img:scale-105 filter brightness-90 contrast-125"
            />

            <div className="absolute inset-0 bg-accent/25 mix-blend-color z-10 pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent z-20 pointer-events-none" />

            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-none bg-black/90 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest font-space">
              <MapPin size={10} className="text-accent" />
              <span>Av. Paulista, 1000 - SP</span>
            </div>

          </motion.div>
        </div>

      </div>

      <div className="absolute left-8 bottom-16 hidden xl:flex items-center gap-4 font-space text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted rotate-90 origin-left">
        <div className="w-8 h-[1px] bg-accent" />
        <span>Role para baixo</span>
      </div>

      <div className="absolute right-8 bottom-16 hidden xl:flex items-center gap-4 z-30">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors p-2"
          aria-label="Instagram"
        >
          <Instagram size={14} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors p-2"
          aria-label="Youtube"
        >
          <Youtube size={14} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors p-2"
          aria-label="Facebook"
        >
          <Facebook size={14} />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-3.5 bg-accent text-white overflow-hidden border-t border-accent-hover z-20 font-space text-[9px] font-black tracking-[0.2em] uppercase select-none pointer-events-none">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          <div className="flex shrink-0 items-center">
            {Array(4).fill(["JIU-JITSU", "MUAY THAI", "BOXE", "KARATÊ", "DEFESA PESSOAL", "ALTA PERFORMANCE"]).flat().map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="mx-6">{item}</span>
                <span className="w-1.5 h-1.5 bg-white shrink-0" />
              </React.Fragment>
            ))}
          </div>
          <div className="flex shrink-0 items-center">
            {Array(4).fill(["JIU-JITSU", "MUAY THAI", "BOXE", "KARATÊ", "DEFESA PESSOAL", "ALTA PERFORMANCE"]).flat().map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="mx-6">{item}</span>
                <span className="w-1.5 h-1.5 bg-white shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
