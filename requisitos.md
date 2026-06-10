# Requisitos do Projeto — Legacy Artes Marciais

## Informações Gerais

**Projeto:** Legacy Artes Marciais
**Tipo:** Landing Page Institucional de Alta Conversão
**Objetivo Principal:** Converter visitantes em leads qualificados através do WhatsApp para agendamento de aulas experimentais.

---

# Requisitos Funcionais

## RF-001 — Hero Section

A aplicação deve exibir uma seção principal contendo:

* Headline principal
* Subheadline
* CTA "Agendar Aula Experimental"
* CTA "Falar no WhatsApp"
* Vídeo em background
* Overlay escuro para contraste e legibilidade

---

## RF-002 — Navegação One Page

A aplicação deve possuir navegação contínua em uma única página.

---

## RF-003 — Integração com WhatsApp

A aplicação deve permitir abertura de conversa no WhatsApp através de:

* CTA principal do Hero
* CTA secundário
* Botões das modalidades
* CTA final
* Botão flutuante fixo

---

## RF-004 — Prova Social

A aplicação deve apresentar indicadores institucionais contendo:

* Quantidade de alunos treinados
* Anos de experiência
* Avaliação média
* Competidores formados

Os números devem possuir animação de contagem.

---

## RF-005 — Seção de Benefícios

A aplicação deve apresentar cards contendo:

* Ícone
* Título
* Descrição

Benefícios previstos:

* Condicionamento Físico
* Autoconfiança
* Disciplina
* Defesa Pessoal

---

## RF-006 — Modalidades

A aplicação deve exibir as modalidades disponíveis.

Cada modalidade deve conter:

* Imagem
* Nome
* Descrição resumida
* Benefícios
* CTA para matrícula

Modalidades iniciais:

* Jiu-Jitsu
* Muay Thai
* Boxe
* Karatê

---

## RF-007 — Interatividade dos Cards

Os cards de modalidades devem possuir:

* Hover animation
* Destaque visual ao foco
* Transições suaves

---

## RF-008 — Estrutura da Academia

A aplicação deve apresentar uma galeria contendo:

* Tatame
* Ringue
* Equipamentos
* Área de treino
* Vestiários
* Recepção

---

## RF-009 — Lightbox

Ao clicar em uma imagem da galeria, o usuário deve visualizar a imagem ampliada em modal.

---

## RF-010 — Seção "Como Funciona"

A aplicação deve exibir uma timeline contendo:

1. Contato via WhatsApp
2. Agendamento da aula experimental
3. Visita à academia
4. Início dos treinos

---

## RF-011 — Depoimentos

A aplicação deve apresentar um carrossel de depoimentos contendo:

* Foto do aluno
* Nome
* Tempo de treino
* Relato

---

## RF-012 — Professores

A aplicação deve exibir informações dos professores:

* Foto profissional
* Nome
* Graduação
* Certificações
* Conquistas relevantes

---

## RF-013 — FAQ

A aplicação deve disponibilizar uma seção de perguntas frequentes utilizando componente Accordion.

Perguntas mínimas:

* Preciso ter experiência?
* Posso fazer uma aula experimental?
* Existe turma infantil?
* Preciso comprar equipamentos?
* Qual a idade mínima?

---

## RF-014 — CTA Final

A aplicação deve apresentar uma seção final contendo:

* Headline de conversão
* Subheadline
* CTA para WhatsApp
* CTA para Aula Experimental

---

## RF-015 — Google Maps

A aplicação deve exibir a localização da academia através de integração com Google Maps.

---

## RF-016 — Rastreamento de Eventos

A aplicação deve registrar eventos de:

* Clique no WhatsApp
* Clique em CTAs
* Scroll em seções estratégicas
* Conversões

---

## RF-017 — Integração Analytics

A aplicação deve possuir integração com:

* Google Analytics 4
* Google Tag Manager
* Meta Pixel

---

# Requisitos Não Funcionais

## RNF-001 — Performance

A aplicação deve atingir:

* Lighthouse Performance ≥ 90
* Largest Contentful Paint (LCP) < 2,5s
* First Contentful Paint (FCP) < 1,8s

---

## RNF-002 — Responsividade

A aplicação deve ser totalmente responsiva para:

* Smartphones
* Tablets
* Notebooks
* Monitores Desktop
* Monitores Ultrawide

---

## RNF-003 — SEO

A aplicação deve implementar:

* Meta Title
* Meta Description
* Open Graph
* Sitemap
* Robots.txt
* Schema Markup Local Business

---

## RNF-004 — Acessibilidade

A aplicação deve seguir boas práticas WCAG:

* Contraste adequado
* Navegação por teclado
* Alt text em imagens
* Labels acessíveis

---

## RNF-005 — Animações

As animações devem manter desempenho fluido com taxa próxima de 60 FPS.

---

## RNF-006 — Compatibilidade

A aplicação deve ser compatível com:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## RNF-007 — Segurança

A aplicação deve:

* Utilizar HTTPS
* Não expor credenciais
* Seguir boas práticas de segurança para integrações externas

---

## RNF-008 — Escalabilidade

A estrutura do projeto deve permitir inclusão futura de:

* Novas modalidades
* Novos professores
* Novos depoimentos
* Novas unidades

Sem necessidade de refatoração estrutural significativa.

---

# Stack Tecnológica

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

## Deploy

* Vercel

## Integrações

* WhatsApp
* Google Maps
* Google Analytics 4
* Google Tag Manager
* Meta Pixel

---

# Requisitos de Experiência (UX)

## UX-001

A landing page deve transmitir sensação de evolução pessoal e transformação desde o primeiro scroll.

## UX-002

A navegação deve conduzir naturalmente o visitante até o contato via WhatsApp.

## UX-003

A identidade visual deve seguir o posicionamento:

* Premium
* Esportivo
* Cinematográfico

## UX-004

O usuário deve conseguir iniciar contato com a academia em no máximo dois cliques a partir de qualquer ponto da página.

## UX-005

A página deve reforçar constantemente os pilares da marca:

* Disciplina
* Evolução
* Comunidade
* Superação
* Resultados
