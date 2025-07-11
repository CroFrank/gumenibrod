import CheckoutClient from "@/components/CheckoutClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plaćanje i završetak narudžbe | Gumeni brod",
  description:
    "Završite svoju narudžbu sigurno i brzo. Unesite podatke za dostavu i plaćanje vašeg gumenog čamca ili opreme.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://gumenibrod.hr/kosarica/checkout",
  },
}

export default function KosaricaPage() {
  return <CheckoutClient />
}
