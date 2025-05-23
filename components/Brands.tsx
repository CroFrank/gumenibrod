import { Dot } from "lucide-react"

const brands = [
  "Grad Slavonski Brod",
  "Brodsko-posavska županija",
  "Institut Ruđer Bošković",
  "Institut IGH d.d.",
  "JVP Grada Sl. Broda",
  "JVP Našice",
  "DVD Dugo Selo",
  "DVD Rakitje",
  "JU Zeleni prsten Zagrebačke županije",
  "FIRE TRADE d.o.o (BiH)",
  "Moho d.o.o.",
  "G2 geodezija d.o.o.",
  "Geonivo d.o.o.",
  "Hrvatsko društvo za zaštitu ptica i prirode",
  "Ekološka udruga Volim Planet",
  "Marina Hramina d.o.o.",
  "Marina Pirovac d.o.o.",
]

export default function Brands() {
  return (
    <div className="logos uppercase text-2xl xl:text-4xl pb-20 text-gray-600">
      <div className="logos-slide">
        {brands.map((brand) => (
          <span className="img-wrapper mr-6" key={brand}>
            <Dot className="inline mr-4 mb-1" size={48} />
            {brand}
          </span>
        ))}
      </div>
      <div className="logos-slide">
        {brands.map((brand) => (
          <span className="img-wrapper mr-6" key={brand}>
            <Dot className="inline mr-4 mb-1" size={48} />
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}
