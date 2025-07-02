export const revalidate = 3600

import { getAllProducts } from "@/sanity/lib/client"
import Filter from "@/components/Filter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Gumeni čamci Kolibri, Gala, Gelex i drugi | Motorni i veslački - Gumeni brod",
  description:
    "Veliki izbor gumenih čamaca renomiranih brendova: Kolibri, Gala, Gelex, Galaxy, Adventure i drugi. Motorni i veslački čamci te oprema za sigurnu plovidbu. Brza dostava i stručna podrška.",
}

export default async function ProductsPage() {
  const products = await getAllProducts()
  return (
    <div className="mx-auto py-8 pt-40">
      <h1>NAŠI PROIZVODI</h1>
      <Filter products={products} />
    </div>
  )
}
