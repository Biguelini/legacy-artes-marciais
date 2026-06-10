"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LucideIcon, MessageSquare, Calendar, Compass, TrendingUp } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Inicie no WhatsApp",
    description: "Clique em qualquer botão do site para iniciar um contato rápido. Sem burocracia, agendamos seu treino experimental gratuito em menos de 2 minutos.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Escolha Seu Dia e Hora",
    description: "Defina a melhor modalidade e o melhor horário para sua aula de teste. Não cobramos taxa de adesão ou qualquer compromisso prévio.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Conheça a Estrutura",
    description: "Compareça com uma roupa leve de treino. Nossa equipe lhe entregará o material de apoio e você sentirá a verdadeira energia do tatame Legacy.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Comece seu Legado",
    description: "Complete seu primeiro treino marcial, trace seus objetivos físicos de médio prazo com nossos instrutores e inicie sua transformação oficial.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="como-funciona" ref={containerRef} className="relative z-20 py-24 md:py-40 bg-surface overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/[0.02] filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            O caminho do início
          </span>
          <h2 className="font-syne font-extrabold text-text-primary section-title-clamp tracking-tighter mb-6 uppercase">
            COMO FUNCIONA O PROCESSO
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed">
            Simplificamos sua entrada na academia. Em 4 etapas simples você estará no tatame evoluindo conosco.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[3px] bg-white/10 -translate-x-1/2 z-0">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  <div className="absolute left-4 md:left-1/2 top-4 w-9 h-9 rounded-none bg-surface border-3 border-accent -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="w-3.5 h-3.5 rounded-none bg-accent"
                    />
                  </div>

                  <div className="hidden md:block w-1/2" />

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                      className="relative p-6 hover:bg-white/[0.01] rounded-none transition-colors duration-300 group"
                    >
                      <span className="font-space font-extrabold text-5xl text-white/5 absolute top-2 right-6 select-none leading-none">
                        {step.number}
                      </span>

                      <div className="mb-4 p-3 bg-white/5 text-accent rounded-none inline-block">
                        <Icon size={20} />
                      </div>

                      <h3 className="font-syne font-bold text-xl uppercase tracking-tight text-text-primary mb-3">
                        {step.title}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
