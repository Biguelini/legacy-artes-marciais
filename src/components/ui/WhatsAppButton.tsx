"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim através da landing page e gostaria de agendar uma aula experimental grátis.");
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleWhatsAppClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-none shadow-2xl cursor-pointer hover:bg-[#20ba59] transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          aria-label="Iniciar conversa de agendamento no WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-none h-4.5 w-4.5 bg-red-600 border border-white text-[9px] text-white font-bold items-center justify-center font-space">1</span>
          </span>
          <MessageCircle size={26} fill="currentColor" className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
