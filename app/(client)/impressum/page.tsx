import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Podaci o tvrtki - Gumeni brod",
  description:
    "Službeni podaci o vlasniku web stranice Gumeni brod: naziv tvrtke, adresa, kontakt, OIB i ostale zakonski obvezne informacije.",
}

export default function Impressum() {
  return (
    <section className="px-4 py-12 flex flex-col items-center pt-40">
      <h1>Impressum</h1>
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md">
        <div className="space-y-4 text-gray-700 text-base">
          <h2 className="text-xl font-semibold text-gray-800">
            Podaci o poslovnom subjektu:
          </h2>

          <p>
            <strong>Naziv:</strong> GUMENI BROD d.o.o.
          </p>
          <p>
            <strong>OIB:</strong> 46696043584
          </p>
          <p>
            <strong>Adresa:</strong> Osječka ulica 9, Velika Kosnica
          </p>
          <p>
            <strong>Pošta:</strong> 10410 Velika Gorica
          </p>
          <p>
            <strong>Telefon:</strong> +385 91 1191 091
          </p>
          <p>
            <strong>Fax:</strong> +385 1 6232 119
          </p>

          <div>
            <p className="font-medium">E-mail adrese:</p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>gumenibrod@gmail.com</li>
              <li>gumenibrodzg@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
