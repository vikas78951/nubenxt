import type { Metadata } from "next"
import { Geist, Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/header"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.craftorus.com"),
  title: {
    default: "Craftorus | Web Development, IT Infrastructure & Security Systems",
    template: "%s | Craftorus",
  },
  description:
    "Craftorus delivers high-performance web development, computer & IT infrastructure, and commercial camera security systems for growing businesses.",
  keywords: [
    "web development",
    "IT infrastructure",
    "camera security systems",
    "CCTV installation",
    "computer maintenance",
    "software development",
    "Craftorus",
  ],
  authors: [{ name: "Craftorus" }],
  creator: "Craftorus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.craftorus.com",
    siteName: "Craftorus",
    title: "Craftorus | Web Development, IT Infrastructure & Security Systems",
    description:
      "Craftorus delivers high-performance web development, computer & IT infrastructure, and commercial camera security systems for growing businesses.",
  },
}

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        outfit.variable,
        geist.variable,
        geistMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

