import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gumeni brod",
  description: "Ponuda gumenih brodova i dodataka",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
