import { Geist, Geist_Mono, Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";

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
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
