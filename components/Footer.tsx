import Link from "next/link"

export default function Footer() {
  const brands = [
    { name: "Kolibri", url: "https://kolibriboats.com/en/" },
    { name: "Galaxy", url: "https://galaxy.boats/" },
    { name: "Gala", url: "https://gala.boats/" },
    { name: "Adventure", url: "https://www.adventure.kiev.ua/" },
  ]
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="max-w-screen-lg px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3>LOGO</h3>
        </div>

        <div className="p-5">
          <div className="text-sm uppercase text-blue-600 font-bold">
            Asortiman
          </div>
          {brands.map((brand) => (
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
          <Link className="my-3 block hover:underline" href="/">
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
        </div>
      </div>

      <div className="pt-2 border-t">
        <div className="flex flex-col items-center max-w-screen-lg m-auto px-3 pt-5 pb-5 text-sm">
          <div className="flex flex-row md:flex-auto md:flex-row-reverse mt-2">
            {[
              { name: "Twitter", href: "/#", path: "M24,12c0,6.627..." }, // Shortened for brevity
              { name: "Facebook", href: "/#", path: "M24,12c0,6.627..." },
              { name: "YouTube", href: "/#", path: "M19.05,8.362..." },
              { name: "LinkedIn", href: "/#", path: "M7.3,0.9c1.5..." },
              { name: "Dribbble", href: "/#", path: "M12,24c6.627..." },
            ].map((icon, index) => (
              <a
                href={icon.href}
                className="w-6 mx-1"
                key={index}
                aria-label={icon.name}
              >
                <svg
                  className="fill-current cursor-pointer text-gray-500 hover:text-blue-600"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
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
