"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield } from "lucide-react";

const modalities = [
  {
    id: "jiu-jitsu",
    name: "Jiu-Jitsu",
    image: "/modality_jiu_jitsu.png",
    description: "A arte suave. Use alavancas, chaves e técnica para dominar adversários muito maiores e mais fortes. O xadrez humano focado em controle e autodefesa absoluta.",
    benefits: ["Foco e controle sob pressão", "Autodefesa realista", "Condicionamento integral"],
    actionText: "Quero Dominar o Jiu-Jitsu",
  },
  {
    id: "muay-thai",
    name: "Muay Thai",
    image: "/modality_muay_thai.png",
    description: "A arte tailandesa das oito armas. Ataques brutais com punhos, cotovelos, joelhos e canelas em treinos de ritmo acelerado que trituram gordura.",
    benefits: ["Queima calórica acelerada", "Melhora dos reflexos", "Definição muscular de pernas/core"],
    actionText: "Quero Queimar Calorias no Muay Thai",
  },
  {
    id: "boxe",
    name: "Boxe",
    image: "/modality_boxing.png",
    description: "A nobre arte do striking. Domine esquivas cirúrgicas, movimentação de pernas e golpes explosivos. Melhore seus reflexos e resistência cardiovascular.",
    benefits: ["Agilidade de tronco", "Definição de ombros/braços", "Resistência de alta intensidade"],
    actionText: "Quero Aprender a Boxear",
  },
  {
    id: "karate",
    name: "Karatê",
    image: "/modality_karate.png",
    description: "Disciplina oriental clássica focada em autodomínio. Aprenda golpes precisos com controle corporal total, respeito e uma metodologia tradicional.",
    benefits: ["Rigor físico e mental", "Concentração e foco escolar", "Postura e equilíbrio corporal"],
    actionText: "Quero Iniciar no Karatê",
  },
];

export default function Modalities() {
  const handleRegisterClick = (modalidade: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre o plano e horários da turma de ${modalidade}.`);
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, "_blank");
  };

  return (
    <section id="modalidades" className="relative z-20 py-24 md:py-40 bg-surface overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Escolha seu caminho
          </span>
          <h2 className="font-syne font-extrabold text-text-primary section-title-clamp tracking-tighter mb-6 uppercase">
            NOSSAS MODALIDADES
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed">
            Metodologias adaptadas do nível iniciante ao competidor profissional. Escolha a sua disciplina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {modalities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative rounded-none overflow-hidden shadow-2xl cursor-pointer border border-white/5 h-[380px] sm:h-[450px] lg:h-[480px] w-full"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 text-left">
                <h3 className="font-syne font-extrabold text-3xl text-text-primary tracking-tight mb-3 group-hover:text-accent transition-colors duration-300 uppercase">
                  {item.name}
                </h3>

                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-md mb-4 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {item.benefits.map((benefit, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white/5 border border-white/5 font-space text-[9px] font-bold uppercase tracking-widest text-text-secondary"
                    >
                      <Shield size={10} className="text-accent shrink-0" />
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="overflow-hidden">
                  <button
                    onClick={() => handleRegisterClick(item.name)}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-none font-space text-xs font-bold uppercase tracking-widest transition-all duration-300 transform group-hover:translate-x-1"
                    aria-label={`Inscrever-se na modalidade ${item.name}`}
                  >
                    <span>{item.actionText}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
