# Legacy Artes Marciais — Academia Premium de Lutas e Alta Performance

Este é o repositório oficial da landing page institucional da **Legacy Artes Marciais**, uma plataforma premium focada em alta performance física, mental e autodefesa. O projeto foi projetado com uma estética editorial, brutalista e cinematográfica de alto impacto, fugindo dos clichês de templates genéricos.

---

## 🎨 Conceito de Design & Direção de Arte

O design foi inspirado em referências de alto padrão mundial do mundo das lutas (BJJ Perth Hills e Krav Maga NYC), adotando as seguintes diretrizes:

*   **Grid e Estrutura Editorial:** Divisões modulares marcadas por bordas finas (`border-white/10`) e layouts assimétricos/colunares que lembram revistas impressas de luxo.
*   **Zero Border Radius (100% Reto):** Todos os elementos, botões, cards, avatares de depoimentos, inputs e até o botão flutuante do WhatsApp utilizam estritamente `rounded-none`.
*   **Tipografia Modular:**
    *   **Títulos:** `font-syne` (Syne) em caixa alta (uppercase), negrito pesado e tracking reduzido.
    *   **Badges, Contadores e Rótulos:** `font-space` (Space Grotesk) para um toque tecnológico e técnico de precisão.
    *   **Corpo de Texto:** `font-sans` (Inter) para leitura confortável e alta legibilidade.
*   **Paleta de Cores de Alto Contraste:** Fundo preto absoluto (`#050505`), superfícies em cinza-escuro (`#0D0D0D`) e o vermelho vibrante (`#E63946`) como cor de destaque (accent) para botões de conversão e elementos estratégicos.

---

## ⚡ Principais Funcionalidades & Seções

1.  **Navbar Brutalista:** Layout com grid flexível e linhas demarcadoras sólidas. Possui um botão de conversão (CTA) de altura completa na extremidade direita e um menu mobile de tela inteira dividido em duas colunas estilizadas.
2.  **Hero Impactante:** Frase marcante ("O tatame não mente. Forje seu legado."), foto de luta em tom vermelho duotone, detalhes verticais com contatos e um **Marquee Contínuo Infinito (efeito Ouroboros)** deslizando na base.
3.  **Contadores Animados (Stats):** Números interativos de impacto que sobem de forma animada até o valor final quando o usuário rola a tela.
4.  **Diferenciais e Metodologia (Benefits):** Cards estilizados com números sequenciais em contorno (stroke) e ícones personalizados.
5.  **Grade de Modalidades (Modalities):** Grid perfeitamente alinhada e quadrada apresentando Jiu-Jitsu, Muay Thai, Boxe e Karatê com os respectivos benefícios e botões individuais de conversão para o WhatsApp.
6.  **Infraestrutura Premium (Gallery):** Grade uniforme de fotos do espaço físico com visualização expandida (Lightbox interativo).
7.  **Processo de Onboarding (Timeline):** Linha do tempo interativa e animada com scroll-linked progress tracker.
8.  **Professores de Elite (Instructors):** Cards de professores em escala de cinza que ganham cor no hover, com painel expansível de conquistas e certificações.
9.  **Depoimentos de Alunos (Testimonials):** Carrossel interativo animado com histórias de transformação real de alunos da academia.
10. **Dúvidas Frequentes (FAQ):** Sistema de acordeão robusto e animado para sanar objeções de novos alunos.
11. **Localização Inteligente:** Bloco de dados práticos ao lado de um mapa do Google Maps estilizado em escala de cinza de alta legibilidade.
12. **WhatsApp Button:** Botão flutuante quadrado (`rounded-none`) com balão indicador de notificação piscante para atrair o clique.
13. **Rastreamento de Conversões (Analytics):** Rastreia visualizações de seções e cliques em CTAs enviando eventos integrados em tempo real para o GA4, Meta Pixel e Google Tag Manager.

---

## 🛠️ Stack Tecnológica

*   **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
*   **Compilador:** Turbopack (compilação e build ultrarrápidos)
*   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animações:** [Framer Motion 12](https://www.framer.com/motion/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Linter & Formatação:** ESLint e TypeScript strict-mode

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina (recomenda-se Node v18+).

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Biguelini/legacy-artes-marciais.git
    cd legacy-artes-marciais
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) para ver o projeto rodando.

5.  **Gere a build de produção:**
    ```bash
    npm run build
    npm run start
    ```

---

## 📄 Licença

Este projeto está sob a licença descrita no arquivo [LICENSE](./LICENSE).
