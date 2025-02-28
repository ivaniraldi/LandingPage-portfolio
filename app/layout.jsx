import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Note: You would need to add this font file to your project
const displayFont = ""

export const metadata = {
  title: "Inscrição para Webinar de Tecnologia",
  description: "Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${displayFont.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'