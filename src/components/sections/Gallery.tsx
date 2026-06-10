"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Tatame Premium",
    category: "Área de Chão",
    image: "/gallery_tatame.png",
    description: "Tatames olímpicos com revestimento higiênico e máxima absorção de impacto, ideais para a prática de Jiu-Jitsu e Karatê.",
  },
  {
    id: 2,
    title: "Ringue Profissional",
    category: "Área de Combate",
    image: "/gallery_boxing_ring.png",
    description: "Ringue suspenso de dimensões oficiais para treinos de Boxe e Muay Thai, estruturado para sparrings seguros.",
  },
  {
    id: 3,
    title: "Equipamentos de Ponta",
    category: "Material de Apoio",
    image: "/gallery_equipamentos.png",
    description: "Sacos de pancada de couro legítimo de pesos variados, aparadores importados e suportes de alta resistência.",
  },
  {
    id: 4,
    title: "Área Funcional e Cross",
    category: "Condicionamento",
    image: "/gallery_funcional.png",
    description: "Espaço complementar com kettlebells, cordas navais e racks de agachamento voltados para a preparação física do lutador.",
  },
  {
    id: 5,
    title: "Vestiários Premium",
    category: "Conforto",
    image: "/gallery_locker_room.png",
    description: "Estrutura premium de vestiários equipada com duchas aquecidas, armários individuais e higienização antibacteriana constante.",
  },
  {
    id: 6,
    title: "Recepção e Lounge",
    category: "Comunidade",
    image: "/gallery_reception_lounge.png",
    description: "Ambiente climatizado projetado para receber visitantes, fechar matrículas e integrar a comunidade fora do horário de treino.",
  },
];

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="estrutura" className="relative z-20 py-24 md:py-40 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-none bg-accent/[0.01] filter blur-[200px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            Onde a evolução acontece
          </span>
          <h2 className="font-syne font-extrabold text-text-primary section-title-clamp tracking-tighter mb-6 uppercase">
            NOSSA INFRAESTRUTURA
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed">
            Uma estrutura premium, segura, limpa e climatizada para apoiar sua jornada de evolução máxima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="group relative rounded-none overflow-hidden cursor-pointer border border-white/5 aspect-square w-full"
              onClick={() => setActiveItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10">
                <div className="p-3 bg-accent text-white rounded-none mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={20} />
                </div>
                <span className="font-space text-xs font-bold uppercase tracking-widest text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Ampliar Estrutura
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-20">
                <span className="font-space text-[9px] text-accent font-bold uppercase tracking-widest mb-1.5 block">
                  {item.category}
                </span>
                <h3 className="font-syne font-bold text-lg text-text-primary tracking-tight uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveItem(null)}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 text-white hover:text-accent p-2.5 z-55 bg-white/5 rounded-none transition-colors cursor-pointer border border-white/10"
              aria-label="Fechar galeria"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full bg-surface border border-white/5 rounded-none overflow-hidden flex flex-col z-50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 bg-surface">
                <span className="font-space text-xs text-accent font-bold uppercase tracking-widest mb-2 block">
                  {activeItem.category}
                </span>
                <h4 className="font-syne font-extrabold text-2xl md:text-3xl text-text-primary tracking-tight mb-3 uppercase">
                  {activeItem.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed font-normal">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
