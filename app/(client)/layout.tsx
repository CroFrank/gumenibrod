import { ReactNode } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Gumeni čamci i oprema za vodu | Kvaliteta i sigurnost na vodi - Gumeni brod",
  description:
    "Kupite kvalitetne gumene čamce – motorne i veslačke, te opremu za vodene avanture. Veliki izbor, brza dostava, stručna podrška. Sve za bezbrižno uživanje na vodi!",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Gumeni čamci i oprema za vodu | Kvaliteta i sigurnost na vodi - Gumeni brod",
    description:
      "Kupite kvalitetne gumene čamce – motorne i veslačke, te opremu za vodene avanture. Veliki izbor, brza dostava, stručna podrška. Sve za bezbrižno uživanje na vodi!",
    url: "https://gumenibrod.hr",
    siteName: "Gumeni brod",
    locale: "hr-HR",
    type: "website",
  },
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
