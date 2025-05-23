import { defineQuery } from "next-sanity"

export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == "product"]`)

export const CATEGORIES_QUERY = defineQuery(`*[_type == "product" &&
  (
    !defined($categories) || $categories == null || count($categories) == 0 || category in $categories
  ) &&
  (
    !defined($brands) || $brands == null || count($brands) == 0 || brand in $brands
  )
]
`)

export const ISTAKNUTO_PRODUCTS_QUERY = defineQuery(
  `*[_type == "product" && "istaknuto" in featured]`
)

export const NOVO_PRODUCTS_QUERY = defineQuery(
  `*[_type == "product" && "novo" in featured]`
)

export const SPECIFIC_PRODUCT_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]`
)
