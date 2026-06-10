"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  sub: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rodrigo Almeida",
    sub: "Aluno de Jiu-Jitsu há 2 anos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "Eu me sentia exausto, acima do peso e preso no ciclo vicioso de pagar mensalidades de musculação convencional para faltar 3 vezes por semana. Na Legacy, encontrei uma verdadeira comunidade. Não é apenas repetição de exercício mecânico: há uma metodologia de evolução passo a passo. Perdi 15kg em 4 meses, ganhei foco no meu trabalho e hoje o tatame é minha terapia diária indispensável.",
    rating: 5,
  },
  {
    id: 2,
    name: "Juliana Mendes",
    sub: "Mãe do Pedro (8 anos), aluno há 1 ano",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Meu filho passava quase 6 horas por dia jogando no tablet e estava se tornando disperso e impaciente. Minha maior preocupação era o bullying ou a falta de limites. Na Legacy, os professores ensinaram que força sem controle não tem valor. Em um ano de Karatê, ele se tornou uma criança segura, respeitosa e as notas na escola subiram muito. É um investimento real no caráter dele.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gustavo Santos",
    sub: "Competidor de Boxe há 3 anos",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    text: "Já treinei em várias academias que pareciam garagens sujas ou onde os alunos eram tratados apenas como números em uma catraca. A estrutura da Legacy é incomparável — tudo é limpo, o ringue é profissional e os professores têm nível de campeões internacionais. O treino de boxe aqui desafia meu corpo e minha mente a cada segundo. Sinto que evoluo tecnicamente de verdade em cada sparring.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section id="depoimentos" className="relative z-20 py-24 md:py-40 bg-surface overflow-hidden border-t border-white/5">
      <div className="absolute right-10 bottom-10 text-white/[0.01] pointer-events-none select-none">
        <Quote size={240} />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 text-left">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3 block">
              Comunidade Legacy
            </span>
            <h2 className="font-syne font-extrabold text-text-primary text-4xl sm:text-5xl tracking-tighter mb-6 uppercase">
              QUEM JÁ <br />
              TREINA APROVA <br />
              E <span className="text-accent">EVOLUI.</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-6" />
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-sm">
              Histórias reais de alunos que abandonaram velhos hábitos e construíram disciplina, saúde e autoconfiança de verdade em nosso tatame.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col relative min-h-[350px] justify-between">
            <div className="relative overflow-hidden w-full flex-grow flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full text-left relative flex flex-col pt-8"
                >
                  <span className="absolute -top-4 -left-4 font-serif text-[120px] text-accent/10 leading-none select-none pointer-events-none">
                    “
                  </span>

                  <div className="flex items-center gap-1 mb-6 text-yellow-500 relative z-10">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="text-text-primary text-lg sm:text-xl lg:text-2xl leading-relaxed font-light tracking-wide mb-8 italic relative z-10">
                    {active.text}
                  </blockquote>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5 w-full">
                    <img
                      src={active.image}
                      alt={active.name}
                      className="w-12 h-12 rounded-none object-cover border border-accent/20 shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-syne font-bold text-base text-text-primary tracking-tight leading-none mb-1.5 uppercase">
                        {active.name}
                      </h4>
                      <span className="font-space text-[10px] text-text-muted font-bold uppercase tracking-wider">
                        {active.sub}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-10 justify-start">
              <button
                onClick={handlePrev}
                className="p-3 rounded-none bg-white/5 border border-white/5 hover:bg-accent hover:border-accent hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-none transition-all duration-300 ${
                      idx === activeIndex ? "bg-accent w-5" : "bg-white/20"
                    }`}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-none bg-white/5 border border-white/5 hover:bg-accent hover:border-accent hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
