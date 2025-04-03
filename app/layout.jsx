import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Inscrição para Webinar de Tecnologia",
  description: "Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia",
  generator: "Webinar Tecnologia",
  keywords: "webinar, tecnologia, tendências, inscrição, exclusivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Inscrição para Webinar de Tecnologia</title>
        <meta
          name="description"
          content="Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia"
        />
        <meta property="og:url" content="https://webinar-tecnologia.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inscrição para Webinar de Tecnologia" />
        <meta
          property="og:description"
          content="Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia"
        />
        <meta property="og:image" content="https://i.imgur.com/pcZ5QO7.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webinar-tecnologia.com" />
        <meta property="twitter:url" content="https://webinar-tecnologia.com" />
        <meta name="twitter:title" content="Inscrição para Webinar de Tecnologia" />
        <meta
          name="twitter:description"
          content="Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia"
        />
        <meta name="twitter:image" content="https://i.imgur.com/pcZ5QO7.png" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}