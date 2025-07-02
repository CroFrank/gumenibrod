import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title:
    "Gumeni čamci i oprema za vodu | Kvaliteta i sigurnost na vodi - Gumeni brod",
  description:
    "Kupite kvalitetne gumene čamce – motorne i veslačke, te opremu za vodene avanture. Veliki izbor, brza dostava, stručna podrška. Sve za bezbrižno uživanje na vodi!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
