"use client"

import { Product } from "@/sanity/types"
import { Button } from "./ui/button"
import { useCartStore } from "@/stores/useCartStore"
import { urlFor } from "@/sanity/lib/image"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

type AddToCartButtonProps = {
  product: Product
  quantity?: number
}

export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const handleAddToCart = () => {
    useCartStore.getState().addToCart({
      _id: product._id,
      title: product.title ?? "",
      price: product.price ?? 0,
      quantity,
      image: product.images?.[0] ? urlFor(product.images[0]).url() : undefined,
    })

    toast.success("Proizvod je dodan u košaricu")
  }

  return (
    <Button onClick={handleAddToCart}>
      Dodaj u <ShoppingCart />
    </Button>
  )
}
