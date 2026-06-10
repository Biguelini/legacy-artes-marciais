import type { Metadata } from "next";
import { Syne, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legacy Artes Marciais | Academia Premium de Lutas e Alta Performance",
  description: "Desenvolva força, disciplina e autoconfiança na Legacy Artes Marciais. Aulas de Jiu-Jitsu, Muay Thai, Boxe e Karatê para iniciantes e avançados. Agende sua aula experimental grátis.",
  keywords: "artes marciais, jiu-jitsu, muay thai, boxe, karatê, aula experimental grátis, academia de lutas, defesa pessoal, condicionamento físico, disciplina",
  authors: [{ name: "Legacy Artes Marciais" }],
  creator: "Legacy Artes Marciais",
  publisher: "Legacy Artes Marciais",
  metadataBase: new URL("https://legacyartesmarciais.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://legacyartesmarciais.com.br",
    title: "Legacy Artes Marciais | Academia Premium de Lutas",
    description: "Desenvolva força, disciplina e autoconfiança na Legacy Artes Marciais. Aulas de Jiu-Jitsu, Muay Thai, Boxe e Karatê para iniciantes e avançados.",
    siteName: "Legacy Artes Marciais",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Legacy Artes Marciais — O seu legado começa no tatame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy Artes Marciais | Academia Premium de Lutas",
    description: "Desenvolva força, disciplina e autoconfiança na Legacy Artes Marciais. Aulas de Jiu-Jitsu, Muay Thai, Boxe e Karatê.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  analytics?: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans selection:bg-accent selection:text-white">
        {children}
        {analytics}
      </body>
    </html>
  );
}
