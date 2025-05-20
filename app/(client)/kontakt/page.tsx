import GoogleMap from "@/components/GoogleMap"
import KontaktForma from "@/components/KontaktForma"

export default function ContactPage() {
  return (
    <section className="py-40 px-4 max-w-7xl mx-auto">
      <h1>Kontakt</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-10">Kontakt Info</h2>
          <div>
            <h3 className="font-semibold">O nama:</h3>
            <p className="text-gray-600">GUMENI BROD d.o.o.</p>
            <p className="text-gray-600">Osječka ulica 9, Velika Kosnica</p>
            <p className="text-gray-600">10410 Velika Gorica</p>
          </div>

          <div>
            <h3 className="font-semibold">Radno vrijeme:</h3>
            <p className="text-gray-600">Mon - Fri: 9am - 5pm</p>
            <p className="text-gray-600">Sat - Sun: Closed</p>
          </div>

          <div>
            <h3 className="font-semibold">Mobitel:</h3>
            <p className="text-gray-600">+385 91 1191 091</p>
          </div>

          <div>
            <h3 className="font-semibold">Email:</h3>
            <p className="text-gray-600">gumenibrod@gmail.com </p>
            <p className="text-gray-600">gumenibrodsp@gmail.com </p>
            <p className="text-gray-600">gumenibrodzg@gmail.com </p>
          </div>
          <GoogleMap />
        </div>
        <KontaktForma />
      </div>
    </section>
  )
}
