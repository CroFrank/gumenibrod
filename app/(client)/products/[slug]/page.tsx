import Product from "@/app/components/Product"

type Props = {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params
  console.log("slug", slug)
  return <Product />
}
