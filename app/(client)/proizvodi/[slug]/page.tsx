import ProductPageItem from "@/components/ProductPageItem"
import { client } from "@/sanity/lib/client"
import { SPECIFIC_PRODUCT_QUERY } from "@/sanity/lib/queries"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage(props: Props) {
  const { slug } = await props.params

  const product = await client.fetch(SPECIFIC_PRODUCT_QUERY, { slug })

  return <ProductPageItem product={product} />
}
