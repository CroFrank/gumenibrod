import SingleProduct from "@/components/SingleProduct"
import { getSpecificProduct } from "@/sanity/lib/client"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage(props: Props) {
  const { slug } = await props.params

  const product = await getSpecificProduct({ slug })
  if (!product) {
    notFound()
  }
  return <SingleProduct product={product} />
}
