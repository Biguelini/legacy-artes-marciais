"use client";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationMap() {
  return (
    <section id="localizacao" className="relative z-20 py-24 md:py-40 bg-surface border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Venha nos visitar
          </span>
          <h2 className="font-syne font-extrabold text-text-primary section-title-clamp tracking-tighter mb-6 uppercase">
            NOSSA LOCALIZAÇÃO
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed">
            Localização privilegiada de fácil acesso no centro de São Paulo. Venha conhecer nosso espaço de perto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-4 bg-background/50 border border-white/5 rounded-none p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-syne font-extrabold text-xl text-text-primary tracking-tight mb-6 uppercase">
                Legacy Head Office
              </h3>
              
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-none bg-white/5 text-accent shrink-0 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1">
                      Endereço
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, CEP 01310-100
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-none bg-white/5 text-accent shrink-0 border border-white/10">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1">
                      Horários
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      Segunda a Sexta: 06h - 22h<br />
                      Sábados: 08h - 13h
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-none bg-white/5 text-accent shrink-0 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1">
                      Telefone / WhatsApp
                    </h4>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors leading-relaxed"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-text-primary py-3 px-6 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-colors border border-white/10"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 rounded-none overflow-hidden border border-white/5 min-h-[350px] lg:min-h-auto relative bg-surface">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1970228308316!2d-46.65219468502223!3d-23.561349684682025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.92) contrast(1.1) brightness(0.85)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa com localização da academia Legacy"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
