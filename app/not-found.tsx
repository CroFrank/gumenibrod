import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        404 - Stranica nije pronađena!
      </h1>
      <p className="text-lg text-gray-600 my-5">
        Nažalost, stranica koju tražite, odnosno url adresa ne postoji.
      </p>
      <p>
        Povratak na:{" "}
        <Link href={"/"} className="text-blue-600 hover:underline">
          naslovnu stranicu
        </Link>
      </p>
    </div>
  )
}
