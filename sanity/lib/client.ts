import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId } from "../env"
import {
  ALL_PRODUCTS_QUERY,
  CATEGORIES_QUERY,
  ISTAKNUTO_PRODUCTS_QUERY,
  NOVO_PRODUCTS_QUERY,
  SPECIFIC_PRODUCT_QUERY,
} from "./queries"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const getAllProducts = async () => {
  return await client.fetch(ALL_PRODUCTS_QUERY)
}

export const getSpecificProduct = async ({ slug }: { slug: string }) => {
  return await client.fetch(SPECIFIC_PRODUCT_QUERY, { slug })
}
export const getFilteredProducts = async ({
  categories,
  brands,
}: {
  categories: string[]
  brands: string[]
}) => {
  return await client.fetch(CATEGORIES_QUERY, { categories, brands })
}

export const getIstaknutoProducts = async () => {
  return await client.fetch(ISTAKNUTO_PRODUCTS_QUERY)
}

export const getNovoProducts = async () => {
  return await client.fetch(NOVO_PRODUCTS_QUERY)
}
