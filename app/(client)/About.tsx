import Image from "next/image"

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/brod.png" // Replace with your image path
            alt="About Us"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="heading-2">O NAMA</h2>
          <p className="text-gray-600 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab
            placeat exercitationem pariatur iste nihil vitae amet itaque
            corporis maiores officiis facere dignissimos aspernatur earum, eius
            beatae cupiditate sunt ut.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
