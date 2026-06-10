"use client";

import React from "react";
import { Dumbbell, Shield, Trophy, Activity } from "lucide-react";
import { motion } from "framer-motion";

const benefitsData = [
  {
    num: "01",
    icon: Dumbbell,
    title: "Condicionamento Físico de Elite",
    description: "Cansado de esteiras e treinos monótonos? Nossas aulas trabalham força, explosão, resistência e mobilidade de forma integrada. Queime até 800 calorias por treino superando seus limites físicos.",
  },
  {
    num: "02",
    icon: Activity,
    title: "Autoconfiança Blindada",
    description: "A insegurança e o estresse diário travam você? O tatame é o espelho da vida. A força mental e a postura firme que você desenvolve nos combates refletem diretamente no seu trabalho e relações.",
  },
  {
    num: "03",
    icon: Trophy,
    title: "Disciplina e Foco Inabaláveis",
    description: "Começa projetos e desiste na segunda semana? Motivação é passageira; disciplina é eterna. Construímos hábitos inabaláveis através do respeito e da consistência da rotina marcial.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Defesa Pessoal Efetiva",
    description: "O receio de não saber como reagir em uma emergência assombra você? Aprenda técnicas reais baseadas em situações urbanas. Desenvolva controle sob pressão para neutralizar ameaças com precisão.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative z-20 py-24 md:py-40 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-none bg-accent/[0.01] filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
              A Filosofia Legacy
            </span>
            <h2 className="font-syne font-extrabold text-text-primary text-4xl sm:text-5xl md:text-6xl leading-none tracking-tighter mb-8 uppercase">
              O IMPACTO DA <br />
              EVOLUÇÃO NO <br />
              <span className="text-accent">TATAME.</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-8" />
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-sm font-normal">
              Nossa metodologia de treinamento foi desenvolvida para construir o potencial completo do aluno, integrando mente forte, disciplina inabalável e condicionamento físico de elite.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {benefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pt-10 pb-10 border-b border-white/10 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 transition-colors duration-300 hover:border-accent/30"
                >
                  <div className="absolute top-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500 ease-out" />

                  <div className="flex items-center gap-4 sm:flex-col sm:items-start shrink-0">
                    <span className="font-space text-3xl sm:text-4xl text-stroke tracking-tighter font-extrabold group-hover:text-accent transition-colors duration-300">
                      {benefit.num}
                    </span>
                    <div className="p-2.5 rounded-none bg-white/5 text-text-secondary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="flex-grow text-left">
                    <h3 className="font-syne font-bold text-xl uppercase tracking-tight text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
