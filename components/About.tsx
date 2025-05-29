import { about } from "@/lib/data"
import Image from "next/image"

export default function About() {
  return (
    <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-20">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/brod.png"
          alt="About Us"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2>O NAMA</h2>
        <p className="text-gray-600 text-lg mb-6">{about}</p>
      </div>
    </section>
  )
}
