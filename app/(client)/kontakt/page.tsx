import GoogleMap from "@/components/GoogleMap"
import KontaktForma from "@/components/KontaktForma"
import KontakInfo from "@/components/KontaktInfo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | Javite nam se - Gumeni brod",
  description:
    "Imate pitanja ili trebate savjet? Kontaktirajte tim Gumeni brod – dostupni smo za sve informacije o čamcima, opremi i narudžbama. Tu smo da pomognemo!",
}

export default function ContactPage() {
  return (
    <section className="py-40 px-4 max-w-7xl mx-auto">
      <h1>Kontakt</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <KontakInfo />
          <GoogleMap />
        </div>
        <KontaktForma />
      </div>
    </section>
  )
}
