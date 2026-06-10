# STYLE GUIDE — LEGACY ARTES MARCIAIS

## Versão

1.0

---

# Conceito da Marca

Legacy não é apenas uma academia.

É uma comunidade construída sobre:

* Disciplina
* Evolução
* Respeito
* Superação
* Legado

O usuário deve sentir que está entrando em um ambiente de atletas e pessoas comprometidas com crescimento pessoal.

---

# Direção Visual

## Personalidade

### 1. Cinematográfica

Grandes imagens.

Alto contraste.

Momentos de impacto.

---

### 2. Premium

Visual limpo.

Poucos elementos.

Muito espaço respirando.

---

### 3. Intensa

Tipografia forte.

Fotos dramáticas.

Motion agressivo porém elegante.

---

### 4. Humana

Mostrar pessoas reais.

Alunos reais.

Professores reais.

Resultados reais.

---

# Moodboard

## Referências Principais

### Legion 13

Inspirar-se em:

* Hero fullscreen
* Tipografia gigante
* Preto dominante
* Fotos em alta escala

---

### Mischka Agency

Inspirar-se em:

* Grid moderno
* Layout editorial
* Espaçamentos generosos
* Motion refinado

---

### Krav Maga Academy

Inspirar-se em:

* Energia esportiva
* Contraste visual
* Imagens de ação
* Sensação de autoridade

---

# Paleta de Cores

## Base

```css
--background: #050505;
--surface: #0D0D0D;
--surface-light: #141414;
```

---

## Texto

```css
--text-primary: #FFFFFF;
--text-secondary: #B3B3B3;
--text-muted: #737373;
```

---

## Destaque

```css
--accent: #E63946;
--accent-hover: #FF4A58;
```

---

## Bordas

```css
--border: rgba(255,255,255,0.08);
```

---

# Tipografia

## Headings

Fonte:

```txt
Bebas Neue
```

Fallback:

```txt
Oswald
```

Características:

* Uppercase
* Tracking levemente reduzido
* Peso visual dominante

---

## Escala

### Hero

```css
font-size: clamp(5rem, 12vw, 12rem);
line-height: 0.9;
```

---

### Seções

```css
font-size: clamp(3rem, 6vw, 6rem);
```

---

### Cards

```css
font-size: 1.5rem;
```

---

## Corpo

Fonte:

```txt
Inter
```

Peso:

```css
400
500
```

---

# Grid

## Desktop

```css
max-width: 1440px;
padding-inline: 80px;
```

---

## Tablet

```css
padding-inline: 40px;
```

---

## Mobile

```css
padding-inline: 20px;
```

---

# Espaçamento

## Regra Principal

Usar respiro exagerado.

Nunca comprimir conteúdo.

---

### Seções

```css
padding-block: 160px;
```

---

### Mobile

```css
padding-block: 96px;
```

---

# Componentes

## Botão Primário

Visual:

```css
background: #E63946;
color: white;
border-radius: 999px;
```

Hover:

```css
transform: translateY(-2px);
```

---

## Botão Secundário

Visual:

```css
background: transparent;
border: 1px solid rgba(255,255,255,.15);
```

---

## Cards

Visual:

```css
background: rgba(255,255,255,.03);
backdrop-filter: blur(12px);
border: 1px solid rgba(255,255,255,.08);
```

Hover:

```css
translateY(-8px);
```

---

# Hero Section

## Estrutura

Esquerda:

* Headline
* Subheadline
* CTA

Direita:

* Vídeo ou imagem de atleta

---

## Background

```css
linear-gradient(
180deg,
rgba(0,0,0,.3),
rgba(0,0,0,.8)
)
```

---

# Imagens

## Direção

Mostrar:

* Treinos intensos
* Sparring
* Graduações
* Comunidade
* Competições

Evitar:

* Fotos posadas
* Banco de imagens genérico
* Pessoas sorrindo para câmera

---

# Motion Design

## Filosofia

Movimento deve transmitir energia.

Nunca decoração.

---

## Entrada

Framer Motion

```txt
fade-up
slide-up
scale-in
```

---

## Duração

```css
0.5s
0.7s
```

---

## Easing

```css
easeOutExpo
```

---

# Scroll Experience

Cada dobra da página deve responder:

1. Quem somos
2. O que você ganha
3. Como treinamos
4. Quem já evoluiu aqui
5. Como começar

---

# Seção de Modalidades

Layout:

```txt
2 colunas desktop
1 coluna mobile
```

Cards grandes.

Imagem dominante.

Texto mínimo.

---

# Prova Social

Usar números grandes.

Exemplo:

```txt
+500

ALUNOS TREINADOS
```

---

# CTA Final

Visual mais impactante da página.

Headline ocupando quase toda largura.

Exemplo:

SUA EVOLUÇÃO
COMEÇA AGORA

Botão centralizado.

Contraste máximo.

---

# Sensação Final

Quando o visitante terminar a página ele deve sentir:

"Essa não parece apenas mais uma academia."

"Parece um lugar onde eu realmente posso evoluir."
