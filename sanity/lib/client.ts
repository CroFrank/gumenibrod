import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId } from "../env"
import { ALL_PRODUCTS_QUERY } from "./queries"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const getAllProducts = async () => {
  return await client.fetch(ALL_PRODUCTS_QUERY, { start: 0, end: 8 })
}
