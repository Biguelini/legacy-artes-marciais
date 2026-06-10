"use client";

import React from "react";
import { Instagram, Youtube, Facebook, Mail, MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma aula experimental grátis.");
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-8 text-text-secondary">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        <div className="flex flex-col gap-5">
          <a href="#" className="font-syne font-extrabold text-2xl tracking-wider text-text-primary">
            LEGACY<span className="text-accent">.</span>
          </a>
          <p className="text-sm leading-relaxed text-text-secondary max-w-sm">
            Construindo disciplina, autoconfiança e transformação física através da essência das artes marciais. Faça parte da nossa comunidade.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10"
              aria-label="Inscreva-se no Youtube"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-white/5 hover:bg-accent hover:text-white transition-all duration-300 border border-white/10"
              aria-label="Curta nossa página no Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-syne font-extrabold text-sm uppercase tracking-tight text-text-primary">Navegação</h4>
          <nav className="flex flex-col gap-3 font-space text-xs">
            <a href="#" className="hover:text-white transition-colors py-1">Início</a>
            <a href="#beneficios" className="hover:text-white transition-colors py-1">Benefícios</a>
            <a href="#modalidades" className="hover:text-white transition-colors py-1">Modalidades</a>
            <a href="#estrutura" className="hover:text-white transition-colors py-1">Estrutura</a>
            <a href="#como-funciona" className="hover:text-white transition-colors py-1">Como Funciona</a>
          </nav>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-syne font-extrabold text-sm uppercase tracking-tight text-text-primary">Contato</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <a
                href="#localizacao"
                className="text-sm hover:text-white transition-colors leading-relaxed"
              >
                Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <button
                onClick={handleWhatsAppClick}
                className="text-sm hover:text-white transition-colors text-left"
              >
                (11) 99999-9999
              </button>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:contato@legacyartesmarciais.com.br" className="text-sm hover:text-white transition-colors">
                contato@legacyartesmarciais.com.br
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-syne font-extrabold text-sm uppercase tracking-tight text-text-primary">Horário de Funcionamento</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 text-sm">
              <Clock size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-text-primary">Segunda a Sexta</p>
                <p className="text-xs text-text-muted">06:00 às 22:00</p>
              </div>
            </li>
            <li className="flex gap-3 text-sm">
              <Clock size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-text-primary">Sábados</p>
                <p className="text-xs text-text-muted">08:00 às 13:00</p>
              </div>
            </li>
            <li className="flex gap-3 text-sm">
              <Clock size={18} className="text-accent/50 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-text-muted">Domingos e Feriados</p>
                <p className="text-xs text-text-muted">Fechado</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <div>
          <p>&copy; {new Date().getFullYear()} Legacy Artes Marciais. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 12.345.678/0001-90</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
