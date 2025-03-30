import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const displayFont = ""

export const metadata = {
  title: "Inscrição para Webinar de Tecnologia",
  description: "Participe do nosso webinar exclusivo sobre as últimas tendências em tecnologia",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="public/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} ${displayFont.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'