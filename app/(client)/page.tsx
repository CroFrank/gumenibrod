import { client } from "@/sanity/lib/client"
import About from "../../components/About"
import HomePageHero from "../../components/HomePageHero"
import ProductsCarousel from "../../components/ProductsCarousel"
import { FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries"
import { Product } from "@/sanity/types"

export default async function Home() {
  const featuredProducts = await client.fetch(FEATURED_PRODUCTS_QUERY)
  const productsNovo = featuredProducts.filter((product: Product) =>
    product.featured?.includes("novo")
  )
  const productsIstaknuto = featuredProducts.filter((product: Product) =>
    product.featured?.includes("istaknuto")
  )

  return (
    <>
      <HomePageHero />
      <div className="relative bg-gray-100 pt-16">
        <h2 className="heading-2">ISTAKNUTO</h2>
        <ProductsCarousel productsIstaknuto={productsIstaknuto} />
        <div className="bg-white pt-16">
          <h2 className="heading-2">NOVO U PONUDI</h2>
          <ProductsCarousel productsNovo={productsNovo} />
        </div>
      </div>
      <About />
    </>
  )
}
