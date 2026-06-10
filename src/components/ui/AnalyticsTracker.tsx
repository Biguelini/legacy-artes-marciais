"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function AnalyticsTracker() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.gtag) {
        window.gtag = (...args: unknown[]) => {
          console.log("📊 [GA4 Event]:", ...args);
        };
      }
      if (!window.fbq) {
        window.fbq = (...args: unknown[]) => {
          console.log("🎯 [Meta Pixel Event]:", ...args);
        };
      }
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
    }

    const strategicSections = [
      "beneficios",
      "modalidades",
      "estrutura",
      "como-funciona",
      "professores",
      "depoimentos",
      "faq",
      "localizacao"
    ];

    const observedSections = new Set<string>();

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (!observedSections.has(id)) {
            observedSections.add(id);
            console.log(`📜 [Scroll Event]: Seção "${id}" visualizada.`);
            
            window.gtag?.("event", "section_view", {
              section_id: id,
            });

            window.dataLayer?.push({
              event: "custom_scroll_view",
              sectionName: id,
            });
          }
        }
      });
    }, observerOptions);

    strategicSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const buttonOrLink = target.closest("button, a");
      if (!buttonOrLink) return;

      const text = buttonOrLink.textContent?.trim() || "";
      const href = buttonOrLink.getAttribute("href") || "";
      const isWhatsApp = href.includes("whatsapp.com") || buttonOrLink.getAttribute("aria-label")?.toLowerCase().includes("whatsapp") || text.toLowerCase().includes("whatsapp");

      if (isWhatsApp) {
        console.log(`🟢 [WhatsApp Click]: "${text}"`);
        
        window.gtag?.("event", "conversion", {
          send_to: "AW-CONVERSION_ID",
          event_category: "Contact",
          event_label: "WhatsApp Lead",
        });

        window.fbq?.("track", "Contact", {
          content_name: "WhatsApp Click",
          value: 1.0,
          currency: "BRL",
        });

        window.dataLayer?.push({
          event: "whatsapp_conversion",
          buttonText: text,
        });
      } else {
        console.log(`🖱️ [CTA Click]: "${text}"`);
        
        window.gtag?.("event", "cta_click", {
          button_text: text,
        });

        window.dataLayer?.push({
          event: "cta_click",
          buttonText: text,
        });
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
      strategicSections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return null;
}
