export const revalidate = 3600

import { getIstaknutoProducts, getNovoProducts } from "@/sanity/lib/client"
import About from "../../components/About"
import HomePageHero from "../../components/HomePageHero"
import ProductsCarousel from "../../components/ProductsCarousel"
import Brands from "@/components/Brands"

export default async function Home() {
  const productsIstaknuto = await getIstaknutoProducts()
  // if (!productsIstaknuto || productsIstaknuto.length === 0) {
  //   throw new Error("Nema dostupnih proizvoda.")
  // }
  const productsNovo = await getNovoProducts()
  // if (!productsNovo || productsNovo.length === 0) {
  //   throw new Error("Nema dostupnih proizvoda.")
  // }

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
