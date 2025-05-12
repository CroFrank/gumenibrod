import { client } from "@/sanity/lib/client"
import About from "./About"
import HomePageHero from "./HomePageHero"
import ProductsCarousel from "./ProductsCarousel"
import { PRODUCTS_ISTAKNUTO_QUERY } from "@/sanity/lib/queries"

export default async function Home() {
  const productsIstaknuto = await client.fetch(PRODUCTS_ISTAKNUTO_QUERY)
  return (
    <div>
      <HomePageHero />
      <div className="relative">
        <h2 className="heading-2">Istaknuti proizvodi</h2>
        <ProductsCarousel productsIstaknuto={productsIstaknuto} />
        <ProductsCarousel productsIstaknuto={productsIstaknuto} />
      </div>
      <About />
    </div>
  )
}
