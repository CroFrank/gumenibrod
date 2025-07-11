import { Metadata } from "next"
import KosaricaClient from "@/components/KosaricaClient"

export const metadata: Metadata = {
  title: "Košarica | Gumeni brod",
  description:
    "Pregledajte proizvode u svojoj košarici prije završetka narudžbe.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://gumenibrod.hr/kosarica/checkout",
  },
}

export default function KosaricaPage() {
  return <KosaricaClient />
}
