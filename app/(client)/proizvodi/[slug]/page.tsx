import SingleProduct from "@/components/SingleProduct"
import { getSpecificProduct } from "@/sanity/lib/client"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const product = await getSpecificProduct({ slug })
  if (!product) {
    return {
      title: "Proizvod nije pronađen | Gumeni brod",
      description: "Nažalost, traženi proizvod nije pronađen.",
      robots: "noindex, nofollow",
    }
  }

  return {
    title: `${product.title} | ${product.brand} – Gumeni brod`,
    description: `Saznajte više o ${product.title}.`,
    openGraph: {
      title: product.title,
      description: `Saznajte više o ${product.title}.`,
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  const product = await getSpecificProduct({ slug })
  if (!product) {
    notFound()
  }
  return <SingleProduct product={product} />
}
