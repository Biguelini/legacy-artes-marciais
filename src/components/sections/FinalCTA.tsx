"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function FinalCTA() {
  const handleWhatsAppClick = (messageText: string) => {
    const message = encodeURIComponent(messageText);
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <section className="relative z-20 py-32 md:py-48 bg-background overflow-hidden text-center flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/final_cta_bg.png"
          alt="Treinamento intenso Legacy"
          className="w-full h-full object-cover filter grayscale brightness-25 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black/80 to-background z-10" />
      </div>

      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-none bg-accent/10 border border-accent/20 text-accent font-space text-[10px] font-bold uppercase tracking-widest mb-8"
        >
          Primeiro passo grátis
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne font-extrabold text-text-primary hero-title-clamp tracking-tighter max-w-5xl mb-6 leading-none uppercase"
        >
          PARE DE ADIAR A SUA EVOLUÇÃO. <br className="hidden sm:inline" />
          O TATAME ESPERA <span className="text-accent">POR VOCÊ.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
        >
          O primeiro passo é gratuito e o risco é zero. Agende sua aula experimental em menos de 1 minuto e venha descobrir a força física e mental que você tem guardada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleWhatsAppClick("Olá! Gostaria de agendar uma aula experimental grátis.")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-5 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-accent/10 border border-accent"
          >
            <MessageSquare size={14} fill="currentColor" />
            <span>Quero Garantir Minha Aula Grátis</span>
          </button>

          <button
            onClick={() => handleWhatsAppClick("Olá! Gostaria de falar no WhatsApp com a recepção.")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/15 text-text-primary px-8 py-5 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Phone size={14} className="text-accent" />
            <span>Prefiro Tirar Dúvidas no WhatsApp</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
