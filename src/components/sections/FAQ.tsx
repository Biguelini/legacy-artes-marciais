"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Preciso estar em forma ou ter feito artes marciais para começar?",
    answer: "Definitivamente não. 80% de nossos alunos iniciaram do zero absoluto. Nossa metodologia foi desenhada para receber pessoas comuns, muitas saindo de anos de sedentarismo absoluto. As aulas são adaptadas e você evoluirá gradativamente sob a supervisão atenta dos nossos instrutores de elite.",
  },
  {
    id: 2,
    question: "Como funciona a aula experimental gratuita?",
    answer: "É 100% gratuita e sem qualquer pegadinha ou obrigação de fechar contrato. O objetivo é que você viva a experiência real de treinar conosco, sinta o respeito do tatame e avalie a higiene e infraestrutura premium antes de qualquer investimento.",
  },
  {
    id: 3,
    question: "Meu filho pode treinar a partir de qual idade?",
    answer: "Oferecemos turmas específicas a partir de 5 anos completos. Os treinos infantis são desenhados por especialistas em desenvolvimento motor e pedagógico, focando em disciplina preventiva, cooperação e autodefesa anti-bullying.",
  },
  {
    id: 4,
    question: "Preciso de roupas específicas ou kimonos caros logo no início?",
    answer: "Não. Para a aula inaugural e primeiras semanas, você só precisa de uma bermuda ou calça de moletom e uma camiseta confortável. Nós emprestamos luvas ou kimonos higienizados para o seu teste. Nosso time orientará você sobre a compra de itens individuais somente após sua matrícula oficial.",
  },
  {
    id: 5,
    question: "Posso treinar mais de uma modalidade com o mesmo plano?",
    answer: "Sim! Nossos planos flexíveis permitem que você monte sua rotina mesclando artes de combate no chão (Jiu-Jitsu) e striking em pé (Muay Thai e Boxe), garantindo um condicionamento metabólico completo e diversificado.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative z-20 py-24 md:py-40 bg-background overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/[0.01] rounded-none filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-syne font-extrabold text-text-primary text-4xl sm:text-5xl tracking-tighter mb-6 uppercase">
              FAQ — RESPOSTAS <br />
              DIRETAS PARA <br />
              SUAS <span className="text-accent">DÚVIDAS.</span>
            </h2>
            <div className="w-12 h-[2px] bg-accent mb-6" />
            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-sm">
              Tem alguma dúvida sobre os treinos, vestimentas ou turmas? Se sua pergunta não estiver aqui, clique no botão e fale direto conosco.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="border-b border-white/10 py-6 last:border-none flex flex-col"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left cursor-pointer group focus-visible:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className="font-space font-extrabold text-base text-accent/50 group-hover:text-accent transition-colors duration-300">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 tracking-wide">
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-text-secondary group-hover:text-white transition-colors duration-300 shrink-0"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pl-8 pr-4 pb-2 pt-4 text-sm text-text-secondary leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
