import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "Rahma Yasser — Data Analyst & Instructor",
  description:
    "Portfolio of Rahma Yasser Mahmoud — Data Analytics Instructor and Teaching Assistant at Faculty of Computers and Information, Assiut University. Specialized in Power BI, SQL, Data Warehousing, and Machine Learning.",
  generator: "v0.app",
  keywords: [
    "Rahma Yasser",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Data Warehousing",
    "Machine Learning",
    "Bioinformatics",
    "Teaching Assistant",
    "Assiut University",
  ],
  authors: [{ name: "Rahma Yasser Mahmoud" }],
  openGraph: {
    title: "Rahma Yasser — Data Analyst & Instructor",
    description:
      "Data Analytics Instructor specialized in Power BI, SQL, Data Warehousing, and Machine Learning.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
