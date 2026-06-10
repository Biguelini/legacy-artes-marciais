"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, Star, Plus, Minus } from "lucide-react";

interface Instructor {
  id: number;
  name: string;
  role: string;
  image: string;
  graduation: string;
  certifications: string[];
  achievements: string[];
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Mestre Carlos 'Legacy' Silva",
    role: "Jiu-Jitsu & Judô",
    image: "/instructor_carlos.png",
    graduation: "Faixa Preta 4º Grau (IBJJF)",
    certifications: ["Licenciado em Ed. Física", "Pós-Graduado em Fisiologia", "Membro Oficial CBJJ/IBJJF"],
    achievements: ["3x Campeão Brasileiro", "Medalhista de Bronze no Mundial", "+20 anos de tatame"],
  },
  {
    id: 2,
    name: "Treinador Marcos 'The Cobra' Santos",
    role: "Muay Thai & Boxe",
    image: "/instructor_marcos.png",
    graduation: "Grau Preto de Muay Thai / Técnico de Boxe",
    certifications: ["Formação Lanna Muay Thai (Tailândia)", "Credenciado pela CBMT", "Preparador de Atletas Pro"],
    achievements: ["Ex-campeão Sul-Americano", "Técnico de Sparring de UFC", "+12 anos em combates"],
  },
  {
    id: 3,
    name: "Sensei Sayuri Suzuki",
    role: "Karatê Kids & Adulto",
    image: "/instructor_sayuri.png",
    graduation: "Faixa Preta 3º Dan (JKA)",
    certifications: ["Especialista em Desenvolvimento Infantil", "Membro da Japan Karate Association", "Licenciada em Ed. Física"],
    achievements: ["Bicampeã Pan-Americana Kata", "15 anos de disciplina oriental", "Formadora de campeões juvenis"],
  },
];

export default function Instructors() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="professores" className="relative z-20 py-24 md:py-40 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/[0.01] rounded-none filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Liderança Técnica
          </span>
          <h2 className="font-syne font-extrabold text-text-primary section-title-clamp tracking-tighter mb-6 uppercase">
            NOSSOS INSTRUTORES
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed">
            Treine com profissionais altamente titulados, certificados internacionalmente e dedicados à sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {instructors.map((instructor, index) => {
            const isExpanded = expandedId === instructor.id;

            return (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative h-[480px] rounded-none overflow-hidden shadow-2xl border border-white/5 bg-surface cursor-pointer"
                onClick={() => toggleExpand(instructor.id)}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale contrast-115 brightness-50 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-60"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent z-10" />
                </div>

                <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-accent text-[9px] text-white font-space font-bold uppercase tracking-widest">
                    <Star size={10} fill="currentColor" />
                    {instructor.graduation}
                  </span>
                  
                  <div className="p-2 rounded-none bg-black/60 backdrop-blur-md text-white border border-white/10 group-hover:bg-accent group-hover:border-accent transition-colors duration-300 pointer-events-auto">
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <h3 className="font-syne font-extrabold text-2xl text-text-primary tracking-tight leading-none mb-2 group-hover:text-accent transition-colors duration-300 uppercase">
                    {instructor.name}
                  </h3>
                  <p className="font-space text-[10px] text-text-secondary font-bold uppercase tracking-widest">
                    {instructor.role}
                  </p>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 30, stiffness: 200 }}
                      className="absolute inset-0 z-30 bg-[#0D0D0D]/95 backdrop-blur-md p-8 flex flex-col justify-end text-left border-t border-white/5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => toggleExpand(instructor.id)}
                        className="absolute top-6 right-6 p-2 rounded-none bg-white/5 border border-white/10 text-text-secondary hover:text-white"
                        aria-label="Fechar detalhes"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="font-space text-[9px] text-accent font-bold uppercase tracking-widest mb-1.5 block">
                        {instructor.role}
                      </span>
                      <h4 className="font-syne font-extrabold text-xl text-text-primary tracking-tight mb-6 uppercase">
                        {instructor.name}
                      </h4>

                      <div className="border-t border-white/5 pt-4 mb-4">
                        <h5 className="font-space text-[9px] font-bold text-accent uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Award size={10} />
                          Principais Conquistas
                        </h5>
                        <ul className="flex flex-col gap-1.5">
                          {instructor.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t border-white/5 pt-4">
                        <h5 className="font-space text-[9px] font-bold text-accent uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <ShieldCheck size={10} />
                          Formação & Credencial
                        </h5>
                        <ul className="flex flex-col gap-1.5">
                          {instructor.certifications.map((cert, cIdx) => (
                            <li key={cIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-none bg-white/20 shrink-0 mt-1.5" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
