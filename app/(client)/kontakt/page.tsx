"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [showMap, setShowMap] = useState(false)

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

          {!showMap && (
            <Button onClick={() => setShowMap(true)}>
              Prikaži Google kartu
            </Button>
          )}

          {showMap && (
            <div className="mt-4 rounded overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.175811874138!2d16.082284557430725!3d45.76275390793831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476679d70b08ad2b%3A0xe89a94a670c975fc!2sGumeni%20Brod%20d.o.o.!5e0!3m2!1sen!2shr!4v1747163370916!5m2!1sen!2shr"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          )}
        </div>

        <form className="space-y-6">
          <h2 className="text-xl font-semibold mb-10">Kontakt Forma</h2>
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Ime
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Vaša email adresa{" "}
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Poruka
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <Button type="submit">Pošalji</Button>
        </form>
      </div>
    </section>
  )
}
