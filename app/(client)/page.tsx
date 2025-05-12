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
      <div className="relative bg-gray-100 pt-16">
        <h2 className="heading-2">ISTAKNUTO</h2>
        <ProductsCarousel productsIstaknuto={productsIstaknuto} />
        <div className="bg-white pt-16">
          <h2 className="heading-2">NOVO U PONUDI</h2>
          <ProductsCarousel productsIstaknuto={productsIstaknuto} />
        </div>
      </div>
      <About />
    </div>
  )
}
