import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">
            404
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Stranica nije pronađena{" "}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Žao nam je, stranica koju tražite ne postoji{" "}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Vratite se na početnu stranicu{" "}
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowRight className="mr-2 -ml-1 h-5 w-5" />
            Naslovnica
          </Link>
        </div>
      </div>
      <div className="mt-16 w-full max-w-2xl">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
              Kontaktirajte nas ako imate pitanja:{" "}
              <Link href="/kontakt" className="text-blue-500 hover:underline">
                {" "}
                kontakt
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
