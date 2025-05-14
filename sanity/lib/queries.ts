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

export const FEATURED_PRODUCTS_QUERY =
  defineQuery(`*[_type == "product" && defined(featured) && count(featured) > 0]{
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

export const PRODUCT_QUERY =
  defineQuery(`*[_type == "product" && slug.current == $slug][0]{
  _id,
  title,
  price,
  description,
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
  },
  "slug": slug.current
}`)
