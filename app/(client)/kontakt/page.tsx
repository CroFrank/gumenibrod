import GoogleMap from "@/components/GoogleMap"
import KontaktForma from "@/components/KontaktForma"
import KontakInfo from "@/components/KontaktInfo"

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
