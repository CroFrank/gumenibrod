import { getIstaknutoProducts, getNovoProducts } from "@/sanity/lib/client"
import About from "../../components/About"
import HomePageHero from "../../components/HomePageHero"
import ProductsCarousel from "../../components/ProductsCarousel"
import Brands from "@/components/Brands"

export default async function Home() {
  const productsIstaknuto = await getIstaknutoProducts()
  const productsNovo = await getNovoProducts()

  return (
    <>
      <HomePageHero />
      <main>
        <section className="pt-16 pb-12">
          <h2>Istaknuto</h2>
          <ProductsCarousel productsIstaknuto={productsIstaknuto} />
        </section>

        <section className="bg-gray-100 pt-16 pb-12">
          <h2>Novo u ponudi</h2>
          <ProductsCarousel productsNovo={productsNovo} />
        </section>

        <section className="py-20">
          <About />
        </section>
        <Brands />
      </main>
    </>
  )
}
