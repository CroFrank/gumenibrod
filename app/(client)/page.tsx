export const revalidate = 3600

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
      <ProductsCarousel
        productsIstaknuto={productsIstaknuto}
        heading="Istaknuto"
      />
      <ProductsCarousel
        productsNovo={productsNovo}
        bg={true}
        heading="Novo u ponudi"
      />
      <About />
      <Brands />
    </>
  )
}
