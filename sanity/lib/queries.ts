import { defineQuery } from "next-sanity"

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
  _id,
  title,
  price,
  description,
  "slug": slug.current,
  brand,
  category,
  featured,
  images[]{
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    },
    alt
  }
}`)

export const PRODUCTS_ISTAKNUTO_QUERY =
  defineQuery(`*[_type == "product" && "istaknuto" in featured]{
  _id,
  title,
  price,
  description,
  "slug": slug.current,
  brand,
  category,
  featured,
  images[]{
    asset->{
      _id,
      url,
      metadata { lqip, dimensions }
    },
    alt
  }
}`)
