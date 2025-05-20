import { getAllProducts } from "@/sanity/lib/client"
import Filter from "@/components/Filter"

export default async function ProductsPage() {
  const products = await getAllProducts()
  return (
    <div className="mx-auto py-8 pt-40">
      <h1>NAŠI PROIZVODI</h1>
      <Filter products={products} />
    </div>
  )
}
