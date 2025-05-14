import { client } from "@/sanity/lib/client"
import ProductCard from "../../../components/ProductCard"
import { PRODUCTS_QUERY } from "@/sanity/lib/queries"

export default async function ProductsPage() {
  const products = await client.fetch(PRODUCTS_QUERY)

  return (
    <div className="container mx-auto py-8 pt-40">
      <h1>NAŠI PROIZVODI</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4 justify-center">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />
        })}
      </div>
    </div>
  )
}
