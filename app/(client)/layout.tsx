import type { Metadata } from "next"
import "../globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
