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

export const FEATURED_PRODUCTS_QUERY = defineQuery(
  `*[_type == "product" && defined(featured) && count(featured) > 0]`
)

export const PRODUCT_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]`
)
