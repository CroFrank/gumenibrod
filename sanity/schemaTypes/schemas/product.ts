import { defineType, defineField } from "sanity"
import { PackageIcon } from "@sanity/icons"

export default defineType({
  name: "product",
  title: "Proizvod",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({ name: "title", title: "Naziv", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({ name: "description", title: "Opis", type: "text" }),
    defineField({
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({ name: "price", title: "Cijena", type: "number" }),
    defineField({
      name: "brand",
      title: "Marka/Brend",
      type: "string",
      options: {
        list: [
          { title: "Kolibri", value: "kolibri" },
          { title: "Gala", value: "gala" },
        ],
        layout: "radio", // or 'dropdown'
      },
    }),
    defineField({
      name: "category",
      title: "Kategorija",
      type: "string",
      options: {
        list: [
          { title: "Motorni Gumeni brod", value: "motorni-gumeni-brod" },
          { title: "Veslački Gumeni brod", value: "veslacki-gumeni-brod" },
          { title: "Dodaci", value: "dodaci" },
        ],
        layout: "radio", // or 'dropdown'
      },
    }),
    defineField({
      name: "featured",
      title: "Istaknuto",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Istaknuto", value: "istaknuto" },
          { title: "Akcija", value: "akcija" },
        ],
        layout: "grid",
      },
    }),
  ],
})
