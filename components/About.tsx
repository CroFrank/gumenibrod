import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
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
        <p className="text-gray-600 text-lg mb-6">
          Naša tvrtka Gumeni brod d.o.o. više od 10 godina prisutna je na
          regionalnom tržištu kao distributer raznih vrsta plovila, od
          rekreacijskih plovila do plovila specijalnih namjena. Generalni smo
          zastupnik za Kolibri, Adventure te grupaciju Gelex Global Group-
          moderne europske tvornice koja je jedna od vodećih proizvođača plovila
          nudeći visokokvalitetne proizvode zahvaljujući korištenju
          najsuvremenijih i ekološki prihvatljivih tehnologija, unutar koje se
          nalaze brendovi GALA inflatable boats, GELEX aluminum boats i GALAXY
          proffesional RIB&apos;s . Sva naša plovila posjeduju potrebne
          certifikate i prateću dokumentaciju po standardima EU i RH. Prednost
          naših čamaca je mogućnost modeliranja i prilagodbe vašim potrebama,
          istaknuti ono što je vama bitno te sve potrebno za vašu djelatnost,
          ukloniti ili doraditi u okviru sigurne plovidbe i manipulacije s
          plovilom. Našu kvalitetu i profesionalnost su prepoznala razna državna
          tijela, mjesna i javna samouprava te pravne i fizičke osobe u regiji
          koje imaju dugogodišnju suradnju s nama:
        </p>
      </div>
    </div>
  )
}
