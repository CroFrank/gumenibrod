import { brands } from "@/lib/data"
import { Dot } from "lucide-react"

export default function Brands() {
  return (
    <section className="logos uppercase text-2xl xl:text-4xl pb-20 text-gray-600">
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
    </section>
  )
}
