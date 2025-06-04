"use client"

import { Product } from "@/sanity/types"
import AddToCartButton from "./AddToCartButton"
import SingleProductImage from "./SingleProductImage"
import React, { useState } from "react"

export default function SingleProduct({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="py-8 pt-30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}

          <SingleProductImage product={product} />

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-8">{product.title}</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Asortiman</h3>
              <div className="flex space-x-2 uppercase">{product.brand}</div>
            </div>
            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Kategorija</h3>
              <div className="flex space-x-2 uppercase">{product.category}</div>
            </div>

            <p className="text-gray-700 mb-6">
              {product.description?.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                {product.price ? product.price + " €" : "Cijena na upit"}
              </span>
              {/* <span className="text-gray-500 line-through">$399.99</span> */}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Količina:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <AddToCartButton product={product} quantity={quantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
