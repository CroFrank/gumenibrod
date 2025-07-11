import { footerBrands } from "@/lib/data"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <Link href="/" className="text-xl font-bold text-blue-600">
            GB
          </Link>
        </div>

        <div className="p-5">
          <div className="text-sm uppercase text-blue-600 font-bold">
            Asortiman
          </div>
          {footerBrands.map((brand) => (
            <a
              key={brand.name}
              className="my-3 block hover:underline"
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand.name}
            </a>
          ))}
        </div>

        <div className="p-5">
          <div className="text-sm uppercase text-blue-600 font-bold">
            Informacije{" "}
          </div>
          <Link
            className="my-3 block hover:underline"
            href="/politika-privatnosti"
          >
            Politika privatnosti
          </Link>
          <Link className="my-3 block hover:underline" href="/">
            Opći uvjeti
          </Link>
          <Link className="my-3 block hover:underline" href="/impressum">
            Impressum
          </Link>
        </div>

        <div className="p-5">
          <div className="text-sm uppercase text-blue-600 font-bold">
            Kontakt
          </div>
          <Link className="my-3 block hover:underline" href="/kontakt">
            Kontakt forma
          </Link>
          <div className="my-3">
            <span>mob: </span>
            <a className="hover:underline" href="tel:+385911191091">
              +385 91 119 1091
            </a>
          </div>
          <div className="my-3">
            <a href="mailto:gumenibrod@gmail.com" className="hover:underline">
              gumenibrod@gmail.com
            </a>
          </div>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.facebook.com/gumenibrod" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a href="https://www.instagram.com/gumeni.brod/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .7 1.5 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.7 1-1.5 1.5-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.7-1.5-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.7-1 1.5-1.5.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.3-.4.2-.6.4-.9.9-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.3 1.7.2.4.4.6.9.9.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.3.4-.2.6-.4.9-.9.1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.3-1.7-.2-.4-.4-.6-.9-.9-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.5-.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t">
        <div className="flex flex-col items-center max-w-screen-lg m-auto px-3 pt-5 pb-5 text-sm">
          <div>© Copyright 2025. Gumeni brod d.o.o.</div>
          <div className="my-5">
            <span>Powered by: </span>
            <a
              href="https://www.weblifesupport.com/"
              target="_blank"
              className="hover:underline text-black"
            >
              WebLifeSupport
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
