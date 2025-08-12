import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { BusinessProfileHeader } from "@/components/business-profile-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuildMyAi - Transform Your Business",
  description: "Expert development services for cutting-edge applications",
  openGraph: {
    title: "BuildMyAi - We create Future",
    description: "Expert development Ai solutions for people like you and me",
    url: "https://buildmyai.com",
    siteName: "BuildMyAi",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildMyAi Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <BusinessProfileHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
